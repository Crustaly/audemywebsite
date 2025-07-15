<script setup>
const props = defineProps({
  smallScreen: Boolean,
  image: String,
  text: String,
  author: String,
  network: String,
  url: String,
});
const path = '/assets/images/impact/';
</script>

<template>
  <div
    v-if="!smallScreen"
    class="w-full mx-auto flex flex-row justify-center h-auto"
  >
    <div class="w-full max-w-[360px] px-4">
      <div
        class="flex flex-col justify-evenly h-auto rounded-[8px] mobile:px-4 mobile:justify-center mobile:items-center"
      >
        <!-- NEWS NETWORK (AUTHOR) -->
        <h2 class="text-center text-[22px] font-bold mb-4 font-poppins tablet:text-[14px] font-[600] mobile:text-[14px] mobile:text-center" v-html="network"></h2>

        <!-- IMAGE -->
        <div class="w-full">
          <a :href="url" target="_blank" rel="noopener noreferrer" class="block">
            <img
            :src="path + image"
            class="w-full h-[150px] object-cover rounded-2xl border-[1px] border-[#E5E5E5] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            alt="image"
            />
          </a>
        </div>

        <!-- TEXT -->
        <div class="mt-8 mobile:mt-4 w-full">
          <a :href="url" target="_blank" rel="noopener noreferrer" class="block">
            <h4
              class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[14px] font-[600] mobile:text-[14px] mobile:text-center hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              v-html="text"
            ></h4>
          </a>
        </div>

        <!-- AUTHOR -->
        <div class="w-full mobile:text-center">
          <p
            class="text-right text-body-text-color font-poppins text-[14px] tablet:text-[10px] font-[500] mobile:text-[12px] mobile:text-center"
            v-html="author"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>