import { GamePageContext } from "Components/GamePage";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";

const StatusBoardItems = ({ currentData }) => {
  const { inGameData, currentSBData, currentPlayAction } =
    useContext(GamePageContext);

  const handleCurrentPlayAction = (action) => {
    switch (action) {
      case "hit":
        return "안타!";
      case "strike":
        return "스트라이크";
      case "ball":
        return "볼";
      default:
        return;
    }
  };

  return (
    <>
      {currentData &&
        currentData.map((action, index) => (
          <StatusBoardItem>
            <NumberCircle>{index + 1}</NumberCircle>
            {handleCurrentPlayAction(action)}
            <StrikeBallStatus>{`S${action} B${action}`}</StrikeBallStatus>
          </StatusBoardItem>
        ))}
    </>
  );
};

const StatusBoardItem = styled.div`
  display: flex;
  margin: 0.3rem 0.2rem;
  justify-content: space-between;
`;
const NumberCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: black;
  text-align: Center;
  border-radius: 70%;
  font-weight: bold;
  background: white;
  margin-right: 0.3rem;
`;

const StrikeBallStatus = styled.div`
  color: #e2e2e2;
`;

export default StatusBoardItems;
