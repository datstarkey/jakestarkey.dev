import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="icon-box">
        <i className="icon icon-hover fab fa-github" />
        <i className="icon icon-hover fas fa-at " />
        <i className="icon icon-hover fab fa-facebook"></i>
      </div>
      <i className="icon far fa-copyright copyright"> Jake Starkey 2020</i>
    </div>
  );
};

export default Footer;
