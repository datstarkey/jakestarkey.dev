import React, { useState, useEffect } from "react";
import "./MainSection.scss";
import { useLocation } from "react-router-dom";
import About from "./Pages/About";

interface pageMap {
  [key: string]: JSX.Element;
}

const MainSection = () => {
  let location = useLocation();
  const [currentPage, setCurrentPage] = useState("/about");
  const pages: pageMap = { "/about": <About />, "/projects": <h1>Projects</h1>, "/contact": <h1>Contact</h1>, "/skills": <h1>Skills</h1> };

  useEffect(() => {
    if (currentPage !== location.pathname && location.pathname !== "/") {
      document.getElementById("main")?.classList.replace("clip-in", "clip-out");
      setTimeout(() => {
        setCurrentPage(location.pathname);
        document.getElementById("main")?.classList.replace("clip-out", "clip-in");
      }, 2000);
    }
  }, [location, currentPage]);

  return (
    <div id="main" className="page-container clip-in">
      <div className="content">{pages[currentPage]}</div>
    </div>
  );
};

export default MainSection;
