import React from "react";
import styled from "styled-components";

const TopBtn = styled.div`
  position: sticky;
  bottom: 0; // 하단에 고정
  right: 5%; // 우측에 고정
  width: 50px;
  height: 50px;

  background-color: #aaa;
`;

const Topbtn: React.FC = () => {
  return (
    <>
      <TopBtn></TopBtn>
    </>
  );
};

export default Topbtn;
