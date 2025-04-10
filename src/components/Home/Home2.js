src/components/Home/Home2.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis passionné par la programmation et j'ai déjà acquis quelques compétences, je pense... 🤷‍♂️
              <br />
              <br />Je maîtrise des langages comme
              <i>
                <b className="purple"> C/C++ et Python </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont le développement de &nbsp;
              <i>
                <b className="purple">Technologies et Applications Web </b> ainsi que
                les domaines liés à{" "}
                <b className="purple">
                  l'Intelligence Artificielle
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j'applique ma passion pour le développement avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  les Frameworks et Bibliothèques Javascript modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js</b>
              </i>
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
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/doriansenecot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dorian-senecot-a921bb26a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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