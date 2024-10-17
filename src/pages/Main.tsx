import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";

const PrologueBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(black, #222, #444);
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
`;

/*
.gradient1 {
	background:radial-gradient(red,blue,white);
}
.gradient2 {
  background:radial-gradient(circle,red,blue,white);
}
.gradient3 {
  background:radial-gradient(circle closest-side at 10% 20%,red,blue,white);
}
.gradient4 {
  background:radial-gradient(circle closest-corner at 10% 20%,red,blue,white);
}
.gradient5 {
  background:radial-gradient(circle farthest-side at 10% 20%,red,blue,white);
}
.gradient6 {
  background:radial-gradient(circle farthest-corner at 10% 20%,red,blue,white);
}
*/

const PrologueInner = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: hidden;
`;

const Main: React.FC = () => {
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  return (
    <>
      <PrologueBox>
        <PrologueInner></PrologueInner>
      </PrologueBox>
    </>
  );
};

export default Main;
