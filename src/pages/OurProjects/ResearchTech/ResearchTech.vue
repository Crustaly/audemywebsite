<script setup>
import Card from './Card/Card.vue';

const items = [
  {
    icon: 'message-chat.svg',
    title: 'Data-Driven Conversational Games',
    text: `Our games are backed by research, rigorously tested and optimized. We've published studies on conversational interfaces at leading international conferences. <a href="https://dl.acm.org/doi/10.1145/3610661.3617150" target="_blank" class="text-[#087BB4] underline text-[18px]"><b>Read more!</b></a>`,
  },
  {
    icon: 'network-circle.svg',
    title: 'Intel OpenVINO Natural Language Processing',
    text: `Intel OpenVINO's Natural Language Processing uses machine learning to turn speech into text, enabling users to interact with Audemy through an audio-focused interface. <a href="https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html?cid=sem&source=sa360&campid=2024_ao_cbu_us_gmocoma_gmocrbu_awa_text-link_brand_exact_cd_HQ-ai-openvino_3500268603_google_b2b_is_non-pbm_intel&ad_group=AI_Brand-Openvino_Openvino_Exact&intel_term=intel+openvino&sa360id=43700079820169414&gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjGynGEnU9rLJPetpdfSrDl8V2bxtLFPMuDgLA39EVai2d9PANXXxjhoCTqgQAvD_BwE&gclsrc=aw.ds" target="_blank" class="text-[#087BB4] underline text-[18px]"><b>Learn  more!</b></a>`,
  },
  {
    icon: 'eye.svg',
    title: 'Screen Reader Compatibility',
    text: `Our game interface is keyboard-friendly, enabling blind and visually impaired students to navigate, select games, and answer questions with simple keystrokes.`,
  },
];
</script>

<template>
  <!--
  <div
    class="relative flex flex-col py-[8rem] items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[12px] mobile:mt-0 mobile:pt-0 mobile:pb-0"
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
            :title="item.title"
            :text="item.text"
            :smallScreen="smallScreen"
          />
        </div>
      </div>
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
  -->
  <div class="flex flex-col">
    <div class="flex flex-col text-center">
      <h2 class="text-sm uppercase tracking-[3.6px]">Research & Technologies</h2>
      <h3 class="text-[32px] md:text-4.5xl">What makes our platform accessible and engaging</h3>
    </div>
    <div class="flex flex-col my-6 lg:my-10 lg:flex-row lg:gap-10">
      <Card
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
      />
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
