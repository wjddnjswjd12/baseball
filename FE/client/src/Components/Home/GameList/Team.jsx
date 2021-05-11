import { PageContext } from "Components/Page";
import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "utils/BeemoRouter";

const Team = ({ teamName, gameId, selectedTeam }) => {
  const { playerId, socket } = useContext(PageContext);

  const handleTeamChoice = () => {
    socket.emit("chooseGame", { playerId, gameId, teamName });
  };

  return (
    <Link to={`/GamePage/${gameId}`}>
      <TeamName
        disabled={selectedTeam.includes(teamName)}
        onClick={handleTeamChoice}
      >
        {teamName}
      </TeamName>
    </Link>
  );
};

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
