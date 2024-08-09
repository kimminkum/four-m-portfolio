import styled, { keyframes } from "styled-components";
import React from "react";

// 애니메이션 정의
const goInAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }
  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }
  90%, 100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

const goOutAnimation = keyframes`
  0%, 30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  60% {
    transform: translate(-50%, -50%) rotate(120deg);
  }
`;

// styled-components 정의
const Count = styled.div<{ isHidden: boolean }>`
  z-index: 4;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  font-size: clamp(200px, 50vw, 450px);
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: transform 0.3s ease-in-out;

  ${({ isHidden }) =>
    isHidden &&
    `
    transform: translate(-50%, -50%) scale(0);
    animation: hide 0.2s ease-out;
  `}
`;

const Nums = styled.div`
  color: #000000;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-size: inherit;
`;

const NumSpan = styled.span<{ isIn?: boolean; isOut?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(120deg);
  transform-origin: bottom center;

  ${({ isIn }) =>
    isIn &&
    `
    transform: translate(-50%, -50%) rotate(0deg);
    animation: ${goInAnimation} 0.5s ease-in-out;
  `}

  ${({ isOut }) =>
    isOut &&
    `
    animation: ${goOutAnimation} 0.5s ease-in-out;
  `}
`;

// 사용 예시
function About() {
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    const counter = document.querySelector(".counter");
    const finalMessage = document.querySelector(".final");
    const nums = document.querySelectorAll(".nums span");

    function runAnimation() {
      nums.forEach((num, idx) => {
        const penultimate = nums.length - 1;
        num.addEventListener("animationend", (e) => {
          const event = e as AnimationEvent;
          if (event.animationName === "goIn" && idx !== penultimate) {
            num.classList.remove("in");
            num.classList.add("out");
          } else if (
            event.animationName === "goOut" &&
            num.nextElementSibling
          ) {
            num.nextElementSibling.classList.add("in");
          } else {
            counter?.classList.add("hide");
            finalMessage?.classList.add("show");
            setIsHidden(true); // 상태 업데이트
          }
        });
      });
    }

    runAnimation();
  }, []);

  return (
    <Count isHidden={isHidden}>
      <Nums>
        <NumSpan className="in" isIn></NumSpan>
        <NumSpan></NumSpan>
        <NumSpan></NumSpan>
        <NumSpan></NumSpan>
      </Nums>
    </Count>
  );
}

export default About;
