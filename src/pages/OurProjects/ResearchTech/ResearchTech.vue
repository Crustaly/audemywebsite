<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Card from "./Card/Card.vue";
import ResearchListCard from "./Research/ResearchListCard.vue";

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

let smallScreen = ref(window.innerWidth <= 450);

const updateScreenWidth = () => {
    smallScreen.value = window.innerWidth <= 450;
};

onMounted(() => {
    window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <div
      class="relative flex flex-col pt-10 pb-20 items-center justify-start w-full h-auto mb-20 tablet:mb-[100px] mobile:mb-[24px] mobile:mt-0"
    >
      <div class="w-full">
        <h3
          class="font-poppins text-small-text-color text-[12px] font-[500] mobile:w-auto text-center tracking-[3.6px]"
        >
          RESEARCH & TECHNOLOGIES
        </h3>
      </div>
  
      <div class="max-w-[519px]">
        <h2
          class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]"
        >
          What makes our platform accessible and engaging
        </h2>
      </div>
  
      <div class="flex justify-center">
        <div class="max-w-[75%] w-full">
          <div
            id="div_researchtech"
            class="flex justify-between mt-[110px] tablet:mt-[72px] mb-[63px] gap-16 tablet:gap-14 mobile:gap-4 mobile:flex-wrap"
          >
            <Card
              v-for="(item, index) in items"
              :key="index"
              :icon="item.icon"
              :text="item.text"
              :smallScreen="smallScreen"
            />
          </div>
        </div>
      </div>
  
      <!-- Descriptive Text -->
      <div class="max-w-2xl px-4 text-center mb-10">
        <p class="font-poppins text-base text-gray-700 leading-relaxed">
          We conduct research on accessibility in the field of AI and Computer Science to make sure Audemy’s games stay as accessible as possible.
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
              'opacity-0 translate-y-4': (smallScreen ? index >= 4 : index >= 8) && !showAll,
              'opacity-100 translate-y-0': showAll || (smallScreen ? index < 4 : index < 8)
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
          Peer-reviewed studies in 20+ classrooms show Audemy boosts math performance by 28% in just one week.        
        </p>
      </div>
  
      <div class="flex items-center justify-center">
        <a
          href="/game-zone"
          class="font-poppins font-semibold w-[244px] px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D]"
        >
          Try out our games!
        </a>
      </div>
    </div>
  </template>  

<style>
@media screen and (max-width: 450px) {
    #div_researchtech {
        flex-wrap: wrap;
    }

    #div_researchtech > * {
        flex: 0 0 100%;
    }
}
</style>
