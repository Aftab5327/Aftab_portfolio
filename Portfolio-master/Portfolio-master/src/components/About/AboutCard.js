import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text">
            Hi Everyone, I am <span className="purple">Aftab Dhalait </span>
            from <span className="purple"> India.</span>
            <br />
            I am a Full Stack Developer with expertise in MERN stack, IoT, and AI applications.
            <br />
            I have completed BE in Electronics & Telecommunication with Honors in Data Science.
            <br />
            I also have a PG Diploma in Advanced Computing from CDAC.
          </p>
          
          <p className="about-text about-activities-heading">
            Apart from coding, some other activities that I love to do!
          </p>
          
          <ul className="about-activity-list">
            <li className="about-activity">
              <ImPointRight className="about-activity-icon" /> 
              <span>Integrating Hardware and Software</span>
            </li>
            <li className="about-activity">
              <ImPointRight className="about-activity-icon" /> 
              <span>Exploring New Technologies</span>
            </li>
            <li className="about-activity">
              <ImPointRight className="about-activity-icon" /> 
              <span>Problem Solving</span>
            </li>
            <li className="about-activity">
              <ImPointRight className="about-activity-icon" /> 
              <span>Designing Frontend Interfaces</span>
            </li>
            <li className="about-activity">
              <ImPointRight className="about-activity-icon" /> 
              <span>Developing Full-Stack Applications</span>
            </li>
          </ul>

          <p className="about-quote">
            "Building technology that makes a meaningful impact!"
          </p>
          <footer className="blockquote-footer about-footer">Aftab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
