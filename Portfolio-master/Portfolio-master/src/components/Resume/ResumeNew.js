import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Aftab_Dhalait_Resume.pdf"; // Your resume file
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h5>software Developer</h5>
              <h5 className="resume-title">SAS Automation Pvt Ltd</h5>
              <p><em>Dec 2023 - Present</em></p>
              <ul>
                <li>Developed and maintained web applications using React.js, Node.js, and MongoDB</li>
                <li>Implemented responsive UI designs and RESTful APIs</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Integrated third-party services and APIs for enhanced functionality</li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>Web Developer</h5>
              <h5 className="resume-title">Zidio development</h5>
              <p><em>Jun 2023 - Nov 2023</em></p>
              <ul>
                <li>Designed and implemented IoT solutions for industrial automation</li>
                <li>Developed firmware for Arduino and ESP8266 microcontrollers</li>
                <li>Created web dashboards for real-time monitoring of sensor data</li>
                <li>Optimized data collection and transmission protocols for efficiency</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h5>BE in Electronics & Telecommunication with Honors in Data Science</h5>
              <p><em>2018 - 2022</em></p>
              <p>Completed my bachelor's degree with a focus on electronics, telecommunications, and Honors data science applications.</p>
            </div>
            <div className="resume-item">
              <h5>PG Diploma in Advanced Computing</h5>
              <h5 className="resume-title">CDAC</h5>
              <p><em>2022 - 2023</em></p>
              <p>Specialized in advanced computing concepts including software development, database management, and web technologies.</p>
            </div>
            
            <h3 className="resume-title">Skills</h3>
            <div className="resume-item">
              <h5>Frontend</h5>
              <ul className="resume-skills">
                <li>React.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5/CSS3</li>
                <li>Redux</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>Backend</h5>
              <ul className="resume-skills">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>Tools & Cloud</h5>
              <ul className="resume-skills">
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Arduino/Raspberry Pi</li>
                <li>TensorFlow</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
