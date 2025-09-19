<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import troubleshootingData from '../../assets/troubleshootingDB/troubleshooting.json';

const openImageInNewTab = (imageSrc, imageName) => {
  const newTab = window.open();
  newTab.document.body.innerHTML = `<img src="${imageSrc}" style="width:70%; height:auto;"/>`;
  newTab.document.title = `image: ${imageName}`;
};
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>

  <div
    class="font-poppins relative flex flex-col items-start justify-center w-full px-10 my-16"
  >
    <!-- HEADER -->
    <div class="w-full">
      <h2 class="page-header">Troubleshooting Page</h2>
    </div>

    <!-- QUESTIONS -->
    <div class="flex flex-col w-full items-start justify-start my-3">
      <!-- Loop through issues dynamically -->
      <div
        v-for="(issue, index) in troubleshootingData.issues"
        :key="index"
        class="w-full md:w-[80%] mx-auto my-5 p-5 shadow-md rounded-lg bg-cross-lines"
      >
        <h3
          class="p-3 text-[28px] md:text-[32px] font-semibold my-12 text-primary-color flex flex-col md:flex-row justify-center items-center text-center gap-5"
        >
          <img
            src="/assets/images/troubleshooting/alert.png"
            aria-hidden="true"
            class="w-6 h-6"
          />
          <p class="p-3 border-b-2 border-primary-color">{{ issue.name }}</p>
        </h3>

        <!-- Loop through the body items (titles, text, and images) -->
        <div v-for="(item, idx) in issue.body" :key="idx" class="my-10 px-2">
          <!-- Title -->
          <h4
            v-if="item.type === 'title'"
            class="text-[18px] md:text-[20px] font-semibold my-5 text-center"
          >
            <p>{{ item.content }}</p>
          </h4>

          <!-- Text -->
          <p
            v-if="item.type === 'text'"
            v-html="item.content"
            class="page-text flex flex-col text-center"
          ></p>

          <!-- Image -->
          <img
            v-if="item.type === 'image'"
            :src="item.path"
            :alt="item.caption"
            class="w-[504px] my-5 mx-auto hover:cursor-pointer"
            title="Open image in new tab"
            @click="openImageInNewTab(item.path, item.caption)"
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
