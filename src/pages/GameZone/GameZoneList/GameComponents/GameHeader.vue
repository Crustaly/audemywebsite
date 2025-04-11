<template>
  <div class="flex flex-col justify-center items-center mb-8">
    <img
      :src="iconPath"
      class="w-[70px] h-[70px] mb-2"
    />
    <h1
      :class="titleClass"
      class="font-poppins font-semibold tracking-normal text-center mb-6"
    >
      {{ title ?? '' }}
    </h1>
    <p
      :class="subtitleClass"
      class="font-poppins text-[#777777] text-center mt-2 mb-8"
    >
      {{ subtitle ?? '' }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["isMobile", "title", "subtitle", "iconPath"]);

const titleClass = computed(() =>
  props.isMobile ? "text-[56px] leading-[60px]" : "text-[64px] leading-[70px]"
);
const subtitleClass = computed(() =>
  props.isMobile ? "w-[350px] h-[24px]" : "w-[397px] h-[24px]"
);
</script>
