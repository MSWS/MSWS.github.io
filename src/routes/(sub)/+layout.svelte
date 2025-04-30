<script>
  let { children } = $props();

  import "../../app.css";
  import logo from "$lib/assets/LOGO.png";
</script>

<nav class="size-20 m-4 mb-0 ml-auto mr-auto md:ml-4">
  <!-- <img src={logo} alt="logo" class="pr-2" />
  <div class="text-2xl self-center text-black/80">HOME</div> -->
  <div
    class="size-full bg-cover bg-center"
    style="background-image: url({logo});"
  >
    <a href="/" aria-label="Home">
      <i
        class="fa-solid fa-house text-5xl text-white/80 content-center text-center size-full bg-clip-text
        hover:text-6xl hover:text-white transition-normal duration-150"
      ></i>
    </a>
  </div>
</nav>

{@render children()}
