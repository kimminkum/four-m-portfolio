import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #333;
  color: #fff;
`;

const FooterIner = styled.div`
  width: 100%;
  padding: 20px 20px 40px;
  max-width: 1240px;
  margin: 0 auto;
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterIner>Footer Page</FooterIner>
      </FooterContainer>
    </>
  );
};

export default Footer;
