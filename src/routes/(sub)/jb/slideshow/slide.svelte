<script lang="ts">
  let { src: src, alt = "" } = $props();
</script>

<div class="relative bg-purple-300 w-full h-full">
  <img
    {src}
    {alt}
    class="opacity-20 absolute inset-0 w-full h-full object-cover"
  />
  <span
    class="absolute inset-0 flex items-center justify-start bg-red-600/50 text-white"
  >
    FOOBAR
  </span>
  <span
    class="absolute inset-0 flex items-center justify-end bg-orange-600/50 text-white"
  >
    FOOBAR
  </span>
</div>
