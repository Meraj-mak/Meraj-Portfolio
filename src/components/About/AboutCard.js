import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meraj Ahmed Khan </span>
            from <span className="purple"> Berlin, Germany.</span>
            <br />
            I am currently doing Master in Artificial intelligence from Brandenburg University of Technology Cottbus-Senftenberg. Completed Bachelor in Computer Science From University of Karachi, Pakistan
            <br />
            <br />
            I have gained approximately 2 years of experience as a Software Engineer in TPS-World-Wide. On following.
            <br />
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /> Backend-API Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Front-End Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Databases
            </li>
          </ul>
          <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteer Work or Community Service
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
