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
      class="flex flex-col justify-evenly items-center w-[200px] h-[200px] rounded-[16px] border-[1.5px] border-[#0C0D0D] bg-white shadow-[4px_4px_0px_#0C0D0D]"
    >
      <!-- TEXT -->
      <div class="p-3">
        <h4
          class="text-center text-body text-[18px] md:text-[16px] font-[400] text-[16px]"
          v-html="text"
        ></h4>
      </div>
      <!-- ICON -->
      <div class="p-3 flex justify-center">
        <img
          :src="path + icon"
          alt=""
          class="mobile:h-[70px] h-[80px] md:h-[90px]"
        />
      </div>
    </div>
  </div>
</template>
