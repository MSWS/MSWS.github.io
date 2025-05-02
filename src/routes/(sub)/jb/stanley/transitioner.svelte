<script>
  import { blur, crossfade, fade, fly, scale, slide } from "svelte/transition";

  let { content } = $props();
</script>

{#key content}
  {@render content()}
{/key}
