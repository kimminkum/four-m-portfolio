// src/pages/MainWindow.tsx
import React, { useState } from "react";
import styled from "styled-components";

import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import { useTheme } from "../query/ThemeContext";
import { contentData } from "../data/contentData";

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
  const [currentId, setCurrentId] = useState(0);

  const handleClick = () => {
    if (currentId < contentData.length - 1) {
      setCurrentId((prevId) => prevId + 1);
    } else {
      alert("마지막 콘텐츠입니다! 추가 이벤트 실행 가능");
    }
  };

  return (
    <Container>
      <CenterWindow currentId={currentId} />
      <HelpWindow toggleUi={toggleUi} isUiMode={isUiMode} />
      <TextWindow currentId={currentId} handleClick={handleClick} />
      <UiWindow
        toggleUi={toggleUi}
        isUiMode={isUiMode}
        currentId={currentId}
        handleClick={handleClick}
      />
    </Container>
  );
};

export default MainWindow;
