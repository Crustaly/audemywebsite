<script setup>
import Map from './Map.vue';
import Affiliates from './Affiliates.vue';
import BlueArrow from '/assets/images/our-projects/Vector Stroke.png';

// Extracted RWD styling for BlueArrow icon
const arrowClasses = [
  'absolute',
  'w-[60px]',
  'left-0',
  'bottom-[25%]',
  'transform',
  '-scale-x-100',
  'md:w-[70px]',
  'md:top-[25%]',
  'md:left-[45%]',
  'lg:top-1/4',
  'lg:left-1/2',
  'lg:rotate-[-35deg]',
  'lg:w-[75px]',
];
</script>

<template>
  <div
    class="font-poppins relative flex flex-col items-start justify-center mobile:justify-center w-full h-[1500px] md:h-[900px] mt-36 md:mt-36 lg:mt-24"
  >
    <img
      src="/assets/images/impact/light-green-bg-2.png"
      class="absolute w-full h-[125%] -top-[12rem] right-0 -z-10"
      aria-hidden="true"
    />

    <!-- HEADER -->
    <div class="mx-auto w-full my-5">
      <h2 class="page-header">
        Collaborating <em class="text-[#fe892a]"> Schools </em>
      </h2>
    </div>

    <!-- MAP AND LIST OF AFFILIATED SCHOOLS AND TEACHERS -->
    <!-- 
    Responsive Layout:
      - Mobile & Small (flex column): Map (top) & School List (bottom)
      - Medium+ (flex row):  Map (left) & School List (right) 
    -->
    <div
      class="py-10 mx-auto flex flex-col md:flex-row md:justify-center md:gap-x-10 items-center gap-y-10 w-[90%]"
    >
      <!-- School Map Content -->
      <div
        class="w-full md:w-1/2 flex flex-col items-center"
        aria-hidden="true"
      >
        <Map />
      </div>
      <!-- Affiliated Schools List -->
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <Affiliates />
      </div>
    </div>

    <!-- CALL TO ACTION -->
    <!-- 
    Responsive Layout 
      - Mobile & Small (flex column): CTA Text (top) & Button (bottom)
      - Medium+ (flex row): CTA Text (left) & Button (right)
    -->
    <div
      class="relative my-5 mx-auto w-[80%] flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-10"
    >
      <!-- Decorative Right Arrow -->
      <img :src="BlueArrow" :class="arrowClasses" aria-hidden="true" />
      <div class="w-full md:w-1/2 p-10">
        <p class="text-center text-body text-[16px] md:text-[18px] leading-8">
          As we expand our services, we'd love to have you
          <span class="font-semibold text-primary-color">partner with us</span>
          on this exciting journey!
        </p>
      </div>
      <div class="w-full md:w-1/2 text-center">
        <a
          href="mailto:connect@audemy.org"
          target="_blank"
          class="w-[250px] py-5 px-16 page-button blue-button"
        >
          Get affiliated
        </a>
      </div>
    </div>
  </div>
</template>
