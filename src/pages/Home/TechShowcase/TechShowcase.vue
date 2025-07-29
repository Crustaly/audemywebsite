<script setup>
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
    class="mt-[44px] mb-[2rem] mobile:mb-[128px] flex items-center justify-around mobile:gap-[64px] text-left mobile:flex-col"
    :class="{ 'tablet-showcase': isTablet }"
  >
    <div
      class="ml-[10%] tablet:ml-[5%] mobile:ml-0 relative w-[295px] h-[529px] tablet:w-[238px] tablet:h-[426px] mobile:w-[296px] mobile:h-[529px] mobile:order-2"
    >
      <img
        class="w-[295px] h-[529px] tablet:w-[238px] tablet:h-[426px] mobile:w-[296px] mobile:h-[529px] max-w-none"
        src="/assets/images/techShowcase/phone.svg"
        alt="Phone's Image"
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

    <div
      class="max-w-[505px] tablet:max-w-[440px] h-[348px] tablet:h-[309px] mobile:h-[285px] grid justify-self-start mobile:order-1 mobile:items-center mobile:text-center"
      :class="{ 'tablet-text-container': isTablet }"
    >
      <h1
        class="font-poppins text-[40px] tablet:text-[32px] mobile:text-[24px] leading-[60px] tablet:leading-[48px] mobile:leading-[36px] text-[#151E22]"
      >
        Learning is more fun when it
        <span style="color: #077bb3; font-weight: 700">talks back</span>.
      </h1>

      <p
        class="font-poppins text-[20px] tablet:text-[16px] leading-[30px] tablet:leading-[24px] text-[#2F3E45]"
      >
        We’ve built <strong>50+ accessible audio games</strong> that make
        learning joyful, inclusive, and interactive—designed for blind and
        visually impaired students to learn through play. So far, students have
        solved <strong>100,000+ learning challenges</strong> on our platform!
      </p>

      <div class="flex mobile:mx-0 items-end">
        <a
          href="our-projects"
          class="font-poppins font-semiBold w-[236.07px] mobile:w-full h-[56px] tablet:h-[60px] mobile:h-[56px] leading-[56px] tablet:leading-[60px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] text-[16px] text-center text-white shadow-[4px_4px_0px_#0C0D0D]"
        >
          Discover more
        </a>
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
