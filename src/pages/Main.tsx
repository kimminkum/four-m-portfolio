import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div data-aos="fade-up">Main Page</div>;
};

export default Main;
