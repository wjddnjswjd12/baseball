import { PageContext } from "Components/Page";
import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "utils/BeemoRouter";

const Team = ({ teamName, gameId, setSelectedTeam, selectedTeam }) => {
  const { playerId, socket } = useContext(PageContext);

  const handleTeamChoice = () => {
    socket.emit("chooseGame", { playerId, gameId, teamName });
  };
  console.log("team에서찍은거", selectedTeam, typeof teamName);

  return (
    <TeamName
      disabled={selectedTeam.includes(teamName)}
      onClick={handleTeamChoice}
    >
      {teamName}
    </TeamName>
  );
};

const TeamLabel = styled.label`
  width: 50%;
`;

const RadioButton = styled.input`
  display: none;
  &:checked + span {
    color: orchid;
  }
`;

const TeamName = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    color: red;
    cursor: pointer;
  }
  &:disabled {
    color: gray;
    cursor: default;
  }
`;

export default Team;
