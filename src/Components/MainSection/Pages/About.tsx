import React from "react";
import "./about.scss";
import { NavLink } from "react-router-dom";
import Button from "../../Shared/Button";

const About = () => {
  return (
    <div className="about-content">
      <div className="about">
        <div className="about-me">
          <div className="about-text">
            <h1>Hi, I'm Jake</h1>

            <p>
              A full stack web developer based in the <NavLink to="/contact">North West</NavLink>. <br /> <br />
              Starting out as a QA tester I was exposed to the Agile software cycle early in my career.
              <br /> I have a keen interest in the technical side of software development - this inspired me to broaden my skillset and learn the
              relevant technologies through self teaching.
              <br /> <br />
              This developed into a wide understanding of web and app development, which I further expanded into deployment and DevOps.
              <br />
              <br />
              I'm always on the lookout to expand and progress my knowledge or help you with your project.
            </p>

            <p>
              You can check out my <Button url="/projects" content="Projects" /> /
              <Button url="/skills" content="Skills" /> <br />
              or <Button url="/contact" content="Contact me here." />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
