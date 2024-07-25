import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 800px;
  background-color: #333;
  color: #fff;
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>Footer Page</FooterContainer>
    </>
  );
};

export default Footer;
