import React from "react";
import styled from "styled-components";
import useIntersectionObserver from "../style/useIntersectionObserver";
import { useGlobalContext } from "../query/GlobalContext";
import SelectBox from "../components/SelectBox";
import AccordionContainer from "../components/AccordionContainer";

// Create a styled component with the animation
const AnimatedDiv = styled.div`
  transition-duration: var(--io-duration, 2s);
  transition-timing-function: var(--io-ease, linear);
  transition-delay: var(--io-delay, 0.3s);
  transform-style: preserve-3d;
  display: block;
  margin: auto;

  &[data-io="fade-in"] {
    opacity: 0;
    transform: translateY(-20%);
    transition-property: opacity, transform;
    transition-timing-function: ease;

    &.io-animation {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &[data-io="fade-right"] {
    opacity: 0;
    transform: translateX(-20%);
    transition-property: opacity, transform;
    transition-timing-function: ease;

    &.io-animation {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &[data-io="flip-in"] {
    opacity: 0;
    transform: rotateX(135deg);
    transition-property: opacity, transform;
    transition-timing-function: ease;

    &.io-animation {
      opacity: 1;
      transform: rotateX(0);
    }
  }
`;

const Main: React.FC = () => {
  const { options, setOptions } = useGlobalContext(); // useGlobalContext 훅을 사용하여 options와 setOptions를 가져옵니다.
  const [selectedOption, setSelectedOption] = React.useState("");
  useIntersectionObserver("[data-io]", {
    root: null,
    threshold: 0.1,
    rootMargin: "10%",
  });

  const accordionData = [
    { title: "Accordion 1", content: <div>Content 1</div> },
    { title: "Accordion 2", content: <div>Content 2</div> },
    { title: "Accordion 3", content: <div>Content 3</div> },
  ];
  const accordionData2 = [
    { title: "Accordion 4", content: <div>Content max</div> },
    { title: "Accordion 5", content: <div>Content hob</div> },
    { title: "Accordion 6", content: <div>Content gat</div> },
  ];

  return (
    <>
      <AnimatedDiv data-io="fade-in">
        <SelectBox
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
        <h1>Main Component</h1>
        <AccordionContainer version={1} accordions={accordionData} />
        <AccordionContainer version={2} accordions={accordionData} />
      </AnimatedDiv>
    </>
  );
};

export default Main;
