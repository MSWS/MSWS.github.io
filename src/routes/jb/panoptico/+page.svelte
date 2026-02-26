<script lang="ts">
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

    // Games positioned around the circle — order = clockwise from top
    const games: {
        name: string;
        badges?: Array<
            "firstGame" | "supportsTeams" | "requiresHp" | "killsPlayers"
        >;
    }[] = [
        { name: "Race", badges: ["firstGame"] },
        { name: "Strafe Race", badges: ["firstGame"] },
        { name: "Long Jump", badges: ["firstGame"] },
        { name: "BHop", badges: ["firstGame"] },
        { name: "Climb", badges: ["firstGame"] },
        { name: "Invis Climb", badges: ["firstGame"] },
        { name: "Reverse Climb", badges: ["killsPlayers", "requiresHp"] },
        { name: "Surf", badges: ["firstGame"] },
        { name: "Dropdown", badges: ["firstGame"] },
        { name: "Breakfloor", badges: ["killsPlayers"] },
        { name: "Wipeout", badges: ["requiresHp", "killsPlayers"] },
        { name: "Dodge Course", badges: ["requiresHp", "killsPlayers"] },
        { name: "Gun Toss", badges: [] },
        {
            name: "Bullet Hell",
            badges: ["firstGame", "requiresHp", "killsPlayers"],
        },
        { name: "Jump Rope", badges: ["requiresHp", "firstGame"] },
        { name: "Clicker", badges: ["firstGame"] },
        { name: "Memory", badges: ["killsPlayers"] },
        {
            name: "Hide and Seek",
            badges: [
                "supportsTeams",
                "firstGame",
                "requiresHp",
                "killsPlayers",
            ],
        },
        { name: "Soccer", badges: ["supportsTeams", "firstGame"] },
        { name: "Trivia", badges: ["firstGame"] },
        { name: "Territory", badges: ["supportsTeams", "firstGame"] },
    ];

    const total = games.length;
</script>

<svelte:head>
    <script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
    ></script>
</svelte:head>

<div class="min-h-screen bg-stone-950 text-stone-100">
    <!-- Radial line background decoration -->
    <div
        class="pointer-events-none fixed inset-0 opacity-5 overflow-hidden"
        aria-hidden="true"
    >
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {#each Array(24) as _, i}
                <line
                    x1="50%"
                    y1="50%"
                    x2={50 + 60 * Math.cos((i / 24) * 2 * Math.PI) + "%"}
                    y2={50 + 60 * Math.sin((i / 24) * 2 * Math.PI) + "%"}
                    stroke="white"
                    stroke-width="1"
                />
            {/each}
            <circle
                cx="50%"
                cy="50%"
                r="20%"
                fill="none"
                stroke="white"
                stroke-width="1"
            />
            <circle
                cx="50%"
                cy="50%"
                r="35%"
                fill="none"
                stroke="white"
                stroke-width="1"
            />
            <circle
                cx="50%"
                cy="50%"
                r="50%"
                fill="none"
                stroke="white"
                stroke-width="1"
            />
        </svg>
    </div>

    <div class="relative z-10 p-3 text-2xl">
        <!-- Navbar -->
        <div class="ml-2 md:ml-0 mb-4">
            <Navbar>
                {#snippet header()}
                    <span
                        class="text-stone-100 bg-stone-800/80 border border-stone-600 px-3 py-1 rounded-md tracking-widest text-lg uppercase"
                    >
                        jb_panoptico_ms
                    </span>
                {/snippet}
            </Navbar>
        </div>

        <!-- Description -->
        <div
            class="bg-stone-800/70 border border-stone-600 rounded-lg p-3 text-justify text-base md:text-lg tracking-wide mb-8 max-w-3xl mx-auto"
        >
            Step inside <em
                ><a
                    href="https://steamcommunity.com/sharedfiles/filedetails/"
                    class="text-amber-400 hover:text-amber-200"
                    >jb_panoptico_ms</a
                ></em
            > — a map built around the architecture of the panopticon, where every
            cell is visible from the tower at the center. Navigate the ring of minigames
            that surround the watching eye, if you dare.
        </div>

        <!-- ── Circular layout ── -->
        <div
            class="relative mx-auto mb-12"
            style="width: min(90vw, 680px); height: min(90vw, 680px);"
        >
            <!-- Outer ring label -->
            <div
                class="absolute inset-0 rounded-full border border-stone-700/40 pointer-events-none"
            ></div>
            <div
                class="absolute inset-[15%] rounded-full border border-stone-600/30 pointer-events-none"
            ></div>

            <!-- Game entries around the circle -->
            {#each games as game, i}
                {@const angle = (i / total) * 360 - 90}
                {@const rad = (angle * Math.PI) / 180}
                {@const radius = 45}
                {@const x = 50 + radius * Math.cos(rad)}
                {@const y = 50 + radius * Math.sin(rad)}
                <div
                    class="absolute"
                    style="left: {x}%; top: {y}%; transform: translate(-50%, -50%);"
                >
                <PanopticoGameEntry name={game.name} angle={(i / total) * 360 - 90}>
                        {#snippet emotes()}
                            {#if game.badges?.includes("firstGame")}<FirstGame
                                />{/if}
                            {#if game.badges?.includes("supportsTeams")}<SupportsTeams
                                />{/if}
                            {#if game.badges?.includes("requiresHp")}<RequiresHp
                                />{/if}
                            {#if game.badges?.includes("killsPlayers")}<KillsPlayers
                                />{/if}
                        {/snippet}
                    </PanopticoGameEntry>
                </div>
            {/each}

            <!-- Center image carousel — the "tower" -->
            <div
                class="absolute inset-[22%] rounded-full overflow-hidden border-2 border-stone-500 shadow-[0_0_40px_rgba(0,0,0,0.8)] z-10"
            >
                <!-- Replace your swiper-container with this -->
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
                                class="w-full h-full object-cover rounded-full"
                                alt="jb_panoptico_ms"
                            />
                        </swiper-slide>
                    {/each}
                </swiper-container>

                <!-- Center overlay label -->
                <div
                    class="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                >
                    <span
                        class="text-xs md:text-sm text-white/70 tracking-widest uppercase drop-shadow-lg"
                    >
                        panoptico
                    </span>
                </div>
            </div>
        </div>

        <!-- Mobile fallback grid (shown only when circle is too small to be usable) -->
        <div
            class="block md:hidden bg-stone-900/60 border border-stone-700 rounded-lg p-2 mt-4"
        >
            <p
                class="text-center text-sm text-stone-400 mb-3 tracking-wider uppercase"
            >
                Minigames
            </p>
            <div class="grid grid-cols-3 gap-1">
                {#each games as game}
                    <div
                        class="bg-stone-800/80 border border-stone-600 rounded p-2 text-center text-xs text-stone-200 tracking-wide"
                    >
                        {game.name}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
