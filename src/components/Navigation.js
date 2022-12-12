import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import menu from "../assets/images/menu.svg";
import "../styles/Navigation.css";

function Navigation({ currentPage, handlePageChange }) {
  const [open, setOpen] = useState(false);

  const imageClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [currentPage]);

  return (
    <React.Fragment>
      <nav className="d-flex align-items-center">
        <ul className="nav menu-desktop">
          <li className="nav-item bg-light mx-1 rounded">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active custom-nav-text"
                  : "nav-link custom-nav-text"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item bg-light mx-1 rounded">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active custom-nav-text"
                  : "nav-link custom-nav-text"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item bg-light mx-1 rounded">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active custom-nav-text"
                  : "nav-link custom-nav-text"
              }
            >
              About me
            </a>
          </li>
          <li className="nav-item bg-light mx-1 rounded">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active custom-nav-text"
                  : "nav-link custom-nav-text"
              }
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile responsive */}
      <nav className="nav-mobile">
        <div className="menu-mobile">
          <img
            src={menu}
            onClick={() => imageClick()}
            alt="Menu for portfolio"
          />
        </div>
        <Collapse in={open}>
          <div className="text-right position-fixed">
            <ul className="nav menu-block">
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  className={
                    currentPage === "Portfolio"
                      ? "nav-link active text-light custom-nav-text"
                      : "nav-link text-light custom-nav-text"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume"
                      ? "nav-link active text-light custom-nav-text"
                      : "nav-link text-light custom-nav-text"
                  }
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About"
                      ? "nav-link active text-light custom-nav-text"
                      : "nav-link text-light custom-nav-text"
                  }
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact"
                      ? "nav-link active text-light custom-nav-text"
                      : "nav-link text-light custom-nav-text"
                  }
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </Collapse>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
