import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";
import "../styles/Project.css";

function Project({
  title,
  subTitle,
  githubURL,
  websiteURL,
  img,
  imgAlt,
  imgTitle,
  text,
}) {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkIcon = <FontAwesomeIcon icon={faLink} transform="grow-10" />;

  //creates transition effect for project to fly in from left
  const project = useRef();
  const [ isVisible, setIsVisible ] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      // console.log('entry = ', entry);
    })
    observer.observe(project.current);
    // console.log('project = ', project, project.current);
  }, [])


  return (
    <>
      <Card 
        className={` m-3 custom-card custom-background ${isVisible ? "show" : "hidden"} card`}
        ref={project}
      >

        <div className="d-flex justify-content-center" style={{ backgroundColor: "cornflowerblue" }}>
          <img
            className="img-fluid custom-image embed-responsive-item"
            src={img}
            title={subTitle}
            alt={subTitle}
          />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Subtitle>{subTitle}</Card.Subtitle>

          <Card.Text></Card.Text>

          <div className="d-flex m-2">
            <Card.Link
              style={{ color: "black" }}
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
