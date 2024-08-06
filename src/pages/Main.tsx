import React from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

// Create a styled component with the animation
const AnimatedDiv = styled.div`
  transition-duration: var(--io-duration, 2s);
  transition-timing-function: var(--io-ease, linear);
  transition-delay: var(--io-delay, 0.3s);
  transform-style: preserve-3d;
  display: block;
  margin: auto;

  &[data-io="fade-in"] {
    opacity: 0;
    transform: translateY(-20%);
    transition-property: opacity, transform;
    transition-timing-function: ease;

    &.io-animation {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &[data-io="fade-right"] {
    opacity: 0;
    transform: translateX(-20%);
    transition-property: opacity, transform;
    transition-timing-function: ease;

    &.io-animation {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &[data-io="flip-in"] {
    opacity: 0;
    transform: rotateX(135deg);
    transition-property: opacity, transform;
    transition-timing-function: ease;

    &.io-animation {
      opacity: 1;
      transform: rotateX(0);
    }
  }
`;

const Main: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return (
    <>
      <AnimatedDiv data-io="fade-in">
        <div>BTS</div>
      </AnimatedDiv>
    </>
  );
};

export default Main;
