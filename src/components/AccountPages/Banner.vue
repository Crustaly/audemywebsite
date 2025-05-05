<script setup>

// Decorative images and icons for top banner (mobile-first, sm-md) or side section (large viewports)
import OrangeStar from "/assets/images/SignUpImg/Group 895.png";
import Book from "/assets/images/SignUpImg/Group 1106.png";
import YellowStar from "/assets/images/testimonials/star.svg";
import BlueStar from "/assets/images/about-us/blueStar2.svg";
import Bulb from "/assets/images/about-us/bulb.png";
import Glasses from "/assets/images/impact/glasses.svg";

import { useDeviceType } from "../../Utilities/checkDeviceType";
const { isMobile, isTablet } = useDeviceType();

import { defineProps } from "vue";
const props = defineProps({
    CarlImgPath: {
        type: String,
        required: false,
    }, 
    curveColor: {
        type: String,
        required: false,
        default: '#FFFFFF',
    },
});

</script>



<template>
    <div 
        class="curved-edge-top z-0" 
        :style="{ backgroundColor: curveColor }"
    >
    </div>
    <div class="pt-[80px] pb-[80px]">
        <img
            :src="OrangeStar"
            class="absolute z-10"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[70px] right-[18%] top-[30%]' : '',
                isTablet ? 'w-[60px] right-[8%] top-[25%]' : '',
                isMobile ? 'w-[50px] right-[8%] top-[21%]' : '',
            ]"
        />
        <img
            :src="YellowStar"
            class="absolute z-10"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[65px] left-[70%] top-[38%]' : '',
                isTablet ? 'w-[60px] left-[75%] top-[20%]' : '',
                isMobile ? 'w-[50px] left-[70%] top-[20%]' : '',
            ]"
        />
        <img
            :src="BlueStar"
            class="w-[65px] absolute z-10"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[70px] left-[10%] top-[40%]' : '',
                isTablet ? 'left-[21%] top-[20%]' : '',
                isMobile ? 'left-[18%] top-[20%]' : '',
            ]"
        />
        <img
            :src="Book"
            class="absolute z-10 rotate-[330deg]"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[60px] left-[40%] top-[75%] rotate-[360deg]' : '',
                isTablet ? 'w-[50px] left-[12%] top-[60%]' : '',
                isMobile ? 'w-[50px] left-[10%] top-[53%]' : '',
            ]"
        />
        <img
            :src="CarlImgPath"
            class="absolute left-[50%] translate-x-[-50%]"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[185px] top-[45%]' : '',
                isTablet ? 'w-[180px] top-[30%]' : '',
                isMobile ? ' w-[160px] top-[40%]' : '',
            ]"
            v-if="CarlImgPath"
        />
        <img
            :src="Bulb"
            class="absolute z-10 rotate-[20deg]"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[55px] right-[10%] top-[70%]' : '',
                isTablet ? 'w-[48px] right-[15%] top-[55%]' : '',
                isMobile ? 'w-[40px] right-[13%] top-[50%]' : '',
            ]"
        />
        <img
            :src="Glasses"
            class="absolute z-10"
            alt=""
            :class="[
                !isTablet && !isMobile ? 'w-[60px] left-[13%] top-[68%]' : '',
                isTablet ? 'w-[48px] left-[12%] top-[22%]' : '',
                isMobile ? 'w-[40px] left-[10%] top-[20%]' : '',
            ]"
        />
    </div>
    <div 
        v-if="!isMobile && !isTablet" 
        class="curved-edge-bottom z-0 absolute bottom-[0%]"
        :style="{ backgroundColor: curveColor }"
    >
    </div> 
</template>



<style scoped>

.curved-edge-top, .curved-edge-bottom {
  --c: 70px; /* control the curvature (works with percentage) */
  height: 170px;
  width: 100%;
  aspect-ratio: 3/2;
}

.curved-edge-top {
  mask: radial-gradient(55% var(--c) at bottom,#0000 calc(100% - 2px),#000);
}

.curved-edge-bottom {
  mask: radial-gradient(55% var(--c) at top,#0000 calc(100% - 1px),#000);
}

</style>