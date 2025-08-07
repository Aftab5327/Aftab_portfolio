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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-label">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <p className="tech-label">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-label">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-label">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p className="tech-label">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
        <p className="tech-label">Arduino IDE</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
