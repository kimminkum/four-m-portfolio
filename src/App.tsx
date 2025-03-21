import React from "react";
// global
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Topbtn from "./components/Topbtn";
import { GlobalProvider } from "./query/GlobalContext";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import AnimationPage from "./pages/AnimationPage";
import AosPage from "./pages/AosPage";
import DataPage from "./pages/DataPage";
import SwiperPage from "./pages/SwiperPage";
import IntroducePage from "./pages/IntroducePage";
import MainWindow from "./pages/MainWindow";

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: auto;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 60px;
  padding-top: 48px;
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
          <Route path="/swiperpage" element={<SwiperPage />} />
          <Route path="/aospage" element={<AosPage />} />
          <Route path="/animationpage" element={<AnimationPage />} />
          <Route path="/datapage" element={<DataPage />} />
          <Route path="/introducepage" element={<IntroducePage />} />
          <Route path="/MainWindow" element={<MainWindow />} />
        </Routes>
        <Topbtn />
      </RelativeContainer>
      <Footer />
    </>
  );
};

export default App;
