import { GameContext } from "Components/GamePage";
import { PageContext } from "Components/Page";
import React, { useContext } from "react";
import styled from "styled-components";

const AttackDefendStatus = () => {
  const { playerData } = useContext(GameContext);
  const { socket } = useContext(PageContext);

  return (
    <ADstatusDiv>
      2회차
      {playerData.length &&
      playerData.find((v) => v.playerId === socket.id).isAttack
        ? "공격"
        : "수비"}
    </ADstatusDiv>
  );
};

const ADstatusDiv = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 2rem 2rem;
`;
export default AttackDefendStatus;
