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
import PSoCSchematic from "./img/PSOC Board.PNG";
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
          This was a class project for the Efficient Tiny ML course. We were
          tasked with devising an open-ended project using the neural network
          miniaturization techniques we learned over the semester in teams of 2
          to 3 people. My role in the project was to create the infrastructure
          for fine-tuning and evaluating the models.
        </p>
        <p>
          My first step in the process was devising a testing method to compare
          the models to each other and their relative performance gain/loss
          after pruning. One consideration was simply comparing the Perplexity
          loss (PPL) before and after training. However, this isn't the best
          indicator of prediction quality since it is essentially an indicator
          of how confident a model is in its predictions rather than the
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
        <div className="text-examples">
          <div className="code-display">
            <div>
              {`2. Which of these is a color?
            a. Alligator
            b. Blue
            c. Chicken
            d. Donkey`}
            </div>
            <p>Generation of another question it believes to be on topic</p>
          </div>
          <div className="code-display">
            <div>{`e. Purple`}</div>
            <p>Generation of more answer choices</p>
          </div>
        </div>
        <p>
          These types of responses would be difficult to account for in terms of
          making a parser for them, as the format varied based on the model, and
          ignoring these cases would leave a much smaller number of usable
          questions. To address this issue, I generated "best guesses" for the
          model whenever it did not confidently label its response as an answer
          (explicitly respond with "answer: choice") by using PPL and
          combinations of the questions and answer choices.
        </p>
        <p>
          For example, for the previous question, I would measure the PPL of the
          model for each of the following strings and interpret the string
          resulting in the lowest perplexity as the model's answer:
        </p>
        <ListGroup style={{ marginBottom: "1rem" }}>
          <ListGroup.Item>Which of these is not a color? Red</ListGroup.Item>
          <ListGroup.Item>Which of these is not a color? Blue</ListGroup.Item>
          <ListGroup.Item>Which of these is not a color? Horse</ListGroup.Item>
          <ListGroup.Item>Which of these is not a color? Green</ListGroup.Item>
        </ListGroup>
        <p>
          The idea behind this approach is that since PPL is effectively a
          measure of how confused a model is by a string, a well-performing
          model would be confused the least by the best answer choice.
          Ultimately, this method worked well for testing the model's multiple
          choice performance since it correlated well with the correct answer
          choices. I even found that the measured accuracy when using this
          method improved in some cases after fine-tuning.
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
          the lab to create a digital photo archive that anyone could use to
          navigate 100,000 photos from Paris in 1970. These photos were taken as
          a part of the "This was Paris in 1970" photo contest, in which people
          were asked to photograph areas of the city they found interesting or
          significant during major structural changes. Currently, the original
          photos are archived in Bibliothèque historique de la Ville de Paris,
          making the general availability of the photos for viewing low, which
          is what this project aims to address.
        </p>
        <p>
          While working on the project for 4 years, I have worked on many parts,
          including the backend database design and user interface. While
          working in both areas, one of my major considerations was
          functionality at scale, given the ideal final state of the database.
          In the frontend, this manifested in part as a question of how people
          would begin to explore and make sense of such a large collection of
          photos. I worked to address this concern by implementing a reusable
          photo slider component on the detailed photo information page that
          contained photos most similar to the currently viewed photo.
        </p>
        <p>
          In the early stages of the project, as we were considering useful
          computer vision techniques to apply to the photos to generate
          searchable metadata, one of the major methods we settled on was object
          detection. To conduct the object detection, we decided to select one
          of 4 different machine learning models: You Only Look Once (YOLO),
          R-CNN, Fast-RCNN, and Retina-Net. I was tasked with evaluating the
          R-CNN model and testing integration into our project codebase. Given
          the size of our target database, one of our major performance
          benchmarks was inference latency. After testing the speed at which the
          models could process test images in our database, we compared results
          and found that the YOLO model, by far, had the best inference speed.
        </p>
        <p>
          After we decided on the YOLO model, not only because of its speed but
          also due to its ease of setup, I tested the quality of the model's
          predictions by manually labeling some of the images and comparing my
          expected results to the model's output. From my test set of 46 images,
          I found that the model had a precision of 97% and a recall of 33%.
          According to these results, we would likely miss images with people in
          them due to the low recall. However, we could be confident that our
          metadata assignment would be correct due to the high precision. In
          2021, Funing Yang and I presented our findings on the efficacy and
          role of object detection in the project at the&nbsp;
          <a href="https://ctdh.io/2021-conference/">
            Connecticut Digital Humanities 2021 Conference
          </a>
          .
        </p>
        <p>
          I've enjoyed working on this project and other Digital Humanities for
          so long since it has been very interesting to see how the humanities
          and technology fields can benefit from each other; valuable resources
          can be made accessible to historians and humanists through data
          science techniques and has helped me learn how to design systems for
          the benefit of people and how technological design choices like the
          representation of data can impact real people.
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
          Node to the latest Long Term Support version (20.11 LTS). I also made
          the decision to switch the React infrastructure to use the functional
          style of React programming, instead of continuing with the
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
          other students. The goal of the project was to create a user-friendly
          and enjoyable game after going through multiple developing, testing,
          and feedback cycles.
        </p>
        <p>
          This project was a great experience in getting to work on a team
          consisting of people with different role types, namely, Artists, Level
          Designers, Sound Designers, and Programmers. It was also a great
          experience in learning how to adapt to an existing project. Other
          students in the class started the project, and as a part of the
          course, we could choose to continue our initial project or join
          another team's project. I chose to join the PlatFarmer team because I
          found the concept very interesting since it combined two typically
          separate kinds of games. To get myself on the same page as the rest of
          the original team, I looked over the codebase and played through their
          original game demo to bring constructive feedback to our meetings as a
          new team.
        </p>
        <p>
          My role on the team was primarily a programmer, and I worked on
          miscellaneous bug fixes and adding changes that would diversify the
          game experience. For example, I added different types of growable
          crops and worked on the ability to&nbsp;
          <a href="/platfarmer-devlogs/#crops-anywhere">plant crops anywhere</a>
          &nbsp;to allow the player to be more creative with their progression
          through levels.
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
          individually designing and building an embedded system using the PSoC
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
          the PSoC could play readily without stuttering. 11025 Hz is also
          readily scalable to the common audio playback rate of 44100 Hz.
        </p>
        <p>
          The system has two modes of audio output, one in which the output is
          set to be a square wave with adjustable frequency from the PSoC's PWM,
          and another in which the output is set to be analog voltage output
          from a PSoC Voltage DAC (labeled Sample_Player). When in "mode 0", the
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
          another PSoC board, which would output a value based on detected
          electrical connection within the keyboard.
        </p>
        <div className="img-row">
          <Col>
            <Image src={PSoCSchematic} rounded />
            <p>Schematic of the project main PSoC 5 board</p>
          </Col>
          <Col>
            <Image src={audioAmpDiagram} rounded />
            <p>Output audio amplifier wiring diagram</p>
          </Col>
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
          6.115 project a year prior usable again with a typical desktop
          computer. At the end of the course, I had to return the PSoC board I
          used as the keyboard controller, so I could no longer use the
          keyboard. I enjoyed giving new life to something when I set up the
          keyboard the first time around, and I wanted to make sure this was
          something I could still do a year later. This was also a way to test
          my documentation and project organization skills from the past
          iteration. I was coming back to the project, not remembering every
          detail of how I set it up, and if my documentation was decent, the
          reimplementation would be a lot easier.
        </p>
        <p>
          For this project, I specifically chose to use only parts I had
          available at the time in the spirit of reuse: I used an ESP32S2 Dev
          Module board for the new keyboard controller that I got to keep from
          another class. The same was true of the USB breakout board I used to
          connect the ESP to the computer.
        </p>
        <p>
          Overall, I found it straightforward to reimplement my code in the
          Arduino IDE (from PSoC Creator); however, interfacing with the
          keyboard again took longer than I would have liked. The wires coming
          from the keyboard were not labeled, and I did not have an image of the
          wiring of my initial circuit to see how the connections were oriented.
          This, unfortunately, meant I needed to open the keyboard again to see
          how the contact sheets were configured, which disturbed the careful
          alignment of contacts and the ends of the yellow wires.
        </p>
        <p>
          After seeing that my documentation could be improved in this way, I
          decided to make more clear indications of which wires were connected
          to which internal contact sheet. Ideally, it would have been nice to
          use different color wires for each contact sheet, although at the
          time, I didn't have any of similar length. Instead, I grouped the
          wires together if they were connected to the same contact sheet. Now,
          each of the three connector groups are split into two groups - one
          half connected to one contact sheet and the other half connected to
          the other sheet. I also now have a picture of the keyboard connection
          to the ESP32 controller and a list of row and column pins in the
          Arduino source file to make it easier to return to the project again
          in the future.
        </p>
        <p>
          Since I have a working proof of concept for the keyboard driver, the
          next time I revisit this project, I think it would be interesting to
          design a new PCB for the keyboard and miniaturize the setup to make it
          more usable.
        </p>
        <div className="img-row">
          <Col>
            <Image src={keyboardInternals} rounded />
            <p>Tape-masked internal keyboard contacts</p>
          </Col>
          <Col>
            <Image src={keyboardImg} rounded />
            <p>Keyboard connected to ESP32 controller</p>
          </Col>
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
        <h4>Remote Control Car Electrical Drive Circuitry</h4>
        <h5 className="project-date">Fall 2021</h5>
        <p>
          This was my final project for MIT's Power Electronics (6.131) course.
          The goal of the project was to design and build the power electronics
          for a system individually. I chose to design the drive circuitry for a
          remote-controlled car with variable speed. The car would have two
          motor-driven wheels, each capable of forward and reverse motion, and
          to enable steering, each wheel would have independent control
          circuitry. Since I wanted variable speed for the wheels, I used a buck
          converter for efficient voltage regulation since I had experience
          designing them during the course. Then, I used a buck converter on
          each side to create a variable voltage difference that could change
          the motor's spin direction. When designing the buck converter circuit,
          my main considerations were part availability and size. Since the
          hypothetical car I was designing for would have the inductors and
          capacitors attached to it, I wanted to make those parts as small as
          possible while sticking to the parts available in the lab. These
          considerations led me to pick a 250 MHz PWM switching frequency, and
          the resonance frequency of the capacitor and inductor were set to
          approximately 250 Hz to avoid unstable behavior.
        </p>
        <p>
          I connected the MOSFETs (switches) labeled S2 and S3 to the same Pulse
          Width Modulation (PWM) signal (same for S1 and S4) to make the voltage
          at one side decrease when the other increased. This would result in
          either roughly 15V being applied to side A, and 0V to side B, and visa
          versa. My remote control board contained the PWM circuitry for the
          buck converters and would be connected to the buck converters and
          motors using long wires so I could control the speed from a distance
          using potentiometers (pots).
        </p>
        <div className="img-row">
          <Image src={hbridgeDiagram} rounded />
        </div>
        <p>
          Although this design allows for steering through independent control
          of the two motors, moving in a straight line and varying speed would
          be inconvenient because both pots would have to be increased at the
          same time and rate to maintain straight motion. Otherwise, their
          speeds would differ, causing undesired turning. The solution I
          implemented to address this is the inclusion of additional switches on
          the control board that could be flipped to change which PWM signal
          controls each motor. Under steering operating conditions, motor 1
          would be controlled by pot 1, and motor 2 would controlled by pot 2.
          Then, for driving in a straight line, the switch next to the pot 1
          could be switched to make both motor 1 and motor 2 controlled by pot
          2. I implemented this behavior by connecting the switches next to the
          pots to multiplexors I created using a set of NAND gates. Each
          multiplexor would receive both PWM signals, and the PWM signal at the
          output would change based on the switch position.
        </p>
        <p>
          One thing that I would improve about my design if I were to
          reimplement this project would be to add an on/off switch for my
          switch drivers (IR2125s). This would allow for stopping the car easily
          and avoid power draw when the motor is intended to be stopped (both
          sides of the motor are being driven at 50% of the max voltage).
        </p>
        <div className="img-row">
          <Col>
            <Image src={hbridge} rounded />
            <p>Final drive circuitry and motor</p>
          </Col>
          <Col>
            <Image src={PWMSwitch} rounded />
            <p>Motor PWM multiplexor switch wiring diagram</p>
          </Col>
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
