import React from "react";
import Project from "./Project";
import projects from "../projectData";
import "../styles/Portfolio.css";

function Portfolio() {

  let projectCards = projects.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      subTitle={project.subTitle}
      githubURL={project.githubLink}
      websiteURL={project.websiteLink}
      img={project.imgSrc}
      imgAlt={project.imgAlt}
      imgTitle={project.imgTitle}
      text={project.cardText}
    />
  ));

  return (
    <main className="jumbotron p-3 custom-about">
      <h1 className="text-center text-center display-4 mb-0 custom-text">Porfolio</h1>

      <hr></hr>
      
      <div
        className="
        d-flex 
        flex-wrap 
        justify-content-around 
        overflow-auto 
        custom-project-container"
      >
        {projectCards}
      </div>
    </main>
  );
}

export default Portfolio;
