<script setup>
// Decorative mobile-first top banner (small-medium) or side image (large viewports)
import OrangeStar from '/assets/images/SignUpImg/orange-star.png';
import Book from '/assets/images/SignUpImg/books.png';
import YellowStar from '/assets/images/testimonials/star.svg';
import BlueStar from '/assets/images/about-us/blueStar2.svg';
import Bulb from '/assets/images/about-us/bulb.png';
import Glasses from '/assets/images/impact/glasses.svg';
import Puzzle from '/assets/images/game-toolkit/puzzle.png';
import SpeechBubble from '/assets/images/impact/speech-bubble.png';
import Key from '/assets/images/audio-console/key.png';
import Research from '/assets/images/studio/research.png';
import Accessibility from '/assets/images/studio/accessibility.png';
import School from '/assets/images/impact/school.png';
import Microphone from '/assets/images/techShowcase/microphone.png';
import GameControl from '/assets/images/game-toolkit/game-control.png';
import Checklist from '/assets/images/studio/checklist-v2.png';

import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useDeviceDetection } from '../../composables/useDeviceDetection';

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
  showExtraDecorations: {
    type: Boolean,
    required: false,
    default: false,
  },
  anchorCharacterTop: {
    type: Boolean,
    required: false,
    default: false,
  },
  denseDecorations: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const {
  isTablet: detectedTablet,
  isMobile,
  isDesktop: detectedDesktop,
} = useDeviceDetection();
const isAtDesktopGridWidth = ref(false);
const isDesktop = computed(
  () =>
    detectedDesktop.value ||
    (props.anchorCharacterTop && isAtDesktopGridWidth.value)
);
const isTablet = computed(() => detectedTablet.value && !isDesktop.value);

const checkBannerLayout = () => {
  isAtDesktopGridWidth.value = window.innerWidth >= 1024;
};

onMounted(() => {
  checkBannerLayout();
  window.addEventListener('resize', checkBannerLayout);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkBannerLayout);
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
        alt=""
        :class="[
          isDesktop && anchorCharacterTop
            ? 'w-[70px] right-[8%] top-[230px]'
            : '',
          isDesktop && !anchorCharacterTop
            ? 'w-[70px] right-[8%] top-[23%]'
            : '',
          isTablet ? 'w-[60px] right-[8%] top-[25%]' : '',
          isMobile ? 'w-[50px] right-[8%] top-[21%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="YellowStar"
        class="absolute z-10"
        alt=""
        :class="[
          isDesktop && anchorCharacterTop
            ? 'w-[65px] right-[40%] top-[205px]'
            : '',
          isDesktop && !anchorCharacterTop
            ? 'w-[65px] right-[40%] top-[15%]'
            : '',
          isTablet ? 'w-[60px] left-[75%] top-[20%]' : '',
          isMobile ? 'w-[50px] left-[70%] top-[20%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="BlueStar"
        class="w-[65px] absolute z-10"
        alt=""
        :class="[
          isDesktop && anchorCharacterTop
            ? 'w-[70px] left-[8%] top-[225px]'
            : '',
          isDesktop && !anchorCharacterTop
            ? 'w-[70px] left-[8%] top-[22%]'
            : '',
          isTablet ? 'left-[21%] top-[20%]' : '',
          isMobile ? 'left-[18%] top-[20%]' : '',
        ]"
        loading="lazy"
      />
      <img
        :src="Book"
        class="absolute z-10 rotate-[330deg]"
        alt=""
        :class="[
          isDesktop ? 'left-[40%] top-[75%] rotate-[360deg]' : '',
          !isPageShort && isDesktop ? 'w-[60px]' : '',
          isPageShort && isDesktop ? 'w-[50px]' : '',
          isTablet ? 'w-[50px] left-[12%] top-[60%]' : '',
          isMobile ? 'w-[50px] left-[10%] top-[53%]' : '',
        ]"
        v-if="!(isDesktop && anchorCharacterTop)"
        loading="lazy"
      />
      <img
        :src="CarlImgPath"
        ref="imgRef"
        class="object-contain absolute left-[50%] translate-x-[-50%] z-10"
        alt=""
        :class="[
          isDesktop && anchorCharacterTop
            ? 'top-[24px] w-[160px] h-[170px] max-w-[70%]'
            : 'top-[50%] translate-y-[-50%]',
          isDesktop && !anchorCharacterTop
            ? 'top-[40%] max-h-[80vw] max-w-[80vw/3]'
            : '',
          !anchorCharacterTop && !isPageShort && isDesktop ? 'w-[160px]' : '',
          !anchorCharacterTop && isPageShort && isDesktop ? 'w-[130px]' : '',
          !isDesktop ? 'max-h-[200px] max-w-[80vw]' : '',
          !isDesktop && isImageWide ? 'w-[150px]' : '',
          !isDesktop && !isImageWide ? 'h-[130px]' : '',
        ]"
        v-if="CarlImgPath"
        loading="lazy"
      />
      <img
        :src="Bulb"
        class="absolute z-10 rotate-[20deg]"
        alt=""
        :class="[
          isDesktop ? 'right-[10%] top-[70%]' : '',
          !isPageShort && isDesktop ? 'w-[55px]' : '',
          isPageShort && isDesktop ? 'w-[50px]' : '',
          isTablet ? 'w-[48px] right-[15%] top-[55%]' : '',
          isMobile ? 'w-[40px] right-[13%] top-[50%]' : '',
        ]"
        v-if="!(isDesktop && anchorCharacterTop)"
        loading="lazy"
      />
      <img
        :src="Glasses"
        class="absolute z-10"
        alt=""
        :class="[
          isDesktop ? 'left-[13%] top-[68%]' : '',
          !isPageShort && isDesktop ? 'w-[60px]' : '',
          isPageShort && isDesktop ? 'w-[50px]' : '',
          isTablet ? 'w-[48px] left-[12%] top-[22%]' : '',
          isMobile ? 'w-[40px] left-[10%] top-[20%]' : '',
        ]"
        v-if="!(isDesktop && anchorCharacterTop)"
        loading="lazy"
      />
      <div
        v-if="isDesktop && showExtraDecorations && anchorCharacterTop"
        class="pointer-events-none absolute inset-x-0 top-[330px] bottom-[140px] z-10 flex flex-col justify-between"
      >
        <div class="flex justify-start pl-[12%]">
          <img
            :src="Puzzle"
            class="h-[56px] w-[56px] object-contain rotate-[-8deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="flex justify-end pr-[12%]">
          <img
            :src="Research"
            class="h-[58px] w-[58px] object-contain rotate-[7deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div v-if="denseDecorations" class="flex justify-start pl-[18%]">
          <img
            :src="School"
            class="h-[58px] w-[58px] object-contain rotate-[-5deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div
          :class="
            denseDecorations
              ? 'flex justify-end pr-[18%]'
              : 'flex justify-start pl-[18%]'
          "
        >
          <img
            :src="SpeechBubble"
            class="h-[58px] w-[58px] object-contain rotate-[-5deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div v-if="denseDecorations" class="flex justify-start pl-[12%]">
          <img
            :src="Microphone"
            class="h-[54px] w-[54px] object-contain rotate-[-6deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="flex justify-end pr-[18%]">
          <img
            :src="Accessibility"
            class="h-[58px] w-[58px] object-contain rotate-[5deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="flex justify-start pl-[12%]">
          <img
            :src="Glasses"
            class="h-[54px] w-[60px] object-contain rotate-[-6deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="flex justify-end pr-[12%]">
          <img
            :src="Bulb"
            class="h-[56px] w-[56px] object-contain rotate-[12deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div v-if="denseDecorations" class="flex justify-start pl-[18%]">
          <img
            :src="GameControl"
            class="h-[56px] w-[56px] object-contain rotate-[-5deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div
          :class="
            denseDecorations
              ? 'flex justify-end pr-[18%]'
              : 'flex justify-start pl-[18%]'
          "
        >
          <img
            :src="Book"
            class="h-[54px] w-[60px] object-contain rotate-[-5deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div v-if="denseDecorations" class="flex justify-start pl-[12%]">
          <img
            :src="Checklist"
            class="h-[56px] w-[56px] object-contain rotate-[-5deg]"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="flex justify-end pr-[18%]">
          <img
            :src="Key"
            class="h-[78px] w-[78px] object-contain rotate-[14deg]"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <template v-else-if="isDesktop && showExtraDecorations">
        <img
          :src="Puzzle"
          class="absolute z-10 left-[14%] top-[32%] w-[55px] rotate-[-8deg]"
          alt=""
          loading="lazy"
        />
        <img
          :src="SpeechBubble"
          class="absolute z-10 right-[12%] top-[54%] w-[58px] rotate-[6deg]"
          alt=""
          loading="lazy"
        />
        <img
          :src="Key"
          class="absolute z-10 left-[20%] top-[85%] w-[88px] rotate-[-16deg]"
          alt=""
          loading="lazy"
        />
      </template>
    </div>
    <div v-if="isDesktop" class="z-0">
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
