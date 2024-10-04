import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Justice from "./img/IMG_0359.jpg";
import Resume from "./documents/Justice_Vidal_Resume.pdf";

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
  const buttonColors = [
    "danger",
    "primary",
    "success",
    "warning",
  ]
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
            favorites. This curiosity has driven me to innovate and
            design systems that are both intuitive and effective, and I believe
            has contributed to my ability to quickly to understand new
            technologies and adapt them to solve problems creatively.
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
      <Row>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h3>My Projects</h3>
          <Row className="project-categories">
            {projectCategories.map((category, k) => {
              return (
                <a
                  key={k}
                  className={`col btn btn-${buttonColors[k]} btn-lg`}
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
        </div>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h3>My Resume</h3>
          <div style={{display: "flex", justifyContent: "center"}}>
            <a
              className="link-button col btn btn-info btn-lg"
              href={Resume}
              download="Justice_Vidal_Resume"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              Download Resume (.pdf)
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
