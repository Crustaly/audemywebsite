<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import troubleshootingData from '../../../public/assets/troubleshootingDB/troubleshooting.json';

const openImageInNewTab = (imageSrc, imageName) => {
  const newTab = window.open();
  newTab.document.body.innerHTML = `<img src="${imageSrc}" style="width:70%; height:auto;"/>`;
  newTab.document.title = `image: ${imageName}`;
};
</script>

<template>
  <ScrollUpButton />

  <div class="px-20 relative" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>

  <div
    class="relative flex flex-col items-start justify-center mobile:justify-center w-full h-[10%] mt-[2rem] px-[8rem] mb-16 tablet:mb-[265px] mobile:mb-[129px]"
  >
    <!-- HEADER -->
    <div class="max-w-[519px]">
      <h2
        class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mobile:ml-0"
      >
        Troubleshooting Page
      </h2>
    </div>

    <!-- QUESTIONS -->
    <div
      class="flex flex-col w-full items-start justify-start mt-3 tablet:mb-[265px] mobile:mb-[129px]"
    >
      <!-- Loop through issues dynamically -->
      <div
        v-for="(issue, index) in troubleshootingData.issues"
        :key="index"
        class="w-full mb-6 mt-2 p-10 border-8 rounded-lg"
      >
        <h3
          class="text-3xl font-semibold mb-4 text-[#087BB4] flex items-center gap-2"
        >
          <img
            src="/public/assets/images/troubleshooting/alert.png"
            alt="Icon"
            class="w-6 h-6"
          />
          {{ issue.name }}
        </h3>

        <!-- Loop through the body items (titles, text, and images) -->
        <div v-for="(item, idx) in issue.body" :key="idx">
          <!-- Title -->
          <h4
            v-if="item.type === 'title'"
            class="text-2xl font-semibold mt-8 mb-2"
          >
            {{ item.content }}
          </h4>

          <!-- Text -->
          <p
            v-if="item.type === 'text'"
            class="text-body text-lg font-poppins leading-8 mb-4"
          >
            {{ item.content }}
          </p>

          <!-- Image -->
          <img
            v-if="item.type === 'image'"
            :src="item.path"
            :alt="item.caption"
            class="w-[504px] mb-4"
            @click="openImageInNewTab(item.path, item.caption)"
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
