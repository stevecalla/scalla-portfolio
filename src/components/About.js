import React from "react";
import callaPhoto from "../assets/images/calla-photo.png";
import "../styles/About.css";

function About() {
  return (
    <main className="jumbotron p-3 overflow-auto custom-about">
      <h1 className="text-center display-4 custom-text">About me</h1>
      <hr></hr>
      <div className="photo-container my-4 custom-text">
        <img alt="Steve Calla" src={callaPhoto} />
      </div>
      <hr></hr>
      <p className="lead custom-text">
        What can I say? I live in Boulder, Colorado. I studied
        full-stack coding at Denver Unversity graduating in December
        2022 with 100% or better on every individual and group project. I have an extensive career in marketing, and have held individual contributor and leadership roles at Vail Resorts, Hertz Rent-a-Car and Silvercar-by-Audi.
      </p>
      <p className="lead custom-text">
        I am super curious to learn the coding trade and incorporate that into
        my marketing career in some fashion. I'm particularly fascinated by how
        much fun it is to solve coding puzzles (across the universe of HTML, CSS
        and Javascript) and to make the user experience pleasing and
        accessible.
      </p>
    </main>
  );
}

export default About;
