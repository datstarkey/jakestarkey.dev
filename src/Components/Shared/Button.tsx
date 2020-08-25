import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.scss";

type props = {
  url: string;
  content: string;
};

const Button = ({ url, content }: props) => {
  return (
    <button className="button">
      <NavLink to={url}>{content}</NavLink>
    </button>
  );
};

export default Button;
