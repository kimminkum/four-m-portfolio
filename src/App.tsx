import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import styled from "styled-components";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Topbtn from "./components/Topbtn";

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  overflow: auto;
`;

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <RelativeContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Topbtn></Topbtn>
      </RelativeContainer>
      <Footer></Footer>
    </>
  );
};

export default App;
