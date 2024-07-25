import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav/Nav";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #333;
  color: #fff;
`;

const Header: React.FC = () => {
  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      <HeaderContainer></HeaderContainer>
    </>
  );
};

export default Header;
