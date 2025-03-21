// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import { useTheme } from "../query/ThemeContext";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: calc(100vh - 48px);
  position: relative;
  align-items: center;
  justify-content: center;
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

const MainWindow: React.FC = () => {
  const { isUiMode, toggleUi } = useTheme(); // UI 모드 상태와 토글 함수 가져오기

  return (
    <Container>
      <QuestionButton onClick={toggleUi}>?</QuestionButton>
      <CenterWindow />
      <HelpWindow />
      <TextWindow />
      <UiWindow isUiMode={isUiMode} />
    </Container>
  );
};

export default MainWindow;
