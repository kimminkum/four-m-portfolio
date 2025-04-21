// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";
import { textData } from "../../data/textData";
import { motion, AnimatePresence } from "framer-motion";

interface TextWindowProps {
  currentId: number;
  textIndex: number; // ✅ textIndex 추가
  handleClick: () => void;
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

// text 창 하단부부
const TextWindow: React.FC<TextWindowProps> = ({
  currentId,
  textIndex,
  handleClick,
}) => {
  const maxTextLength = 10; // 한 번에 보여줄 최대 글자 수
  const currentText =
    textData.find((item) => item.id === currentId)?.text || "";
  const textChunks =
    currentText.match(new RegExp(`.{1,${maxTextLength}}`, "g")) || [];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${currentId}-${textIndex}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Container onClick={handleClick}>
          <h1>{textChunks[textIndex] || "데이터 없음"}</h1>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default TextWindow;
