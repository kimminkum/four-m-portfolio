import React from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import Button from "../components/Button";
import Scroll from "../components/Scroll";
import Timer from "../components/Timer";

const BtnBox = styled.div`
  width: 60px;
  position: relative;
  top: 0;
  margin: 0 auto;
  background-color: #ccc;
`;

const Container = styled.div`
  background-color: #15357e;
`;

const NoneBox = styled.div`
  width: 100%;
  height: 900px;
  background-color: #15357e;
`;
const ScrollBox = styled.div`
  width: 100%;
  display: block;
`;

const Home: React.FC = () => {
  const handleClick = () => {
    console.log("hello World!");
  };
  return (
    <Container>
      <div>
        <h1>타이머 예시</h1>
        <Timer
          dday="2024-08-09T10:20:01"
          Ds={["days", "hours", "minutes", "seconds"]}
        />
        <Timer dday="2024-10-09T10:10:10" Ds={["hours", "minutes"]} />
      </div>
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
      <NoneBox />
      <ScrollBox>
        <Scroll />
      </ScrollBox>
    </Container>
  );
};

export default Home;
