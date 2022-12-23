import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import shareIcon from "../assets/icons/network-color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  const github = <FontAwesomeIcon 
                  icon={faGithub} 
                  inverse title="GitHub"
                />;

  const linkedin = <FontAwesomeIcon 
                      icon={faLinkedin} 
                      inverse title="LinkedIn" 
                    />;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const webShareAPI = () => {
    if (navigator.share) {
      console.log("true");
      navigator
        .share({
          text: `I'd Like to Introduce Steve Calla. I believe he would immediately add significant value due to his unique background in marketing, consumer insights, business intelligence / analytics, modeling/forecasting.

          Resume Link: https://drive.google.com/file/d/19EVtUt65r8nmAcmIowTwtmN3TE1vi74-/view?usp=share_link
          
          LinkedIn: https://www.linkedin.com/in/steve-calla/

          Portfolio: https://stevecalla.github.io/scalla-portfolio/`,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Launch modal to send email if navigator share feature doesn't exist
      handleShow();
    }
  };

  return (
    <>
      <footer className="d-flex justify-content-center p-2 custom-footer">
        <a
          href="https://github.com/stevecalla/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="p-2">{github}</p>
        </a>
        <a
          href="https://www.linkedin.com/in/steve-calla/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="p-2">{linkedin}</p>
        </a>

        <div className="share-container">
          <img
            className="share-icon"
            src={shareIcon}
            onClick={() => webShareAPI()}
            title="Share"
            alt="Share my profile"
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="e">Share Steve's Information</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
            <Button
              className="btn btn-secondary"
              variant="secondary"
              title="Email share"
              onClick={() =>
                window.open(
                  `mailto:example@example.com?subject=I'd Like to Introduce Steve Calla&body=Hello - I believe Steve would immediately add significant value due to his unique background in marketing, consumer insights, business intelligence / analytics, modeling/forecasting.%0D%0A%0D%0AResume Link: https://drive.google.com/file/d/19EVtUt65r8nmAcmIowTwtmN3TE1vi74-/view?usp=share_link%0D%0A%0D%0ALinkedIn: https://www.linkedin.com/in/steve-calla/%0D%0A%0D%0APortfolio: https://stevecalla.github.io/scalla-portfolio/`
                )
              }
            >
              Send Steve's Info via Email
            </Button>
          </Modal.Body>
        </Modal>
      </footer>
    </>
  );
}

export default Footer;
