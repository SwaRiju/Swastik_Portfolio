import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              imgPath={chatify}
              isBlog={false}
              title="ChitChat"
              description="A scalable real-time chat application built with Spring Boot, React, and WebSockets, featuring a microservices architecture for independent scaling and high concurrency. It includes JWT-based authentication for secure access and a reliable, low-latency messaging pipeline to ensure efficient real-time communication across users."
              ghLink="https://github.com/SwaRiju/ChatApplication"
              demoLink="https://chit-chatting.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Communication Professional Portfolio"
              description="A full-stack professional portfolio website built with Spring Boot, React, and SQL, featuring dynamic Articles, Reviews, and Interviews sections with advanced search and filtering."
              ghLink="https://github.com/SwaRiju/Communication_Professional_Portfolio"
              demoLink="https://shreyamukherjeeportfolio.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
