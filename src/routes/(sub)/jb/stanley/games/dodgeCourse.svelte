<script>
  import DamagesPlayers from "../../badges/killsPlayers.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
  import RequiresHp from "../../badges/requiresHp.svelte";
  import GameSlide from "../gameSlide.svelte";

  import DodgeCourseImage from "$lib/assets/stanley/musicalchairs.jpg";
</script>

<GameSlide bgUrl={DodgeCourseImage} gameName="Dodge Course">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
    <RequiresHp></RequiresHp>
  {/snippet}
  {#snippet description()}
    Ooh now this is exciting! Remember when you ignored my very obvious warnings
    that you're on your way to your death? Imagine if this time Stanley, you
    could jump out of the cart? Truly innovative gameplay I say. Mind your head
    though, the architecture here is quite low.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Place prisoners on the dodge course platform</li>
      <li>Press the green START button</li>
      <li>Stop the game when needed</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is dodge course, the platform will move and you will need to keep up
    with it while dodging the course. We'll be stopping it when N die, starting
    now.
  {/snippet}
</GameSlide>
