import React from "react";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      title: "Node JS",
      list: [
        { name: "HTML5", tag: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { name: "CSS3", tag: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Javascript", tag: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Typescript", tag: "https://www.typescriptlang.org/" },
        { name: "React", tag: "https://reactjs.org/" },
        { name: "Angular", tag: "https://angular.io/" },
        { name: "VueJs", tag: "https://vuejs.org/" },
        { name: "Express", tag: "https://expressjs.com/" },
        { name: "Sass", tag: "https://sass-lang.com/" },
      ],
    },

    {
      title: ".Net",
      list: [
        { name: "C#", tag: "https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/" },
        { name: "Core 3.1", tag: "https://docs.microsoft.com/en-us/dotnet/core/" },
        { name: "ASP core 3.1", tag: "https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core" },
        { name: "WPF", tag: "https://docs.microsoft.com/en-us/dotnet/framework/wpf/introduction-to-wpf" },
        { name: "WinForms", tag: "https://docs.microsoft.com/en-us/dotnet/framework/winforms/windows-forms-overview" },
        { name: "MVC", tag: "https://dotnet.microsoft.com/apps/aspnet/mvc" },
        { name: "EF core", tag: "https://docs.microsoft.com/en-us/ef/core/" },
        { name: "Selenium C#", tag: "https://www.selenium.dev/" },
        { name: "NUnit", tag: "https://nunit.org/" },
        { name: "Xamarin", tag: "https://dotnet.microsoft.com/apps/xamarin" },
      ],
    },

    {
      title: "DevOps",
      list: [
        { name: "Git", tag: "https://git-scm.com/" },
        { name: "Nginx", tag: "https://www.nginx.com/" },
        { name: "Docker", tag: "https://www.docker.com/" },
        { name: "Jenkins", tag: "https://www.jenkins.io/" },
        { name: "Node-Red", tag: "https://nodered.org/" },
        { name: "Octopus-Deploy", tag: "https://octopus.com/" },
      ],
    },

    {
      title: "Databases",
      list: [
        { name: "PostgreSql", tag: "https://www.postgresql.org/" },
        { name: "MySql", tag: "https://www.mysql.com/" },
        { name: "Mongodb", tag: "https://www.mongodb.com/" },
      ],
    },
  ];

  return (
    <div>
      <h1>Skills</h1>
      <div className="skills-content">
        {skills.map((element, index) => (
          <div key={index}>
            <dl className="skills-list">
              <dt>
                <h3>{element.title}</h3>
                {element.list.map((subelement, index) => (
                  <dd key={index}>
                    <a href={subelement.tag} target="_blank" rel="noopener noreferrer">
                      {subelement.name}
                    </a>
                  </dd>
                ))}
              </dt>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
