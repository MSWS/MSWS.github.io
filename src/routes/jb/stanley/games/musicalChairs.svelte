<script>
  import GameSlide from "../gameSlide.svelte";

  import MusicalChairsImage from "$lib/assets/stanley/musicalchairs.jpg";
  import FirstGame from "../../badges/firstGame.svelte";
</script>

<GameSlide bgUrl={MusicalChairsImage} gameName="Musical Chairs">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
  {/snippet}
  {#snippet description()}
    Now I'm not sure what went on in your childhood to make you so interested in
    just pressing buttons, but I can tell you in my childhood this game was a
    classic. I remember playing it with my many friends and my adoring parents,
    my siblings were always complimenting how fast I was at this game. I hate to
    brag, but really, you ought to see me in action.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-inside list-decimal">
      <li>Gather prisoners in the center of the circle and start the music.</li>
      <li>Adjust the number of chairs using the left/right orange buttons.</li>
      <li>Start the music using the buttons behind you.</li>
      <li>
        Stop music using the red button, kill prisoners not on a chair once all
        are taken.
      </li>
      <li>Repeat as desired.</li>
    </ol>
  {/snippet}
</GameSlide>
