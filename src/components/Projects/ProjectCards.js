import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Conditionally render the Card.Img only if imgPath is provided */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        {/* Title with custom color and margin for spacing */}
        <Card.Title style={{ marginBottom: "20px", color: "#c778dd" }}>
          {props.title}
        </Card.Title>

        {/* Subtitle with custom color and margin for spacing */}
        {props.subtitle && (
          <Card.Title style={{ marginBottom: "20px", color: "white" }}>
            {props.subtitle}
          </Card.Title>
        )}

        {/* Description with extra margin for space below */}
        <Card.Text style={{ textAlign: "justify", marginBottom: "20px" }}>
          {props.description}
        </Card.Text>

        {/* Render the Demo button if it's not a Blog and demoLink exists */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;{"About"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
