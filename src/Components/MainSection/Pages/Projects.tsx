import React from "react";
import "./Projects.scss";
import Slider from "react-slick";
import "react-slick/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectList from "../../../Assets/Projects/Projects";

const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div>
      <h1>Projects</h1>

      <div className="slider-container">
        <Slider {...settings}>
          {ProjectList.map((project, index) => (
            <div className="project" key={index}>
              <h2 className="project-title">{project.title}</h2>
              <p>{project.description}</p>

              {project.link !== "" && (
                <p>
                  Link :{" "}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link}
                  </a>
                </p>
              )}

              <p>
                GitHub :{" "}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.github}
                </a>
              </p>

              <dl>
                <dt>Technology Used</dt>
                {project.technology.map((technology, index) => (
                  <dd key={index}>{technology}</dd>
                ))}
              </dl>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
