// src/pages/MainWindow.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { textData } from "../../data/textData";

interface TextWindowProps {
  currentId: number;
}

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

interface TextWindowProps {
  currentId: number;
  handleClick: () => void;
}

// text 창 하단부부
const TextWindow: React.FC<TextWindowProps> = ({ currentId, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <h1>
        {textData.find((item) => item.id === currentId)?.text || "데이터 없음"}
      </h1>
    </Container>
  );
};

export default TextWindow;
