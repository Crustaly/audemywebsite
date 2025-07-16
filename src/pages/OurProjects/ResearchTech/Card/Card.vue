<script setup>
const props = defineProps({
  smallScreen: Boolean,
  icon: String,
  title: String,
  text: String,
});

const path = '/assets/images/our-projects/researchtech/';
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col items-center w-full gap-[15px] py-4 text-center">
      <div class="flex justify-center">
        <div
          class="w-[76px] h-[76px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center"
        >
          <img :src="path + icon" alt="icon" class="w-[90%] h-[90%]" />
        </div>
      </div>
      <div class="flex flex-col font-poppins">
        <h2 class="text-2xl font-semibold" v-if="title">
          {{ title }}
        </h2>
        <h4
          class="text-center text-body-text-color text-[20px] font-[400] whitespace-pre-line"
          v-html="text"
        ></h4>
      </div>
    </div>
  </div>
</template>