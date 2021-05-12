import { GameContext } from "Components/GamePage";
import { PageContext } from "Components/Page";
import React, { useContext } from "react";
import styled, { css } from "styled-components";

const BaseballHeaderScore = () => {
  const { inGameData, playerData } = useContext(GameContext);
  const { socket } = useContext(PageContext);

  return (
    <TeamDiv>
      <Team
        player={
          playerData.length &&
          inGameData &&
          playerData.find((player) => player.playerId === socket.id).team ===
            inGameData.teamScores[1].teamName
        }
      >
        {inGameData && inGameData.teamScores[1].teamName}
      </Team>
      <Score>0</Score>
      <VsSpan>vs</VsSpan>
      <Score>0</Score>
      <Team
        player={
          playerData.length &&
          inGameData &&
          playerData.find((player) => player.playerId === socket.id).team ===
            inGameData.teamScores[0].teamName
        }
      >
        {inGameData && inGameData.teamScores[0].teamName}
      </Team>
    </TeamDiv>
  );
};

const TeamDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 4rem;
  gap: 2.5rem;
  font-weight: 700;
`;

const Team = styled.span`
  ${({ player }) =>
    player &&
    css`
      &::after {
        content: "Player";
        display: block;
        color: red;
        font-size: 1.5rem;
        text-align: center;
      }
    `}
`;
const Score = styled.span``;

const VsSpan = styled.span`
  color: #7d7d7d;
  font-weight: 700;
`;

export default BaseballHeaderScore;
