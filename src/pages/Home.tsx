import React from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import Button from "../components/Button";

const BtnBox = styled.div`
  width: 60px;
  position: relative;
  top: 50px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  const handleClick = () => {
    console.log("hello World!");
  };
  return (
    <div>
      <Carousel
        carouselImg="//img.lfmall.co.kr/file/WAS/display/Planning/95905/w_carousel.jpg"
        carouselHeight={3.34}
        carouselWidth={-154.1667}
      />
      <BtnBox>
        <Button onClick={handleClick} type="button" className="mack">
          hello
        </Button>
      </BtnBox>
    </div>
  );
};

export default Home;
