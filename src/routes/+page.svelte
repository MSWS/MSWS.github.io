<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import logo from "$lib/assets/LOGO.png";
  import spigot from "$lib/assets/spigot.png";
  import coffee from "$lib/assets/bmc-logo.svg";
  import gitea from "$lib/assets/gitea.webp";

  let hovered: null | number = $state(null);
  let autoIndex = $state(0);
  let intervalId: any = null;
  let timeoutId: any = null;
  let isMobile = $state(false);

  function getClipPath(i: number) {
    const first = i === 0;
    const last = i === panels.length - 1;
    const tl = first ? "0 0" : "80px 0";
    const tr = "100% 0";
    const br = last ? "100% 100%" : "calc(100% - 80px) 100%";
    const bl = "0 100%";
    return `polygon(${tl}, ${tr}, ${br}, ${bl})`;
  }

  const panels = [
    {
      href: "/jb/stanley",
      bg: "https://images.steamusercontent.com/ugc/29936585588745712/E48DD198260691C1D56751F12D49C335BA7D0604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      label: "jb_stanley",
      labelColor: "text-amber-200",
      isLocal: true,
    },
    {
      href: "/jb/tetris",
      bg: "https://images.steamusercontent.com/ugc/29945053257212218/DAC345DD9E93FE89D3B95E6F3D5B337EF11445D8/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      label: "jb_tetris",
      labelColor: "text-red-300",
      isLocal: false,
    },
    {
      href: "/jb/panoptico",
      bg: "https://files.msws.xyz/public/img/6aa4d98eeb915751.jpg?k=B6KAUX4P7ozhbFiF&cache",
      label: "jb_panoptico_ms",
      labelColor: "text-slate-300",
      isLocal: false,
    },
  ];

  // The active panel: manual hover wins on desktop, auto-cycle on mobile
  const active = $derived(
    hovered !== null ? hovered : isMobile ? autoIndex : null,
  );

  function startCycle() {
    timeoutId = setTimeout(() => {
      autoIndex = (autoIndex + 1) % panels.length;
      intervalId = setInterval(() => {
        autoIndex = (autoIndex + 1) % panels.length;
      }, 5000);
    }, 10000);
  }

  function stopCycle() {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    timeoutId = null;
    intervalId = null;
  }

  onMount(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    isMobile = mq.matches;

    if (isMobile) startCycle();

    mq.addEventListener("change", (e) => {
      isMobile = e.matches;
      if (isMobile) {
        startCycle();
      } else {
        stopCycle();
        autoIndex = 0;
      }
    });
  });

  onDestroy(() => stopCycle());
</script>

<div
  class="flex flex-col pt-4 md:pt-0 md:flex-row bg-gray-300 justify-center-safe gap-x-4"
>
  <div class="flex flex-col items-center justify-center">
    <div class="flex rounded-tr-4xl rounded-bl-4xl bg-amber-50 p-4 size-fit">
      <img
        src={logo}
        alt="Logo"
        class="size-32 mr-4 self-center hover:-rotate-5 transition-transform duration-500"
      />
      <div class="content-center">
        <span class="text-2xl">Hello, World</span>
        <div class="text-2xl">
          <p>I'm <span class="font-bold">Isaac</span></p>
        </div>
        <br class="sm:invisible" />
        <span class="text-sm">a.k.a MSWS</span>
        <div class="flex-row flex text-sm gap-x-1">
          <div class="flex-col">
            <div>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div>
              <i class="fa-brands fa-discord text-blue-800"></i>
            </div>
          </div>
          <div class="flex-col">
            <div>
              <a href="mailto:contact@msws.xyz">contact@msws.xyz</a>
            </div>
            <div>MSWS</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-row gap-x-2 md:gap-x-4 rounded-2xl p-2 py-1 m-4 items-center bg-black/5 hover:bg-black/10 min-w-max transition-colors duration-300"
    >
      <a
        href="https://msws.xyz/s/github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i
          class="fa-brands fa-github text-5xl hover:scale-110 transition-transform"
        ></i>
      </a>
      <a
        href="https://msws.xyz/s/yt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <i
          class="fa-brands fa-youtube text-5xl text-red-600 hover:scale-110
          transition-all saturate-30 hover:saturate-100"
        ></i>
      </a>
      <a
        href="https://msws.xyz/s/steam"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Steam"
      >
        <i
          class="fa-brands fa-steam text-5xl hover:scale-110
          text-transparent bg-clip-text
          bg-gradient-to-t from-blue-500 via-blue-900 to-blue-950
          transition-all saturate-30 hover:saturate-100"
        ></i>
      </a>
      <a
        href="https://msws.xyz/s/spigot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={spigot}
          alt="Spigot Logo"
          class="size-14 hover:scale-110 transition-transform
          saturate-30 hover:saturate-100"
        />
      </a>
      <a
        href="https://msws.xyz/s/donate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={coffee}
          alt="Buy Me a Coffee Logo"
          class="size-14 hover:scale-110 transition-transform
          saturate-30 hover:saturate-100"
        />
      </a>
    </div>
  </div>

  <div
    class="flex flex-col overflow-y-auto h-fit md:h-screen content-center-safe place-content-center-safe gap-y-3"
  >
    <div>
      <div class="flex flex-row p-2">
        <div class="bg-csblue mr-2 w-2"></div>
        <div class="flex w-full">
          <div>
            <p class="text-2xl font-semibold">
              <i class="fa-solid fa-masks-theater text-csblue"></i> Trouble in Terrorist
              Town
            </p>
            <p class="lg:whitespace-nowrap">
              A Counter-Strike 2 gamemode with innocents, traitors, and
              detectives.
            </p>
          </div>
          <div class="flex flex-col w-full justify-center-safe">
            <div class="flex justify-center-safe items-center">
              <a
                href="https://github.com/MSWS/TTT"
                class="font-bold text-blue-800 group hover:text-blue-700 transition-transform whitespace-nowrap"
              >
                <i
                  class="fa-brands fa-github text-lg group-hover:scale-110 transition-transform align-baseline"
                ></i>
                TTT</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex p-2 justify-end">
        <div class="text-right">
          <p class="text-2xl font-semibold">
            <i class="fa-solid fa-person-rifle text-csorange"></i> Jailbreak
          </p>
          <p>
            A Counter-Strike 2 gamemode involving prisoners, guards, and guns.
          </p>
        </div>
        <div class="inline-flex bg-csorange ml-2 w-2"></div>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="content-center pl-4">
            <p class="font-bold">Plugins</p>
            <p class="text-sm">
              Written in C# utilizing
              <a
                href="https://github.com/roflmuffin/CounterStrikeSharp"
                class="text-blue-800 hover:text-blue-700">CS#</a
              >.
            </p>
          </div>
          <div class="flex-col w-full m-4">
            <div class="flex">
              <div class="self-center text-center">
                <a
                  href="https://github.com/edgegamers/Jailbreak"
                  class="font-bold text-blue-800 group hover:text-blue-700 transition-transform whitespace-nowrap"
                >
                  <i
                    class="fa-brands fa-github text-lg group-hover:scale-110 transition-transform"
                  ></i>
                  Jailbreak</a
                >
              </div>
              <span class="block text-right w-full">
                The plugin for Jailbreak; handles game state, player management,
                and data storage.
                <br />
                <span class="opacity-75">
                  Automated CI / CD with GitHub Actions. Created with the help
                  of 15 contributors.
                </span>
              </span>
            </div>
            <div class="flex">
              <div class="self-center text-center">
                <a
                  href="https://github.com/edgegamers/Gangs"
                  class="font-bold text-blue-800 group hover:text-blue-700 transition-transform whitespace-nowrap"
                >
                  <i
                    class="fa-brands fa-github text-lg group-hover:scale-110 transition-transform"
                  ></i>
                  Gangs</a
                >
              </div>
              <span class="text-right w-full">
                An addon allowing players to create and join gangs with various
                perks.
                <br />
                <span class="opacity-75">
                  Innovated unit testing with .NET. Abstraction allows for
                  MySQL, Flatfile, SQLite, etc.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div
            class="flex-col p-2 bg-csorange content-evenly font-bold text-center justify-around text-black/90 text-shadow-lg"
          >
            <div>M</div>
            <div>A</div>
            <div>P</div>
            <div>S</div>
          </div>

          <div
            class="flex w-full h-64 md:h-80 overflow-hidden"
          >
            {#each panels as panel, i}
              <a
                href={panel.href}
                class="relative transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] -mr-20 last:mr-0"
                style:flex={active === i ? "3.5" : "1"}
                style:clip-path={getClipPath(i)}
                onmouseenter={() => (hovered = i)}
                onmouseleave={() => (hovered = null)}
              >
                <div
                  class="size-full bg-cover bg-center transition-all duration-500"
                  class:brightness-50={active === i}
                  style:background-image={panel.isLocal
                    ? `url('${panel.bg}')`
                    : `url("${panel.bg}")`}
                ></div>

                <div
                  class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
                  class:opacity-0={active !== i}
                  class:opacity-100={active === i}
                >
                  <span
                    class="font-bold text-2xl drop-shadow-lg {panel.labelColor}"
                  >
                    {panel.label}
                  </span>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <div class="p-2 bg-black/10 flex">
      <a href="https://git.msws.xyz/MS/admin-mode" class="flex h-full">
        <img
          src={gitea}
          alt="Gitea Logo"
          class="size-16 flex self-center items-center content-center justify-center mr-2
        hover:scale-110"
        /></a
      >
      <span>
        <p class="text-2xl">
          <a
            href="https://git.msws.xyz/MS/admin-mode"
            class="text-blue-800 hover:text-blue-700">Admin Mode</a
          >
          <i class="fa-solid fa-cube text-green-900"></i>
        </p>
        <p>
          A Minecraft plugin written in Java allowing staff to enter an <i
            >admin mode</i
          >.
        </p>
        <p>
          Integrates with
          <a
            href="https://www.spigotmc.org/resources/discordsrv.18494/"
            class="text-blue-700 hover:text-blue-600">DiscordSRV</a
          > for transparent logging to upper management.
        </p>
      </span>
    </div>
  </div>
</div>
