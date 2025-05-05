<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import PressListCard from './PressListCard.vue';

const items = [
  {
    image: 'intel-globalImpactAI.png',
    text: 'Katy ISD student develops online tool to help blind students',
    author: '-- By Fox News',
    url: 'https://www.fox26houston.com/news/katy-student-develops-online-tool-help-blind-students',
  },
  {
    image: 'intel-globalImpactAI.png',
    text: 'Intel Celebrates AI Innovations by Students with Global Impact Festival',
    author: '-- By Intel',
    url: ""
  },
  {
    image: 'houstonhappens.png',
    text: 'Stay motivated during the school year with Houston Happens!',
    author: '-- By CW39 Houston',
    url: ""
  },
  {
    image: 'students2.png',
    text: 'Katy ISD student creates audio-based education games for visually impaired children',
    author: '-- By Aubrey Vogel',
    url: ""
  },
];

let smallScreen = ref(window.innerWidth <= 450);

const updateScreenWidth = () => {
  smallScreen.value = window.innerWidth <= 450;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <div class="relative flex w-full justify-center px-10 mt-20 mb-32">
    <!-- MAIN SECTION -->
    <div
      class="flex flex-col items-start justify-start mobile:justify-center h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]"
    >
      <div class="w-full">
        <div class="">
          <h3
            class="font-poppins text-small-text-color text-[12px] text-[#899296] font-[600] mobile:w-auto mobile:mx-20 text-left tracking-[3.6px]"
          >
            PRESS LIST
          </h3>
        </div>

        <div class="my-8">
          <h2
            class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center mobile: items-center mobile:justify-center mobile:-mx-14 font-[400]"
          >
            Trusted by Leading Publications
          </h2>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="w-full mobile:justify-center mobile:items-center mobile:text-center"
        >
          <div
            id="div_about_us"
            class="grid gap-6 mt-[40px] tablet:mt-[72px] mb-[63px] w-full grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1"
          >
            <div v-for="(item, index) in items" :key="index" class="flex">
              <div class="flex flex-col h-full w-full min-h-[300px]">
                <div class="flex justify-center w-full">
                  <div class="w-full px-4">
                    <PressListCard
                      :image="item.image"
                      :text="item.text"
                      :author="item.author"
                      :smallScreen="smallScreen"
                      class="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="/assets/images/impact/orangeStar.png"
      class="absolute left-[18rem] bottom-[0rem]"
      alt="image"
    />
    <!-- <img
      src="/assets/images/impact/blueStar.png"
      class="absolute right-[16rem] bottom-[35rem]"
      alt="image"
    /> -->
  </div>
</template>
