<script lang="ts">
  import TetrisSVG from "$lib/assets/tetris/tetris.svg";
  import GamesSVG from "$lib/assets/tetris/games.svg";
  import Navbar from "../../../navbar.svelte";

  import TetrisJPG from "$lib/assets/tetris/tetris.jpg";
</script>

<div class="p-3">
  <div class="ml-2 md:ml-0">
    <Navbar>
      {#snippet header()}
        <img src={TetrisSVG} class="w-full ml-2 mr-2 md:mr-4" alt="jb_tetris" />
      {/snippet}
    </Navbar>
  </div>

  <img
    src={TetrisJPG}
    class="w-full max-h-200 bg-cover bg-center p-1 rounded-3xl"
    alt="jb_tetris"
  />

  <div class="font-pixel text-2xl">
    Enter the world of <em
      ><a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=3467258615"
        class="text-blue-900 hover:text-blue-500">jb_tetris</a
      ></em
    >, a map inspired by the classic block-placing game. While this map may have
    a high skill floor, it features many challenging secrets, minigames, and a
    healthy balance for both teams.
  </div>

  <div class="font-pixel text-2xl">
    <img
      src={GamesSVG}
      class="bg-black/10 w-full mr-2 md:mr-4 h-20"
      alt="jb_tetris"
    />
  </div>
</div>
