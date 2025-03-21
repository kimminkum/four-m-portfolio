// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

interface UiWindowProps {
  isUiMode: boolean;
}

const Container = styled.div<{ isUiMode: boolean }>`
  display: ${({ isUiMode }) => (isUiMode ? "block" : "none")};
  position: absolute;
  top: 50px;
  right: 10px;
  width: 300px;
  height: 200px;
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;

// text 창 하단부부

const UiWindow: React.FC<UiWindowProps> = ({ isUiMode }) => {
  return (
    <Container isUiMode={isUiMode}>
      <h1>UI Window</h1>
    </Container>
  );
};

export default UiWindow;
