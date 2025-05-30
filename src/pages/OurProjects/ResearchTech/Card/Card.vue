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
  <div class="w-full ">
    <div class="flex items-center w-full gap-[15px] py-4 lg:flex-col">
      <div class="w-1/4 flex justify-center lg:w-full lg:justify-start">
        <div
          class="w-[76px] h-[76px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center"
        >
          <img :src="path + icon" alt="icon" class="w-[90%] h-[90%]" />
        </div>
      </div>
      <div class="w-3/4 flex flex-col font-poppins lg:w-full lg:justify-start">
        <h2 class="text-2xl font-semibold ">
          {{ title }}
        </h2>
        <h4
          class="text-left text-body-text-color max-w-[95%] text-[20px] font-[400]"
          v-html="text"
        ></h4>
      </div>
    </div>
  </div>
</template>
