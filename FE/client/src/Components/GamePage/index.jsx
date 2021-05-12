import React, { createContext, useContext, useEffect, useState } from "react";
import GamePageHeader from "./GamePageHeader";
import MainContainer from "./MainContainer";
import Popup from "./Popup";
import styled from "styled-components";
import useAsync from "utils/hooks/useAsync";
import API from "utils/API";
import { PageContext } from "Components/Page";

export const GameContext = createContext();

const GamePage = () => {
  const [playerData, setPlayerData] = useState([]); //입장한 플레이어 데이터 저장
  const { socket, playerId } = useContext(PageContext);
  const [isReady, setIsReady] = useState(false);
  const [inGameState, fetchInGameData] = useAsync(API.get.inGameData, [], true);
  const { data: inGameData } = inGameState;
  const [gameTeamData, setGameTeamData] = useState({});

  useEffect(() => {
    socket.emit("enterGame", playerId);
    socket.on("playerData", (pData) => {
      setPlayerData((prev) => [...prev, pData]);
      fetchInGameData(pData.currentGameId)();
      if (pData.isHomeTeam) {
        const homeTeam = {
          status: "DEFEND",
          isHome: pData.isHomeTeam,
          teamName: pData.team,
          teamId: pData.teamId,
          members: pData.members,
        };
        setGameTeamData((prev) => [...prev, homeTeam]);
      } else {
        const awayTeam = {
          status: "ATTACK",
          isHome: pData.isHomeTeam,
          teamName: pData.team,
          teamId: pData.teamId,
          members: pData.members,
        };
        setGameTeamData((prev) => [...prev, awayTeam]);
      }
    });
    socket.on("isReady", (msg) => setIsReady(msg));
  }, []);

  const findPlayer = () =>
    playerData.find((player) => player.playerId === socket.id);

  console.log("게임 데이터", gameTeamData);

  return (
    <GameContext.Provider
      value={{ inGameData, playerData, isReady, gameTeamData, findPlayer }}
    >
      <GamePageBackground>
        {isReady && <Popup />}
        <GamePageHeader />
        {!isReady && (
          <WaitOpponentWrapper>
            <WaitOpponentPopup>
              게임 상대 기다리는중...🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️
            </WaitOpponentPopup>
          </WaitOpponentWrapper>
        )}
        <MainContainer />
      </GamePageBackground>
    </GameContext.Provider>
  );
};

const GamePageBackground = styled.div`
  height: 100vh;
  background: black;
  opacity: 0.9;
`;

const WaitOpponentPopup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-weight: bold;
  font-size: 1.5rem;
  width: 25rem;
  height: 10rem;
  z-index: 999;
  background: white;
  opacity: 0.8;
  border-radius: 1rem;
`;
const WaitOpponentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

export default GamePage;
