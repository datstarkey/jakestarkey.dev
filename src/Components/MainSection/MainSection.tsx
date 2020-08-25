import React, { useState, useEffect } from "react";
import "./MainSection.scss";
import { useLocation } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

interface pageMap {
  [key: string]: JSX.Element;
}

const MainSection = () => {
  let location = useLocation();
  const [currentPage, setCurrentPage] = useState("/about");
  const pages: pageMap = { "/about": <About />, "/projects": <Projects />, "/contact": <Contact />, "/skills": <Skills /> };

  useEffect(() => {
    if (currentPage !== location.pathname && location.pathname !== "/") {
      document.getElementById("main")?.classList.replace("clip-in", "clip-out");
      setTimeout(() => {
        setCurrentPage(location.pathname);
        document.getElementById("main")?.classList.replace("clip-out", "clip-in");
      }, 1900);
    }
  }, [location, currentPage]);

  return (
    <div id="main" className="page-container clip-in">
      <div className="content">{pages[currentPage]}</div>
    </div>
  );
};

export default MainSection;
