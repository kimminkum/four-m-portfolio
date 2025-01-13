import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";
import Scroll from "../components/Scroll";

const PrologueBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #161616;
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
`;
const PrologueBox2 = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #161616;
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
`;
const PrologueBox3 = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #161616;
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
`;
const PrologueBox4 = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #161616;
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
`;
const PrologueBox5 = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #161616;
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
`;
const PrologueBox6 = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #161616;
  font-family: PretendardRegular, sans-serif, Arial;
  color: #fff;
  transform-origin: 50% 50%; /* 회전 중심을 요소의 가운데로 설정 */
`;
const CirclePath = styled.div`
  position: absolute;
  right: 5%;
  width: 28%;
  top: 5%;

  animation: rotate 20s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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
        <PrologueInner>
          - 김민겸 Portfolio - svg 를 이용한 텍스트 마크 1 배웠으니 써먹고
          싶어서
          <CirclePath>
            <svg viewBox="0 0 300 300">
              <path
                id="cxcy"
                d="M 150 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                fill="transparent"
                stroke="black"
              />

              <text width="300">
                <textPath
                  id="textPath"
                  href="#cxcy"
                  fill="white"
                  startOffset="0"
                >
                  ฅ(۩۞ω۞۩) ฅ SVG PATH를 이용한 ฅ^•ﻌ•^ฅ 원, 곡선 텍스트
                  (=^･ω･^)y＝ ฅ^•ﻌ•^ฅ
                </textPath>
              </text>
            </svg>
          </CirclePath>
        </PrologueInner>
      </PrologueBox>
      <Scroll>
        <PrologueBox2>
          저는 이런이런 사람입니다. - 좌우로 열리는 오픈 스크롤 1번만
        </PrologueBox2>
      </Scroll>
      <PrologueBox3>
        <PrologueInner> 회사~내용 - aos? carousel? </PrologueInner>
      </PrologueBox3>
      <PrologueBox4>
        <PrologueInner>
          디자인에 대한 강점 대신 JS에 대한 것을 보여드리겠습니다. - 쌓이는 효과
        </PrologueInner>
      </PrologueBox4>
      <PrologueBox5>
        <PrologueInner>소개~ / 스크롤 시 옆으로</PrologueInner>
      </PrologueBox5>
      <PrologueBox6>
        <PrologueInner>navi 버튼 ?</PrologueInner>
      </PrologueBox6>
    </>
  );
};

export default Main;
