import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Dorian Senecot </span>
            de <span className="purple"> Lyon, France.</span>
            <br />
            Je suis étudiant en 3ème année à Epitech Lyon et passionné par l'intelligence artificielle.
            <br />
            Je me spécialise en gestion de projets et en développement full stack.
            <br />
            <br />
            En dehors du code, j'aime:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Voyages
            </li>
            <li className="about-activity">
              <ImPointRight /> Activités culinaires
            </li>
            <li className="about-activity">
              <ImPointRight /> Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Musculation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "S'efforcer de construire des solutions qui changent le monde!"{" "}
          </p>
          <footer className="blockquote-footer">Dorian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
