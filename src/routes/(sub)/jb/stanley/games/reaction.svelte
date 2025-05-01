<script>
  import GameSlide from "../gameSlide.svelte";
  import ReactionPhoto from "$lib/assets/stanley/reaction.jpg";
  import DamagesPlayers from "../../badges/damagesPlayers.svelte";
</script>

<GameSlide bgUrl={ReactionPhoto} gameName="Reaction">
  {#snippet centerHeader()}
    <DamagesPlayers></DamagesPlayers>
  {/snippet}
  {#snippet description()}
    I've always though you could use a friend Stanley, office workers aside. You
    and that broom closet got much too familiar much too quickly. So to remedy
    this, I designed this new game where you go head on with a fellow co-worker!
    Oh it's a quite simple game, when you see those three lights all light up,
    you click the button! What happens when you click the button? Well, it
    depends who clicked it first. I'll let you figure out the rest. Toodlepip!
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Place two prisoners on either end</li>
      <li>Explain the game</li>
      <li>Press the start button</li>
      <li>Wait for one prisoner to die</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}This is reaction, the three lights in the middle will
    appear over time. Once the green shows up, click E on the white box as
    quickly as possible. The prisoner who presses their button first will win,
    pushing your button early will make you lose. Starting now.
  {/snippet}
</GameSlide>
