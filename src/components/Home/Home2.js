import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into programming began with curiosity and quickly
              evolved into a deep passion for software development.
              <br />
              <br />I am proficient in core technologies such as
              <i>
                <b className="purple"> Java, Spring Boot, and MySQL. </b>
              </i>
              <br />
              <br />
              My primary areas of interest include developing innovative&nbsp;
              <i>
                <b className="purple">
                  web-based distributed applications and products
                </b>{" "}
                and exploring the capabilities of{" "}
                <b className="purple">cloud platforms like AWS.</b>
              </i>
              <br />
              <br />
              I am particularly passionate about designing systems that are
              scalable, maintainable, and performance-oriented. I take pride in
              writing clean, efficient, and testable code.
              <br />
              
              <br />
              Whenever possible, I channel my enthusiasm into building scalable
              solutions using{" "}
              <b className="purple">Java-based distributed systems</b> and
              <i>
                <b className="purple"> modern frameworks and libraries</b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> Spring Boot and React.js</b>
              </i>
              <br />
              <br />I believe in continuous learning, collaboration, and
              leveraging technology to create impactful solutions that solve
              real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sourav8908/Mr.sourav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sourav89/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
