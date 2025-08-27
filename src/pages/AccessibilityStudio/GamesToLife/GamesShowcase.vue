<template>
  <div
    class="font-poppins my-10 py-20 flex flex-col items-center gap-y-12 self-center relative z-10"
  >
    <!-- Section Title -->
    <div class="flex flex-col gap-y-3 mobile:px-5 text-center relative">
      <h2 class="page-header">Games we've helped bring to life</h2>
    </div>

    <!-- Carousel Area -->
    <div class="relative w-full max-w-[92rem] px-4 mobile:px-2">
      <!-- Left arrow -->
      <button
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:scale-125 transition"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          alt="Previous game"
          class="w-12 h-12 rotate-180"
        />
      </button>

      <!-- Game Cards -->
      <div
        class="flex flex-col lg:flex-row gap-3 lg:gap-6 xl:justify-between justify-center items-center overflow-hidden h-[550px] lg:h-auto p-5"
      >
        <div
          v-for="(game, index) in visibleGames"
          :key="index"
          class="game-resource-icon-card bg-cross-lines flex flex-col text-center px-6 py-8 mobile:px-4 mobile:py-6 mobile:w-full w-[80%] md:w-[50%] lg:w-[320px] h-[480px] duration-300"
        >
          <!-- Game Image -->
          <div
            class="h-[200px] mb-4 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
          >
            <img
              :src="game.image"
              aria-hidden="true"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Game Title -->
          <h3 class="text-xl font-semibold text-[#2A3338] mb-3">
            {{ game.title }}
          </h3>

          <!-- Game Description -->
          <div
            class="overflow-y-auto no-scrollbar max-h-[120px] mb-4 px-1 flex-1"
          >
            <p class="text-sm md:text-md text-gray-700 leading-relaxed">
              {{ game.description }}
            </p>
          </div>

          <!-- Game Link -->
          <div class="mt-3">
            <a
              :href="game.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-6 py-3 page-button blue-button"
              :aria-label="'Play ' + game.title"
            >
              <p class="block md:hidden">Play</p>
              <p class="hidden md:block">Play Game</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:scale-125 transition"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          alt="Next game"
          class="w-12 h-12"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const games = [
  {
    title: 'EchoQuest',
    image: '/assets/images/accessibility-studio/EchoQuest.png',
    description:
      ' A challenging & fun accessible game to ensure all children, regardless of visual or motor impairments, can enjoy and benefit from an engaging gameplay experience',
    link: 'https://gd.games/nidhisakpal/echoquest',
  },
  {
    title: 'Eco sim',
    image: '/assets/images/accessibility-studio/Ecosim.png',
    description:
      '1st place winner of Audemy’s KatyYouthHacks hackathon 2023, Teaching ecological sustainability to children through a fun family-friendly game.',
    link: 'https://devpost.com/software/ecosim-i1bq23',
  },
  {
    title: 'AgriPlant',
    image: '/assets/images/accessibility-studio/AgriPlant.png',
    description:
      'Best design at Audemy’s KatyYouthHacks hackathon 2023, An interactive game that teaches players about agricultural sustainability',
    link: 'https://devpost.com/software/agriplant?_gl=1*sbugmv*_gcl_au*MTg0NTA1NTgxMy4xNzUyNjExMDkx*_ga*MTYxNzQzMzAwMy4xNzUyNjExMDky*_ga_0YHJK3Y10M*czE3NTYwNDIxMjAkbzMwJGcxJHQxNzU2MDQyMjE0JGo0NyRsMCRoMA',
  },
  {
    title: 'News Warrior',
    image: '/assets/images/accessibility-studio/NewsWarrior.png',
    description: 'A game to help students learn news literacy',
    link: 'https://devpost.com/software/news-warriors?_gl=1*z6d5d*_gcl_au*MTg0NTA1NTgxMy4xNzUyNjExMDkx*_ga*MTYxNzQzMzAwMy4xNzUyNjExMDky*_ga_0YHJK3Y10M*czE3NTYwNDIxMjAkbzMwJGcxJHQxNzU2MDQyNjY5JGo2MCRsMCRoMA',
  },
  {
    title: 'Aslingo',
    image: '/assets/images/accessibility-studio/Aslingo.png',
    description: 'Learn American Sign Language (ASL) through fun and games',
    link: 'https://devpost.com/software/aslingo-s6xrc8?_gl=1*125v8gw*_gcl_au*MTg0NTA1NTgxMy4xNzUyNjExMDkx*_ga*MTYxNzQzMzAwMy4xNzUyNjExMDky*_ga_0YHJK3Y10M*czE3NTYwNDIxMjAkbzMwJGcxJHQxNzU2MDQzMDQ0JGo3JGwwJGgw',
  },
];

const currentIndex = ref(0);

const visibleGames = computed(() => {
  const total = games.length;
  return [
    games[(currentIndex.value + 0) % total],
    games[(currentIndex.value + 1) % total],
    games[(currentIndex.value + 2) % total],
  ];
});

function next() {
  currentIndex.value = (currentIndex.value + 1) % games.length;
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + games.length) % games.length;
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
