<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import sponsorsData from '../../../../assets/sponsorsDB/sponsors.json';

const currentIndex = ref(0);
const carouselViewport = ref(null);
let interval;

const startAutoScroll = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    next();
  }, 2500);
};

const stopAutoScroll = () => {
  clearInterval(interval);
};

const showSponsor = async (index) => {
  currentIndex.value = index;
  stopAutoScroll();
  await nextTick();
  carouselViewport.value.scrollLeft = 0;
};

const next = () => {
  if (currentIndex.value < sponsorsData.sponsors.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

onMounted(() => {
  startAutoScroll();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div
    ref="carouselViewport"
    class="overflow-hidden relative w-full"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
    @focusin="stopAutoScroll"
    @focusout="startAutoScroll"
  >
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{
        width: `${sponsorsData.sponsors.length * 100}%`,
        transform: `translateX(-${
          currentIndex * (100 / sponsorsData.sponsors.length)
        }%)`,
      }"
    >
      <div
        v-for="(sponsor, index) in sponsorsData.sponsors"
        :key="index"
        class="flex-none"
        :style="{ width: `${100 / sponsorsData.sponsors.length}%` }"
      >
        <!-- NOTES: 
          1. Manually add prefix to image path:
            - Since <SponsorsCarousel/> is nested in a subdirectory
          2. Use flex wrapper and object-contain to align logos horizontally
        -->
        <component
          :is="sponsor.href ? 'a' : 'div'"
          :href="sponsor.href"
          :target="sponsor.href ? '_blank' : undefined"
          :rel="sponsor.href ? 'noopener noreferrer' : undefined"
          :aria-label="
            sponsor.href
              ? `Visit ${sponsor.alt} — opens in a new tab`
              : undefined
          "
          @focus="showSponsor(index)"
          :class="[
            'h-24 flex items-center justify-center',
            sponsor.href
              ? 'rounded-lg focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-primary-color'
              : '',
          ]"
        >
          <img
            :src="'../' + sponsor.src"
            :alt="sponsor.alt"
            :class="[
              'h-auto mx-auto object-contain max-h-24',
              sponsor.isLogoWide === 'true' ? 'w-[35%]' : 'w-[70%]',
            ]"
          />
        </component>
      </div>
    </div>
  </div>
</template>
