<script setup>
import HaveYouHeardCard from './HaveYouHeardCard/HaveYouHeardCard.vue';

const items = [
  {
    icon: 'school.svg',
    text: 'Sessions at schools for the blind to introduce our games to students.',
  },
  {
    icon: 'classroom.svg',
    text: 'Workshops for BVI individuals on accessing coding resources.',
  },
];
</script>

<template>
  <div class="relative">
    <img
      src="/assets/images/our-projects/Mask group.png"
      class="absolute -z-10 -right-8 -top-32 md:-right-14"
      alt="Mask Group Image"
    />
    <div class="text-center">
      <h2 class="text-sm uppercase tracking-[3.6px]">Education Events</h2>
      <h3 class="text-[32px] font-poppins md:text-4.5xl">
        Have you heard about the events we organize?
      </h3>
    </div>
    <div class="flex flex-col lg:flex-row-reverse">
      <div class="flex">
        <img
          src="/assets/images/our-projects/event.png"
          alt="Image of students"
          class=""
        />
      </div>
      <div class="flex flex-col gap-4 my-8">
        <HaveYouHeardCard
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :text="item.text"
        />
      </div>
    </div>
    <div class="flex items-center justify-center mt-13">
      <a
        href="https://www.instagram.com/audemyapp/"
        target="_blank"
        class="font-poppins font-semibold px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] mobile:items-center mobile:text-center"
      >
        Follow us on Instagram
      </a>
    </div>
  </div>
</template>
