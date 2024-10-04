import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Justice from "./img/IMG_0359.jpg";
import Resume from "./documents/Justice_Vidal_Resume.pdf";

const PDFViewer = () => {
  return (
    <div>
      <iframe src={Resume} width="100%" height="500px" />
    </div>
  );
};

function pascalToSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .slice(1);
}

export default function Home() {
  const projectCategories = [
    "Machine Learning",
    "Software Development",
    "Embedded Systems",
    "Electrical Engineering",
  ];
  return (
    <Container id="home-page">
      <div className="about-me">
        <div className="about-me-text">
          <h3>About Me</h3>
          <p>
            I'm a Computer Science, Electrical Engineering and Physics major who
            enjoys building and creating, whether it's building computers or
            developing tools that make people's tasks easier. One of my favorite
            things is discovering connections between concepts, especially those
            that are often thought of as separate, and deeper thinking about the
            meaning of things, which I enjoyed in the exploration of in MIT's
            Philosophy Minor track, the Metaphysics course being one of my
            favorites. This curiosity has driven me to innovate and design
            systems that are both intuitive and effective. I also believe this
            has contributed to my ability to quickly understand new technologies
            and adapt them to solve problems creatively.
          </p>
        </div>
        <div>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={Justice}
            rounded
          />
        </div>
      </div>
      <br />
      <h3>My Projects</h3>
      <Row className="project-categories">
        {projectCategories.map((category, k) => {
          return (
            <a
              key={k}
              className="col btn btn-outline-secondary btn-lg"
              href={`/projects/#${pascalToSnakeCase(
                category.replace(" ", "")
              )}`}
              role="button"
            >
              <div>{category}</div>
            </a>
          );
        })}
      </Row>
      <PDFViewer />
    </Container>
  );
}
