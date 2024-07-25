import React from "react";
import styled, { keyframes, css } from "styled-components";

interface CarouselProps {
  carouselImg: string;
  carouselHeight: number;
  carouselWidth: number;
}

const flow = keyframes<CarouselProps>`
    from {
        background-position-x: 0;
    }
    to {
        background-position-x: ${(props) => props.carouselWidth}vw;
    }
`;

const MainBox = styled.div<CarouselProps>`
  background-image: url(${(props) => props.carouselImg});
  background-position-y: 100%;
  background-repeat: repeat-x;
  background-size: cover;

  animation: ${flow} 36s linear infinite;
  padding-top: ${(props) => props.carouselHeight}vw;
  ${(props) =>
    css`
      background-position-x: ${props.carouselWidth}vw;
    `}
`;

const Carousel: React.FC<CarouselProps> = (props) => {
  return (
    <>
      <MainBox
        carouselImg={props.carouselImg}
        carouselHeight={props.carouselHeight}
        carouselWidth={props.carouselWidth}
      ></MainBox>
    </>
  );
};

export default Carousel;
