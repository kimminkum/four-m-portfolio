import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', 'AppleSDGothicNeoR00' ,'Apple SD Gothic' ,sans-serif;
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }

  .flex {
    display: flex;
  }

  .fix {
    position: relative;
  }

  .ctns {
    width: 100%;
    min-width: 1240px;
    max-width: 1920px;
    margin: 0 auto;
    text-align: left;
    font-family: Pretendard, 'Malgun Gothic', 'SF Pro', AppleSDGothicNeo, HelveticaNeue, helvetica, sans-serif;
    color: #000;
    font-weight: 400;
    letter-spacing: -0.02em;
    overflow: hidden;
  }

  img {
    width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
