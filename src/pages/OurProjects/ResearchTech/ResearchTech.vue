<script setup>
import Card from './Card/Card.vue';
import ResearchListCard from './Research/ResearchListCard.vue';
const items = [
  { icon: 'message.png', text: '50+ AI-Driven \n Conversational Games' },
  { icon: 'intel.png', text: 'Intel OpenVINO \n Speech Processing' },
  { icon: 'digital.png', text: 'Screen Reader Compatibility' },
];
const items2 = [
  {
    icon: 'Research_paper1.png',
    text: "Presented Research at ACM \n ICMI '23 in Paris, France",
  },
  {
    icon: 'Research_paper2.png',
    text: "Presented Research at ACM \n ICMI '24 in Costa Rica",
  },
  {
    icon: 'Research_paper3.png',
    text: "Presented Research at ACM CHI \n '25 in Yokohama, Japan",
  },
];
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col text-center mb-16">
      <h2 class="text-sm uppercase tracking-[3.6px]">
        Research & Technologies
      </h2>
      <h3 class="text-[32px] font-poppins md:text-4.5xl">
        What makes our platform
        <em style="color: #fe892a"> accessible and engaging </em>
      </h3>
    </div>

    <!-- Centered content section -->
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col my-6 lg:my-10 lg:flex-row lg:gap-20">
        <Card
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :text="item.text"
        />
      </div>

      <div class="max-w-2xl px-4 text-center mb-10">
        <p class="font-poppins text-base text-gray-700 leading-relaxed">
          We conduct <strong> research on accessibility </strong> in the field
          of AI and Computer Science to make sure
          <span style="color: #077bb3" class="font-semibold">
            Audemy's games
          </span>
          stay as <strong> accessible as possible </strong>.
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
            <div class="flex flex-col h-full w-full min-h-[300px] mb-3">
              <div class="flex justify-center w-full">
                <div class="w-full px-4">
                  <ResearchListCard
                    :image="item.icon"
                    :text="item.text"
                    :smallScreen="smallScreen"
                    class="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-2xl px-4 text-center mb-10">
        <p class="font-poppins text-base text-gray-700 leading-relaxed">
          Peer-reviewed studies in <strong> 20+ classrooms </strong> show Audemy
          boosts math performance by <strong> 28% in just one week</strong>.
        </p>
      </div>
    </div>

    <div class="flex items-center justify-center mt-10">
      <a
        href="/game-zone"
        class="font-poppins font-semibold w-[244px] px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D]"
      >
        Try out our games!
      </a>
    </div>
  </div>
</template>
