<script>
  import DamagesPlayers from "../../badges/killsPlayers.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
  import GameSlide from "../gameSlide.svelte";
  import StanleyPhoto from "$lib/assets/stanley/stanleySays.jpg";
</script>

<GameSlide bgUrl={StanleyPhoto} gameName="Stanley Says">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
    <DamagesPlayers></DamagesPlayers>
  {/snippet}
  {#snippet description()}
    Now look at this Stanley, a game named after you! I'm not quite sure why
    there's two of you, or why you're lying down, but you are the master of this
    game nonetheless! I need you to trim the fat around here, and make sure to
    speed it up while you're at it.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Divide prisoners among the platforms (1 max each)</li>
      <li>Explain the game</li>
      <li>Start the game</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is Stanley Says, the figures on the ground will stand up and display a
    button. If the button has a number on it, press the same button. If it does
    not have a button, press nothing. The game will speed up over time, and
    we'll be taking N prisoners, starting now.
  {/snippet}
</GameSlide>
