import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/Home.scss";
import pruningDatasets from "./img/pruning_datasets.png";
import pruningModels from "./img/pruning_models.png";
import keyboardImg from "./img/keyboard_and_esp.jpg";
import keyboardInternals from "./img/keyboard_internal_contacts.jpg";
import SETMLModel from "./img/setml_model_test.png";
import thesisDevBoard from "./img/STM32C0116-DK.png"
import paris1970 from "./img/paris_1970_home.png";
import paris1970Map from "./img/paris_1970_map.png";
import DDD from "./img/datadrivendemocracy.png";
import DDDMap from "./img/ddd_map.png";
import PSOCSchematic from "./img/PSOC Board.PNG";
import audioAmpDiagram from "./img/audio_amp_diagram.png";
import hbridge from "./img/20211209_163529.jpg"
import PWMSwitch from "./img/pwm_switch.png"
import hbridgeDiagram from "./img/hbridge_diagram.png"
import hbridgeVideo from "./videos/20211209_163327_web.mp4"

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
    <Row>
        <h3>This was Paris in 1970</h3>
        <div className="img-row">
          <Image src={paris1970} rounded/>
          <Image src={paris1970Map} rounded/>
        </div>
        <div className="project-links">
          <a href="https://paris1970.dhlab.mit.edu">Website</a>
          <a href="https://github.com/dhmit/paris_1970">GitHub Repo</a>
        </div>
    </Row>
    <Row>
        <h3>Data Driven Democracy</h3>
        <div className="img-row">
          <Image src={DDD} rounded/>
          <Image src={DDDMap} rounded/>
        </div>
        <div className="project-links">
          <a href="https://datadrivendemocracy.dhlab.mit.edu">Website</a>
          <a href="https://github.com/dhmit/data-driven-democracy">GitHub Repo</a>
        </div>
    </Row>
    <Row>
        <h3>Audio Processing Suite</h3>
        <div className="img-row">
          <Image src={PSOCSchematic} rounded/>
          <Image src={audioAmpDiagram} rounded />
        </div>
        <div className="project-links">
          <a href="https://github.com/JusticeV452/audio_processing_suite">GitHub Repo</a>
        </div>
    </Row>
    <Row>
        <h3>H-Bridge and Remote control</h3>
        <div className="img-row">
          <Image src={hbridgeDiagram} rounded/>
        </div>
        <div className="img-row">
          <Image src={hbridge} rounded/>
          <Image src={PWMSwitch} rounded />
        </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={hbridgeVideo}
            width='100%'
            height='100%'
            controls = {true}
          />
        </div>
    </Row>
  </Container>;
}
