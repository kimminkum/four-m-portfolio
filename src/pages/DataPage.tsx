import React, { useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

const DataPage: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return <></>;
};

export default DataPage;
