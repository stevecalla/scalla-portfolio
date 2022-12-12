import React from "react";
import callaPhoto from "../assets/images/calla-photo.png";
import "../styles/About.css";

function About() {
  return (
    <main className="jumbotron p-3 overflow-auto custom-about">
      <h1 className="display-4 custom-text">About me</h1>
      <div className="photo-container my-4 custom-text">
        <img alt="Steve Calla" src={callaPhoto} />
      </div>
      <p className="lead custom-text">
        What can I say? I live in Boulder, Colorado. I'm currently studying
        full-stack coding at Denver Unversity and expect to graduate in December
        2022. I have an extensive marketing background, and have managed
        marketing analytics as well as e-commerce in a variety of industries.
      </p>
      <p className="lead custom-text">
        I am super curious to learn the coding trade and incorporate that into
        my marketing career in some fashion. I'm particularly fascinated by how
        much fun it is to solve coding puzzles (across the universe of HTML, CSS
        and Javascript) and to make the user experience effective and
        accessible.
      </p>
    </main>
  );
}

export default About;
