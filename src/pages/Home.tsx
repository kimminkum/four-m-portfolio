import React, { useState } from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import Button from "../components/Button";
import Scroll from "../components/Scroll";
import Timer from "../components/Timer";
import Tabs from "../components/Tabs";
import Modal from "../components/Modal";
import From from "../components/From";
import Swiperbasic from "../components/Swiperbasic";
import { SwiperSlide } from "swiper/react";
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
      <ScrollBox>
        <Scroll />
      </ScrollBox>
    </Container>
  );
};

export default Home;
