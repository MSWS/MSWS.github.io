<script lang="ts">
  let { faType = "fa-solid", faEmote, desc, style = "" } = $props();
</script>

<div class="inline" title={desc}>
  <i
    class="{faType} {faEmote} bg-black/20 p-2 rounded-lg align-middle
  hover:scale-95 text-2xl {style}"
  ></i>
</div>
