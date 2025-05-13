<template>
  <div class="flex flex-col items-center">
    <div class="mb-2">
      <img :src="iconSrc" alt="Game icon" class="w-[70px] h-[70px]" />
    </div>
    <h1
      :class="[
        isMobile ? 'text-[56px] leading-[60px]' : 'text-[64px] leading-[70px]',
      ]"
      class="font-poppins font-semibold tracking-normal text-center mb-6"
    >
      {{ title }}
    </h1>
    <p
      :class="[isMobile ? 'w-[350px] h-[24px]' : 'w-[397px] h-[24px]']"
      class="font-poppins font-normal text-[16px] leading-[24px] tracking-normal text-center mt-2 mb-8 text-[#777777]"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  iconSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
});
</script>
