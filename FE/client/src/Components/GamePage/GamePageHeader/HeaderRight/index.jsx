import { GameContext } from "Components/GamePage";
import { PageContext } from "Components/Page";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CurrentPlayer from "./CurrentPlayer";

const HeaderRight = () => {
  const { gameTeamData, inGameData } = useContext(GameContext);
  const { socket } = useContext(PageContext);

  //0번 인덱스에 홈팀 정보가 있음, 1번 인덱스에 원정팀 정보가 있음
  // console.log(
  //   gameTeamData[0].members.find((mem) => mem.position === "투수").name
  // );

  useEffect(() => {}, []);

  return (
    <HeaderRightDiv>
      <CurrentPlayer
        type="투수"
        name={`${
          gameTeamData.length === 2
            ? gameTeamData
                .find((v) => v.status === "DEFEND")
                .members.find((mem) => mem.position === "투수").name
            : "준비중.."
        }`}
        description={`#${
          gameTeamData.length === 2
            ? gameTeamData
                .find((v) => v.status === "DEFEND")
                .members.find((mem) => mem.position === "투수").id
            : "0"
        }`}
      ></CurrentPlayer>
      <CurrentPlayer
        type="타자"
        name={`${
          gameTeamData.length === 2
            ? gameTeamData.find((v) => v.status === "ATTACK").members[0].name
            : "d"
        }`}
        description="1타석 0안타"
      ></CurrentPlayer>
    </HeaderRightDiv>
  );
};

const HeaderRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: #e2e2e2 0.1rem solid;
  padding: 0.5rem 0.8rem;
  justify-content: space-around;
  width: 20%;
`;

export default HeaderRight;
