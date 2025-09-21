<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import troubleshootingData from '../../assets/troubleshootingDB/troubleshooting.json';

import { useDeviceDetection } from '../../composables/useDeviceDetection';
const { isTablet, isMobile, isDesktop } = useDeviceDetection();

// getImagePath(): Dynamically generate RWD image path
const getImagePath = (prefix, suffix) => {
  let imageSize = 'full'; // Default
  if (isMobile.value) {
    imageSize = 'mobile';
  } else if (isTablet.value) {
    imageSize = 'medium';
  } else if (isDesktop.value) {
    imageSize = 'full';
  }
  // Concatenate image path
  return `${prefix}${imageSize}${suffix}`;
};

const openImageInNewTab = (imageSrc, imageName) => {
  const newTab = window.open();

  const imageWidth = imageSrc.includes('mobile')
    ? '50%' // Mobile & small
    : imageSrc.includes('medium')
      ? '60%' // Medium only
      : '80%'; // Large+ screens

  // Audemy Favicon
  newTab.document.head.innerHTML = `
    <link 
      rel="icon" 
      href="/assets/images/audemyelements/logo.png" 
      type="image/png"
    >
  `;

  newTab.document.body.innerHTML = `
    <div 
      style="
        text-align:center; 
        font-family:sans-serif; 
        font-weight:normal; 
        font-size:15px;
      "
    >
      <h1 
        style="margin:2%;"
      >
        ${imageName}
      </h1>
      <img 
        src="${imageSrc}" 
        style="width:${imageWidth}; height:auto; margin:auto;"
      />
    </div>
  `;
  newTab.document.title = `Audemy | Troubleshooting`;
};

// RWD Issues Header + Icon Classes
const IssuesHeaderClasses = [
  'text-[28px]',
  'md:text-[32px]',
  'font-semibold',
  'text-primary-color',
  'flex',
  'flex-col',
  'md:flex-row',
  'justify-center',
  'items-center',
  'lg:justify-start',
  'gap-5',
];

// RWD image classes
const imageClasses = [
  'w-full', // Mobile & Small screens
  'md:w-[80%]', // Large+ screens
  'my-5',
  'mx-auto',
  'hover:cursor-pointer',
  'rounded-lg',
  'shadow-md',
  'lg:shadow-none',
];
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>

  <div
    class="font-poppins relative flex flex-col items-start justify-center w-full my-16 text-center lg:text-left"
  >
    <!-- HEADER -->
    <div class="w-full">
      <h2 class="page-header">Troubleshooting Page</h2>
    </div>

    <!-- QUESTIONS -->
    <div class="flex flex-col w-full items-center justify-center my-3">
      <!-- Loop through issues dynamically -->
      <div
        v-for="(issue, index) in troubleshootingData.issues"
        :key="index"
        class="relative z-0 w-[80%] mx-auto my-5 shadow-md p-12 rounded-lg bg-cross-lines overflow-hidden"
      >
        <!-- Hide decorative SVG wave -->
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="absolute -z-10 left-0 top-0 scale-y-[-1] h-[300px]"
        >
          <path
            fill="#e7f0f5"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,165.3C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div class="lg:p-10 w-full">
          <!-- Issues Header + Icon -->
          <h3 :class="IssuesHeaderClasses">
            <img
              aria-hidden="true"
              :src="issue.iconPath"
              class="w-[40px] h-auto"
            />
            <p>{{ issue.name }}</p>
          </h3>

          <!-- Loop through the body items (titles, text, and images) -->
          <div
            v-for="(item, idx) in issue.body"
            :key="idx"
            class="my-10 md:px-2"
          >
            <!-- Title -->
            <h4
              v-if="item.type === 'title'"
              class="text-primary-color text-[18px] sm:text-[20px] md:text-[22px] font-semibold my-5"
            >
              <p>{{ item.content }}</p>
            </h4>

            <!-- Text -->
            <p
              v-if="item.type === 'text'"
              v-html="item.content"
              :class="[
                'page-text flex flex-col',
                item.subtype === 'subheader'
                  ? 'border-b-2 p-3 border-primary-color page-subheader'
                  : '',
              ]"
            ></p>

            <!-- Dynamic Image RWD: 
              - Mobile & Small Screens: Cropped Image
              - Medium Only: Slightly-cropped
              - Large+: Full-width
            -->
            <img
              v-if="item.type === 'image'"
              :src="getImagePath(item.prefix, item.suffix)"
              :alt="item.caption"
              :class="imageClasses"
              title="Open image in new tab"
              @click="
                openImageInNewTab(
                  getImagePath(item.prefix, item.suffix),
                  item.caption
                )
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
