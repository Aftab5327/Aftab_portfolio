import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aftab Dhalait </span>
            from <span className="purple"> India.</span>
            <br />
            I am a Full Stack Developer with expertise in MERN stack, IoT, and AI applications.
            <br />
            I have completed BE in Electronics & Telecommunication with Honors in Data Science.
            <br />
            I also have a PG Diploma in Advanced Computing from CDAC.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Integrating Hardware and Software
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
             <li className="about-activity">
              <ImPointRight /> Designing Frontend Interfaces
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Full-Stack Applications
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology that makes a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Aftab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
