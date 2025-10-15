<script setup>
import sponsorsData from '../../../assets/sponsorsDB/sponsors.json';
import SponsorsCarousel from './SponsorsCarousel/SponsorsCarousel.vue';
</script>

<template>
  <div class="w-full mobile:my-10 sm:my-32 flex flex-col gap-y-10 items-center">
    <h1 class="page-header-accent">SPONSORS THAT SUPPORT US, AMONG OTHERS:</h1>
    <!-- Sponsors RWD Layout: 
      - Mobile only: Hidden (Switches to <SponsorsCarousel/> UI)
      - Small: 2 cols
      - Medium: 3 cols
      - Large+ screens: 4 cols 
    -->
    <div class="hidden sm:block w-full">
      <div
        class="w-full scroll-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 items-center justify-center text-center my-5"
      >
        <!-- Loop through sponsors dynamically -->
        <div
          v-for="(sponsor, index) in sponsorsData.sponsors"
          :key="index"
          class="w-full h-full flex justify-content mx-auto"
        >
          <img
            :src="sponsor.src"
            :alt="sponsor.alt"
            :class="[
              'h-auto mx-auto object-contain',
              sponsor.isLogoWide === 'true'
                ? 'w-1/4 md:w-[30%] lg:w-[33%]'
                : 'w-1/2 md:w-[65%] lg:w-[70%]',
            ]"
          />
        </div>
      </div>
    </div>
    <div class="block sm:hidden w-full">
      <SponsorsCarousel />
    </div>
  </div>
</template>
