import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-header-row">
          <Col lg={7} md={12} className="about-description-column">
            <h1 className="about-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col lg={5} md={12} className="about-image-column">
            <img src={laptopImg} alt="about" className="img-fluid about-image" />
          </Col>
        </Row>
        
        <div className="section-divider"></div>
        
        <section className="skills-section">
          <h1 className="project-heading">
            Professional <span>Skillset</span>
          </h1>
          <p className="skills-description">Technologies I've worked with in my projects</p>
          <Techstack />
        </section>
        
        <div className="section-divider"></div>

        <section className="tools-section">
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <p className="skills-description">Development tools I'm proficient with</p>
          <Toolstack />
        </section>
        
        <div className="section-divider"></div>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
