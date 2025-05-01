<script>
  import DamagesPlayers from "../../badges/damagesPlayers.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
  import GameSlide from "../gameSlide.svelte";
  import RacePhoto from "$lib/assets/stanley/race.jpg";
  import SupportsTeams from "../../badges/supportsTeams.svelte";
</script>

<GameSlide bgUrl={RacePhoto} gameName="Race">
  {#snippet centerHeader()}
    <SupportsTeams></SupportsTeams>
    <DamagesPlayers></DamagesPlayers>
  {/snippet}
  {#snippet description()}
    Oh my, another cardio game? And so close to the first one? I hope you've
    warmed up, Stanley, because you'll need all your energy to beat your fellow
    co-workers in this race.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Divide prisoners into two teams for the race</li>
      <li>Put each team against the door of the two sides of race</li>
      <li>Push the grey door button</li>
      <li>Kill the slowest team</li>
    </ol>
  {/snippet}
  <!-- {#snippet wardenScript()}
    This is climb you climb, the moving blocks may kill you if you get stuck on
    them. We'll be taking the N first (or doing hot lava), starting now.
  {/snippet} -->
</GameSlide>
