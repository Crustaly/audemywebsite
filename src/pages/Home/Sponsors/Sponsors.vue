<script setup>
import sponsorsData from '../../../assets/sponsorsDB/sponsors.json';
import SponsorsCarousel from './SponsorsCarousel/SponsorsCarousel.vue';
</script>

<template>
  <div class="w-full mobile:my-10 sm:my-32 flex flex-col gap-y-10 items-center">
    <h1 class="page-header-accent">SPONSORS THAT SUPPORT US, AMONG OTHERS:</h1>
    <!-- Sponsors RWD Layout:
      - Mobile: Uses <SponsorsCarousel/>
      - Small: 2 flex columns
      - Medium: 3 flex columns
      - Large+: 4 flex columns with centered incomplete rows
    -->
    <div class="hidden sm:block w-full">
      <div
        class="w-full scroll-auto flex flex-wrap gap-y-10 items-center justify-center text-center my-5"
      >
        <!-- Loop through sponsors dynamically -->
        <component
          v-for="(sponsor, index) in sponsorsData.sponsors"
          :key="index"
          :is="sponsor.href ? 'a' : 'div'"
          :href="sponsor.href"
          :target="sponsor.href ? '_blank' : undefined"
          :rel="sponsor.href ? 'noopener noreferrer' : undefined"
          :aria-label="
            sponsor.href
              ? `Visit ${sponsor.alt} — opens in a new tab`
              : undefined
          "
          :class="[
            'basis-1/2 md:basis-1/3 lg:basis-1/4 h-24 flex items-center justify-center mx-auto',
            sponsor.href
              ? 'rounded-lg focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-primary-color'
              : '',
          ]"
        >
          <img
            :src="sponsor.src"
            :alt="sponsor.alt"
            :class="[
              'h-auto mx-auto object-contain max-h-24',
              sponsor.isLogoWide === 'true'
                ? 'w-1/4 md:w-[30%] lg:w-[33%]'
                : 'w-1/2 md:w-[65%] lg:w-[70%]',
            ]"
          />
        </component>
      </div>
    </div>
    <div class="block sm:hidden w-full">
      <SponsorsCarousel />
    </div>
  </div>
</template>
