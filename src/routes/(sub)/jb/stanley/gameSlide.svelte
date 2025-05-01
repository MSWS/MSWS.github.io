<script>
  let {
    bgUrl,
    description,
    instructions,
    gameName,
    centerHeader,
    wardenScript = undefined,
  } = $props();
</script>

<div
  class="flex flex-col bg-cover bg-center h-full w-full p-4"
  style="background-image: url({bgUrl});"
>
  <div class="flex text-4xl bg-black/20 p-4 w-full place-items-center">
    <span class="w-full sm:w-1/2 md:w-1/3">
      {gameName}
    </span>
    <span
      class="flex md:text-center w-full sm:w-1/2 md:w-1/3 place-content-end md:place-content-center"
    >
      {@render centerHeader?.()}
    </span>
    <span class="hidden md:flex text-right w-1/3 place-content-end"
      >How to Play</span
    >
  </div>
  <div
    class="text-xl lg:text-2xl h-full text-justify bg-white/10 backdrop-blur-xs m-2 p-2 text-shadow-sm rounded-md"
  >
    <div class="flex flex-col md:flex-row gap-4">
      <p class="md:w-1/2">
        {@render description?.()}
      </p>
      <div class="flex flex-col md:w-1/2 md:items-end">
        <span class="md:hidden text-3xl bg-black/20 p-2">How to Play</span>
        {@render instructions?.()}
        {#if wardenScript}
          <div class="flex flex-col items-end">
            <span
              class="w-full bg-black/10 md:bg-transparent text-3xl text-right"
              >Warden Script</span
            >
            <span class="text-lg text-justify">
              {@render wardenScript?.()}
            </span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
