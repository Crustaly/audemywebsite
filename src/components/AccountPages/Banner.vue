<script setup>
// Decorative mobile-first top banner (small-medium) or side image (large viewports)
import OrangeStar from '/assets/images/SignUpImg/orange-star.png';
import Book from '/assets/images/SignUpImg/books.png';
import YellowStar from '/assets/images/testimonials/star.svg';
import BlueStar from '/assets/images/about-us/blueStar2.svg';
import Bulb from '/assets/images/about-us/bulb.png';
import Glasses from '/assets/images/impact/glasses.svg';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { defineProps } from 'vue';

// isImageWide: true if image width > height.
// Helps Banner scale image: Reduces width for wide images, or height for tall ones.
const props = defineProps({
  CarlImgPath: {
    type: String,
    required: false,
  },
  isImageWide: {
    type: Boolean,
    required: false,
    default: true,
  },
  bgColor: {
    type: String,
    required: false,
  },
  curveColor: {
    type: String,
    required: false,
  },
  isPageShort: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    class="relative w-full h-[200px]"
    :style="{ backgroundColor: bgColor }"
    aria-hidden="true"
  >
    <div class="z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 480"
        class="absolute top-[0%] w-full h-[250px]"
        preserveAspectRatio="none"
      >
        <path
          :style="{ fill: curveColor }"
          fill-opacity="1"
          d="M0,288L60,261.3C120,235,240,181,360,138.7C480,96,600,64,720,74.7C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>
    <div class="pt-[80px] pb-[80px]">
      <img
        :src="OrangeStar"
        class="absolute z-10"
        alt="orange star"
        :class="[
          !isMobile && !isTablet ? 'w-[70px] right-[8%] top-[23%]' : '',
          isTablet ? 'w-[60px] right-[8%] top-[25%]' : '',
          isMobile ? 'w-[50px] right-[8%] top-[21%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="YellowStar"
        class="absolute z-10"
        alt="yellow star"
        :class="[
          !isMobile && !isTablet ? 'w-[65px] right-[40%] top-[15%]' : '',
          isTablet ? 'w-[60px] left-[75%] top-[20%]' : '',
          isMobile ? 'w-[50px] left-[70%] top-[20%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="BlueStar"
        class="w-[65px] absolute z-10"
        alt="blue star"
        :class="[
          !isMobile && !isTablet ? 'w-[70px] left-[8%] top-[22%]' : '',
          isTablet ? 'left-[21%] top-[20%]' : '',
          isMobile ? 'left-[18%] top-[20%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="Book"
        class="absolute z-10 rotate-[330deg]"
        alt="book"
        :class="[
          !isMobile && !isTablet ? 'left-[40%] top-[75%] rotate-[360deg]' : '',
          !isPageShort && !isMobile && !isTablet ? 'w-[60px]' : '',
          isPageShort && !isMobile && !isTablet ? 'w-[50px]' : '',
          isTablet ? 'w-[50px] left-[12%] top-[60%]' : '',
          isMobile ? 'w-[50px] left-[10%] top-[53%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="CarlImgPath"
        ref="imgRef"
        class="object-contain absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10"
        alt="Carl icon"
        :class="[
          !isMobile && !isTablet
            ? 'top-[40%] max-h-[80vw] max-w-[80vw/3]'
            : 'max-h-[200px] max-w-[80vw]',

          !isPageShort && !isMobile && !isTablet ? 'w-[160px]' : '',
          isPageShort && !isMobile && !isTablet ? 'w-[130px]' : '',

          (isTablet || isMobile) && isImageWide ? 'w-[150px]' : '',
          (isTablet || isMobile) && !isImageWide ? 'h-[130px]' : '',
        ]"
        v-if="CarlImgPath"
        loading="lazy"
      />
      <img
        :src="Bulb"
        class="absolute z-10 rotate-[20deg]"
        alt="lightbulb"
        :class="[
          !isMobile && !isTablet ? 'right-[10%] top-[70%]' : '',
          !isPageShort && !isMobile && !isTablet ? 'w-[55px]' : '',
          isPageShort && !isMobile && !isTablet ? 'w-[50px]' : '',
          isTablet ? 'w-[48px] right-[15%] top-[55%]' : '',
          isMobile ? 'w-[40px] right-[13%] top-[50%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="Glasses"
        class="absolute z-10"
        alt="glasses"
        :class="[
          !isMobile && !isTablet ? 'left-[13%] top-[68%]' : '',
          !isPageShort && !isMobile && !isTablet ? 'w-[60px]' : '',
          isPageShort && !isMobile && !isTablet ? 'w-[50px]' : '',
          isTablet ? 'w-[48px] left-[12%] top-[22%]' : '',
          isMobile ? 'w-[40px] left-[10%] top-[20%]' : '',
        ]"
        loading="lazy"
      />
    </div>
    <div v-if="!isMobile && !isTablet" class="z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute bottom-[0%] w-full h-[290px]"
        preserveAspectRatio="none"
      >
        <path
          :style="{ fill: curveColor }"
          fill-opacity="1"
          d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,245.3C840,256,960,256,1080,245.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
