<script lang="ts">
  import stanley from "$lib/assets/stanley/stanley.jpg";
  import { onMount, tick } from "svelte";
  import ByteClicker from "./games/byteClicker.svelte";
  import Climb from "./games/climb.svelte";
  import DodgeCourse from "./games/dodgeCourse.svelte";
  import Dropdown from "./games/dropdown.svelte";
  import FindTheDifference from "./games/findTheDifference.svelte";
  import HoleInTheWall from "./games/holeInTheWall.svelte";
  import Jeopardy from "./games/jeopardy.svelte";
  import MusicalChairs from "./games/musicalChairs.svelte";
  import Race from "./games/race.svelte";
  import Reaction from "./games/reaction.svelte";
  import Roulette from "./games/roulette.svelte";
  import StanleySays from "./games/stanleySays.svelte";
  import { replaceState } from "$app/navigation";
  import Navbar from "../../../navbar.svelte";

  const games = {
    "Byte Clicker": ByteClicker,
    Climb: Climb,
    "Dodge Course": DodgeCourse,
    Dropdown: Dropdown,
    "Find the Difference": FindTheDifference,
    "Hole in the Wall": HoleInTheWall,
    "Jeopardy!": Jeopardy,
    "Musical Chairs": MusicalChairs,
    Race: Race,
    Reaction: Reaction,
    Roulette: Roulette,
    "Stanley Says": StanleySays,
  };

  const SLIDESHOW_INTERVAL = 10000;

  let gameNames = Object.keys(games);
  let gameEntries = Object.entries(games);
  let activeSlide = 0;
  let game: string | null = "default";
  let animating = false;
  let idle = true;

  const images = import.meta.glob("$lib/assets/stanley/*.jpg", {
    eager: true,
    import: "default",
  });

  const photoPaths = Object.values(images) as string[];

  onMount(() => {
    game = new URLSearchParams(window.location.search).get("game");
    if (game) {
      idle = false;
      activeSlide = gameNames.indexOf(game);
    }
    function preloadImage(url: string): Promise<void> {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = url;
      });
    }
    for (const url of photoPaths) {
      preloadImage(url);
    }
  });

  let slideshowTask = setInterval(() => {
    if (!idle) {
      clearInterval(slideshowTask);
      return;
    }

    activeSlide = ++activeSlide % gameNames.length;
  }, SLIDESHOW_INTERVAL);
</script>

<svelte:head>
  {#each photoPaths as photo}
    <link rel="preload" as="image" href={photo} />
  {/each}
</svelte:head>

<Navbar></Navbar>

<div class="font-stanley text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
  <ul
    class="grid w-full font-stanley text-nowrap grid-flow-row md:grid-flow-col md:grid-cols-6 p-8 ml-auto mr-auto text-center md:text-left md:list-disc"
  >
    <div class="bg-gray-200 md:bg-transparent row-span-11">
      <li>Spawn in cells</li>
      <li>Get into vents</li>
      <li>Make the long jump</li>
      <li>Grab the guns</li>
      <li>Open the doors, leave area</li>
      <li class="text-red-500">First Round</li>
      <li>Join the stacked club</li>
      <li>Browse the corner stores</li>
      <li>Walk to mirrored offices</li>
      <li>Self-Help Introduction</li>
      <li>Go through the walls</li>
    </div>
    <div class="bg-gray-300 md:bg-transparent row-span-11">
      <li>Fail the longdrop</li>
      <li class="text-red-500">Second Round</li>
      <li>Appreciate the paperworks</li>
      <li>Question some trivia answers</li>
      <li>Press [E] to pay life</li>
      <li>Watch the warden die</li>
      <li>Go outside, touch grass</li>
      <li>Appreciate the scenery</li>
      <li>Round ends suddenly</li>
      <li class="text-red-500">Third Round</li>
      <li>Teeter on the edge of brilliance</li>
    </div>
    <div
      class="row-span-11 max-w-fit h-full md:col-span-2 text-wrap text-lg text-justify tracking-wide m-4 md:mr-8"
    >
      <div class="text-center text-3xl font-bold">
        <a
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=3398732836"
          class="text-blue-900 hover:text-blue-500"
        >
          JB_STANLEY
        </a>
      </div>
      <span>Inspired by&nbsp;</span><a
        href="https://www.stanleyparable.com/"
        class="underline text-blue-950">The Stanley Parable</a
      >, this was the first map I made for JB. Many fun secrets, games, music,
      and other discoveries are hidden throughout the map.
      <img src={stanley} alt="Stanley" />
    </div>

    <div class="bg-gray-300 md:bg-transparent row-span-11">
      <li>Grab some 8P</li>
      <li>Listen to some vibez</li>
      <li>Dodge some courses</li>
      <li>Run upstairs</li>
      <li>Die</li>
      <li class="text-red-500">Fourth Round</li>
      <li>Spawn in cells</li>
      <li>Go back outside</li>
      <li>Do some jumping jacks</li>
      <li>The jacks don't lie</li>
      <li>Look up at the end</li>
    </div>
    <div class="bg-gray-200 md:bg-transparent row-span-11">
      <li>Interact with the button</li>
      <li>Find the bucket</li>
      <li>Skip the teleport button</li>
      <li class="text-red-500">Fifth Round</li>
      <li>Wander in the pitch black</li>
      <li>Enjoy the art</li>
      <li>Head left from nowhere</li>
      <li>Jump!</li>
      <li>Grab the AWP</li>
      <li>Mission Accepted</li>
      <li>After a long time, everyone dies</li>
    </div>
  </ul>
  <div class="bg-gray-200">
    <div class="relative p-4 flex flex-col md:flex-row space-x-4" id="games">
      <div>
        <a class="text-3xl font-bold tracking-wider" href="#games">GAMES</a>
        <ul
          class="grid grid-cols-2 sm:grid-cols-3 list-inside md:inline md:w-fit md:list-disc whitespace-nowrap"
        >
          {#each gameNames as name, index}
            <li
              class="hover:bg-gray-300/80 md:rounded-l-full transition-colors {activeSlide ==
              index
                ? 'bg-white text-red-500 tracking-wide'
                : 'hover:bg-gray-300'}"
            >
              <button
                class="w-full text-center md:text-left cursor-pointer"
                on:click={() => {
                  idle = false;
                  activeSlide = index;
                  replaceState("?game=" + name, {});
                }}
              >
                {name}
              </button>
            </li>
          {/each}
        </ul>
      </div>
      <div class="relative w-full">
        {#if animating}
          <svelte:component this={gameEntries[activeSlide][1]}
          ></svelte:component>
        {:else}
          <svelte:component this={gameEntries[activeSlide][1]}
          ></svelte:component>
        {/if}
      </div>
    </div>
    <div class="relative m-4 space-x-4 text-right" id="secrets">
      <p class="text-3xl font-bold tracking-wider">SECRETS</p>
      Would you really call it secret a secret if everyone knew about it?
    </div>
  </div>
</div>
