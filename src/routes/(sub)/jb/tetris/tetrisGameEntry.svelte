<script lang="ts">
  let { name, emotes = undefined } = $props();
</script>

<div class="flex flex-row w-full items-center">
  {#if emotes}
    <div class="w-1/2 text-center">{name}</div>
    <div class="w-1/2">
      {@render emotes?.()}
    </div>
  {:else}
    <div class="text-center w-full">{name}</div>
  {/if}
</div>
