import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import BodyAndHead from 'Images/bodyAndHead.svg';
import ArmsImage from 'Images/arms.svg';
import Pants from 'Images/pants.svg';
import Foot from 'Images/foot.svg';

const RunnerImage = ({ base }) => {
  return (
    <RunnerWrapper base={base}>
      <BodyAndHeadImageTag src={BodyAndHead} alt="" />
      <FrontArmImageTag src={ArmsImage} alt="" />
      <BackArmImageTag src={ArmsImage} alt="" />
      <FrontPantsImageTag src={Pants} alt="" />
      <BackPantsImageTag src={Pants} alt="" />
      <FrontFootImageTag src={Foot} alt="" />
      <BackFootImageTag src={Foot} alt="" />
    </RunnerWrapper>
  );
};
const upDown = keyframes`
  from {
    margin-left:-10px;
  }
  to {
    margin-left:0;
  }
`;

const leftRight = keyframes`
  from {
    margin-top:-10px; 
  }
  to {
    margin-top:0;
  }
`;

const move = (angle) => keyframes`
  0% {
    opacity:1;
    transform: rotate(${angle}deg) translateX(0px);
  }
  90%{
    opacity:1;
  }
  100% {
    opacity:0;
    transform: rotate(${angle}deg) translateX(-330px);
  }
`;

const moveLocation = {
  first: move(135),
  second: move(45),
  third: move(315),
  fourth: move(235)
};

const runnerLocation = {
  first: `top: 75%;
  left: 55%;`,
  second: `top: 33%;
  left: 83%;`,
  third: `top: 2%;
  left: 36%;`,
  fourth: `top: 41%;
  left: 7%;`
};

const RunnerWrapper = styled.div`
  min-height: 5rem;
  min-width: 5rem;
  width:1%;
  height:20%;
  position: absolute;
  animation: ${({ base }) => base === ('first' || 'third') ? upDown : leftRight} .15s linear infinite alternate,
  ${({ base }) => moveLocation[base]} 1.5s linear;
  opacity:0;
  ${({ base }) => base && css`
    ${runnerLocation[base]}
  `
  }
`;

const frontHand = keyframes`
  from {transform:rotate(20deg);}
  to{transform:rotate(-60deg);}
`;

const backHand = keyframes`
  from {transform:rotate(-30deg);}
  to{transform:rotate(50deg);}
`;

const frontPants = keyframes`
  from {transform:rotate(-50deg);}
  to{transform:rotate(0);}
`;

const backPants = keyframes`
  from {transform:rotate(0);}
  to{transform:rotate(-50deg);}
`;

const frontFoot = keyframes`
  from {transform:rotate(-77deg);}
  to{transform:rotate(0);}
`;

const backFoot = keyframes`
  from {transform:rotate(0);}
  to{transform:rotate(-77deg);}
`;

const BodyAndHeadImageTag = styled.img`
  position: absolute;
  top:25%;
  left:50%;
  width: 30%;
  height:30%;
  min-width:3rem;
  z-index:3;
  transform:translate(-50%,-50%);
`;

const FrontArmImageTag = styled.img`
  position:absolute;
  z-index:4;
  top: 25%;
  left: 12%;
  width: 30%;
  height:30%;
  min-width:3rem;
  animation: ${frontHand} .3s linear infinite alternate;
  transform-origin:62% 10%;
`;

const BackArmImageTag = styled.img`
  position:absolute;
  z-index:2;
  top: 25%;
  left: 15%;
  min-width:3rem;
  width: 30%;
  height:30%;
  animation: ${backHand} .3s linear infinite alternate;
  transform-origin:50% 10%;
`;

const FrontPantsImageTag = styled.img`
  position:absolute;
  z-index:2;
  top: 35%;
  left: 16%;
  min-width:3rem;
  width: 30%;
  height:30%;
  animation: ${frontPants} .3s linear infinite alternate;
  transform-origin:50% 10%;
`;
const BackPantsImageTag = styled.img`
 position:absolute;
  z-index:1;
  top: 35%;
  left: 16%;
  min-width:3rem;
  width: 30%;
  height:30%;
  animation: ${backPants} .3s linear infinite alternate;
  transform-origin:50% 10%;
`;
const FrontFootImageTag = styled.img`
 position:absolute;
  z-index:2;
  top: 59.7%;
  left: 16.9%;
  width: 30%;
  height:30%;
  animation: ${frontFoot} .3s linear infinite alternate;
  transform-origin:82% -36%;
`;
const BackFootImageTag = styled.img`
 position:absolute;
  z-index:1;
  top: 59.7%;
  left: 16.9%;
  width: 30%;
  height:30%;
  animation: ${backFoot} .3s linear infinite alternate;
  transform-origin:82% -36%;
`;


export default RunnerImage;