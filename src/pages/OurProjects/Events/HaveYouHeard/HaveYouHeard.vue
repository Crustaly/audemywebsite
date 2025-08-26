<script setup>
import HaveYouHeardCard from './HaveYouHeardCard/HaveYouHeardCard.vue';

const items = [
  {
    icon: 'primary-school.png',
    title: 'Sessions at schools for the blind',
    caption: 'To introduce our games to students',
  },
  {
    icon: 'whiteboard.png',
    title: 'Workshops for BVI individuals',
    caption: 'On accessing coding resources',
  },
];
</script>

<template>
  <div class="relative font-poppins w-full">
    <img
      src="/assets/images/our-projects/Mask group.png"
      class="absolute -z-10 -right-8 -top-32 md:-right-14"
      aria-hidden="true"
    />
    <div class="w-full md:w-[80%] mx-auto">
      <div class="text-center">
        <h2 class="page-header-accent">Education Events</h2>
        <h3 class="page-header w-[80%] mx-auto">
          Have you heard about the
          <span class="font-semibold text-primary-color">
            events we organize?
          </span>
        </h3>
      </div>
      <div
        class="flex flex-col lg:flex-row-reverse justify-center items-center"
      >
        <div class="flex justify-center">
          <img src="/assets/images/our-projects/event.png" aria-hidden="true" />
        </div>
        <div class="flex flex-col gap-16 my-8">
          <HaveYouHeardCard
            v-for="(item, index) in items"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :caption="item.caption"
          />
        </div>
      </div>
      <div class="flex items-center justify-center my-10 text-center">
        <a
          href="https://www.instagram.com/audemyapp/"
          target="_blank"
          class="page-button blue-button px-9 mobile:h-auto py-3"
        >
          Follow us on Instagram
        </a>
      </div>
    </div>
  </div>
</template>
