import React from "react";
import StatusBoardItems from "./StatusBoardItems";
import styled from "styled-components";

const StatusBoard = ({ id, name, currentPlayer, currentData }) => {
  return (
    <StatusBoardDiv>
      <StatusTitle currentPlayer={currentPlayer}>
        {id}번 타자 {name}
      </StatusTitle>
      <StatusBoardItems currentData={currentData} />
    </StatusBoardDiv>
  );
};

const StatusBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const StatusTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: ${(props) => (props.currentPlayer ? "orange" : " #9ee6e6")};
`;

export default StatusBoard;
