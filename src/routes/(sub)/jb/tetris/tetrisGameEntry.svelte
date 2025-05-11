<script lang="ts">
  let { name, emotes = undefined } = $props();
</script>

<div class="flex flex-col md:flex-row w-full bg-cyan-300/40 rounded-md">
  {#if emotes}
    <div class="w-full text-center md:w-fit md:text-justify">{name}</div>
    <div class="w-full md:w-fit text-center md:ml-auto md:mr-2 md:text-justify">
      {@render emotes?.()}
    </div>
  {:else}
    <div class="text-center w-full">{name}</div>
  {/if}
</div>
