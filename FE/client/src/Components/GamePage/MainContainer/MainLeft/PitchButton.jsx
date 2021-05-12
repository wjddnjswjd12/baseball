import { GameContext } from "Components/GamePage";
import { PageContext } from "Components/Page";
import React, { useContext } from "react";
import styled from "styled-components";

const PitchButton = () => {
  const { socket } = useContext(PageContext);
  const { playerData, isReady } = useContext(GameContext);

  const checkAttackStatus = () => {
    return (
      playerData.length &&
      playerData.find((player) => player.playerId === socket.id).isAttack
    );
  };

  return <>{isReady && !checkAttackStatus() && <PitchBtn>PITCH</PitchBtn>}</>;
};

const PitchBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: none;
  color: white;
  font-size: 1.5rem;
  border: 0.1rem solid white;
  border-radius: 10px;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    color: black;
    background: white;
  }
`;

export default PitchButton;
