import React from "react";
import callaPhoto from "../assets/resume/calla-photo.png";
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
        What can I say? I live in Boulder, Colorado. I studied full-stack coding at Denver Unversity graduating in December 2022 with 100% or better on every individual and group project. I have an extensive career in marketing, and have held individual contributor and leadership roles at Vail Resorts, Hertz Rent-a-Car and Silvercar-by-Audi.
      </p>
      <p className="lead custom-text">
        I enjoy using coding to solve practical business challenges in marketing and beyond. For example, I recently created an email/text message server using SendGrid and Twilio, built the initial phase of an app to help a commercial cleaning business manage its job schedule, I'm currently working on an app for a furniture installation business and I recently built my first full-stack Java app.
      </p>
      <p className="lead custom-text">
        I look forward to expanding my front-end and full-stack still set as well as finding more ways to combine my new coding skills with my experience in marketing.
      </p>
    </main>
  );
}

export default About;
