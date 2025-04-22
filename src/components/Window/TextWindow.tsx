// src/pages/MainWindow.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { textData } from "../../data/textData";

interface TextWindowProps {
  currentId: number;
  textIndex: number;
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
  z-index: 4;
`;

const MotionContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

// text 창 하단부부
const TextWindow: React.FC<TextWindowProps> = ({
  currentId,
  textIndex,
  handleClick,
}) => {
  const maxTextLength = 20; // 한 번에 보여줄 최대 글자 수
  const currentText =
    textData.find((item) => item.id === currentId)?.text || "";
  const textChunks =
    currentText.match(new RegExp(`.{1,${maxTextLength}}`, "g")) || [];

  const [displayText, setDisplayText] = useState("");
  const fullText = textChunks[textIndex] || "데이터 없음";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 30); // 타이핑 속도 조절

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Container onClick={handleClick}>
      <AnimatePresence mode="wait">
        <MotionContainer
          key={`${currentId}-${textIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="font-24">{displayText}</p>
        </MotionContainer>
      </AnimatePresence>
    </Container>
  );
};

export default TextWindow;
