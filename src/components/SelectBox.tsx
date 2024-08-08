import React, { useState } from "react";
import styled from "styled-components";

interface SelectBoxProps {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
  placeholder?: string;
}

const SelectBoxContainer = styled.div`
  position: relative;
  width: 200px;
`;

const SelectedOption = styled.div<{ isPlaceholder: boolean }>`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
  color: ${(props) => (props.isPlaceholder ? "#888" : "#000")};
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
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  selectedOption,
  onChange,
  placeholder = "선택해주세요. 무엇을 선택 하세요.",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const isPlaceholder = !selectedOption;

  return (
    <SelectBoxContainer>
      <SelectedOption
        onClick={() => setIsOpen(!isOpen)}
        isPlaceholder={isPlaceholder}
      >
        {isPlaceholder ? placeholder : selectedOption}
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
