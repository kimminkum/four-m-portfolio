import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

const AccordionContainer = styled.div`
  margin-bottom: 10px;
`;

const AccordionTitle = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  border: 1px solid #ccc;
  border-top: none;
  padding: ${(props) => (props.isOpen ? "10px" : "0 10px")};
`;

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  const [localIsOpen, setLocalIsOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setLocalIsOpen(!localIsOpen);
    }
  };

  const open = isOpen !== undefined ? isOpen : localIsOpen;

  return (
    <AccordionContainer>
      <AccordionTitle onClick={handleClick}>{title}</AccordionTitle>
      <AccordionContent isOpen={open}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
