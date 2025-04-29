<script>
  import GameSlide from "../gameSlide.svelte";
  import DoorShootable from "../../badges/doorShootable.svelte";
  import SupportsTeams from "../../badges/supportsTeams.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
</script>

<GameSlide bgUrl="$lib/assets/stanley/clicker.jpg" gameName="ByteClicker">
  {#snippet centerHeader()}
    <DoorShootable></DoorShootable>
    <SupportsTeams></SupportsTeams>
    <FirstGame></FirstGame>
  {/snippet}
  {#snippet description()}
    Want to learn what our main protagonist Stanley does throughout his
    workweek? Get in one of these grand cubicles and start clicking! You won't
    be able to stop clicking these buttons or those buttons; upgrade your
    clicking power and get the highest for clickers' sake!
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Gather prisoners into cubicles</li>
      <li>Set desired time to play for</li>
      <li>Press green and click [E]!</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is ByteClicker, click E on the monitor to get bytes. Purhcase upgrades
    on the left/right, we'll be taking the N highest, starting now.
  {/snippet}
</GameSlide>
