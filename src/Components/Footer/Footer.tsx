import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="icon-box">
        <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noopener noreferrer">
          <i className="icon icon-hover fab fa-github footer-animate  delay-1" />
        </a>
        <a href={process.env.REACT_APP_EMAIL} target="_blank" rel="noopener noreferrer">
          <i className="icon icon-hover fas fa-at footer-animate  delay-2" />
        </a>
        <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer">
          <i className="icon icon-hover fab fa-facebook footer-animate  delay-3"></i>
        </a>
      </div>
      <i className="icon far fa-copyright copyright footer-animate  delay-4"> Jake Starkey 2020</i>
    </div>
  );
};

export default Footer;
