import React from "react";
import { Container } from "react-bootstrap";

export default function DevLogs() {
  return (
    <Container id="project-page">
      <h4>PlatFarmer Developer Logs</h4>
      <hr />
      <p>
        These entries are weekly records of the development of the PlatFarmer
        game from my perspective and show my general actions for the project and
        responses to the feedback we received during game development.
      </p>
      <br />
      <h5>Nov 1, 2022</h5>
      <p>
        Last week I joined the PlatFarmer team, and we discussed what changes we
        would make to the current game to enhance it and give it more of a
        story. Brainstorming ideas went well - everyone had a chance to voice
        their concerns and vision about where the project should go. I proposed
        the idea of implementing a village where the player would visit
        occasionally and collect resources to repair it based on what they
        collect in the standard levels. The game would start with the basic
        mechanics of picking things up and interacting. Then there would be a
        level of introducing monsters. Next, the player would be introduced to a
        village overrun with monsters. Then the gameplay loop would transition
        to something like level-village-level.
      </p>
      <h5>Nov 8, 2022</h5>
      <p>
        This week I began working with the code base for the PlatFarmer game.
        Since I recently joined, I first played through the game to get a good
        idea of how the game works. From the prototype from project 2, we
        decided to make some changes to the game environment, namely, making it
        more dynamic and interactable, like a sandbox. I'm working toward this
        by implementing tree growing on any block instead of in specific
        regions, helping me become more familiar with the growing mechanic. So
        far, working with the code base has been straightforward since objects
        are well-named and organized into prefabs in appropriate folders.
      </p>
      <h5>Nov 15, 2022</h5>
      <p>
        Last week during playtesting, we aimed to test what players thought of
        the new sandbox-like mechanics, i.e., being able to plant trees anywhere
        and burn things like trees using the newly added torch. To fix up the
        game before playtesting the prototype, I fixed a bug with the new game
        tileset where flickering lines appeared between the tiles when the
        player moved. One thing I noticed during playtesting is the benefit of
        testing with people who have never played the game. People who played
        previous builds did not attempt to test the new ability to plan anywhere
        since they were used to only planting in specific spots. These specific
        planting spots were not present in the newest build. In future
        playtests, it would also help to have a level designed around the new
        freedom so that levels do not feel too easy and the players have to use
        the new mechanics (like burning) to progress.
      </p>
      <h5>Nov 21, 2022</h5>
      <p>
        Last week after playtesting, we reviewed our priorities for our next
        build. Since, during playtesting, it was a bit difficult to gauge how
        successful the new mechanics would be without a level centered around
        them, we set creating a level as our highest priority. As part of our
        level design discussion, we talked about using other types of trees to
        balance and control the resources available to the player. For example,
        some trees would drop fewer or no logs when chopped down to prevent them
        from being overused throughout the level - something we wanted to avoid
        after seeing some playtesters play the game. I will be working on a
        system to manage seeds for the new trees and adding a cooldown for the
        axe to make enemies more of a challenge.
      </p>
      <h5>Nov 29, 2022</h5>
      <p>
        This past week we continued working on the next build of the game by
        adding sound effects, fixing bugs, addressing some of the feedback from
        playtesting, and brainstorming level design ideas that would effectively
        utilize our new mechanics. In response to the unanimous feedback that
        enemies were too easy to defeat, I implemented a long cooldown for the
        axe, which we can tune by experimenting with values twice or half of the
        current value of 2 seconds. One thing I would like to add to the current
        implementation is a chopping and cooldown windup/wind-down animation to
        give more context on when they can swing the axe.
      </p>
      <h5>Dec 5, 2022</h5>
      <p>
        Last week we conducted more playtesting to test how our new large
        open-world level. Players will be placed in a large open world and are
        tasked with collecting three gems to complete the game. One of the main
        things we wanted to learn was how easily players are able to understand
        the game objectives (planting a tree with seed and water or collecting
        all three gems). For guidance, we have the open gem slots at the top of
        the screen to indicate to players that they can collect gems. In
        playtesting, we saw that the game objective needed to be more clear to
        players. One way I think we could do this is to have a smaller intro
        level where the players are introduced to planting and collecting gems
        and then enter the full world. We could also use a special
        highlight/lighting effect to clarify which things are enemies.
      </p>
      <h5>Dec 13, 2022</h5>
      <p>
        Last week after getting feedback on our final build from outside
        playtesters, I saw that people overall enjoyed the game experience,
        although the clarity of the game mechanics limited their enjoyment. For
        example, playtesters reported needing help figuring out how to pick up
        some objects. One thing that we could implement, given more time, is
        highlighting objects the player could pick up when they get close.
        Another thing I've learned overall from working on project 3 is the
        importance of pairing level design with the mechanics we implement.
        During one of our playtests, we were not able to get satisfying feedback
        on our mechanics since they were not well supported by our level design
        at the time. Also, leading up to the final build, there were some
        features we decided to exclude, such as the new seeds, since we had yet
        to fully design a position for them in our level that the player would
        easily understand.
      </p>
    </Container>
  );
}
