<script>
  import FirstGame from "../../badges/firstGame.svelte";
  import GameSlide from "../gameSlide.svelte";
  import DropdownPhoto from "$lib/assets/stanley/dropdown.jpg";
  import DamagesPlayers from "../../badges/killsPlayers.svelte";
</script>

<GameSlide bgUrl={DropdownPhoto} gameName="Dropdown">
  {#snippet centerHeader()}
    <DamagesPlayers></DamagesPlayers>
  {/snippet}
  {#snippet description()}
    Please congralulate us on the completion of the not really bottomless pit.
    What makes this pit so special you ask? Well, we added some nice obstacles
    for you to hurt yourself on. Now, I'm not sure <i>why</i> you would want to touch
    these blocks, so maybe just ignore them. But if you do, I hope you enjoy the
    rest of your stay.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Get to the bottom of the pit without touching the obstacles</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is dropdown, your goal is to drop down the pit without touching the
    obstacles. We'll be taking all winners, good luck.
  {/snippet}
</GameSlide>
