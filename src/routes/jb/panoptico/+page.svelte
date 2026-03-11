<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Navbar from "../../navbar.svelte";
    import PanopticoGameEntry from "./panopticoGameEntry.svelte";
    import FirstGame from "../badges/firstGame.svelte";
    import SupportsTeams from "../badges/supportsTeams.svelte";
    import RequiresHp from "../badges/requiresHp.svelte";
    import KillsPlayers from "../badges/killsPlayers.svelte";

    import Panoptico1JPG from "$lib/assets/panoptico/panoptico1.jpg";
    import Panoptico2JPG from "$lib/assets/panoptico/panoptico2.jpg";
    import Panoptico3JPG from "$lib/assets/panoptico/panoptico3.jpg";
    import Panoptico4JPG from "$lib/assets/panoptico/panoptico4.jpg";

    const games: {
        name: string;
        badges: Array<
            "firstGame" | "supportsTeams" | "requiresHp" | "killsPlayers"
        >;
    }[] = [
        { name: "Race", badges: ["firstGame"] },
        { name: "Strafe Race", badges: ["firstGame"] },
        { name: "Long Jump", badges: [] },
        { name: "BHop", badges: ["firstGame"] },
        { name: "Climb", badges: ["firstGame"] },
        { name: "Invis Climb", badges: ["firstGame"] },
        { name: "Reverse Climb", badges: [] },
        { name: "Surf", badges: ["firstGame"] },
        { name: "Dropdown", badges: ["requiresHp", "firstGame"] },
        { name: "Breakfloor", badges: ["requiresHp", "killsPlayers"] },
        { name: "Wipeout", badges: ["requiresHp", "killsPlayers"] },
        { name: "Dodge Course", badges: ["requiresHp"] },
        { name: "Gun Toss", badges: [] },
        { name: "Bullet Hell", badges: ["requiresHp", "killsPlayers"] },
        { name: "Jump Rope", badges: ["requiresHp", "firstGame"] },
        { name: "Clicker", badges: ["firstGame"] },
        { name: "Memory", badges: ["killsPlayers", "firstGame"] },
        { name: "Hide & Seek", badges: ["supportsTeams", "firstGame"] },
        { name: "Soccer", badges: ["supportsTeams", "firstGame"] },
        { name: "Trivia", badges: ["firstGame"] },
        { name: "Territory", badges: ["supportsTeams", "firstGame"] },
    ];

    const total = games.length;
    const ringRadius = 42; // % of container

    function gamePos(i: number) {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
        return {
            x: 50 + ringRadius * Math.cos(angle),
            y: 50 + ringRadius * Math.sin(angle),
            angle: (i / total) * 360 - 90,
        };
    }

    // Spoke endpoints for SVG (as % of 100x100 viewBox)
    function spoke(i: number) {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
        return {
            x1: 50 + 18 * Math.cos(angle),
            y1: 50 + 18 * Math.sin(angle),
            x2: 50 + 38 * Math.cos(angle),
            y2: 50 + 38 * Math.sin(angle),
        };
    }

    // Scanline flicker
    let scanY = $state(0);
    let scanInterval: ReturnType<typeof setInterval>;

    onMount(() => {
        scanInterval = setInterval(() => {
            scanY = Math.random() * 100;
        }, 80);
    });
    onDestroy(() => clearInterval(scanInterval));
</script>

<svelte:head>
    <script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
    ></script>
</svelte:head>

<!-- Dot-grid background -->
<div
    class="min-h-screen bg-[#070b0f] text-[#8aa0b0] font-mono relative overflow-x-hidden"
    style="background-image: radial-gradient(circle, #1a2a3a 1px, transparent 1px); background-size: 28px 28px;"
>
    <!-- Ambient vignette -->
    <div
        class="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_100%)] z-0"
    ></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 py-4">
        <!-- Navbar -->
        <div class="mb-6">
            <Navbar>
                {#snippet header()}
                    <div class="flex items-center gap-2 pr-2 font-mono w-full justify-end">
                        <span
                            class="text-[10px] text-[#2a5a7a] tracking-widest uppercase"
                            >map_id:</span
                        >
                        <span
                            class="text-amber-400 tracking-widest uppercase text-sm border border-amber-500/30 px-2 py-0.5"
                        >
                            3660237010
                        </span>
                    </div>
                {/snippet}
            </Navbar>
        </div>

        <!-- Header block -->
        <div class="border border-[#1a2a3a] mb-6 relative">
            <div
                class="absolute top-0 left-4 -translate-y-1/2 bg-[#070b0f] px-2 text-[10px] tracking-[0.3em] text-[#2a5a7a] uppercase"
            >
                classified // map profile
            </div>
            <div
                class="p-4 pt-5 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start"
            >
                <div>
                    <h1
                        class="text-2xl md:text-3xl tracking-[0.2em] text-[#c8d8e8] uppercase mb-1"
                    >
                        <span class="text-gray-400">Jb</span><span
                            class="text-gray-500">_</span
                        >Panoptico<span class="text-gray-500">_</span><span
                            class="text-amber-400">MS</span
                        >
                    </h1>
                    <p class="text-xs text-[#4a6a7a] leading-relaxed max-w-lg">
                        A map built on the architecture of Bentham's panopticon
                        — one central tower, surrounded by enemies, and always
                        watched.
                        <a
                            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3660237010"
                            class="text-amber-500/80 hover:text-amber-300 transition-colors ml-1 underline underline-offset-2"
                        >
                            → workshop
                        </a>
                    </p>
                </div>
                <div
                    class="text-[10px] text-[#2a4a5a] grid grid-cols-2 gap-x-6 gap-y-0.5 self-start mt-1"
                >
                    <span>GAMES</span><span class="text-[#4a8a9a]">{total}</span
                    >
                    <span>THEME</span><span class="text-[#4a8a9a]">PRISON</span>
                    <span>STATUS</span><span class="text-amber-500/70"
                        >ACTIVE</span
                    >
                </div>
            </div>
        </div>

        <!-- ── Main diagram ── -->
        <div
            class="relative mx-auto mb-8"
            style="width: min(92vw, 660px); height: min(92vw, 660px);"
        >
            <!-- Blueprint SVG layer — rings, spokes, tick marks -->
            <svg
                class="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
            >
                <!-- Outer guide ring -->
                <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="#0d1f2d"
                    stroke-width="0.3"
                    stroke-dasharray="1 2"
                />
                <!-- Game ring -->
                <circle
                    cx="50"
                    cy="50"
                    r={ringRadius}
                    fill="none"
                    stroke="#1a2e3e"
                    stroke-width="0.25"
                />
                <!-- Mid ring -->
                <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="#0f1e2d"
                    stroke-width="0.2"
                    stroke-dasharray="0.5 1.5"
                />
                <!-- Inner ring (around carousel) -->
                <circle
                    cx="50"
                    cy="50"
                    r="18"
                    fill="none"
                    stroke="#1a2e3e"
                    stroke-width="0.3"
                />

                <!-- Spokes -->
                {#each games as _, i}
                    {@const s = spoke(i)}
                    <line
                        x1={s.x1}
                        y1={s.y1}
                        x2={s.x2}
                        y2={s.y2}
                        stroke="#1a3040"
                        stroke-width="0.2"
                    />
                    <!-- Tick on outer ring -->
                    {@const angle = (i / total) * 2 * Math.PI - Math.PI / 2}
                    <circle
                        cx={50 + ringRadius * Math.cos(angle)}
                        cy={50 + ringRadius * Math.sin(angle)}
                        r="0.6"
                        fill="#1e3a4a"
                    />
                {/each}

                <!-- Cardinal markers -->
                {#each [0, 90, 180, 270] as deg}
                    {@const r = (deg * Math.PI) / 180}
                    <text
                        x={50 + 45 * Math.cos(r)}
                        y={50 + 45 * Math.sin(r)}
                        text-anchor="middle"
                        dominant-baseline="middle"
                        font-size="2"
                        fill="#1a3040"
                        font-family="monospace">{deg}°</text
                    >
                {/each}
            </svg>

            <!-- Game entries positioned around ring -->
            {#each games as game, i}
                {@const pos = gamePos(i)}
                <div
                    class="absolute"
                    style="left: {pos.x}%; top: {pos.y}%; transform: translate(-50%, -50%);"
                >
                    <PanopticoGameEntry name={game.name} index={i}>
                        {#snippet emotes()}
                            {#if game.badges.includes("firstGame")}<FirstGame
                                />{/if}
                            {#if game.badges.includes("supportsTeams")}<SupportsTeams
                                />{/if}
                            {#if game.badges.includes("requiresHp")}<RequiresHp
                                />{/if}
                            {#if game.badges.includes("killsPlayers")}<KillsPlayers
                                />{/if}
                        {/snippet}
                    </PanopticoGameEntry>
                </div>
            {/each}

            <!-- Center surveillance monitor -->
            <div
                class="absolute rounded-full overflow-hidden z-10 border border-[#1a3040]"
                style="
          inset: 20%;
          box-shadow: 0 0 0 1px #0d1f2d, 0 0 40px rgba(0,0,0,0.9), inset 0 0 20px rgba(0,0,0,0.5);
        "
            >
                <!-- Swiper carousel -->
                <swiper-container
                    autoplay-delay="3500"
                    loop="true"
                    speed="700"
                    effect="creative"
                    creative-effect={JSON.stringify({
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, -45],
                            scale: 0,
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 45],
                            scale: 0,
                        },
                    })}
                    class="w-full h-full"
                >
                    {#each [Panoptico1JPG, Panoptico2JPG, Panoptico3JPG, Panoptico4JPG] as img}
                        <swiper-slide>
                            <img
                                src={img}
                                class="w-full h-full object-cover opacity-80"
                                alt="jb_panoptico_ms"
                            />
                        </swiper-slide>
                    {/each}
                </swiper-container>

                <!-- Scanline overlay -->
                <div
                    class="absolute inset-0 pointer-events-none z-20"
                    style="background: repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px);"
                ></div>

                <!-- Moving scanline -->
                <div
                    class="absolute inset-x-0 h-px bg-amber-400/10 pointer-events-none z-20 transition-none"
                    style="top: {scanY}%"
                ></div>

                <!-- Corner brackets -->
                <div
                    class="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/40 pointer-events-none z-30"
                ></div>
                <div
                    class="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/40 pointer-events-none z-30"
                ></div>
                <div
                    class="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/40 pointer-events-none z-30"
                ></div>
                <div
                    class="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/40 pointer-events-none z-30"
                ></div>

                <!-- Monitor label -->
                <div
                    class="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none z-30"
                >
                    <span
                        class="text-[8px] font-mono tracking-widest text-amber-400/50 uppercase"
                    >
                        ◉ live
                    </span>
                </div>
            </div>
        </div>

        <!-- Mobile game list fallback -->
        <div class="md:hidden border border-[#1a2a3a] mb-6">
            <div
                class="px-3 py-1.5 border-b border-[#1a2a3a] text-[10px] tracking-widest text-[#2a5a7a] uppercase"
            >
                cell manifest
            </div>
            <div class="grid grid-cols-3 gap-px bg-[#0d1520]">
                {#each games as game, i}
                    <div class="bg-[#070b0f] px-2 py-2 text-center">
                        <span class="block text-[8px] text-[#1a3a4a] mb-0.5"
                            >{String(i + 1).padStart(2, "0")}</span
                        >
                        <span
                            class="text-[10px] text-[#6a8a9a] uppercase tracking-wide"
                            >{game.name}</span
                        >
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
