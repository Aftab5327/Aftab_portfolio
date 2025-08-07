import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png"; // Weather Monitoring
import emotion from "../../Assets/Projects/emotion.png"; // Smart Cap
import editor from "../../Assets/Projects/codeEditor.png"; // Multi-User Drawing Tool
import chatify from "../../Assets/Projects/chatify.png"; // E-Commerce Website
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Multi-User Drawing Tool"
              description="A collaborative drawing application that allows multiple users to draw on a shared canvas in real-time. Built with React.js for the frontend, Node.js and Socket.io for real-time communication, and MongoDB for storing drawings."
              ghLink="https://github.com/Aftab5327/drawing-tool"
              demoLink="https://multi-user-drawing.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Website"
              description="A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Developed using the MERN stack (MongoDB, Express, React, Node.js) with Redux for state management."
              ghLink="https://github.com/Aftab5327/ecommerce-website"
              demoLink="https://aftab-ecommerce.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Smart Cap for Visually Impaired using CNN"
              description="An assistive technology device that uses computer vision and CNN models to detect obstacles and provide audio feedback to visually impaired users. Built with Python, TensorFlow, and Arduino for hardware integration."
              ghLink="https://github.com/Aftab5327/smart-cap-cnn"
              // No demo link for hardware project
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Real Time Cloud Based Weather Monitoring in IoT"
              description="An IoT system that collects weather data from multiple sensors, processes it in real-time, and displays it on a web dashboard. Implemented using Arduino, ESP8266, MQTT protocol, Node.js, and React."
              ghLink="https://github.com/Aftab5327/weather-monitoring-iot"
              demoLink="https://weather-iot-dashboard.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
