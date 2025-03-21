// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterWindow: React.FC = () => {
  return (
    <Container>
      <h1>Center Img Window</h1>
    </Container>
  );
};

export default CenterWindow;
