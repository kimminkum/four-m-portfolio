// src/pages/MainWindow.tsx
import React, { useState } from "react";
import styled from "styled-components";

import CenterWindow from "../components/Window/CenterWindow";
import HelpWindow from "../components/Window/HelpWindow";
import TextWindow from "../components/Window/TextWindow";
import UiWindow from "../components/Window/UiWindow";
import { useTheme } from "../query/ThemeContext";
import { contentData } from "../data/contentData";
import { textData } from "../data/textData"; // ✅ textData import 추가

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
  const [isLast, setIsLast] = useState<boolean>(false);
  const maxTextLength = 10; // 한 번에 보여줄 최대 글자 수
  const [textIndex, setTextIndex] = useState(0);

  const handleClick = () => {
    const currentText =
      textData.find((item) => item.id === currentId)?.text || "";
    const textChunks =
      currentText.match(new RegExp(`.{1,${maxTextLength}}`, "g")) || [];

    if (textIndex < textChunks.length - 1) {
      // ✅ 텍스트가 남아 있으면 textIndex 증가 (currentId 유지)
      setTextIndex((prevIndex) => prevIndex + 1);
    } else {
      // ✅ 텍스트의 모든 조각을 출력했으면, textIndex 초기화 & currentId 증가
      setTextIndex(0);
      setCurrentId((prevId) =>
        prevId < textData.length - 1 ? prevId + 1 : prevId
      );
    }
  };

  return (
    <Container>
      <CenterWindow currentId={currentId} textIndex={textIndex} />
      <HelpWindow toggleUi={toggleUi} isUiMode={isUiMode} />
      <TextWindow
        currentId={currentId}
        handleClick={handleClick}
        textIndex={textIndex}
      />
      <UiWindow
        toggleUi={toggleUi}
        isUiMode={isUiMode}
        currentId={currentId}
        handleClick={handleClick}
      />

      {isLast && <div> over </div>}
    </Container>
  );
};

export default MainWindow;
