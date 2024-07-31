import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Topbtn from "./components/Topbtn";
import Main from "./pages/Main";
import { GlobalProvider } from "./query/GlobalContext";
import styled from "styled-components";

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: auto;
  overflow: auto;
`;

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Header></Header>
      <RelativeContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Topbtn></Topbtn>
      </RelativeContainer>
      <Footer></Footer>
    </GlobalProvider>
  );
};

export default App;
