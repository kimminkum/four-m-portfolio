// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";

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
`;

// text 창 하단부부

const TextWindow: React.FC = () => {
  return (
    <Container>
      <h1>Text Window</h1>
    </Container>
  );
};

export default TextWindow;
