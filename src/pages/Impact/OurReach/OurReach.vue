<script setup>
import OrangeStar from '/assets/images/impact/Group 1135.png';
import SpeechBubble from '/assets/images/impact/Group 1153.png';
import BlueStar from '/assets/images/about-us/blueStar2.svg';
import YellowStar from '/assets/images/testimonials/star.svg';

import PageDecorations from '/src/components/PageDecorations/PageDecorations.vue';

const impactImages = [
  '/assets/images/impact/IMG.png',
  '/assets/images/impact/IMG_1661.jpeg',
  '/assets/images/impact/arizonaStudent.png',
  '/assets/images/impact/5b46078e-65e0-42c8-a658-2939c6676a21.jpeg',
  '/assets/images/impact/IMG_0779.jpeg',
  '/assets/images/impact/spellsafariuser.png',
  '/assets/images/impact/IMG2.png',
  '/assets/images/impact/visuallyImpairedArizonaStudent.png',
  '/assets/images/impact/IMG_0489.jpeg',
  '/assets/images/impact/image_720.png',
  '/assets/images/impact/Screenshot 2025-07-24 155925.png',
  '/assets/images/impact/image_721.png',
];
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-20">
    <h3 class="page-header-accent">OUR REACH</h3>
    <div class="w-[450px] max-w-full px-4">
      <h2 class="page-header">
        Transforming lives,
        <span class="text-primary-color font-semibold">
          one child at a time
        </span>
      </h2>
    </div>
  </div>

  <div
    class="relative w-full flex flex-col items-center px-4 md:px-12 lg:px-24 py-24"
  >
    <!-- Page Decorations -->
    <PageDecorations
      :topLeftImgPath="BlueStar"
      :bottomRightImgPath="OrangeStar"
      :topRightImgPath="SpeechBubble"
      :bottomLeftImgPath="YellowStar"
      increaseIconSize="true"
    />
    <!-- Uniform Image Grid with Slight Tilt -->
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      aria-hidden="true"
    >
      <div
        v-for="(img, index) in impactImages"
        :key="index"
        :class="[
          'rounded-xl overflow-hidden shadow-md w-full h-[250px] transition-transform duration-300 ease-in-out hover:scale-105',
          index % 6 === 0
            ? 'rotate-[-1.5deg]'
            : index % 6 === 1
            ? 'rotate-[1deg]'
            : index % 6 === 2
            ? 'rotate-[1.5deg]'
            : index % 6 === 3
            ? 'rotate-[-2deg]'
            : index % 6 === 4
            ? 'rotate-[0.5deg]'
            : '',
        ]"
      >
        <img :src="img" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>
