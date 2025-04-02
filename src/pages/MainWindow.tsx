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
  overflow: hidden;
`;

const MainWindow: React.FC = () => {
  const { isUiMode, toggleUi } = useTheme(); // UI 모드 상태와 토글 함수 가져오기

  return (
    <Container>
      <CenterWindow />
      <HelpWindow toggleUi={toggleUi} isUiMode={isUiMode} />
      <TextWindow />
      <UiWindow toggleUi={toggleUi} isUiMode={isUiMode} />
    </Container>
  );
};

export default MainWindow;
