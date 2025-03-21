import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../query/GlobalContext";

// bottom 값을 동적으로 조정하기 위해 props를 추가합니다.
const TopBtn = styled.div<{ bottom: number; isVisible: boolean }>`
  position: fixed;
  bottom: ${(props) => props.bottom}px; // 동적으로 bottom 값을 조정합니다.
  right: 5%;
  max-width: 50px;
  max-height: 50px;
  width: 8vw;
  height: 8vw;
  background-color: #ddd;
  z-index: 8;
  border-radius: 50%;
  cursor: ${(props) => (props.isVisible ? "pointer" : "default")};
  opacity: ${(props) => (props.isVisible ? "1" : "0.3")};
`;

const Topbtn: React.FC = () => {
  // isVisible 대신 bottom 값을 상태로 관리합니다.
  const [bottom, setBottom] = useState<number>(30); // 기본값은 30px
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { footerHeight } = useGlobalContext();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY;
      const footerStart = scrollHeight - footerHeight;

      setIsVisible(currentScrollPosition > 0);

      // 스크롤 위치가 푸터 시작 위치보다 작으면, 푸터 바로 위에 위치하도록 bottom 값을 조정합니다.
      if (currentScrollPosition + viewportHeight < footerStart) {
        setBottom(30); // 기본 위치
      } else {
        // 푸터 바로 위에 고정시키기 위해 viewportHeight에서 푸터 시작 위치까지의 거리를 계산합니다.
        const dynamicBottom =
          currentScrollPosition + viewportHeight - footerStart + 30; // 30은 기본 여백
        setBottom(dynamicBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerHeight]);

  return (
    <>
      {
        <TopBtn
          bottom={bottom}
          isVisible={isVisible}
          onClick={handleClick}
        ></TopBtn>
      }
    </>
  );
};

export default Topbtn;
