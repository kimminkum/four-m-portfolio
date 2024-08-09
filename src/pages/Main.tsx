import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

const carAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(400%, 0, 0);
  }
  25% {
    transform: translate3d(400%, 0, 0) rotate(90deg);
  }
  35% {
    transform: translate3d(400%, 20vh, 0) rotate(90deg);
  }
  50% {
    transform: translate3d(400%, 20vh, 0) rotate(180deg);
  }
  70% {
    transform: translate3d(0, 20vh, 0) rotate(180deg);
  }
  75% {
    transform: translate3d(0, 20vh, 0) rotate(90deg);
  }
  100% {
    transform: translate3d(500%, 100vh, 0) rotate(90deg);
  }
`;

interface AnimateBoxProps {
  backgroundColor: string;
  boxShadowColor?: string; // boxShadowColor의 타입을 string | undefined로 변경
}

const MainContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: calc(100vh - 44px);
  background: #fff;
`;

const MainInner = styled.div`
  max-width: 1280px;
  width: 100%;
  position: relative;
`;

const AnimateBox = styled.div<AnimateBoxProps>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 0 10px
    rgba(${(props) => props.boxShadowColor || "0, 0, 0"}, 0.7);
`;

const CleanerCharacter = styled.div`
  position: absolute;
  top: 0;
  width: 20%;
  height: 20%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${carAnimation} 20s forwards linear;
  animation-iteration-count: 1;

  span {
    width: 60%;
    height: 65%;
    background-color: #888;
    position: relative;
    border-radius: 10%;
  }

  .eye1 {
    width: 10%;
    height: 30%;
    position: absolute;
    background-color: #fff;
    top: 0;
    right: 0;
    box-shadow: 10px 0 8px #fff;
  }
  .eye2 {
    width: 10%;
    height: 30%;
    position: absolute;
    background-color: #fff;
    bottom: 0;
    right: 0;
    box-shadow: 10px 0 8px #fff;
  }
`;

const Main: React.FC = () => {
  return (
    <>
      <MainContainer>
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
        <CleanerCharacter>
          <span></span>
          <div className="eye1"></div>
          <div className="eye2"></div>
        </CleanerCharacter>
      </MainContainer>
    </>
  );
};

export default Main;

// Add more Animate components up to Animate16 with different background colors and box-shadow
