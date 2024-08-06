import React, { useState } from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import Button from "../components/Button";
import Timer from "../components/Timer";
import Tabs from "../components/Tabs";
import Modal from "../components/Modal";
import From from "../components/From";
import Swiperbasic from "../components/Swiperbasic";
import { SwiperSlide } from "swiper/react";
import useIntersectionObserver from "../style/useIntersectionObserver";
import Scroll from "../components/Scroll";
import "swiper/css";

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

const SwiperSlide2 = styled.div`
  width: 100%;
  height: 300px;
`;

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

const FlipFront = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  width: 100%;
  height: 100%;
  position: relative;
  backface-visibility: hidden;
`;

const FlipImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const FlipBack = styled.div`
  position: absolute;
  z-index: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  background-color: blanchedalmond;

  p {
    text-align: center;
    font-size: 30px;
  }
`;

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    console.log("hello World!");
  };

  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return (
    <Container>
      <div>
        <Tabs TabsBtn={["a", "x", "b"]} />
      </div>
      <Carousel
        carouselImg="//img.lfmall.co.kr/file/WAS/display/Planning/95905/w_carousel.jpg"
        carouselHeight={3.34}
        carouselWidth={-154.1667}
      />

      <div>
        <Timer
          dday="2024-08-09T10:20:01"
          Ds={["days", "hours", "minutes", "seconds"]}
        />
        <Timer dday="2024-10-09T10:10:10" Ds={["hours", "minutes"]} />
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        )}
      </div>
      <div>
        <From></From>
      </div>
      <Swiperbasic
        spaceBetween={20}
        autoplayDelay={3000}
        slidesPerView={2}
        indicator={true}
        paginationType="fraction"
        showNavigation={true}
        additionalModules={[]}
      >
        <SwiperSlide>
          <SwiperSlide2> Slide 1 </SwiperSlide2>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide2> Slide 2 </SwiperSlide2>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide2> Slide 3 </SwiperSlide2>
        </SwiperSlide>
      </Swiperbasic>
      <BtnBox>
        <Button onClick={handleClick} type="button" className="mack">
          hello
        </Button>
      </BtnBox>
      <NoneBox />
      <ScrollBox></ScrollBox>

      <AnimatedDiv data-io="flip-in">
        <FlipFront>
          <FlipImg
            src="http://img.lfmall.co.kr/file/WAS/display/Planning/96102/96102_w_01.jpg"
            alt="main"
          />
        </FlipFront>
        <FlipBack>
          <p>응애 나 애기 멍멍이</p>
        </FlipBack>
      </AnimatedDiv>
      <AnimatedDiv data-io="fade-in">Fade In Animation</AnimatedDiv>
      <AnimatedDiv data-io="fade-right">Fade Right Animation</AnimatedDiv>
      <Scroll>
        <AnimatedDiv data-io="fade-in">
          <img
            src="http://img.lfmall.co.kr/file/WAS/display/Planning/96102/96102_w_01.jpg"
            alt="main"
            className="full-img"
          />
        </AnimatedDiv>
      </Scroll>
    </Container>
  );
};

export default Home;
