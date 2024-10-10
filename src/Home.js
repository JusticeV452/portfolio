import React, { useState } from "react";
import { Container, Row, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Justice from "./img/IMG_0359.jpg";
import Resume from "./documents/Justice_Vidal_Resume.pdf";

function pascalToSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .slice(1);
}

const HoverLinkButton = ({
  className,
  text,
  color = "#fff",
  backgroundColor = "#2b3035",
  hoverColor = "#000",
  hoverBackgroundColor,
  children,
  ...linkProps
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };
  const style = {
    color: isHovered ? hoverColor : color,
    backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
  };

  return (
    <a
      className={`col btn btn-lg link-button ${className}`}
      role="button"
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...linkProps}
    >
      <div>{children ? children : text}</div>
    </a>
  );
};

export const Embed = (props) => {
  return (
    <a
      href={props.href || "#"}
      target="_blank"
      title={props.title || ""}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default function Home() {
  const projectCategories = [
    "Machine Learning",
    "Software Development",
    "Embedded Systems",
    "Electrical Engineering",
  ];
  const backgroundColors = ["#d0f5e6", "#d0def5", "#f5f4d0", "#f5d0d0"];
  // Used for border color and hover color
  const buttonClasses = ["danger", "primary", "success", "warning"];
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
      <Row className="home-row">
        <div>
          <h3>My Projects</h3>
          <Row>
            {projectCategories.map((category, k) => {
              return (
                <HoverLinkButton
                  key={k}
                  className={`btn-${buttonClasses[k]}`}
                  href={`/projects/#${pascalToSnakeCase(
                    category.replace(" ", "")
                  )}`}
                  text={category}
                />
              );
            })}
          </Row>
        </div>
        <div>
          <h3>My Resume</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HoverLinkButton
              className="btn-info"
              href={Resume}
              download="Justice_Vidal_Resume"
              target="_blank"
              rel="noreferrer"
              text="Download Resume (.pdf)"
              hoverBackgroundColor="#1db3d1"
            />
          </div>
        </div>
      </Row>
    </Container>
  );
}
