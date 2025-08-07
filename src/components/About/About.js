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
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        
        <div className="section-divider"></div>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        
        <div className="section-divider"></div>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
