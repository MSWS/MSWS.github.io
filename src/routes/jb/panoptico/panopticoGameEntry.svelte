<script lang="ts">
  import type { Snippet } from "svelte";

  let { name, emotes, index = 0 }: {
    name: string;
    emotes?: Snippet;
    index?: number;
  } = $props();
</script>

<div class="group relative flex flex-col items-center cursor-default select-none" style="width: 80px;">

  <!-- Cell card -->
  <div class="
    relative w-full
    bg-[#0d1117] border border-[#2a3a4a]
    group-hover:border-amber-500/60
    group-hover:shadow-[0_0_14px_rgba(251,191,36,0.15),inset_0_0_8px_rgba(251,191,36,0.04)]
    transition-all duration-300
    px-1 py-1.5
  ">
    <!-- Corner index marker -->
    <span class="absolute top-0.5 left-1 text-[8px] text-[#2a4a6a] group-hover:text-amber-600/60 font-mono transition-colors duration-300 leading-none">
      {String(index + 1).padStart(2, "0")}
    </span>

    <!-- Top-right corner decoration -->
    <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#2a3a4a] group-hover:border-amber-500/50 transition-colors duration-300"></div>
    <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#2a3a4a] group-hover:border-amber-500/50 transition-colors duration-300"></div>

    <!-- Game name -->
    <p class="text-center text-[9.5px] leading-tight font-mono text-[#8aa0b0] group-hover:text-amber-200 transition-colors duration-300 mt-2 px-0.5 tracking-wide uppercase">
      {name}
    </p>
  </div>

  <!-- Connector dot -->
  <div class="w-1.5 h-1.5 rounded-full bg-[#2a3a4a] group-hover:bg-amber-500 transition-colors duration-300 mt-0.5"></div>

  <!-- Badges -->
  {#if emotes}
    <div class="flex flex-wrap gap-0.5 justify-center mt-0.5 max-w-full">
      {@render emotes()}
    </div>
  {/if}
</div>