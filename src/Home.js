import React from "react";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/Home.scss";

import Justice from "./img/IMG_0359.jpg";
import Resume from './documents/Justice_Vidal_Resume.pdf';

export default function Home() {
  return <Container id="home-page">
    <Image src={Justice} width="100%" rounded/>
    <div style={{display: "flex", justifyContent: "center"}}>
      <a
        href={Resume}
        download="Justice_Vidal_Resume"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="outline-secondary" size="lg">
          <div style={{margin: "1rem 2rem"}}>
            Download Resume (.pdf)
          </div>
        </Button>
      </a>
    </div>
    </Container>;
}
