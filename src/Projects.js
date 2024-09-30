import React from "react";
import { Container, Row, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/Home.scss";
import pruningDatasets from "./img/pruning_datasets.png";
import pruningModels from "./img/pruning_models.png";
import keyboardImg from "./img/keyboard_and_esp.jpg";
import keyboardInternals from "./img/keyboard_internal_contacts.jpg";
import SETMLModel from "./img/setml_model_test.png";
import thesisDevBoard from "./img/STM32C0116-DK.png"

export default function Projects() {
  return <Container id="home-page">
    <Row>
        <h3>Mini-GPTs: Efficient Large Language Models through Contextual Pruning</h3>
        <div className="img-col">
          <Image src={pruningDatasets} rounded />
          <Image src={pruningModels} rounded />
        </div>
        <div className="project-links">
          <a href="https://arxiv.org/abs/2312.12682">Publication</a>
          <a href="https://github.com/tval2/contextual-pruning.git">GitHub Repo</a>
        </div>
          <p>This was a class project for the course Efficient Tiny ML.</p>
          <p>
            The goal of the project was to use the neural network miniaturization
            techniques we learned over the course of the semester in an open-ended project
          </p>
          <p>
            One challenge I encountered while doing this is that the models we were testing
            could not reliably select a multiple-choice answer from a single prompt string consisting
            of the answer and the question. Instead of having the model respond with a choice answer,
            I measured the perplexity loss of each choice concatenated with the question in the form
            question + answer and set the models choice as the question-answer pair that resulted in the
            lowest loss. This allowed all the models, including the weaker ones, to "give an answer" that
            could compared with after pruning and fine-tuning.
          </p>
    </Row>
    <Row>
        <h3>MEng Thesis - Scalale Embedded Tiny ML (SET ML)</h3>
        <div className="img-row">
          <Image src={thesisDevBoard} rounded />
          <Image src={SETMLModel} rounded/>
        </div>
        <div className="project-links">
          <a href="https://github.com/JusticeV452/tensorflow_model_splitter">GitHub Repo</a>
        </div>
        <p>
          The goal of this project is to create a general framework for distributed inference across extremely
          resource constrained microcontrollers for arbitrary ML models and demonstrate its applicability in
          scenarios requiring low power and form factor through a gesture recognition implementation.
        </p>
    </Row>
    <Row>
        <h3>Keyboard Restoration</h3>
        <div className="img-row">
          <Image src={keyboardInternals} rounded/>
          <Image src={keyboardImg} rounded />
        </div>
        <div className="project-links">
          <a href="https://github.com/JusticeV452/keyboard_restoration">GitHub Repo</a>
        </div>
        <p>This is a personal project to make an old Bluetooth keyboard usable again.</p>
        <p>
          The keyboard used for this project is a repurposed Bluetooth Dome-switch computer keyboard.
          Inside the keyboard are two plastic sheets with electrical contacts. Between them is a spacer sheet to
          prevent constant electrical contact between the sheets, electrical contact at a specific row and column
          indicating a key press. Inside the keyboard are 12 output contacts corresponding to one sheet
          and 11 contacts corresponding to the other sheet. Since the keyboard was originally configured to be
          wireless, there are no external connections to the contacts. Wires were directly connected to the
          internal contacts of the keyboard sheets and led out to attach to an ESP32S2, which would output a value
          based on detected electrical connection within the keyboard.
        </p>
    </Row>
  </Container>;
}
