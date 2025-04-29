<script>
  export let bgUrl;
</script>

<div class="flex bg-[url('{bgUrl}')] bg-cover bg-center h-full w-full p-4">
  <!-- <img src={bgImg} alt="Game Background" class="w-full h-full object-cover" /> -->
  <div class="text-4xl">
    <slot>The Game</slot>
  </div>
</div>
