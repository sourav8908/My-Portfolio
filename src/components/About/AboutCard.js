import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sourav Mohanty </span>
            from <span className="purple"> Bhubaneswar,Odisha,  India.</span>
            <br />
            Currently pursuing my M.Tech at IIT Patna, where I’m honing advanced skills in backend development, data structures, and scalable system design.
            <br />
            I am a passionate programmer and a tech enthusiast. I love to learn
            new technologies and build projects on them. I am a quick learner
            and a good team player. I have a strong foundation in data
            structures and algorithms. I have a good understanding of
            object-oriented programming concepts. I have a good knowledge of
            web development and I have worked on various projects using
            technologies like Spring-Boot ,React, Node.js, and MySQL.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(Chess)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sourav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
