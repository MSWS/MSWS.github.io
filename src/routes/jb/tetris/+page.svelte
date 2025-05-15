<script lang="ts">
  import TetrisSVG from "$lib/assets/tetris/tetris.svg";
  import GamesSVG from "$lib/assets/tetris/games.svg";
  import Navbar from "../../navbar.svelte";

  import Tetris1JPG from "$lib/assets/tetris/tetris1.jpg";
  import Tetris2JPG from "$lib/assets/tetris/tetris2.jpg";
  import Tetris3JPG from "$lib/assets/tetris/tetris3.jpg";
  import Tetris4JPG from "$lib/assets/tetris/tetris4.jpg";
  import FirstGame from "../badges/firstGame.svelte";
  import SupportsTeams from "../badges/supportsTeams.svelte";
  import RequiresHp from "../badges/requiresHp.svelte";
  import KillsPlayers from "../badges/killsPlayers.svelte";
  import TetrisGameEntry from "./tetrisGameEntry.svelte";
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
  ></script>
</svelte:head>

<div class="p-3 font-pixel text-2xl">
  <div class="ml-2 md:ml-0">
    <Navbar>
      {#snippet header()}
        <img
          src={TetrisSVG}
          class="w-fit ml-auto bg-cyan-200/80 p-1 rounded-md"
          alt="jb_tetris"
        />
      {/snippet}
    </Navbar>
  </div>

  <swiper-container
    navigation="true"
    autoplay-delay="4000"
    effect="coverflow"
    grab-cursor="true"
    coverflow-effect-rotate="25"
    coverflow-effect-slide-shadows="true"
    keyboard="true"
    loop="true"
  >
    <swiper-slide>
      <img
        src={Tetris1JPG}
        class="w-full max-h-200 bg-cover bg-center p-1 rounded-3xl"
        alt="jb_tetris"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src={Tetris2JPG}
        class="w-full max-h-200 bg-cover bg-center p-1 rounded-3xl"
        alt="jb_tetris"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src={Tetris3JPG}
        class="w-full max-h-200 bg-cover bg-center p-1 rounded-3xl"
        alt="jb_tetris"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src={Tetris4JPG}
        class="w-full max-h-200 bg-cover bg-center p-1 rounded-3xl"
        alt="jb_tetris"
      />
    </swiper-slide>
  </swiper-container>

  <div class="bg-cyan-200/80 rounded-lg p-2 text-justify md:tracking-wide">
    Enter the world of
    <em
      ><a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=3467258615"
        class="text-blue-900 hover:text-blue-500">jb_tetris</a
      ></em
    >, a map inspired by the classic block-placing game. While this map may have
    a high skill floor, it features many challenging secrets, minigames, and a
    healthy balance for <span title="because there are two">both teams</span>.
  </div>

  <!-- <img src={GamesSVG} class="h-20 m-2" alt="Games" /> -->
  <img src={GamesSVG} class="h-20 m-2" alt="Games" />

  <div
    class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row bg-cyan-900/20 p-2"
  >
    <TetrisGameEntry name="HNS">
      {#snippet emotes()}
        <RequiresHp></RequiresHp>
        <SupportsTeams></SupportsTeams>
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Surf">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Race">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="React">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="BHop">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Maze">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Climb">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Colors">
      {#snippet emotes()}
        <KillsPlayers></KillsPlayers>
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Jumps">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Rhythm">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Territory">
      {#snippet emotes()}
        <SupportsTeams></SupportsTeams>
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Dodge It">
      {#snippet emotes()}
        <RequiresHp></RequiresHp>
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Gun Toss">
      {#snippet emotes()}{/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="4 Corners">
      {#snippet emotes()}{/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Dropdown">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Countdown">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Invis Climb">
      {#snippet emotes()}
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Jump Rope">
      {#snippet emotes()}
        <RequiresHp></RequiresHp>
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Long Jump">
      {#snippet emotes()}{/snippet}
    </TetrisGameEntry>

    <TetrisGameEntry name="Course">
      {#snippet emotes()}
        <RequiresHp></RequiresHp>
        <FirstGame></FirstGame>
      {/snippet}
    </TetrisGameEntry>
  </div>
</div>
