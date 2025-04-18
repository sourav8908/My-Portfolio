import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle"; // Assuming this is an animation/particle component
//import "./Experience.css"; // Ensure this file exists for styles

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Particle />
      <Container>
        <h1 className="section-heading">
          My <span className="purple">Work Experience</span>
        </h1>
        <Row>
          {[{
            title: "Research & Development Intern",
            subtitle: "ISRO Ahmedabad | Oct 2023 – Dec 2023",
            bullets: [
              "Migrated from Arduino to Raspberry Pi using Python on Linux, boosting mission efficiency by 30%.",
              "Collaborated with senior scientists to improve satellite data analysis.",
              "Developed real-time data processing algorithms for improved performance."
            ]
          }, 
          {
            title: "Front-End Developer Intern",
            subtitle: "Tech-Octa-Net Services | Aug 2023 – Oct 2023",
            bullets: [
              "Improved site speed by 10% using HTML, CSS, and JavaScript optimizations.",
              "Built backend with Java (JDBC & Servlets).",
              "Enhanced frontend-backend data communication."
            ]
          }, 
          {
            title: "Teaching Assistant Intern",
            subtitle: "Coding Ninjas | Nov 2022 – Jan 2023",
            bullets: [
              "Guided 60+ students in Java and DSA fundamentals.",
              "Resolved 300+ doubts, maintaining a 4.1 rating.",
              "Helped students debug and improve assignments."
            ]
          }]
            .map((exp, idx) => (
              <Col md={4} key={idx} className="experience-card">
                <Card className="experience-card-view">
                  <Card.Body>
                    <Card.Title>{exp.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {exp.subtitle}
                    </Card.Subtitle>
                    <Card.Text>
                      <ul>
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
