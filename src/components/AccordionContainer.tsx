import React, { useState } from "react";
import Accordion from "./Accordion";

interface AccordionData {
  title: string;
  content: React.ReactNode;
}

interface AccordionContainerProps {
  version: 1 | 2;
  accordions: AccordionData[];
}

const AccordionContainer: React.FC<AccordionContainerProps> = ({
  version,
  accordions,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (version === 1) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          isOpen={version === 1 ? openIndex === index : undefined}
          onClick={
            version === 1 ? () => handleAccordionClick(index) : undefined
          }
        >
          {accordion.content}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionContainer;
