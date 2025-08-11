<script setup>
import AudemyStudent from '../../../assets/images/audemy student.png';
import StudentMinecraft from '../../../assets/images/studentminecraft.png';
import BuzzleHand from '../../../assets/images/buzzlehand.png';
import CrystalWithGroups from '../../../assets/images/crystalwith groups.jpeg';
</script>

<template>
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
            class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
          ></div>
          <div
            class="relative z-10 flex flex-col mobile:flex-col-reverse gap-4"
          >
            <div class="flex-1 text-center lg:py-5">
              <a href="/game-zone-landing-page" class="block">
                <h3
                  class="text-lg mobile:text-xl font-semibold text-title mb-3 hover:text-blue-400 transition-colors duration-300 group-hover:scale-105 transform"
                >
                  <span
                    class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                    >1. Accessible Games Library</span
                  >
                </h3>
              </a>
              <p
                class="ftext-body text-sm mobile:text-base leading-6"
              >
                We've built 50+ AI-powered, fully accessible games — from word
                puzzles to strategy titles!
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="flex-1 flex justify-center" aria-hidden="true">
              <div
                class="w-[80%] mx-auto md:w-full relative group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  :src="AudemyStudent"
                  alt=""
                  class="aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-lg"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Mainstream Game Toolkits -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-xl border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300"
          ></div>
          <div
            class="relative z-10 flex flex-col mobile:flex-col-reverse gap-4"
          >
            <div class="flex-1 text-center lg:py-5">
              <a href="/game-toolkit" class="block">
                <h3
                  class="text-lg mobile:text-xl font-semibold text-title mb-3 hover:text-green-400 transition-colors duration-300 group-hover:scale-105 transform"
                >
                  <span
                    class="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                    >2. Mainstream Game Toolkits</span
                  >
                </h3>
              </a>
              <p
                class="text-body text-sm mobile:text-base leading-6"
              >
                We've created 100+ accessibility toolkits that adapt games like
                Valorant (Riot), Minecraft (Microsoft), and Roblox.
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="flex-1 flex justify-center" aria-hidden="true">
              <div
                class="w-[80%] mx-auto md:w-full relative group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  :src="StudentMinecraft"
                  alt=""
                  class="aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-lg"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Buzzle –  Audio-Only Console -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300"
          ></div>
          <div
            class="relative z-10 flex flex-col mobile:flex-col-reverse gap-4"
          >
            <div class="flex-1 text-center lg:py-5">
              <a href="/buzzle" class="block">
                <h3
                  class="text-lg mobile:text-xl font-semibold text-title mb-3 hover:text-purple-400 transition-colors duration-300 group-hover:scale-105 transform"
                >
                  <span
                    class="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent"
                    >3. Buzzle: Audio-Only Console</span
                  >
                </h3>
              </a>
              <p
                class="text-body text-sm mobile:text-base leading-6"
              >
                The world's first audio-only gaming console, built from the
                ground up for blind players.
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="flex-1 flex justify-center" aria-hidden="true">
              <div
                class="w-[80%] mx-auto md:w-full relative group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  :src="BuzzleHand"
                  alt=""
                  class="aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-lg"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Audemy Accessibility Studio -->
        <div class="group relative p-4">
          <!-- Decorative filter -->
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-xl border border-orange-500/20 group-hover:border-orange-400/40 transition-all duration-300"
          ></div>
          <div
            class="relative z-10 flex flex-col mobile:flex-col-reverse gap-4"
          >
            <div class="flex-1 text-center lg:py-5">
              <a href="/accessibility-studio" class="block">
                <h3
                  class="text-lg mobile:text-xl font-semibold text-title mb-3 hover:text-orange-400 transition-colors duration-300 group-hover:scale-105 transform"
                >
                  <span
                    class="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                    >4. Audemy Accessibility Studio</span
                  >
                </h3>
              </a>
              <p
                class="text-body text-sm mobile:text-base leading-6"
              >
                We collaborate with indie and mainstream game developers to
                integrate accessibility into their titles from day one.
              </p>
            </div>
            <!-- Decorative image and filter -->
            <div class="flex-1 flex justify-center" aria-hidden="true">
              <div
                class="w-[80%] mx-auto md:w-full relative group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  :src="CrystalWithGroups"
                  alt=""
                  class="aspect-video object-cover rounded-lg shadow-lg group-hover:shadow-xl"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-lg"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
