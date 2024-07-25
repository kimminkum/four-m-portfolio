import React from "react";
import Carousel from "../components/Carousel";
import Topbtn from "../components/Topbtn";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Carousel
          carouselImg="//img.lfmall.co.kr/file/WAS/display/Planning/95905/w_carousel.jpg"
          carouselHeight={3.34}
          carouselWidth={-154.1667}
        ></Carousel>
      </div>
      <Topbtn></Topbtn>
    </div>
  );
};

export default Home;
