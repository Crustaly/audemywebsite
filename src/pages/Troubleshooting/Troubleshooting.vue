<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import troubleshootingData from '../../assets/troubleshootingDB/troubleshooting.json';

const openImageInNewTab = (imageSrc, imageName) => {
  const newTab = window.open();
  newTab.document.body.innerHTML = `
    <div style="text-align:center; font-family:sans-serif; font-weight:normal;">
      <h1 style="margin:2%;">${imageName}</h1>
      <img src="${imageSrc}" style="width:80%; height:auto; margin:3%;"/>
    </div>
  `;
  newTab.document.title = `${imageName}`;
};

// Shared RWD image classes
const imageClasses = [
  'w-[80%]',
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
        class="w-[80%] mx-auto my-5 p-5 md:p-16 shadow-md rounded-lg bg-cross-lines"
      >
        <h3
          class="text-[28px] md:text-[32px] font-semibold text-primary-color flex flex-col md:flex-row justify-center lg:justify-start items-center gap-5"
        >
          <img
            src="/assets/images/troubleshooting/alert.png"
            aria-hidden="true"
            class="w-6 h-6"
          />
          <p>{{ issue.name }}</p>
        </h3>

        <!-- Loop through the body items (titles, text, and images) -->
        <div v-for="(item, idx) in issue.body" :key="idx" class="my-10 px-2">
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
                ? 'border-b-2 p-3 border-primary-color font-semibold page-subheader'
                : '',
            ]"
          ></p>

          <!-- Mobile to Medium Screens: Display Cropped Image -->
          <img
            v-if="item.type === 'image'"
            :src="item.prefix + 'mobile' + item.suffix"
            :alt="item.caption"
            :class="[imageClasses, 'block lg:hidden']"
            title="Open image in new tab"
            @click="
              openImageInNewTab(
                item.prefix + 'mobile' + item.suffix,
                item.caption
              )
            "
          />

          <!-- Large+ Screens: Display Full Image -->
          <img
            v-if="item.type === 'image'"
            :src="item.prefix + 'full' + item.suffix"
            :alt="item.caption"
            :class="[imageClasses, 'hidden lg:block']"
            title="Open image in new tab"
            @click="
              openImageInNewTab(
                item.prefix + 'full' + item.suffix,
                item.caption
              )
            "
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
