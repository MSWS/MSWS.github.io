<script>
  let {
    bgUrl,
    description,
    instructions,
    gameName,
    centerHeader,
    wardenScript,
  } = $props();
</script>

<div
  class="flex flex-col bg-[url('{bgUrl}')] bg-cover bg-center h-full w-full p-4"
>
  <div class="flex text-4xl bg-black/20 p-4 h-fit w-full">
    <span class="w-1/3">
      {gameName}
    </span>
    <span class="text-center w-1/3">
      {@render centerHeader?.()}
    </span>
    <span class="text-right w-1/3">How to Play</span>
  </div>
  <div class="text-2xl h-full">
    <div class="flex flex-row h-full">
      <p class="w-1/2">
        {@render description?.()}
      </p>
      <div class="flex flex-col w-1/2 text-right">
        {@render instructions?.()}
        {#if wardenScript}
          <span class="mt-auto text-3xl">Warden Script</span>
          <span class="text-lg text-justify">
            {@render wardenScript?.()}
          </span>
        {/if}
      </div>
    </div>
  </div>
</div>
