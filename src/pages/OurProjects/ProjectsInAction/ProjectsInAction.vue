<script setup>
import Carousel from './Carousel.vue';
</script>

<template>
  <div class="flex flex-col gap-4 relative md:flex-row lg:gap-10">
    <img
      src="/assets/images/impact/Union.png"
      class="absolute max-w[100px] -z-10 -top-6 -left-8 md:-left-14 md:-top-14 xl:-top-28"
      alt="Union Image"
    />
    <img
      src="/assets/images/impact/Group 1135.png"
      class="absolute right-28 top-8 h-8 md:h-16 md:left-56 xl:left-72 z-20"
      alt="Star Icon"
    />
    <img
      src="/assets/images/impact/Group 1153.png"
      class="absolute left-20 -top-5 h-8 md:h-16 md:left-24 md:-top-10 xl:-top-14 z-20"
      alt="Chat Icon"
    />

    <div class="p-4 md:basis-1/2">
      <div class="bg-white rounded-xl border-4 border-[#2A3338] p-2">
        <div
          class="h-full rounded-xl border-4 border-[#2A3338] overflow-hidden xl:h-96"
        >
          <Carousel />
        </div>
      </div>
    </div>
    <div class="flex items-center font-poppins text-center md:basis-1/2">
      <div class="flex flex-col gap-6 text-start">
        <h3 class="text-sm uppercase tracking-[3.6px]">Gallery</h3>

        <h2 class="text-[32px] md:text-4.5xl">Our Projects in action</h2>

        <p class="text-lg text-body leading-8 lg:text-xl">
          Want to see Audemy in action? Swipe through this collection of images
          that showcase not only our achievements, but the lives we've touched
          and the impact we strive to make every day.
        </p>
      </div>
    </div>
  </div>
</template>
