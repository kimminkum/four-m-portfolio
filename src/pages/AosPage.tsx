import React, { useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

// 화면 인식할 때 aos

// 펼쳐지는 슬라이드 메인에서 써먹음.

// 다양한 aos 티스토리에 있는 효과 잘 사용하기.

const AosPage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return <></>;
};

export default AosPage;
