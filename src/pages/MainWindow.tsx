// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainWindow: React.FC = () => {
  return (
    <Container>
      <h1>Main Window</h1>
    </Container>
  );
};

export default MainWindow;
