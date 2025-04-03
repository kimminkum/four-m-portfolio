// src/pages/MainWindow.tsx
import React from "react";
import styled from "styled-components";
import { contentData } from "../../data/contentData";
import Button from "../Button"; // 동적 컴포넌트 예제

interface ContentItem {
  id: number;
  type: "image" | "component";
  src?: string;
  alt?: string;
  component?: React.ElementType; // ✅ React.FC<any> 대신 ElementType 사용
  props?: Record<string, any>;
}

interface CenterWindowProps {
  currentId: number;
  textIndex: number;
}

const BtnBox = styled.div`
  width: 60px;
  position: relative;
  top: 0;
  margin: 0 auto;
  background-color: #ccc;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.textBg};
  color: ${({ theme }) => theme.textTxt};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterWindow: React.FC<CenterWindowProps> = ({
  currentId,
  textIndex,
}) => {
  // ✅ 현재 ID에 해당하는 데이터 찾기 (find 방식)
  const currentContent: ContentItem | undefined = contentData.find(
    (item) => item.id === currentId
  );

  if (!currentContent) return <Container>콘텐츠 없음</Container>; // ✅ 예외 처리

  return (
    <Container>
      {currentContent.type === "image" && currentContent.src && (
        <img
          src={currentContent.src}
          alt={currentContent.alt || "이미지"}
          width="100%"
        />
      )}
      {currentContent.type === "component" && currentContent.component && (
        <currentContent.component {...currentContent.props} />
      )}
    </Container>
  );
};

export default CenterWindow;
