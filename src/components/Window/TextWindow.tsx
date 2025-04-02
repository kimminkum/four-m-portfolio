// src/pages/MainWindow.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { textData } from "../../data/textData";

const Container = styled.div`
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  width: 100%;
  max-width: 768px;
  position: absolute;
  bottom: 0;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  z-index: 4;
`;

// text 창 하단부부

const TextWindow: React.FC = () => {
  const [currentId, setCurrentId] = useState(1);

  const handleClick = () => {
    if (currentId < textData.length) {
      setCurrentId((prevId) => prevId + 1);
    } else {
      alert("마지막 텍스트입니다! 추가 이벤트 실행 가능");
      // 원하는 다른 이벤트 실행 가능
    }
  };

  return (
    <Container onClick={handleClick}>
      <h1>{textData.find((item) => item.id === currentId)?.text}</h1>
    </Container>
  );
};

export default TextWindow;
