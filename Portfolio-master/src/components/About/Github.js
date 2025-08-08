import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="github-stats-container">
      <h1 className="project-heading github-heading">
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="Aftab5327"
          blockSize={12}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          responsive={true}
        />
      </div>
    </Row>
  );
}

export default Github;
