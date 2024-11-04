import React, { useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

// swiper basic
// swiper - banner
// swiper - card
// swiper - gallery
// swiper - parallax
// swiper - vertical
// swiper - multiple
// swiper - fade
// swiper - custom
// swiper - lazy
// swiper - thumbs
// swiper - hash
// swiper - scrollbar
// swiper - navigation
// swiper - pagination
// swiper - autoplay
// swiper - effect
// swiper - controller
// swiper - a11y
// swiper - virtual
// swiper - keyboard
// swiper - mousewheel
// swiper - hash-navigation
// swiper - history
// swiper - breakpoints
// swiper - observer
// swiper - nested
// swiper - free
// swiper - grid
// swiper - flex
// swiper - parallax
// swiper - zoom

const SwiperPage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return <></>;
};

export default SwiperPage;
