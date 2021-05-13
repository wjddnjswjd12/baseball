import { GamePageContext } from "Components/GamePage";
import React, { useContext, useEffect, useState } from "react";
import StatusBoard from "./StatusBoard";

const StatusBoardList = () => {
  const { inGameData, sequenceCount, attackState, currentSBData } =
    useContext(GamePageContext);

  return (
    <>
      {currentSBData &&
        currentSBData.map((current, i) => (
          <StatusBoard
            currentPlayer
            name={`${
              inGameData && inGameData[attackState][sequenceCount].name
            }`}
            id={`${i + 1}`}
            currentData={current}
          />
        ))}
    </>
  );
};

export default StatusBoardList;
