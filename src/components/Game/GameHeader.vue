<template>
  <div
    class="flex flex-col items-center bg-cross-lines p-8 mt-5 mb-5 rounded-[16px] mobile:w-[80%] w-full shadow-md"
  >
    <div class="mb-2 mt-2">
      <img
        :src="iconSrc"
        alt="Game icon"
        class="mobile:w-[50px] mobile:h-auto w-[70px] h-[70px]"
      />
    </div>
    <h1
      :class="[
        isMobile
          ? 'text-[30px] leading-[50px]'
          : 'text-[50px] leading-[70px] lg:text-[55px]',
      ]"
      class="font-poppins font-semibold tracking-normal text-center mobile:mb-1 mb-6"
    >
      {{ title }}
    </h1>
    <p
      :class="[isMobile ? 'w-[280px] h-[24px] px-2' : 'w-[397px] h-[24px]']"
      class="font-poppins font-normal text-[16px] leading-[24px] tracking-normal text-center mt-2 mb-8 text-[#000000]"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
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
