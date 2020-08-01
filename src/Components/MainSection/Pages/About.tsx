import React from "react";
import "./about.scss";
import { NavLink } from "react-router-dom";

/* <div className="skills">
<div className="skills-content">
  <h1>Here are some of my skills</h1>

  <dl className="skills-list">
    <dt>
      Web Development
      <dd>HTML5</dd>
      <dd>CSS3</dd>
      <dd>Javascript</dd>
    </dt>

    <dt>
      NodeJs
      <dd>Typescript</dd>
      <dd>React</dd>
      <dd>Anuglar</dd>
      <dd>VueJS</dd>
      <dd>Express</dd>
      <dd>Sass</dd>
    </dt>

    <dt>
      .Net
      <dd>Core 3.1</dd>
      <dd>ASP core 3.1</dd>
      <dd>WPF & Winforms</dd>
      <dd>MVC</dd>
      <dd>EF core</dd>
      <dd>Selenium & Nunit</dd>
    </dt>

    <dt>
      Databases
      <dd>Postresqel</dd>
      <dd>Mysql</dd>
      <dd>Mongodb</dd>
    </dt>

    <dt>
      DevOps
      <dd>Git</dd>
      <dd>Nginx</dd>
      <dd>Doocker</dd>
      <dd>Jenkins</dd>
      <dd>Node-Red</dd>
      <dd>Octopus-Deoploy</dd>
    </dt>
  </dl>
</div>
</div> */

const About = () => {
  return (
    <div className="about-content">
      <div className="about">
        <div className="about-me">
          <div className="about-text">
            <h1>Hi, I am Jake</h1>

            <p>
              A full stack web developer based in <NavLink to="/contact">Chester</NavLink>. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <p>
              You can check out my <NavLink to="/projects">projects here</NavLink> <br />
              or <NavLink to="/contact">contact me here.</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
