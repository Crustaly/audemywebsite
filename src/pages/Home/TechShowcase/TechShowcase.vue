<script setup>
import PageDecorations from '/src/components/PageDecorations/PageDecorations.vue';
import BlueStar from '/assets/images/about-us/blueStar2.svg';
import OrangeStar from '/assets/images/impact/orangeStar.png';
import Headphones from '/assets/images/techShowcase/headphone.png';
import Mic from '/assets/images/techShowcase/microphone.png';

import { ref, onMounted, onUnmounted } from 'vue';

let isplaying = ref(false);
let video = ref();
const isTablet = ref(false);
const isMobile = ref(false);
const videoVisible = ref(false);

// Check device type
const checkDeviceType = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    isTablet.value = false;
    isMobile.value = true;
  } else if (width >= 768 && width < 1024) {
    isTablet.value = true;
    isMobile.value = false;
  } else if (width >= 1024) {
    isTablet.value = false;
    isMobile.value = false;
  } else {
    isTablet.value = false;
    isMobile.value = true;
  }
};

let observer;

const onVideoIntersect = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    videoVisible.value = true;
    observer.disconnect();
  }
};

onMounted(() => {
  checkDeviceType();
  window.addEventListener('resize', checkDeviceType);

  observer = new IntersectionObserver(onVideoIntersect, {
    root: null,
    threshold: 0.3,
  });

  const videoWrapper = document.querySelector('#lazy-video-wrapper');
  if (videoWrapper) observer.observe(videoWrapper);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDeviceType);
  if (observer) observer.disconnect();
});

const playVideo = () => {
  if (!isplaying.value) {
    isplaying.value = true;
    video.value.setAttribute('controls', '');
    video.value.play();
  }
};

let pauseVideo = () => {
  isplaying.value = false;
  video.value.pause();
};

let videoStoped = () => {
  isplaying.value = false;
  pauseVideo();
  video.value.removeAttribute('controls', '');
};
</script>

<template>
  <div
    class="lg:relative flex items-center flex-col lg:flex-row justify-center items-center gap-x-5 gap-y-16 md:gap-y-0 py-10 my-10"
    :class="{ 'tablet-showcase': isTablet }"
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
    >
      <div
        class="relative w-[295px] h-[529px] tablet:w-[238px] tablet:h-[426px] mobile:w-[296px] mobile:h-[529px] mobile:order-2"
      >
        <!-- Decorative phone overlay -->
        <img
          class="w-[295px] h-[529px] tablet:w-[238px] tablet:h-[426px] mobile:w-[296px] mobile:h-[529px] max-w-none"
          src="/assets/images/techShowcase/phone.svg"
          alt=""
        />
        <div
          id="lazy-video-wrapper"
          class="absolute w-[88%] left-[6%] h-[82%] top-[9%] mx-auto z-0 overflow-hidden rounded-[16px]"
        >
          <!-- Poster image -->
          <div
            v-if="!isplaying"
            class="w-full h-full bg-cover bg-center"
            style="
              background-image: url('/assets/images/techShowcase/video-poster.png');
            "
          ></div>

          <!-- Play Button -->
          <div
            v-if="!isplaying"
            @click="playVideo"
            ref="playBut"
            class="absolute z-10 cursor-pointer w-[56px] h-[56px] rounded-[50%] border-[2px] border-[black] bg-[#FE892A] hover:bg-[#D6711F] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <div
              class="tra absolute w-[22px] h-[22px] top-[50%] left-[50%] translate-x-[-40%] bg-black translate-y-[-50%] rotate-90"
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
        </div>
      </div>
    </div>

    <div
      class="w-full md:w-3/5 flex items-center flex-col lg:flex-row justify-center items-center"
    >
      <div
        class="text-center w-[80%] md:p-10"
        :class="{ 'tablet-text-container': isTablet }"
      >
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

        <div class="flex text-center my-10">
          <a
            href="our-projects"
            class="mx-auto page-button blue-button w-[300px] py-3 ease-in"
          >
            Discover more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tra {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.tablet-showcase {
  gap: 6rem;
  justify-content: space-between;
  padding: 0 2rem;
}

.tablet-text-container {
  padding-right: 1.5rem;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .tablet-showcase {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
