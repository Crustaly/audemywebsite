<script setup>
const props = defineProps({
  image: String,
  text: String,
  network: String,
  url: String,
});
const path = '/assets/images/impact/';
</script>

<template>
  <div
    class="w-full mx-auto flex flex-row justify-center p-2 rounded-[16px] border border-gray-400 hover:border-black hover:shadow-[6px_6px_0px_#0C0D0D] transition-all duration-300"
  >
    <div class="w-full max-w-[360px] px-4">
      <div
        class="font-poppins flex flex-col items-center justify-evenly h-auto rounded-[8px] gap-4 mobile:px-4"
      >
        <!-- NEWS NETWORK (HEADING) -->
        <div
          class="w-full flex items-center justify-center h-[80px] text-center"
        >
          <h2
            class="text-[16px] md:text-[18px] xl:text-[20px] font-bold"
            v-html="network"
          ></h2>
        </div>

        <!-- CLICKABLE IMAGE 
          - SR Accessibility: Remove linked images from tab order to remove redundant output 
          - Text link remains tabbable
        -->
        <div class="w-full flex justify-center" aria-hidden="true">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full"
            tabindex="-1"
          >
            <img
              :src="path + image"
              class="w-full h-[150px] object-cover rounded-2xl border-[1px] border-[#E5E5E5] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              aria-hidden="true"
            />
          </a>
        </div>

        <!-- TEXT/DESCRIPTION -->
        <div class="w-full text-center px-2">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <h3
              class="text-gray-500 font-[600] text-[16px] tablet:text-[14px] mobile:text-[14px] hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              v-html="text"
            ></h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
