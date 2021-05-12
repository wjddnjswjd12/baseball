import { PageContext } from "Components/Page";
import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "utils/BeemoRouter";

const Team = ({ teamName, gameId, selectedTeam, isHomeTeam }) => {
  const { playerId, socket, allTeamData } = useContext(PageContext);

  const teamId = {
    "KIA 타이거즈": 1,
    "NC 다이노즈": 2,
    "삼성 라이온즈": 3,
    "한화 이글스": 4,
    "두산 베어스": 5,
    "롯데 자이언츠": 6,
    "SSG 랜더스": 7,
    "LG 트윈스": 8,
    "키움 히어로즈": 9,
    "kt wiz": 10,
  };

  // console.log("여기서 찍는 올팀데이타", allTeamData[teamId[teamName] - 1]);

  const handleTeamChoice = () => {
    socket.emit("chooseGame", {
      playerId,
      gameId,
      teamName,
      isHomeTeam,
      isAttack: !isHomeTeam,
      teamId: teamId[teamName],
      members: allTeamData[teamId[teamName] - 1].members,
    });
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
