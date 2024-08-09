import React from "react";
import About from "./pages/About";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Topbtn from "./components/Topbtn";
import Main from "./pages/Main";
import { GlobalProvider, useGlobalContext } from "./query/GlobalContext";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: auto;
  width: 100vw;
  overflow-x: hidden;
  padding-bottom: 60px;
  padding-top: 44px;
`;

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <InnerApp />
    </GlobalProvider>
  );
};

const InnerApp: React.FC = () => {
  return (
    <>
      <Header />
      <RelativeContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Topbtn />
      </RelativeContainer>
      <Footer />
    </>
  );
};

export default App;
