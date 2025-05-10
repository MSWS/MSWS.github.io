<script>
  import logo from "$lib/assets/LOGO.png";

  let { header = null } = $props();
</script>

<nav class="flex w-full h-20 mt-2 mb-0 md:ml-2 justify-center md:justify-start">
  <div
    class="size-full bg-cover bg-center max-w-20"
    style="background-image: url({logo});"
  >
    <a href="/" aria-label="Home">
      <i
        class="fa-solid fa-house text-5xl text-white/80 content-center text-center size-full bg-clip-text
        hover:text-6xl hover:text-white transition-normal duration-150"
      ></i>
    </a>
  </div>

  {@render header?.()}
</nav>
