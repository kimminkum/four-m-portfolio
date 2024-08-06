import React, { useState } from "react";
import styled from "styled-components";

interface SelectBoxProps {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
}

const SelectBoxContainer = styled.div`
  position: relative;
  width: 200px;
`;

const SelectedOption = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
`;

const OptionsContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
`;

const OptionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <SelectBoxContainer>
      <SelectedOption onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </SelectedOption>
      <OptionsContainer isOpen={isOpen}>
        {options.map((option, index) => (
          <OptionItem key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </OptionItem>
        ))}
      </OptionsContainer>
    </SelectBoxContainer>
  );
};

export default SelectBox;
