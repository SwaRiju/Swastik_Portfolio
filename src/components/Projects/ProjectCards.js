import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body className="project-card-body">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <div className="project-card-contents">
          <Card.Title><strong className="purple">{props.title}</strong></Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
            {props.description}
          </Card.Text>
        </div>

        <div className="project-card-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
