<script setup>
import Card from './Card/Card.vue';

const items = [
  { icon: "message-chat.svg", text: "50+ AI-Driven\nConversational Games" },
  { icon: "network-circle.svg", text: "Intel OpenVINO Speech\nProcessing" },
  { icon: "eye.svg", text: "Screen Reader\nCompatibility" },
];

const items2 = [
    {icon: "Research_paper1.png",text: "Presented Research at ACM \n ICMI ‘23 in Paris, France"},
    {icon: "Research_paper2.png",text: "Presented Research at ACM \n ICMI ‘24 in Costa Rica"},
    {icon: "Research_paper3.png",text: "Presented Research at ACM CHI \n ‘25 in Yokohama, Japan"},
];
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col text-center mb-16">
      <h2 class="text-sm uppercase tracking-[3.6px]">
        Research & Technologies
      </h2>
      <h3 class="text-[32px] font-poppins md:text-4.5xl">
        What makes our platform accessible and engaging
      </h3>
    </div>
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
        We conduct research on accessibility in the field of AI and Computer Science to make sure Audemy’s games stay as accessible as possible.
      </p>
    </div>
    <div class="max-w-2xl px-4 text-center mb-10">
        <p class="font-poppins text-base text-gray-700 leading-relaxed">
          Peer-reviewed studies in 20+ classrooms show Audemy boosts math performance by 28% in just one week.        
        </p>
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
