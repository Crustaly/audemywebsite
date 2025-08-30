<script setup>
const props = defineProps({
  icon: String,
  text: String,
});
const path = '/assets/images/impact/';
</script>

<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col justify-evenly items-center game-resource-icon-card bg-white w-[200px] h-[200px]"
    >
      <!-- TEXT -->
      <div class="p-3">
        <h3
          class="text-center text-body text-[18px] md:text-[16px] font-[400] text-[16px]"
          v-html="text"
        ></h3>
      </div>
      <!-- ICON -->
      <div class="p-3 flex justify-center">
        <img :src="path + icon" alt="" class="mobile:h-[70px] h-[70%] w-auto" />
      </div>
    </div>
  </div>
</template>
