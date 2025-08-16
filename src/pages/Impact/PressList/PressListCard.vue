<script setup>
const props = defineProps({
  image: String,
  text: String,
  author: String,
  network: String,
  url: String,
});
const path = '/assets/images/impact/';
</script>

<template>
  <div class="w-full mx-auto flex flex-row justify-center h-auto">
    <div class="w-full max-w-[360px] px-4">
      <div
        class="flex flex-col items-center justify-evenly h-auto rounded-[8px] gap-4 mobile:px-4"
      >
        <!-- NEWS NETWORK (HEADING) -->
        <div
          class="w-full flex items-center justify-center h-[60px] text-center px-2"
        >
          <h2
            class="text-[26px] font-bold font-poppins tablet:text-[14px] font-[600] mobile:text-[14px]"
            v-html="network"
          ></h2>
        </div>

        <!-- IMAGE -->
        <div class="w-full flex justify-center">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full"
          >
            <img
              :src="path + image"
              class="w-full h-[150px] object-cover rounded-2xl border-[1px] border-[#E5E5E5] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              alt=""
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
            <h4
              class="text-gray-500 font-poppins font-[600] text-[16px] tablet:text-[14px] mobile:text-[14px] hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              v-html="text"
            ></h4>
          </a>
        </div>

        <!-- AUTHOR -->
        <div class="w-full text-right mobile:text-center px-2">
          <p
            class="text-body-text-color font-poppins text-[14px] tablet:text-[10px] font-[500] mobile:text-[12px]"
            v-html="author"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
