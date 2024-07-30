import React, { useEffect } from "react";
import styled from "styled-components";

const OpenScroll = styled.div`
  width: 100% !important;
  height: min(100vh, 100%);
  overflow: hidden;
  position: relative;
  object-fit: cover;
  transform: translate3d(0, 0, 0);

  &::before,
  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background: var(--scroll-open-bg-color, #fff);
    position: absolute;
    top: 0;
  }

  &::after {
    right: 0;
    transform: translateX(var(--scroll-open-bg-after, 0));
    transition: transform 0.1s ease; /* Increase the transition duration */
  }

  &::before {
    left: 0;
    transform: translateX(var(--scroll-open-bg-before, 0));
    transition: transform 0.1s ease; /* Increase the transition duration */
  }
`;

const Scroll: React.FC = () => {
  useEffect(() => {
    const scrollOpenElements = document.querySelectorAll(".scroll-open");

    const openStartOffset = 200;
    const openEndOffset = 1.4;

    window.addEventListener("scroll", () => {
      const windowH = window.innerHeight;
      scrollOpenElements.forEach((item) => {
        const { top, height } = (item as HTMLElement).getBoundingClientRect();
        const percent = ((top - windowH + openStartOffset) / height) * 100;
        const addValue = Math.min(100, Math.abs(Math.min(0, percent)));
        (item as HTMLElement).style.setProperty(
          "--scroll-open-bg-after",
          `${addValue * openEndOffset}%`
        );
        (item as HTMLElement).style.setProperty(
          "--scroll-open-bg-before",
          `-${addValue * openEndOffset}%`
        );

        // 추가된 부분: width 조정
        const widthValue = `${addValue}%`;
        (item as HTMLElement).style.width = widthValue;
      });
    });
  }, []);

  return (
    <>
      <div className="ctns" data-io="fade-in">
        <div className="fix">
          <OpenScroll className="scroll-open">
            <img
              alt="SUNNY"
              src="//img.lfmall.co.kr/file/WAS/display/Planning/94860/w_open_01.jpg"
              className="full-image"
            />
          </OpenScroll>
        </div>
      </div>
    </>
  );
};

export default Scroll;
