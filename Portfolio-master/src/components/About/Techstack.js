import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiMysql,
  SiArduino,
  SiRaspberrypi,
  SiTensorflow,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Frontend */}
      <Col xs={12}>
        <h5 className="tech-heading">Frontend</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p className="tech-label">TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="tech-label">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="tech-label">CSS3</p>
      </Col>
      
      {/* Backend */}
      <Col xs={12}>
        <h5 className="tech-heading">Backend</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-label">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p className="tech-label">Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-label">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-label">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-label">MySQL</p>
      </Col>
      
      {/* IoT & AI */}
      <Col xs={12}>
        <h5 className="tech-heading">IoT & AI</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <p className="tech-label">Arduino</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
        <p className="tech-label">Raspberry Pi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p className="tech-label">TensorFlow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-label">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
