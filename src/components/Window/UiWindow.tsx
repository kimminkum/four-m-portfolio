// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

interface UiWindowProps {
  currentId: number;
  isUiMode: boolean;
  toggleUi: () => void;
  handleClick: () => void;
}
const Container = styled.div<{ isUiMode: boolean }>`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.textTxt};
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  z-index: 3;
`;

const QuestionButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

// text 창 하단부부

const UiWindow: React.FC<UiWindowProps> = ({
  isUiMode,
  toggleUi,
  currentId,
  handleClick,
}) => {
  return (
    <Container isUiMode={isUiMode} onClick={handleClick}>
      <QuestionButton onClick={toggleUi}>?</QuestionButton>
      <h1>UI Window</h1>
    </Container>
  );
};

export default UiWindow;
