import React from "react";
import About from "./pages/About";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Topbtn from "./components/Topbtn";
import Main from "./pages/Main";
import { GlobalProvider, useGlobalContext } from "./query/GlobalContext";
import styled from "styled-components";
import SelectBox from "./components/SelectBox";
import { Routes, Route } from "react-router-dom";

const RelativeContainer = styled.div`
  display: block;
  position: relative;
  height: auto;
  width: 100vw;
  overflow-x: hidden;
  padding-bottom: 60px;
`;

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <InnerApp />
    </GlobalProvider>
  );
};

const InnerApp: React.FC = () => {
  const { options, setOptions } = useGlobalContext(); // useGlobalContext 훅을 사용하여 options와 setOptions를 가져옵니다.
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <>
      <Header />
      <RelativeContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SelectBox
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
        <Topbtn />
      </RelativeContainer>
      <Footer />
    </>
  );
};

export default App;
