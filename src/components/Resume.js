import React from "react";
import Card from "react-bootstrap/Card";
// import cv from "../assets/images/steve_calla_resume_121422_dev.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Resume.css";

function Resume() {
  const file = (
    <FontAwesomeIcon icon={faFileLines} inverse title="Download Resume" />
  );
  const github = <FontAwesomeIcon icon={faGithub} inverse title="GitHub" />;
  const linkedin = (
    <FontAwesomeIcon icon={faLinkedin} inverse title="LinkedIn" />
  );

  return (
    <main className="jumbotron p-3 custom-about">
      <h1 className="display-4 custom-text">Resume</h1>

      <div className="d-flex justify-content-around align-items-center p-2 custom-footer">
        <div className="d-flex flex-column align-items-center">
          <a href="https://drive.google.com/file/d/1DAr1CbP3x3Yb7ehIgtxIV7a-SVHVI7mh/view" target="_blank" rel="noreferrer">
            <p className="m-0">{file}</p>
          </a>
          <p className="m-0 text-light custom-icon-text">RESUME</p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <a
            href="https://github.com/stevecalla/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="m-0">{github}</p>
          </a>
          <p className="m-0 text-light custom-icon-text">GITHUB</p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <a
            href="https://www.linkedin.com/in/steve-calla/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="m-0">{linkedin}</p>
          </a>
          <p className="m-0 text-light custom-icon-text">LINKEDIN</p>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-around custom-resume-container">
        <Card className="m-3 custom-resume-card">
          <Card.Body className="">
            <Card.Title>Front-End</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Proficiencies
            </Card.Subtitle>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
              <li>jQuery</li>
              <li>Progressive Web App (PWA)</li>
            </ul>
          </Card.Body>
        </Card>

        <Card className="m-3 custom-resume-card">
          <Card.Body className="">
            <Card.Title>Back-End</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Proficiencies
            </Card.Subtitle>
            <ul>
              <li>API</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequalize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
              <li>MERN</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}

export default Resume;
