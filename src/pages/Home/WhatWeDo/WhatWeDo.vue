<script setup>
import AudemyStudent from '../../../assets/images/audemy student.png';
import StudentMinecraft from '../../../assets/images/studentminecraft.png';
import BuzzleHand from '../../../assets/images/buzzlehand.png';
import CrystalWithGroups from '../../../assets/images/crystalwith groups.jpeg';
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
        <!-- 1. Accessible Games Library -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="wwd-card-bg-border from-blue-500/10 to-purple-600/10 border-blue-500/20 group-hover:border-blue-400/40"
          ></div>
          <div class="wwd-card-flex">
            <div class="flex-1 text-center lg:py-5">
              <a href="/game-zone-landing-page" class="block">
                <h3 class="wwd-card-title hover:text-blue-400">
                  <span
                    class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                    >1. Accessible Games Library</span
                  >
                </h3>
              </a>
              <p class="wwd-card-caption">
                We've built 50+ AI-powered, fully accessible games — from word
                puzzles to strategy titles!
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="mt-auto flex justify-center" aria-hidden="true">
              <div class="wwd-card-image-filter-group">
                <img :src="AudemyStudent" alt="" class="wwd-card-image" />
                <div class="wwd-card-image-filter"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Mainstream Game Toolkits -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="wwd-card-bg-border from-green-500/10 to-blue-600/10 border-green-500/20 group-hover:border-green-400/40"
          ></div>
          <div class="wwd-card-flex">
            <div class="flex-1 text-center lg:py-5">
              <a href="/game-toolkit" class="block">
                <h3 class="wwd-card-title hover:text-green-400">
                  <span
                    class="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                    >2. Mainstream Game Toolkits</span
                  >
                </h3>
              </a>
              <p class="wwd-card-caption">
                We've created 100+ accessibility toolkits that adapt games like
                Valorant (Riot), Minecraft (Microsoft), and Roblox.
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="mt-auto flex justify-center" aria-hidden="true">
              <div class="wwd-card-image-filter-group">
                <img :src="StudentMinecraft" alt="" class="wwd-card-image" />
                <div class="wwd-card-image-filter"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Buzzle –  Audio-Only Console -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="wwd-card-bg-border from-purple-500/10 to-pink-600/10 border-purple-500/20 group-hover:border-purple-400/40"
          ></div>
          <div class="wwd-card-flex">
            <div class="flex-1 text-center lg:py-5">
              <a href="/audio-console" class="block">
                <h3 class="wwd-card-title hover:text-purple-400">
                  <span
                    class="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent"
                    >3. Buzzle: Audio-Only Console</span
                  >
                </h3>
              </a>
              <p class="wwd-card-caption">
                The world's first audio-only gaming console, built from the
                ground up for blind players.
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="mt-auto flex justify-center" aria-hidden="true">
              <div class="wwd-card-image-filter-group">
                <img :src="BuzzleHand" alt="" class="wwd-card-image" />
                <div class="wwd-card-image-filter"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Audemy Accessibility Studio -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="wwd-card-bg-border from-orange-500/10 to-red-600/10 border-orange-500/20 group-hover:border-orange-400/40"
          ></div>
          <div class="wwd-card-flex">
            <div class="flex-1 text-center lg:py-5">
              <a href="/accessibility-studio" class="block">
                <h3 class="wwd-card-title hover:text-orange-400">
                  <span
                    class="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                    >4. Audemy Accessibility Studio</span
                  >
                </h3>
              </a>
              <p class="wwd-card-caption">
                We collaborate with indie and mainstream game developers to
                integrate accessibility into their titles from day one.
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="mt-auto flex justify-center" aria-hidden="true">
              <div class="wwd-card-image-filter-group">
                <img :src="CrystalWithGroups" alt="" class="wwd-card-image" />
                <div class="wwd-card-image-filter"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
