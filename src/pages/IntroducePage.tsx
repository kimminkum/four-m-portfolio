import React, { useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

// 내 소개 아마 정적으로

// 아니면 애니메이션 페이지 없애고
// https://www.youtube.com/watch?v=YDCCauu4lIk&t=50s 해당 꺼 보면서 맞추기

const IntroducePage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return <></>;
};

export default IntroducePage;
