<script>
  import DamagesPlayers from "../../badges/damagesPlayers.svelte";
  import FirstGame from "../../badges/firstGame.svelte";
  import GameSlide from "../gameSlide.svelte";
  import JeopardyPhoto from "$lib/assets/stanley/jeopardy.jpg";
</script>

<GameSlide bgUrl={JeopardyPhoto} gameName="Jeopardy!">
  {#snippet centerHeader()}
    <FirstGame></FirstGame>
  {/snippet}
  {#snippet description()}
    Now I know that brains were never your forte, but honestly, who doesn't love
    watching people make fools of themselves? You'll have everyone else
    absolutely chuckling soon Stanley. I trust you can read at least, surely
    your people taught you that much? Maybe read your alphabet books every now
    and then, I hear they're helpful for developed minds.
  {/snippet}
  {#snippet instructions()}
    <ol class="list-decimal list-inside">
      <li>Put prisoners in their own podiums</li>
      <li>Explain the rules of the game (look left)</li>
      <li>Shoot a question that a prisoner wants</li>
      <li class="text-red-500">Speak the answer to the question</li>
      <li>Click 'Start Timer' to allow prisoners to buzz in</li>
      <li>Prisoners may buzz in if they know the question</li>
      <li>If buzzed in, click correct or incorrect based on answer</li>
      <li>Repeat to desired limit</li>
    </ol>
  {/snippet}
  {#snippet wardenScript()}
    This is Jeopardy! I'll be reading out answers, and if you know the question
    to the answer, you can buzz in. We'll be playing until someone reaches N
    points, starting now.
  {/snippet}
</GameSlide>
