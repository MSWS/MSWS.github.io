<script>
  import FirstGame from "../../badges/firstGame.svelte";
  import GameSlide from "../gameSlide.svelte";
  import FTDPhoto from "$lib/assets/stanley/ftd.jpg";
  import SupportsTeams from "../../badges/supportsTeams.svelte";
</script>

<GameSlide bgUrl={FTDPhoto} gameName="Find the Difference">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
    <SupportsTeams></SupportsTeams>
  {/snippet}
  {#snippet description()}
    Since you love spending so much time in the office, Stanley, I designed this
    mini area for you to enjoy. In fact, I made two copies of it! I might have
    missed a few details here and there, but I trust you won't be so nitpicky as
    to point them out.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Divide prisoners into two teams</li>
      <li>Place each team in their own cell</li>
      <li>Explain the game</li>
      <li>Press the green button to start the game</li>
      <li>Wait for the game to stop, or manually stop it yourself</li>
      <li>The team with the highest number (# of differences found) wins</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is find the difference, this area is mirrored with minor differences.
    You need to knife the differences to score points. The team with the most
    points wins.
  {/snippet}
</GameSlide>
