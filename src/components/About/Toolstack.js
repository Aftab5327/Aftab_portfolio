import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { FaMicrochip } from "react-icons/fa";

function Toolstack() {
  return (
    <Row className="tools-stack-container">
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
        <div className="tech-icons">
          <SiVisualstudiocode />
          <p className="tech-label">VS Code</p>
        </div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
        <div className="tech-icons">
          <DiGithubBadge />
          <p className="tech-label">GitHub</p>
        </div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
        <div className="tech-icons">
          <SiPostman />
          <p className="tech-label">Postman</p>
        </div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
        <div className="tech-icons">
          <SiDocker />
          <p className="tech-label">Docker</p>
        </div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
        <div className="tech-icons">
          <SiAmazonaws />
          <p className="tech-label">AWS</p>
        </div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons-wrapper">
        <div className="tech-icons">
          <FaMicrochip />
          <p className="tech-label">Arduino IDE</p>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
