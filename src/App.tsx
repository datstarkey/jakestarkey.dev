import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="background">
      <div className="nav color-transition">
        <Navbar />
      </div>

      <div className="main-content">
        <MainSection />
      </div>

      <div className="footer color-transition">
        <Footer />
      </div>
    </div>
  );
}

export default App;
