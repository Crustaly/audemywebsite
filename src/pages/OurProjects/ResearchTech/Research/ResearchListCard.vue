<script setup>
const props = defineProps({
  smallScreen: Boolean,
  image: String,
  text: String,
  author: String,
  url: String,
});
const path = '/assets/images/our-projects/';
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
        <!-- IMAGE -->
        <div class="w-full">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              :src="path + image"
              class="w-full h-[150px] object-cover rounded-2xl border-[1px] border-[#E5E5E5] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              alt="image"
            />
          </a>
        </div>

        <!-- TEXT -->
        <div class="mt-8 mobile:mt-4 w-full">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <h4
              class="text-center text-[#0C0D0D] font-poppins text-[18px] font-normal leading-snug"
              v-html="text"
            ></h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
