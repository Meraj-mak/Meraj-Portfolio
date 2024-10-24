import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// //import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={chatify}
              isBlog={false}
              title="TPS World-Wide"
              subtitle="IRIS Payment Gateway"
              description="IRIS Payment Gateway by TPS offers merchants a secure e-commerce payment solution, supporting various payment methods such as cards, mobile wallets, internet banking, and OTC payments. It features role-based portals for banks, merchants, and customers, enabling self-service and efficient operations while ensuring PCI-DSS compliance."
              demoLink="https://www.tpsworldwide.com/payment/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title="TPS World-Wide"
               subtitle="IRIS Bill Payment"
              description="Businesses require efficient solutions to manage receivables, as traditional banks often incur high costs and delays in processing collections through physical infrastructure. Financial institutions need to provide a unified bill aggregation platform that supports seamless payment processing and alternative delivery for bill collections, allowing transactions to be accepted and processed anytime, anywhere."
              demoLink="https://www.tpsworldwide.com/iris-bill-payments/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="TPS World-Wide"
               subtitle="IRIS Digital Banking"
              description="IRIS Digital Banking provides a seamless, secure platform for banks and third-party payment providers, enabling customers to manage multiple accounts and perform financial and non-financial transactions anytime, anywhere, through a single interface.."
              demoLink="https://www.tpsworldwide.com/prism/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             //imgPath={leaf}
              isBlog={false}
              title="DATA ENGINEERING "
              subtitle="YouTube Data Analysis"
              description="Analyzed YouTube data using data engineering principles, focusing on data flow management and big data handling. And Cleaning the Data."
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={emotion}
              isBlog={false}
              title="ARTIFICAL INTELLIGENCE"
              subtitle="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
