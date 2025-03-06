// src/components/Window/HelpWindow.tsx
import React from "react";
import { useTheme } from "../../query/ThemeContext";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
`;

const HelpWindow: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <Button onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default HelpWindow;
