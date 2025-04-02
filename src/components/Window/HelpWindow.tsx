// src/components/Window/HelpWindow.tsx
import React from "react";
import { useTheme } from "../../query/ThemeContext";
import styled from "styled-components";

interface HelpWindowProps {
  toggleUi: () => void;
  isUiMode: boolean;
}

const Container = styled.div<{ isUiMode: boolean }>`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.textTxt};
  color: ${({ theme }) => theme.textBg};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  z-index: 8;
  transform: ${({ isUiMode }) =>
    isUiMode ? "translateY(0%)" : "translateY(100%)"};
`;

const Button = styled.button`
  padding: 10px 0;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textBg};
  font-size: 20px;
  cursor: pointer;
`;

// 토글 진행 에 대한 설명 모달창으로로

const HelpWindow: React.FC<HelpWindowProps> = ({ isUiMode, toggleUi }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container isUiMode={isUiMode}>
      <Button onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>

      <CloseButton onClick={toggleUi}>×</CloseButton>
    </Container>
  );
};

export default HelpWindow;
