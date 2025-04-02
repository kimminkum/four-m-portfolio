// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";
import { contentData } from "../../data/contentData";
import Button from "../Button"; // 동적 컴포넌트 예제

interface CenterWindowProps {
  currentId: number;
}

const BtnBox = styled.div`
  width: 60px;
  position: relative;
  top: 0;
  margin: 0 auto;
  background-color: #ccc;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterWindow: React.FC<CenterWindowProps> = ({ currentId }) => {
  const currentContent = contentData[currentId]; // ✅ 현재 ID에 해당하는 데이터 찾기

  if (!currentContent) return <Container>콘텐츠 없음</Container>; // ✅ 예외 처리

  const handleClick = () => {
    console.log("hello World!");
  };

  return (
    <Container>
      {currentContent.type === "image" && (
        <img src={currentContent.src} alt={currentContent.alt} width="100%" />
      )}
      {currentContent.type === "component" && (
        <BtnBox>
          <Button onClick={handleClick} type="button" className="mack">
            hello
          </Button>
        </BtnBox>
      )}
    </Container>
  );
};

export default CenterWindow;
