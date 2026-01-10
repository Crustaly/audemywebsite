<script setup>
import PageDecorations from '/src/components/PageDecorations/PageDecorations.vue';
import BlueStar from '/assets/images/about-us/blueStar2.svg';
import OrangeStar from '/assets/images/impact/orangeStar.png';
import Headphones from '/assets/images/techShowcase/headphone.png';
import Mic from '/assets/images/techShowcase/microphone.png';

import { useDeviceDetection } from '../../../composables/useDeviceDetection';

import { ref, onMounted, onUnmounted } from 'vue';

let isPlaying = ref(false);
let video = ref();
const videoVisible = ref(false);
let showTooltipMsg = ref(false);

// Check device type
const { isTablet, isDesktop } = useDeviceDetection();

let observer;

const onVideoIntersect = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    videoVisible.value = true;
    observer.disconnect();
  }
};

onMounted(() => {
  observer = new IntersectionObserver(onVideoIntersect, {
    root: null,
    threshold: 0.3,
  });

  const videoWrapper = document.querySelector('#lazy-video-wrapper');
  if (videoWrapper) observer.observe(videoWrapper);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

// toggleVideo(): Handles 'Space' key shortcut to play or pause video
// Supports WCAG Keyboard Accessibility
const toggleVideo = () => {
  if (!isPlaying.value) {
    playVideo();
  } else {
    pauseVideo();
  }
};

const playVideo = () => {
  if (!isPlaying.value) {
    isPlaying.value = true;
    video.value.setAttribute('controls', '');
    video.value.play();
  }
};

let pauseVideo = () => {
  isPlaying.value = false;
  video.value.pause();
};

let videoStoped = () => {
  isPlaying.value = false;
  pauseVideo();
  video.value.removeAttribute('controls', '');
};

// WCAG: Prevent focus trap in video controls after interaction
const exitVideoControls = () => {
  if (isPlaying.value) {
    pauseVideo();
  }
  // Manually move focus to 'Discover more' button
  const nextFocusTarget = document.getElementById('discoverMoreBtn');
  nextFocusTarget.focus();
};
</script>

<template>
  <div
    class="lg:relative flex items-center flex-col lg:flex-row justify-center items-center gap-x-5 gap-y-16 md:gap-y-0 py-10 my-10"
    :class="[
      isDesktop ? 'gap-24 justify-between pl-0 pr-8' : '',
      isTablet ? 'flex items-center' : '',
    ]"
    role="none"
  >
    <!-- Decorative icons (medium+ screens) -->
    <PageDecorations
      class="hidden lg:block"
      :topLeftImgPath="Mic"
      :bottomRightImgPath="Headphones"
      :increaseIconSize="true"
    />
    <img
      :src="BlueStar"
      class="hidden lg:block absolute w-[90px] bottom-[30%] left-[38%]"
      aria-hidden="true"
    />
    <img
      :src="OrangeStar"
      class="hidden lg:block absolute w-[60px] top-[25%] left-[45%] rotate-[-20deg]"
      aria-hidden="true"
    />
    <!-- RWD Flex Layout: 
        - Video & Main Text: both full width, column (mobile-small)
        - Video (medium+): 2/5 width, row 
        - Main Text (medium+): 3/5 width row
    -->
    <div
      class="w-full md:w-2/5 flex flex-col md:flex-row justify-center items-center"
      role="none"
    >
      <div
        class="relative w-[295px] h-[529px] tablet:w-[238px] tablet:h-[426px] mobile:w-[296px] mobile:h-[529px] mobile:order-2"
        role="none"
      >
        <!-- Decorative phone overlay -->
        <img
          class="w-[295px] h-[529px] tablet:w-[238px] tablet:h-[426px] mobile:w-[296px] mobile:h-[529px] max-w-none"
          src="/assets/images/techShowcase/phone.svg"
          aria-hidden="true"
        />

        <!-- Lazy Video Wrapper Button 
          - WCAG (Keyboard Access.): Video is in tab order & avoids focus trap in video controls
          - Tab: Focus video
          - Space: Play or Pause (via toggleVideo)
          - Esc: Pause, exit, & go to next focus target ('Discover more' button) 
          - Remove noisy, unhelpful SR output with 'role'
        -->

        <!-- Visual 'tooltip' of video shortcuts (for sighted keyboard users)
          - Text visibility based on video focus state
          - Hidden from SR output since ARIA label already announces it
          - NOTE: SR output repeats 'title' attribute, so this is a workaround
        -->
        <div
          class="text-center my-2 flex flex-col items-center"
          aria-hidden="true"
          v-show="showTooltipMsg"
        >
          <p class="text-sm">
            <b>Key shortcuts:</b> Press
            <span class="font-semibold">Space</span> to toggle video &
            <span class="font-semibold">Esc</span> to exit.
          </p>
        </div>

        <button
          tabindex="0"
          id="lazy-video-wrapper"
          @focus="showTooltipMsg = true"
          @blur="showTooltipMsg = false"
          @keyup.space.prevent="toggleVideo"
          @keyup.esc.prevent="exitVideoControls"
          aria-label="Press 'Space' to play or pause video. Press 'Escape' to exit video controls."
          class="absolute w-[88%] left-[6%] h-[82%] top-[9%] mx-auto z-0 overflow-hidden rounded-[16px]"
        >
          <!-- Poster image -->
          <div
            v-if="!isPlaying"
            class="w-full h-full bg-cover bg-center bg-[url('/assets/images/techShowcase/video-poster-resized.png')]"
            aria-hidden="true"
          ></div>

          <!-- WCAG: Hide decorative orange play button -->
          <div
            v-if="!isPlaying"
            @click="playVideo"
            ref="playBut"
            class="absolute z-10 cursor-pointer w-[56px] h-[56px] rounded-[50%] border-[2px] border-[black] bg-[#FE892A] hover:bg-[#D6711F] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            aria-hidden="true"
          >
            <div
              aria-hidden="true"
              class="clip-triangle absolute w-[22px] h-[22px] top-[50%] left-[50%] translate-x-[-40%] bg-black translate-y-[-50%] rotate-90"
            ></div>
          </div>

          <!-- Lazy-loaded video -->
          <video
            v-if="videoVisible"
            ref="video"
            @play="playVideo"
            @pause="pauseVideo"
            @ended="videoStoped"
            class="w-full h-full"
            preload="none"
            muted
          >
            <source
              src="/src/assets/videoFiles/JJ_Storybuilder_05_2024_Short_1.mp4"
              type="video/mp4"
            />
            <span>browser does not support the video tag.</span>
          </video>
        </button>
      </div>
    </div>

    <div
      class="w-full md:w-3/5 flex items-center flex-col lg:flex-row justify-center items-center"
    >
      <div class="text-center w-[80%] md:p-10" :class="{ 'pr-6': isTablet }">
        <h1 class="page-header">
          Games are more accessible when they
          <span class="text-primary-color font-[700]">talk back</span>
        </h1>

        <p
          class="p-3 my-5 font-poppins text-body text-center text-xl mobile:text-[16px] leading-8"
        >
          We’ve built <strong>50+ accessible audio games</strong> that make
          learning joyful, inclusive, and interactive—designed for blind and
          visually impaired students to learn through play. So far, students
          have solved <strong>100,000+ in-game challenges</strong> on our
          platform!
        </p>

        <div class="page-button-flex">
          <a
            id="discoverMoreBtn"
            href="our-projects"
            class="page-button blue-button px-9 mobile:h-auto py-3 md:w-[300px]"
          >
            Discover more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
