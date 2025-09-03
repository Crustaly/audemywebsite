<script setup>
import Card from './Card/Card.vue';
import ResearchListCard from './Research/ResearchListCard.vue';
const items = [
  { icon: 'chat.png', title: '50+ AI-Driven \n Conversational Games' },
  { icon: 'intel.png', title: 'Intel OpenVINO \n Speech Processing' },
  { icon: 'volume-up.png', title: 'Screen Reader Compatibility' },
];
const items2 = [
  {
    icon: 'audiotactcle-sys-paper-1.png',
    title: 'Presented Research at ACM',
    subtitle: "ICMI '23 in Paris, France",
    url: 'https://dl.acm.org/doi/10.1145/3686215.3690154',
  },
  {
    icon: 'heard-le-paper-2.png',
    title: 'Presented Research at ACM',
    subtitle: "ICMI '24 in Costa Rica",
    url: 'https://dl.acm.org/doi/10.1145/3610661.3617150',
  },
  {
    icon: 'acm-chi-paper-3.png',
    title: 'Presented Research at ACM CHI',
    subtitle: "'25 in Yokohama, Japan",
    url: 'https://arxiv.org/abs/2504.17117',
  },
];
</script>

<template>
  <div class="flex flex-col font-poppins">
    <div class="flex flex-col text-center my-10">
      <h2 class="page-header-accent">Research & Technologies</h2>
      <h3 class="page-header">
        What makes our platform
        <em class="text-secondary-color"> accessible</em> and
        <em class="text-secondary-color">engaging</em>
      </h3>
    </div>

    <!-- Centered content section -->
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col lg:flex-row lg:gap-20">
        <Card
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :title="item.title"
        />
      </div>

      <div class="w-[80%] px-4 text-center m-12">
        <p class="page-text">
          We conduct
          <span class="font-semibold"> research on accessibility </span> in the
          field of AI and Computer Science to make sure
          <span style="color: #077bb3" class="font-semibold">
            Audemy's games
          </span>
          stay as <span class="font-semibold"> accessible as possible. </span>
        </p>
      </div>
      <div
        class="w-full mobile:justify-center mobile:items-center mobile:text-center"
      >
        <div
          id="div_about_us"
          class="flex flex-wrap justify-center gap-6 mt-[40px] tablet:mt-[72px] mb-[32px] w-full transition-all duration-500 ease-in-out"
        >
          <div
            v-for="(item, index) in items2"
            :key="index"
            class="flex transition-all duration-300 ease-in-out"
            :class="{
              'opacity-0 translate-y-4':
                (smallScreen ? index >= 4 : index >= 8) && !showAll,
              'opacity-100 translate-y-0':
                showAll || (smallScreen ? index < 4 : index < 8),
            }"
          >
            <div class="flex flex-col w-full my-3">
              <div class="flex justify-center w-full">
                <div class="px-4">
                  <ResearchListCard
                    :image="item.icon"
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :url="item.url"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[80%] px-4 text-center m-12">
        <p class="page-text">
          Peer-reviewed studies in
          <span class="font-semibold"> 20+ classrooms </span> show Audemy boosts
          math performance by
          <span class="font-semibold"> 28% in just one week.</span>
        </p>
      </div>
    </div>

    <div class="page-button-flex">
      <a
        href="/game-zone-landing-page"
        class="page-button blue-button md:px-3 md:w-[300px] px-9 mobile:h-auto py-3"
      >
        Try out our games!
      </a>
    </div>
  </div>
</template>
