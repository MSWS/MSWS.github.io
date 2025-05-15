<script>
  import GameSlide from "../gameSlide.svelte";
  import RoulettePhoto from "$lib/assets/stanley/roulette.jpg";
  import DamagesPlayers from "../../badges/killsPlayers.svelte";
  import KillsPlayers from "../../badges/killsPlayers.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
</script>

<GameSlide bgUrl={RoulettePhoto} gameName="Roulette">
  {#snippet centerHeader()}
    <KillsPlayers></KillsPlayers>
  {/snippet}
  {#snippet description()}
    Honestly Stanley I think this is the game you have the best chance of
    winning. It's basically a coinflip! And you don't have to do anything, just
    sit in that chair, watch the gun spin, and hope you get lucky.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Place two prisoners on either chair</li>
      <li>Press E on the gun</li>
      <li>Repeat until the gun fires</li>
    </ol>
  {/snippet}
</GameSlide>
