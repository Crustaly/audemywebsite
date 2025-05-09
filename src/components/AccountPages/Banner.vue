<script setup>

// Decorative images and icons for top banner (mobile-first, sm-md) or side section (large viewports)
import OrangeStar from "/assets/images/SignUpImg/orange-star.png";
import Book from "/assets/images/SignUpImg/books.png";
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
        required: false
    }, 
    bgColor: {
        type: String,
        required: false
    },
    curveColor: {
        type: String,
        required: false
    },
    isPageShort: {
        type: Boolean,
        required: false,
        default: false
    } 
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
                    d="M0,288L60,261.3C120,235,240,181,360,138.7C480,96,600,64,720,74.7C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                </path>
            </svg>
        </div>
        <div class="pt-[80px] pb-[80px]">
            <img
                :src="OrangeStar"
                class="absolute z-10"
                alt="orange star"
                :class="[
                    !isTablet && !isMobile ? 'w-[70px] right-[8%] top-[23%]' : '',
                    isTablet ? 'w-[60px] right-[8%] top-[25%]' : '',
                    isMobile ? 'w-[50px] right-[8%] top-[21%]' : '',
                ]"
            />
            <img
                :src="YellowStar"
                class="absolute z-10"
                alt="yellow star"
                :class="[
                    !isTablet && !isMobile ? 'w-[65px] right-[40%] top-[15%]' : '',
                    isTablet ? 'w-[60px] left-[75%] top-[20%]' : '',
                    isMobile ? 'w-[50px] left-[70%] top-[20%]' : '',
                ]"
            />
            <img
                :src="BlueStar"
                class="w-[65px] absolute z-10"
                alt="blue star"
                :class="[
                    !isTablet && !isMobile ? 'w-[70px] left-[8%] top-[22%]' : '',
                    isTablet ? 'left-[21%] top-[20%]' : '',
                    isMobile ? 'left-[18%] top-[20%]' : '',
                ]"
            />
            <img
                :src="Book"
                class="absolute z-10 rotate-[330deg]"
                alt="book"
                :class="[
                    !isTablet && !isMobile ? 'left-[40%] top-[75%] rotate-[360deg]' : '',
                    !isPageShort && !isTablet && !isMobile ? 'w-[60px]' : '',
                    isPageShort && !isTablet && !isMobile ? 'w-[50px]' : '',
                    isTablet ? 'w-[50px] left-[12%] top-[60%]' : '',
                    isMobile ? 'w-[50px] left-[10%] top-[53%]' : '',
                ]"
            />
            <img
                :src="CarlImgPath"
                class="absolute left-[50%] translate-x-[-50%]"
                alt="Carl icon"
                :class="[
                    !isTablet && !isMobile ? 'top-[40%]' : '',
                    !isPageShort && !isTablet && !isMobile ? 'w-[160px]' : '',
                    isPageShort && !isTablet && !isMobile ? 'w-[130px]' : '',
                    isTablet ? 'w-[180px] top-[30%]' : '',
                    isMobile ? ' w-[160px] top-[40%]' : '',
                ]"
                v-if="CarlImgPath"
            />
            <img
                :src="Bulb"
                class="absolute z-10 rotate-[20deg]"
                alt="lightbulb"
                :class="[
                    !isTablet && !isMobile ? 'right-[10%] top-[70%]' : '',
                    !isPageShort && !isTablet && !isMobile ? 'w-[55px]' : '',
                    isPageShort && !isTablet && !isMobile ? 'w-[50px]' : '',
                    isTablet ? 'w-[48px] right-[15%] top-[55%]' : '',
                    isMobile ? 'w-[40px] right-[13%] top-[50%]' : '',
                ]"
            />
            <img
                :src="Glasses"
                class="absolute z-10"
                alt="glasses"
                :class="[
                    !isTablet && !isMobile ? 'left-[13%] top-[68%]' : '',
                    !isPageShort && !isTablet && !isMobile ? 'w-[60px]' : '',
                    isPageShort && !isTablet && !isMobile ? 'w-[50px]' : '',
                    isTablet ? 'w-[48px] left-[12%] top-[22%]' : '',
                    isMobile ? 'w-[40px] left-[10%] top-[20%]' : '',
                ]"
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
                </path>
            </svg>
        </div>
    </div>
</template>



<style scoped>
</style>