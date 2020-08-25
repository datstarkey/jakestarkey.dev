import { IProject } from "./IProject";

const personalWebsite: IProject = {
  title: "This Website",
  description:
    "The code used for this exact website, very simply built with React-Typescript and Sass for styling. The website is hosted internally by myself on a Ubuntu headless server",
  link: "https://jakestarkey.dev/",
  github: "https://github.com/datstarkey/jakestarkey.dev",
  technology: ["React", "Typescript", "Sass", "HTML5", "CSS3"],
};

const willSimpson: IProject = {
  title: "WSimpson - Personal website",
  description: "Website for a web designer built using VueJs and Typescript. This is hosted locally on my own internal ubuntu headless server",
  link: "https://wsimpson.co.uk/",
  github: "https://github.com/datstarkey/WillSimpson",
  technology: ["VueJS", "Typescript", "HTML5", "CSS3"],
};

const dataScope: IProject = {
  title: "Games List Task",
  description:
    "This is a fullstack deployment for as an exercise to show of a .net core ASP backend using JWT authentication to connect to a MySQL database. Contains Testing for both the frontend and backend",
  link: "https://datascope.jakestarkey.dev",
  github: "https://github.com/datstarkey/Datascope",
  technology: ["React-Typescript", ".Net Core ASP 3.1", "JWT", "MySQL"],
};

const winMQTT: IProject = {
  title: "WinMQTT",
  description:
    "A Simple MQTT client for windows. This was designed by myself for use in my home automation setup. The idea is allow a users windows PC to be controller via a MQTT server",
  link: "",
  github: "https://github.com/datstarkey/WinMQTT",
  technology: ["WinForms", "C#", "MQTT"],
};

const projects: IProject[] = [personalWebsite, willSimpson, dataScope, winMQTT];

export default projects;
