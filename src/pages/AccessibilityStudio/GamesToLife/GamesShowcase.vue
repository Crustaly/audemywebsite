<template>
  <div
    :class="[
      'z-10 font-poppins my-10 py-20',
      'relative flex flex-col gap-y-12 items-center self-center',
    ]"
  >
    <!-- Section Title -->
    <div class="flex flex-col gap-y-3 mobile:px-5 text-center relative">
      <h2 class="page-header">Games we've helped bring to life</h2>
    </div>

    <!-- Carousel Area -->
    <div class="relative w-full px-4 mobile:px-2">
      <!-- Arrow button RWD: Down (mobile-medium) or Left (large+) -->
      <button
        @click="prev"
        :class="[arrowButtonClasses, 'left-2 md:left-[10%] lg:left-2']"
        aria-label="View previous game"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          aria-hidden="true"
          class="w-12 h-12 rotate-180"
        />
      </button>

      <!-- Game Cards -->
      <!-- Enable vertical (mobile-md) / horizontal (lg+) scrolling on desktop & mobile devices -->
      <div
        :class="[
          'h-[600px] w-full p-5',
          'flex flex-col lg:flex-row lg:flex-nowrap',
          'justify-center items-center justify-between md:gap-8 lg:gap-12 xl:justify-between',
          'overflow-y-auto lg:overflow-x-auto',
        ]"
      >
        <div
          v-for="(game, index) in visibleGames"
          :key="index"
          :class="[
            'game-resource-icon-card bg-cross-lines text-center duration-300',
            'mobile:px-4 mobile:py-6 px-6 py-8',
            'mobile:w-[280px] w-[80%] md:w-[50%] lg:w-[400px]',
            'h-[500px] md:h-[520px] lg:h-[550px]',
            'flex flex-col justify-start',
          ]"
        >
          <!-- Game Image -->
          <div
            :class="[
              'h-[150px] w-[230px] my-3 rounded-md',
              'overflow-hidden flex items-center justify-center',
            ]"
          >
            <img
              :src="game.image"
              aria-hidden="true"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Game Title & Description Container -->
          <div>
            <!-- Game Title -->
            <h3 class="text-xl font-semibold text-[#2A3338] mb-3">
              {{ game.title }}
            </h3>

            <!-- Game Description -->
            <div class="mb-4 px-1 flex-1">
              <p
                class="text-[16px] text-gray-700 leading-relaxed"
                v-html="game.description"
              ></p>
            </div>
          </div>

          <!-- Game Link -->
          <div class="mt-auto">
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

      <!-- Arrow button RWD: Up (mobile-medium) or Right (large+) -->
      <button
        @click="next"
        :class="[arrowButtonClasses, 'right-2 md:right-[10%] lg:right-2']"
        aria-label="View next game"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          aria-hidden="true"
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
      ' A challenging and fun accessible maze game <p class="mt-3">Designed for players with visual or motor impairments, featuring voice commands and audio and visual feedback.</p>',
    link: 'https://gd.games/nidhisakpal/echoquest',
  },
  {
    title: 'Eco Sim',
    image: '/assets/images/accessibility-studio/Ecosim.png',
    description:
      '<p><span class="text-primary-color font-semibold">1st place winner</span> of <span class="font-semibold">Audemy’s KatyYouthHacks</span> hackathon 2023</p> <p class="my-3"> Teaching ecological sustainability to children through a fun family-friendly game.</p>',
    link: 'https://devpost.com/software/ecosim-i1bq23',
  },
  {
    title: 'AgriPlant',
    image: '/assets/images/accessibility-studio/AgriPlant.png',
    description:
      '<p><span class="text-primary-color font-semibold">Best design</span> at <span class="font-semibold">Audemy’s KatyYouthHacks</span> hackathon 2023 <p class="mt-3">An interactive game that teaches players about agricultural sustainability.</p>',
    link: 'https://devpost.com/software/agriplant?_gl=1*sbugmv*_gcl_au*MTg0NTA1NTgxMy4xNzUyNjExMDkx*_ga*MTYxNzQzMzAwMy4xNzUyNjExMDky*_ga_0YHJK3Y10M*czE3NTYwNDIxMjAkbzMwJGcxJHQxNzU2MDQyMjE0JGo0NyRsMCRoMA',
  },
  {
    title: 'News Warrior',
    image: '/assets/images/accessibility-studio/NewsWarrior.png',
    description: 'A game to help students learn news literacy',
    link: 'https://devpost.com/software/news-warriors?_gl=1*z6d5d*_gcl_au*MTg0NTA1NTgxMy4xNzUyNjExMDkx*_ga*MTYxNzQzMzAwMy4xNzUyNjExMDky*_ga_0YHJK3Y10M*czE3NTYwNDIxMjAkbzMwJGcxJHQxNzU2MDQyNjY5JGo2MCRsMCRoMA',
  },
  {
    title: 'ASLingo',
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

/* Extracted shared RWD classes for carousel arrow buttons */
const arrowButtonClasses = [
  'z-10',
  'absolute',
  'top-1/2',
  '-translate-y-1/2',
  'rotate-[-90deg]',
  'lg:rotate-[0deg]',
  'hover:scale-125',
  'transition',
  'duration-300',
];
</script>
