<script lang="ts">
  import stanley from "$lib/assets/stanley/stanley.jpg";
  import ByteClicker from "./games/byteClicker.svelte";
  import Climb from "./games/climb.svelte";
  import DodgeCourse from "./games/dodgeCourse.svelte";
  import Dropdown from "./games/dropdown.svelte";
  import HoleInTheWall from "./games/holeInTheWall.svelte";
  import Jeopardy from "./games/jeopardy.svelte";
  import Race from "./games/race.svelte";

  const games = {
    "Byte Clicker": ByteClicker,
    Climb: Climb,
    "Dodge Course": DodgeCourse,
    "Hole in the Wall": HoleInTheWall,
    "Jeopardy!": Jeopardy,
    Race: Race,
    Dropdown: Dropdown,
  };

  let gameNames = Object.keys(games);
  let gameEntries = Object.entries(games);
  let activeSlide = 0;
</script>

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
      class="row-span-11 max-w-fit h-full md:col-span-2 text-wrap text-lg text-justify tracking-wide m-4 mr-8"
    >
      <div class="text-center text-3xl font-bold">JB_STANLEY</div>
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
    <div class="p-4 flex flex-row space-x-4" id="games">
      <div>
        <p class="text-3xl font-bold tracking-wider">GAMES</p>
        <ul class="list-inside list-disc whitespace-nowrap">
          {#each gameNames as name, index}
            <li
              class="hover:bg-gray-200 rounded-l-full transition-colors
            {activeSlide == index ? 'bg-gray-200' : ''}"
            >
              <button
                class="w-full text-left cursor-pointer"
                on:click={() => {
                  activeSlide = index;
                }}
              >
                {name}
              </button>
            </li>
          {/each}
        </ul>
      </div>
      <div class="w-full">
        <svelte:component this={gameEntries[activeSlide][1]}></svelte:component>
      </div>
    </div>
    <div class="p-4 space-x-4" id="secrets">
      <p class="text-3xl font-bold tracking-wider text-right">SECRETS</p>
      asdf
    </div>
  </div>
</div>
