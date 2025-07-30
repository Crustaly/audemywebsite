<script setup>
/*
 * GameZoneCard.vue:
 *
 * - Reused game card component in <GameZoneLandingPage /> and <GameZone />
 * - Handles display and routing for each game category
 */

const props = defineProps({
  icon: String,
  title: String,
  description: String,
  url: String,
  textColor: String,
  bgColor: String,
  bgDecoration: Boolean,
  bgImage: String,

  // Landing Page-specific props:
  // 1. isLandingPage: Adjust @click behavior (router vs emit)
  // 2. pageNumber: Sets query parameter in URL when routing to the correct Game Zone page
  // 3. count: Total games per category; used to style text
  isLandingPage: {
    type: Boolean,
    required: false,
    default: false,
  },
  pageNumber: {
    type: Number,
    required: false,
    default: 1,
  },
  count: {
    type: String, // Type allows for estimates like '20+' (instead of Number)
    required: false,
  },
});

import { useRouter } from 'vue-router';
const router = useRouter();

const emit = defineEmits(['selectGame']);

const handleCardClick = () => {
  // Check if currently in Game Zone Landing Page
  if (props.isLandingPage) {
    // Route to corresponding Game Zone page when button is clicked
    router.push({
      path: '/game-zone',
      query: { page: props.pageNumber },
    });
  } else {
    // Already in Game Zone: Emit selected game
    emit('selectGame', props.url);
  }
};

// Extracted gameCardClasses class strings
const gameCardClasses = [
  'z-0',
  'w-full',
  'h-[320px]',
  'mobile:h-[160px]',
  'rounded-[16px]',
  'border-[5px]',
  'border-[#323232]',
  'shadow-2xl',
  'p-5',
  'relative',
  'flex',
  'justify-center',
  'items-center',
  'ease-in',
  'duration-300',
];

// Extracted cardIconClasses class strings
const cardIconClasses = [
  'w-[100px]',
  'h-[100px]',
  'mobile:h-[62px]',
  'mobile:w-[62px]',
  'lg:w-[90px]',
  'lg:h-[90px]',
  'absolute',
  'top-5',
  'right-5',
  'md:top-8',
  'md:right-8',
  'lg:right-10',
  'lg:top-10 z-20',
];

// Extracted bgDecoClasses class strings
const bgDecoClasses = [
  'mobile:h-[70%]',
  'h-[150px]',
  'lg:h-[200px]',
  'absolute',
  'top-0',
  'right-0',
  'rounded-xl',
  'mobile:opacity-80',
];
</script>

<template>
  <button
    @click="handleCardClick"
    :class="[
      gameCardClasses,
      isLandingPage ? 'h-[280px] mobile:h-[230px] md:h-[340px]' : '',
    ]"
    :style="{ backgroundColor: bgColor, color: textColor ?? '#323232' }"
  >
    <!-- Decorative white bg with grey crossed-line pattern -->
    <div
      aria-hidden="true"
      class="bg-cross-lines absolute bottom-0 h-3/4 w-full rounded-b-[12px]"
      :class="!isLandingPage ? 'lg:h-1/2' : ''"
    ></div>
    <img :src="icon" alt="" :class="cardIconClasses" />
    <img v-if="bgDecoration" :src="bgImage" alt="" :class="bgDecoClasses" />
    <div
      class="font-poppins text-left w-full absolute left-0 p-4 z-50"
      :class="[
        isLandingPage ? 'mobile:bottom-0 sm:bottom-14 md:bottom-0' : 'bottom-0',
      ]"
    >
      <div class="w-full" :class="{ 'mb-0': description }">
        <!-- Landing Page only: Responsive container for category-based game count + title
            - Grid layout: 1 column for count + 3 columns for title
        -->
        <div
          id="title"
          class="text-wrap font-semibold"
          :class="isLandingPage ? 'grid grid-cols-4 items-center gap-2' : ''"
        >
          <span
            v-if="isLandingPage"
            class="text-[38px] mobile:text-[25px] col-span-1 text-center rounded-lg"
            :style="{ backgroundColor: bgColor }"
          >
            {{ count }}
          </span>
          <span
            class="mobile:text-[20px]"
            :class="isLandingPage ? 'col-span-3 text-[23.5px]' : 'text-[30px]'"
          >
            {{ title }}
          </span>
        </div>
      </div>
      <div
        v-if="description"
        id="description"
        class="mobile:text-[16px] md:text-[18px]"
      >
        {{ description }}
      </div>
    </div>
  </button>
</template>
