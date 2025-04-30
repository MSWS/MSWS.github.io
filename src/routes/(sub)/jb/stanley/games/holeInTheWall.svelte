<script>
  import GameSlide from "../gameSlide.svelte";

  import hitwImage from "$lib/assets/stanley/holeInTheWall.jpg";
  import FirstGame from "../../badges/firstGame.svelte";
  import RequiresHp from "../../badges/requiresHp.svelte";
</script>

<GameSlide bgUrl={hitwImage} gameName="Hole in the Wall">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
    <RequiresHp></RequiresHp>
  {/snippet}
  {#snippet description()}
    Now I know that some people talk all about glass ceilings, but I've found
    myself moreso attracted to this very real moving wall. Though it might not
    be glass or a ceiling, it will certainly try and push you into that lovely
    oven-temperature pit behind you. Look alive, Stanley, and try not to die too
    quickly.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Get prisoners in the game</li>
      <li>Close the door (gray button)</li>
      <li>Press the start button</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is hole in the wall, walls will be moving from the window side to try
    and push you into the hole. Run, jump, and crouch to avoid the walls, we'll
    be killing off N prisoners, starting now.
  {/snippet}
</GameSlide>
