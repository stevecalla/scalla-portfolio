import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";
import "../styles/Project.css";

import "../styles/techAssets.css"; //style={tech-icon} // class = .tech-icons
import bs from "../assets/tech-assets/bootstrap.png";
import css from "../assets/tech-assets/css3.png";

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
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkIcon = <FontAwesomeIcon icon={faLink} transform="grow-10" />;

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

  let test = [bs, css];

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
            <img key={index} 
            className="tech-icon" 
            src={icon} 
            alt={alt}></img>
          ))}
          

          <div className="d-flex m-2">

            <Card.Link
              className="link-card"
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              title="GitHub Link"
            >
              {githubIcon}
            </Card.Link>

            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                // border: "1px solid black",
                // borderRadius: "50%",
                height: "35px",
                width: "35px",
              }}
            >
              <Card.Link
                style={{
                  marginLeft: "8px",
                  textDecoration: "none",
                  color: "black",
                }}
                href={websiteURL}
                target="_blank"
                rel="noreferrer"
                title="Website Link"
              >
                {linkIcon}
              </Card.Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Project;
