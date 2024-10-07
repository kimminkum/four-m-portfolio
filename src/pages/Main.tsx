import React from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

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
  width: 400px;
  height: 400px;
  display: flex;
  transition-duration: var(--io-duration, 2s);
  transition-timing-function: var(--io-ease, linear);
  transition-delay: var(--io-delay, 0.7s);
  align-items: center;
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

const Main: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return (
    <>
      <MainContainer>
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
      </MainContainer>
    </>
  );
};

export default Main;
