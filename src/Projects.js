import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col, Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "bootstrap/dist/css/bootstrap.min.css";
import pruningDatasets from "./img/pruning_datasets.png";
import pruningModels from "./img/pruning_models.png";
import keyboardImg from "./img/keyboard_and_esp.jpg";
import keyboardInternals from "./img/keyboard_internal_contacts.jpg";
import SETMLModel from "./img/setml_model_test.png";
import thesisDevBoard from "./img/STM32C0116-DK.png";
import paris1970 from "./img/paris_1970_home.png";
import paris1970Slider from "./img/paris_1970_slider.png";
import DDD from "./img/datadrivendemocracy.png";
import DDDMap from "./img/ddd_map.png";
import PSOCSchematic from "./img/PSOC Board.PNG";
import audioAmpDiagram from "./img/audio_amp_diagram.png";
import hbridge from "./img/20211209_163529.jpg";
import PWMSwitch from "./img/pwm_switch.png";
import hbridgeDiagram from "./img/hbridge_diagram.png";
import hbridgeVideo from "./videos/20211209_163327_web.mp4";
import platfarmerStartScreen from "./img/platfarmer.png";
import platfarmerDraft from "./img/platfarmer_draft.png";

export default function Projects() {
  return (
    <Container id="project-page">
      <h2 className="category-header" id="machine-learning">
        Machine Learning
      </h2>
      <hr />
      <Row>
        <h4>MEng Thesis: Scalable Embedded Tiny Machine Learning (SET ML)</h4>
        <h5 className="project-date">Fall 2023 - Fall 2024</h5>
        <div className="img-row">
          <Col>
            <Image src={thesisDevBoard} rounded />
            <p>STM32C0116-DK test board</p>
          </Col>
          <Col>
            <Image src={SETMLModel} rounded />
            <p>First iteration of segmented gesture detection model</p>
          </Col>
        </div>
        <div className="project-links">
          <a href="https://github.com/JusticeV452/tensorflow_model_splitter">
            GitHub Repo
          </a>
        </div>
        <p>
          The goal of this project is to create a general framework for
          distributed inference across extremely resource constrained
          microcontrollers for arbitrary ML models and demonstrate its
          applicability in scenarios requiring low power and form factor through
          a gesture recognition implementation.
        </p>
      </Row>
      <Row>
        <h4>
          Mini-GPTs: Efficient Large Language Models through Contextual Pruning
        </h4>
        <h5 className="project-date">Fall 2023</h5>
        <div className="img-col">
          <Image src={pruningDatasets} rounded />
          <Image src={pruningModels} rounded />
        </div>
        <div className="project-links">
          <a href="https://arxiv.org/abs/2312.12682">Publication</a>
          <a href="https://github.com/tval2/contextual-pruning.git">
            GitHub Repo
          </a>
        </div>
        <p>
          This was a class project for the course Efficient Tiny ML. We were
          tasked with devising an open-ended project that would use the neural
          network miniaturization techniques we learned over the semester. My
          role on the project was creating the infrastructure for fine-tuning
          and evaluating the models.
        </p>
        <p>
          My first step in the process was devising a testing method to compare
          the models to each other, and their relative performance gain/loss
          after pruning. One consideration was simply comparing the Perplexity
          loss (PPL) before and after training, however this isn't the best
          indicator of prediction quality, since it is essentially an indicator
          of how confident a model is in its predictions, rather than the
          validity of those predictions. After discussing with the group, we
          decided it would be best to use multiple choice questions since they
          could be used to determine the model's accuracy, a good measure of
          whether they still maintain their "knowledge" after pruning.
        </p>
        <p>
          When trying to get initial performance metrics for the models however,
          I found that the models would not generate answer choices when
          prompted with a question and the choices. For example, providing the
          prompt:
        </p>
        <div className="code-display">
          {`1. Which of these is not a color?
            a. Red
            b. Blue
            c. Horse
            d. Green`}
        </div>
        <p>
          The model would often generate one of the following types of
          responses:
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="code-display">
            <div
              style={{
                padding: "0.5rem",
                boxShadow: "1px 1px 1px 1px",
                borderRadius: "0.25rem",
              }}
            >
              {`2. Which of these is a color?
            a. Alligator
            b. Blue
            c. Chicken
            d. Donkey`}
            </div>
            <p>Generation of another question it believes to be on topic</p>
          </div>
          <div className="code-display">
            <div
              style={{
                padding: "0.5rem",
                boxShadow: "1px 1px 1px 1px",
                borderRadius: "0.25rem",
              }}
            >
              {`e. Purple`}
            </div>
            <p>Generation of more answer choices</p>
          </div>
        </div>
        <p>
          These types of responses would be difficult to account for in terms of
          making a parser for them, as the format varied based on the model, and
          it left a much smaller number of usable questions. In order to address
          this issue, I generated "best guesses" for the model whenever it did
          not confidently label its response as an answer (explicitly respond
          with "answer: choice") by using PPL and combinations of the questions
          and answer choices.
        </p>
        <p>
          For example, for the previous question the PPL of the model for each
          of the following strings would be measured and the string resulting in
          the lowest perplexity would be chosen:
        </p>
        <ListGroup style={{ marginBottom: "1rem" }}>
          <ListGroup.Item>Which of these is not a color? Red</ListGroup.Item>
          <ListGroup.Item>Which of these is not a color? Blue</ListGroup.Item>
          <ListGroup.Item>Which of these is not a color? Horse</ListGroup.Item>
          <ListGroup.Item>Which of these is not a color? Green</ListGroup.Item>
        </ListGroup>
        <p>
          The idea behind this approach is that since, PPL is a measure of how
          confused a model is by a string, a well performing model would be
          confused the least by the best answer choice. This approach was
          ultimately found to work well for testing the model's multiple choice
          performace since it correlated well with the correct answer choices
          and was even found to improve in some cases after fine-tuning.
        </p>
      </Row>
      <h2 className="category-header" id="software-development">
        Software Development
      </h2>
      <hr />
      <Row>
        <h4>This was Paris in 1970</h4>
        <h5 className="project-date">Summer 2020 - Fall 2024</h5>
        <p>
          During my time as an undergraduate researcher in the MIT Digital
          Humanities Lab (DH), Catherine Clark, an Associate Professor, asked
          the lab to create a digital photo archive that could be used to
          navigate 100,000 photos from Paris in 1970. These photos were taken as
          a part of the "This was Paris in 1970" photo contest, in which people
          were asked to photograph areas of the city they found interesting or
          significant during a time of major structural changes. Currently, the
          original photos are archived in Bibliothèque historique de la Ville de
          Paris making the general availibilty of the photos for viewing low,
          which is what this project aims to remediate. During my time working
          on the project over the course of 4 years, I have worked on many parts
          of it including the backend database design and user interface. While
          working in both areas, one of my major considerations was
          functionality at scale given the ideal final state of the database. In
          the frontend, this manifested in part as a question of how people
          would begin to explore and make sense of such a large collection of
          photos. I worked to address this concern by implemeneting a reusable
          photoslider component on the detailed photo information page that
          contained photos most similar to the currently viewed photo.
        </p>
        <p>
          In the early stages of the project, as we were considering useful
          Computer Vision techniques to apply to the photos to generate
          searchable metadata for them, one of the major methods we settled on
          was object detection. To conduct the object detection we decided on
          selecting one of 4 different machine learning models; You Only Look
          Once (YOLO), R-CNN, Fast-RCNN, Retina-Net. I was tasked with
          evaluating the R-CNN model and testing integration into our project
          codebase. Given the size of our target database, one of our major
          performance benchmarks was inference latency. After testing the speed
          at which the models could process test images in our database, we
          compared results and found that the YOLO model by far had the best
          inference speed.
        </p>
        <p>
          After we decided on the YOLO model, not only because of its speed, but
          also due to its ease of setup, I tested the quality of the model's
          predictions by manually labeling some of the images, and comparing my
          expected results to the model's output. From my testset of 46 images,
          I found that the model had a precision of 97% and a recall of 33%.
          According to these results, due to the low recall, we would likely be
          missing many images with people in them, however we could be confident
          that our metadata assignment would be correct due to the high
          precision. In 2021 Funing Yang and I presented our findings for the
          efficacy and role of object detection in the project at the&nbsp;
          <a href="https://ctdh.io/2021-conference/">
            Connecticut Digital Humanities 2021 Conference
          </a>
          .
        </p>
        <div className="img-row">
          <Image src={paris1970} rounded />
          <Image src={paris1970Slider} rounded />
        </div>
        <div className="project-links">
          <a href="https://paris1970.dhlab.mit.edu">Website</a>
          <a href="https://github.com/dhmit/paris_1970">GitHub Repo</a>
          <a href="https://paris1970.dhlab.mit.edu/en/articles/fashion-in-1970s-paris/">
            Fashion in 1970's Paris
          </a>
          <a href="/parse_fashion_data.py">Fashion in 1970's Paris Parser</a>
        </div>
      </Row>
      <Row>
        <h4>Data Driven Democracy</h4>
        <h5 className="project-date">Spring 2024</h5>
        <p>
          This project was proposed to the MIT Digital Humanities Lab by
          Principle Investigator (PI), Professor Dwai Banerjee while I was it's
          Technical Lead. The goal of this project is to make organized Indian
          election data readily available to journalists, so they can easily
          track and derive trends in the election landscape.
        </p>
        <p>
          As the Technical Lead of the project, my role was to set up the
          project infrastructure for undergraduates who would be working on
          project features and guide the development and organization of project
          resources. Then when the project MVP goals were completed I would
          deploy the site. To generate ideas for useful data visualizations, I
          had the students form small groups to work in to rapidly develop
          prototypes. Then they would get feedback from the PI before
          implementing them.
        </p>
        <p>
          When setting up the project infrastructure, one of my main
          considerations was the longevity and workability of the codebase. To
          this end, I updated the project's Python to the latest version and
          Node to the latest Long Term Support version (20.11 LTS).
        </p>
        <p>
          I also made the decision to switch the React infrastructure to use the
          functional style of React programming, instead of continuing with the
          Class/Object based setup that was used up until that point. It would
          have been easier in the short term to use the same boilerplate code
          from past projects, however, the functional style of React appeared
          more widely used and the React documentation primarily provided
          examples in the functional style. By making the switch, I felt more
          comfortable with people being able to pickup the project easily in the
          future since the project style better mirrored the official React
          documentation. This would also benefit the students working on the
          project for the semester since they would build familiarity with the
          more common developement style, which they could use to work on other
          projects. It would also allow me to better balance my time between
          people working on this project and the other project I was overseeing,
          since the students could refer to the online documentation instead of
          aking me everytime they had a question about learning how to use
          React.
        </p>
        <div className="img-row">
          <Image src={DDD} rounded />
          <Image src={DDDMap} rounded />
        </div>
        <div className="project-links">
          <a href="https://datadrivendemocracy.dhlab.mit.edu">Website</a>
          <a href="https://github.com/dhmit/data-driven-democracy">
            GitHub Repo
          </a>
        </div>
      </Row>
      <Row>
        <h4>PlatFarmer</h4>
        <h5 className="project-date">Fall 2022</h5>
        <p>
          This was a class project for MIT Creating Video Games (CMS.611) with 3
          other students. The goal of the project was to create a user friendly
          and enjoyable game with after going through multiple developing,
          testing and feedback cycles.
        </p>
        <p>
          This project was a great experience in getting to work on a team
          consisting of people with different role types, namely, Artists, Level
          Designers, Sound Designers, and Programmers. This project was also a
          great experience in learning how to adapt to an existing project;
          other students in the class had started the project and as a part of
          the course, we could chose to continue our intial project or join
          another team's project. I chose to join the PlatFarmer team because I
          found the concept very interesting. To get my self on the same page as
          the rest of the original team, I played through their original game
          demo and looked over the codebase to bring to out first meeting as a
          new team.
        </p>
        <p>
          My role on the team was primarly a programmer and I worked on
          miscillaneous bug fixes and adding changes that would diversify the
          game experience. For example, I added different types of growable
          crops and worked on the ability to plant crops anywhere to allow the
          player to be more creative with their progression through levels.
        </p>
        <div className="img-row">
          <Image src={platfarmerStartScreen} rounded />
          <Image src={platfarmerDraft} rounded />
        </div>
        <div className="project-links">
          <a href="https://trentpiercy.itch.io/platfarmer-v2">Game</a>
          <a href="https://github.com/trentpiercy/PlatFarmer">GitHub Repo</a>
          <a href="/platfarmer-devlogs">Dev Logs</a>
        </div>
      </Row>
      <h2 className="category-header" id="embedded-systems">
        Embedded Systems
      </h2>
      <hr />
      <Row>
        <h4>Audio Processing Suite</h4>
        <h5 className="project-date">Spring 2022</h5>
        <p>
          This project was my final project for the Microcomputer Project
          Laboratory (6.115) course at MIT. For this project we were tasked with
          individually designing and building an embedded system using the PSOC
          5 board we learned to use over the semester. My final goal for the
          project was to make a system capable of performing operations such as
          equalization, frequency filtering, amplification, and echo on multiple
          signals. To interface with the system, as an additional design
          challenge, I decided to use an old Bluetooth keyboard to interface
          with the system.
        </p>
        <p>
          The overall system design consisted of a microphone and analog to
          digital converter (ADC) for audio input, an SD card for on-device
          storage, a speaker and digital to analog converter (DAC) for audio
          output, and a keyboard and driver circuit for interacting with the
          device.
        </p>
        <p>
          The microphone ADC was set to a sample conversion rate of 11025
          samples per second. This was set to match the sampling rate of files
          the PSOC could play readily without stuttering. 11025 Hz is also
          readily scalable to the common audio playback rate of 44100 Hz.
        </p>
        <p>
          The system has two modes of audio output, one in which the output is
          set to be a square wave with adjustable frequency from the PSOC's PWM,
          and another in which the output is set to be analog voltage output
          from a PSOC Voltage DAC (labeled Sample_Player). When in "mode 0", the
          output corresponds to the PWM, and in "mode 1" the output corresponds
          to the output of the Sample_Player VDAC. In addition to being the
          direct output of the system in "mode 0", the PWM also functions to
          drive the VDAC sampling in "mode 1". When in "mode 1", the interrupt
          connected to the output of the PWM is enabled, and on every rising
          edge of the signal, the VDAC is sampled and output to the audio pin.
        </p>
        <p>
          The output of the audio pin was fed into a LM358 Operational Amplifier
          (OP amp) with unity (1) gain to protect the signal source and the
          output of the buffer was connected to a high pass filter to remove any
          DC from the signal input to the speaker to avoid speaker damage.
        </p>
        <p>
          The keyboard used for this project is a repurposed Bluetooth
          Dome-switch computer keyboard. Inside the keyboard are two plastic
          sheets with electrical contacts. Between them is a spacer sheet to
          prevent constant electrical contact between the sheets, electrical
          contact at a specific row and column indicating a key press. Inside
          the keyboard are 12 output contacts corresponding to one sheet and 11
          contacts corresponding to the other sheet. Since the keyboard was
          originally configured to be wireless, there are no external
          connections to the contacts. Wires were directly connected to the
          internal contacts of the keyboard sheets and led out to attach to
          another PSOC board, which would output a value based on detected
          electrical connection within the keyboard.
        </p>
        <div className="img-row">
          <Col>
            <Image src={PSOCSchematic} rounded />
            <p>Schematic of the project main PSOC 5 board</p>
          </Col>
          <Image src={audioAmpDiagram} rounded />
        </div>
        <div className="project-links">
          <a href="https://github.com/JusticeV452/audio_processing_suite">
            GitHub Repo
          </a>
        </div>
      </Row>
      <Row>
        <h4>Keyboard Restoration</h4>
        <h5 className="project-date">Summer 2023</h5>
        <p>
          This was a personal project to make the keyboard I had used for my
          6.115 project a year prior usable again with typical desktop computer.
        </p>
        <div className="img-row">
          <Col>
            <Image src={keyboardInternals} rounded />
            <p>Tape-masked internal keyboard contacts</p>
          </Col>
          <Image src={keyboardImg} rounded />
        </div>
        <div className="project-links">
          <a href="https://github.com/JusticeV452/keyboard_restoration">
            GitHub Repo
          </a>
        </div>
      </Row>
      <h2 className="category-header" id="electrical-engineering">
        Electrical Engineering
      </h2>
      <hr />
      <Row>
        <h4>H-Bridge and Remote Control</h4>
        <h5 className="project-date">Fall 2021</h5>
        <p>
          This was my final project for MIT's Power Electronics (6.131) course.
          The goal of the project was to individually design and build the power
          electronics for a system. The system I chose to design for was the
          drive circuitry of a remote controlled car.
        </p>
        <p></p>
        <div className="img-row">
          <Image src={hbridgeDiagram} rounded />
        </div>
        <div className="img-row">
          <Image src={hbridge} rounded />
          <Image src={PWMSwitch} rounded />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={hbridgeVideo}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </Row>
    </Container>
  );
}
