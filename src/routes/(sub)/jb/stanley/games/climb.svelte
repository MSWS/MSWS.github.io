<script>
  import DamagesPlayers from "../../badges/damagesPlayers.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
  import GameSlide from "../gameSlide.svelte";
  import ClimbPhoto from "$lib/assets/stanley/climb.jpg";
</script>

<GameSlide bgUrl={ClimbPhoto} gameName="Climb">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
    <DamagesPlayers></DamagesPlayers>
  {/snippet}
  {#snippet description()}
    Stanley was never a huge fan of cardio, but let's put him through this just
    for the heck of it. This climb features a gallant view of our pristine
    walls, some decent surf bits, and even ladders! What more could you want
    from such a divine game?
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Put prisoners on first step of climb</li>
      <li>Tell them to pursue</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is climb you climb, the moving blocks may kill you if you get stuck on
    them. We'll be taking the N first (or doing hot lava), starting now.
  {/snippet}
</GameSlide>
