<script lang="ts">
  import logo from "$lib/assets/LOGO.png";
  import spigot from "$lib/assets/spigot.png";
  import coffee from "$lib/assets/bmc-logo.svg";
  import gitea from "$lib/assets/gitea.webp";
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
          <p>I'm <span class="font-bold">MSWS</span></p>
        </div>
        <br class="sm:invisible" />
        <span class="text-sm">a.k.a Isaac</span>
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
      class="flex flex-row gap-x-2 md:gap-x-4 rounded-xl p-2 m-4 items-center bg-black/5 hover:bg-black/10 min-w-max transition-colors duration-300"
    >
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
      <div class="flex p-2 justify-end">
        <div class="text-right">
          <p class="text-2xl font-semibold">
            <i class="fa-solid fa-person-rifle text-csorange"></i> Jailbreak
          </p>
          <p>
            A Counter-Strike 2 gamemode involving prisoners, guards, and guns.
          </p>
        </div>
        <div class="inline-flex bg-csorange ml-2 w-4"></div>
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
          <div class="flex-col w-full gap-y-2 m-4">
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
            class="flex-col p-4 bg-csorange content-evenly font-bold text-center justify-around text-black/90 text-shadow-lg"
          >
            <div>M</div>
            <div>A</div>
            <div>P</div>
            <div>S</div>
          </div>
          <div class="flex-col w-full h-64 md:h-96 lg:h-128">
            <div class="group h-1/2">
              <a href="/jb/stanley">
                <div
                  class="bg-[url('$lib/assets/stanley/stanley.jpg')] bg-cover bg-center size-full
              hover:scale-y-105 hover:bg-blend-darken hover:bg-black/50 transition-all duration-200"
                >
                  <span
                    class="flex size-full items-center justify-center opacity-0 group-hover:opacity-100 duration-200 text-amber-200 font-bold text-2xl"
                    >jb_stanley</span
                  >
                </div>
              </a>
            </div>
            <div class="group h-1/2">
              <a href="/jb/tetris">
                <div
                  class="bg-[url('https://images.steamusercontent.com/ugc/29945053257212218/DAC345DD9E93FE89D3B95E6F3D5B337EF11445D8/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')] bg-cover bg-position-[center_-4rem] size-full
              hover:scale-y-105 hover:bg-blend-darken hover:bg-black/50 transition-all duration-200"
                >
                  <span
                    class="flex size-full items-center justify-center opacity-0 group-hover:opacity-100 duration-200 text-red-300 font-bold text-2xl"
                    >jb_tetris</span
                  >
                </div>
              </a>
            </div>
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
