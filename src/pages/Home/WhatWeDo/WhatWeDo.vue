<script setup>
import AudemyStudent from '../../../assets/images/audemy-student-resize.png';
import StudentMinecraft from '../../../assets/images/student-minecraft-resized.png';
import BuzzleHand from '../../../assets/images/buzzlehand.png';
import CrystalWithGroups from '../../../assets/images/crystal-with-groups-resized.jpg';

// List of 'What We Do Cards' Data (1 - 4)
const cardsData = [
  {
    borderColors:
      'from-blue-500/10 to-purple-600/10 border-blue-500/20 group-hover:border-blue-400/40',
    link: '/game-zone-landing-page',
    title: 'Accessible Games Library',
    titleHover: 'hover:text-blue-400',
    titleClasses: 'from-blue-500 to-purple-600',
    caption:
      "We've built 50+ AI-powered, fully accessible games — from word puzzles to strategy titles!",
    imgSrc: AudemyStudent,
  }, // 1. Accessible Games Library
  {
    borderColors:
      'from-green-500/10 to-blue-600/10 border-green-500/20 group-hover:border-green-400/40',
    link: '/game-toolkit',
    title: 'Mainstream Game Toolkits',
    titleHover: 'hover:text-green-400',
    titleClasses: 'from-green-500 to-blue-600',
    caption:
      "We've created 100+ accessibility toolkits that adapt games like Valorant (Riot), Minecraft (Microsoft), and Roblox.",
    imgSrc: StudentMinecraft,
  }, // 2. Mainstream Game Toolkits
  {
    borderColors:
      'from-purple-500/10 to-pink-600/10 border-purple-500/20 group-hover:border-purple-400/40',
    link: '/audio-console',
    title: 'Buzzle: Audio-Only Console',
    titleHover: 'hover:text-purple-400',
    titleClasses: 'from-purple-500 to-pink-600',
    caption:
      "The world's first audio-only gaming console, built from the ground up for blind players.",
    imgSrc: BuzzleHand,
  }, // 3. Buzzle - Audio-Only Console
  {
    borderColors:
      'from-orange-500/10 to-red-600/10 border-orange-500/20 group-hover:border-orange-400/40',
    link: '/accessibility-studio',
    title: 'Audemy Accessibility Studio',
    titleHover: 'hover:text-orange-400',
    titleClasses: 'from-orange-500 to-red-600',
    caption:
      'We collaborate with indie and mainstream game developers to integrate accessibility into their titles from day one.',
    imgSrc: CrystalWithGroups,
  }, // 4. Audemy Accessibility Studio
];
</script>

<template>
  <!-- NOTE: Used 'wwd' prefix for 'What We Do' Tailwind classes -->
  <div class="py-16 mobile:py-8 font-poppins">
    <div>
      <div class="text-center my-10">
        <div class="inline-block relative">
          <h2 class="page-header relative z-10">What We Do</h2>
        </div>
      </div>
      <!-- Responsive Grid: 1 Column (Mobile - Small); 2 Cols (Medium); 4 Cols (Large) -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-10 mx-10 lg:mx-0"
      >
        <div class="group relative p-4" v-for="(card, n) in cardsData" :key="n">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            :class="['wwd-card-bg-border', card.borderColors]"
          ></div>
          <div class="wwd-card-flex">
            <div class="flex-1 text-center lg:py-5">
              <a :href="card.link" class="block">
                <h3 :class="['wwd-card-title', card.titleHover]">
                  <span
                    :class="[
                      'bg-gradient-to-r',
                      'bg-clip-text',
                      'text-transparent',
                      card.titleClasses,
                    ]"
                    >{{ n + 1 }}. {{ card.title }}
                  </span>
                </h3>
              </a>
              <p class="wwd-card-caption">
                {{ card.caption }}
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="mt-auto flex justify-center" aria-hidden="true">
              <div class="wwd-card-image-filter-group">
                <img :src="card.imgSrc" alt="" class="wwd-card-image" />
                <div class="wwd-card-image-filter"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
