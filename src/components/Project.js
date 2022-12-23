import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";
import "../styles/Project.css";
import "../styles/techAssets.css";

function Project({
  title,
  subTitle,
  githubURL,
  websiteURL,
  img,
  imgAlt,
  imgTitle,
  text,
  techIcons,
}) {
  const githubIcon = <FontAwesomeIcon inverse icon={faGithub} style={{ marginTop: "5px" }}/>;
  const linkIcon = <FontAwesomeIcon inverse icon={faLink} transform="grow-15"/>;

  //creates transition effect for project to fly in from left
  const project = useRef();
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      // console.log('entry = ', entry);
    });
    observer.observe(project.current);
    // console.log('project = ', project, project.current);
  }, []);

  return (
    <>
      <Card
        className={` m-3 custom-card custom-background ${
          isVisible ? "show" : "hidden"
        } card`}
        ref={project}
      >
        <Card.Body className="text-center m-0 px-2 py-1">
          <Card.Title className="m-0">{title}</Card.Title>
        </Card.Body>
        {/* <hr></hr> */}

        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "cornflowerblue" }}
        >
          <img
            className="img-fluid custom-image embed-responsive-item"
            src={img}
            title={subTitle}
            alt={subTitle}
          />
        </div>

        <Card.Body>
          <Card.Subtitle>{subTitle}</Card.Subtitle>

          <Card.Text></Card.Text>

          <h5>Technologies:</h5>
          {techIcons?.map(({ icon, alt }, index) => (
            <img key={index} className="tech-icon" src={icon} alt={alt}></img>
          ))}

          <div className="d-flex mt-2">

            <Card.Link
              className="link-card"
              style={{ backgroundColor: "#27A744" }}
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              title="GitHub Link"
            >
              {githubIcon}
              GitHub
            </Card.Link>

            <Card.Link
              className="link-card"
              style={{ backgroundColor: "#16A3B8" }}
              href={websiteURL}
              target="_blank"
              rel="noreferrer"
              title="Website Link"
            >
              <div style={{ marginTop: "6px", marginBottom: "5px", paddingTop: "5px" }}>
              {linkIcon}
              </div>
              <span>Demo</span>
            </Card.Link>

          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Project;
