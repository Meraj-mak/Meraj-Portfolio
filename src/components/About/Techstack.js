import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp /> {/* C# icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* TypeScript icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /> {/* Oracle icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* AWS icon */}
      </Col>
      
    
    </Row>
  );
}

export default Techstack;
