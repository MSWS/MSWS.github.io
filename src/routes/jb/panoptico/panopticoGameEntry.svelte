<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        name,
        emotes,
        angle = -90,
    }: {
        name: string;
        emotes?: Snippet;
        angle?: number;
    } = $props();

    const norm = (((((angle % 360) + 360) % 360) + 180) % 360) - 180;
    const isBottom = norm > 0;

    const pathId = `arc-${name.replace(/\s+/g, "-")}-${Math.round(angle)}`;
</script>

<div class="group flex flex-col items-center cursor-default" style="gap: 3px;">
    <!-- Circle node with text inside -->
    <div
        class="
      relative size-20 flex-shrink-0
      rounded-full bg-stone-900 border border-stone-600
      shadow-[0_0_10px_rgba(0,0,0,0.6)]
      group-hover:border-amber-500/70
      group-hover:shadow-[0_0_16px_rgba(251,191,36,0.2)]
      transition-all duration-300
    "
    >
        <div
            class="absolute inset-1 rounded-full border border-stone-700/50 group-hover:border-amber-600/30 transition-colors duration-300"
        ></div>

        <!-- Curved text sitting inside the circle -->
        <svg
            class="absolute inset-0 w-full h-full overflow-visible opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            viewBox="-10 -10 120 120"
        >
            <defs>
                <path
                    id={pathId}
                    d={isBottom
                        ? `M 0,60 A 60,60 0 0,0 100,60`
                        : `M 0,40 A 60,60 0 0,1 100,40`}
                />
            </defs>
            <text
                text-anchor="middle"
                fill="rgb(214 211 209)"
                style="letter-spacing: 0.0px;"
                class="text-xl"
            >
                <textPath href="#{pathId}" startOffset="50%">{name}</textPath>
            </text>
        </svg>
        {#if emotes}
            <div class="absolute inline-flex">
                <div class="flex gap-0.5 justify-center scale-80">
                    {@render emotes()}
                </div>
            </div>
        {/if}
    </div>
</div>
