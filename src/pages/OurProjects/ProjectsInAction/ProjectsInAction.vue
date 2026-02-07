<script setup>
import Carousel from './Carousel.vue';
import PageDecorations from '../../../components/PageDecorations/PageDecorations.vue';
import Bubble from '/assets/images/impact/speech-bubble.png';
import OrangeStar from '/assets/images/impact/orange-star-v1.png';
import YellowStar from '/assets/images/testimonials/star.svg';
import BlueStar from '/assets/images/about-us/blueStar2.svg';

// impactImages: Maps image src and alt text to dynamically render <Carousel/>
const impactImages = [
  {
    src: '/assets/images/impact/carousel/carousel1.jpg',
    alt: 'Student playing spelling games on Audemy',
  },
  {
    src: '/assets/images/impact/carousel/carousel2.png',
    alt: 'Student playing Fruit Frenzy on laptop',
  },
  {
    src: '/assets/images/impact/carousel/carousel3.png',
    alt: 'Student playing Spell Safari',
  },
  {
    src: '/assets/images/impact/carousel/carousel4.png',
    alt: 'Student playing Fruit Frenzy',
  },
  {
    src: '/assets/images/impact/carousel/carousel5.png',
    alt: 'Another student playing Fruit Frenzy',
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-4 relative lg:flex-row lg:gap-10 md:p-20 xl:p-24"
  >
    <!-- Background & page decorations -->
    <img
      src="/assets/images/impact/Union.png"
      class="absolute -z-10 -top-6 -left-8 md:-left-14 md:-top-14 xl:-top-28"
      aria-hidden="true"
    />
    <PageDecorations
      class="hidden md:block"
      :topRightImgPath="Bubble"
      :topLeftImgPath="BlueStar"
      :bottomLeftImgPath="OrangeStar"
      :bottomRightImgPath="YellowStar"
      :increaseIconSize="true"
    />
    <div
      class="flex items-center flex-col w-full lg:flex-row lg:w-1/2 justify-center"
    >
      <div
        class="rounded-[16px] bg-cross-lines shadow-md w-full my-10 md:my-0 mobile:py-12 p-12 md:py-16"
      >
        <Carousel :images="impactImages" />
      </div>
    </div>
    <div
      class="flex items-center flex-col w-full lg:flex-row lg:w-1/2 justify-center"
    >
      <div class="flex flex-col gap-6 text-center">
        <h2 class="page-header">
          Discover how we make
          <span class="font-semibold text-primary-color">
            education accessible
          </span>
        </h2>

        <p class="page-text">
          Our <span class="font-semibold">innovative technologies</span> and
          <span class="font-semibold">educational initiatives </span>
          provide fun learning for
          <span class="font-semibold">
            blind and visually impaired individuals.</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
