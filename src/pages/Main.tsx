import React from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";
import BoomTest from "../components/BoomTest"; // BoomTest 컴포넌트를 임포트합니다.

<<<<<<< HEAD
=======
const carAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  18% {
    transform: translate3d(400%, 0, 0);
  }
  22% {
    transform: translate3d(400%, 0, 0) rotate(90deg);
  }
  26% {
    transform: translate3d(400%, calc(25vh - 11px), 0) rotate(90deg);
  }
  30% {
    transform: translate3d(400%, calc(25vh - 11px), 0) rotate(180deg);
  }
  48% {
    transform: translate3d(0, calc(25vh - 11px), 0) rotate(180deg);
  }
  52% {
    transform: translate3d(0, calc(25vh - 11px), 0) rotate(90deg);
  }
  56% {
    transform: translate3d(0, calc(50vh - 22px), 0) rotate(90deg);
  }
  60% {
    transform: translate3d(0, calc(50vh - 22px), 0) rotate(0deg);
  }
  78% {
    transform: translate3d(400%, calc(50vh - 22px), 0) rotate(0deg);
  }
  82% {
    transform: translate3d(400%, calc(50vh - 22px), 0) rotate(90deg);
  }
  86% {
    transform: translate3d(400%, calc(75vh - 33px), 0) rotate(90deg);
  }
  92% {
    transform: translate3d(400%, calc(75vh - 33px), 0) rotate(180deg);
  }
  100% {
    transform: translate3d(-100%, calc(75vh - 33px), 0) rotate(180deg);
  }
`;

const paintAnimation = keyframes`
  0% {
    width: 5%;
    height: calc(25vh - 11px);
  }
  100% {
    width: 100%;
    height: calc(25vh - 11px);
  }
`;
const paintAnimation2 = keyframes`
  0% {
    width: 20%;
    height: calc(25vh - 11px);
  }
  100% {
    width: 100%;
    height: calc(25vh - 11px);
  }
`;

interface AnimateBoxProps {
  backgroundColor: string;
  boxShadowColor?: string; // boxShadowColor의 타입을 string | undefined로 변경
}

>>>>>>> 2c3d9027e1152abfc3bf3f806bbe32cd87e43cf2
const MainContainer = styled.div`
  position: relative;
  height: calc(100vh - 48px);
  width: 100%;
  background: #fff;
`;

const MainInner = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const TopInner = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto 0;
  padding: 60px 80px 0;
`;

const MainTitleBox = styled.div`
  position: absolute;
<<<<<<< HEAD
  width: 400px;
  height: 400px;
=======
  top: 0;
  width: 20%;
  height: calc(25vh - 11px);
  background-color: #884f4f;
>>>>>>> 2c3d9027e1152abfc3bf3f806bbe32cd87e43cf2
  display: flex;
  transition-duration: var(--io-duration, 2s);
  transition-timing-function: var(--io-ease, linear);
  transition-delay: var(--io-delay, 0.7s);
  align-items: center;
<<<<<<< HEAD
  justify-content: center;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  background: #feac5e; /* fallback for old browsers */
  font-family: PretendardRegular, sans-serif, Arial;
  background: -webkit-linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
=======
  animation: ${carAnimation} 12s forwards linear;
  animation-iteration-count: 1;
>>>>>>> 2c3d9027e1152abfc3bf3f806bbe32cd87e43cf2

  &[data-io="main-open"] {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition-property: opacity, transform, top, left;
    transition-timing-function: ease;

    &.io-animation {
      top: 0;
      left: 0;
      transform: translate(0, 0) scale(0.7);
    }
  }
`;

const TitleSvg = styled.svg`
  width: 600px;
  height: 400px;
`;

const stroke = keyframes`
  0% { 
    stroke-dashoffset: 750; 
  } 
  70% {
    fill: #fff;
  }
  100% { 
    stroke-dashoffset: 0; 
    fill: #fff;
  } 
`;

const TitleTxt = styled.text`
  font-family: "Anton", sans-serif;
  font-size: 6rem;
  stroke-width: 3px;
  stroke: #fff;
  fill: transparent;
  stroke-dashoffset: 750;
  stroke-dasharray: 750;
  animation: ${stroke} 1.5s linear;
  animation-fill-mode: forwards;
`;

const Paintong = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5%;
  height: 0;
  background-color: black;
  animation: ${paintAnimation} 2.4s forwards linear;
  animation-iteration-count: 1;
  z-index: 0; /* Car 요소 뒤에 배경이 나타나도록 설정 */
`;

const Main: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return (
    <>
      <MainContainer>
<<<<<<< HEAD
        <MainTitleBox data-io="main-open">
          <TitleSvg viewBox="0 0 600 400">
            <TitleTxt
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              김민겸
            </TitleTxt>
          </TitleSvg>
        </MainTitleBox>
=======
        <AnimateBox backgroundColor="#ffbfe1" boxShadowColor="255, 191, 225" />
        <AnimateBox backgroundColor="#cfffd0" boxShadowColor="207, 255, 208 " />
        <AnimateBox backgroundColor="#cfbffe" boxShadowColor="207, 191, 254" />
        <AnimateBox backgroundColor="#ceacce" boxShadowColor="206, 172, 206" />
        <AnimateBox backgroundColor="#d0d0d0" boxShadowColor="208, 208, 208" />
        <AnimateBox backgroundColor="#cff3f3" boxShadowColor="207, 243, 243" />
        <AnimateBox backgroundColor="#d2ffe1" boxShadowColor="210, 255, 225" />
        <AnimateBox backgroundColor="#ffbfcf" boxShadowColor="255, 191, 207" />
        <AnimateBox backgroundColor="#b196c1" boxShadowColor="240,155,199" />
        <AnimateBox backgroundColor="#d0f3e1" boxShadowColor="208, 243, 225" />
        <AnimateBox backgroundColor="#c1e1ed" boxShadowColor="193, 225, 237" />
        <AnimateBox backgroundColor="#fef1e1" boxShadowColor="254, 241, 225" />
        <AnimateBox backgroundColor="#ffffe3" boxShadowColor="255, 255, 220" />
        <AnimateBox backgroundColor="#cfbee0" boxShadowColor="207, 190, 224" />
        <AnimateBox backgroundColor="#d1e2ff" boxShadowColor="209, 226, 254" />
        <AnimateBox backgroundColor="#f5cbf0" boxShadowColor="240, 203, 240" />
        <Paintong></Paintong>
        <CleanerCharacter>
          <span></span>
          <div className="eye1"></div>
          <div className="eye2"></div>
        </CleanerCharacter>
>>>>>>> 2c3d9027e1152abfc3bf3f806bbe32cd87e43cf2
      </MainContainer>
      <BoomTest /> {/* BoomTest 컴포넌트를 사용합니다. */}
    </>
  );
};

export default Main;
