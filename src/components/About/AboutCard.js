import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Swastik Mukherjee</span>{" "}
            from <span className="purple">Kolkata, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">TCS</span>.
            <br />I am currently pursuing MCA{" "}
            <span className="purple">(Master of Computer Application)</span> from{" "}
            <span className="purple">Chandigarh University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football 👟⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In the fast lane of innovation, we don't just build the future—we race to rewrite it before the ink even dries on the screen."{" "}
          </p>
          <footer className="blockquote-footer">Swastik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
