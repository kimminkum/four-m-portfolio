import React from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

const AnimationPage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return <></>;
};

export default AnimationPage;
