import React from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

// 좀 신박하게 해보기

// 애니메이션 페이지에서 https://sangseophwang.tistory.com/30 여기 넣는 사이트로 교체할 수도 있음.

const AnimationPage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return <></>;
};

export default AnimationPage;
