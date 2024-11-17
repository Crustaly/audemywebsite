<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import AboutUsCard from "./AboutUsCard/AboutUsCard.vue";
  
  const items = [
    {
      icon: 'question-mark.svg',
      text: 'Did you know that over <b>70%</b> of blind students are currently lagging behind their peers in school?'
    },
    {
      icon: 'bulb.svg',
      text: 'This motivates us to increase accessibility and engagement to educational resources for these learners.'
    },
    {
      icon: 'customer-service.svg',
      text: 'We offer audio-based educational games for <b>K-8 students</b>, aligning with international curriculums.'
    },
  ];
  
  let smallScreen = ref(window.innerWidth <= 450);
  
  const updateScreenWidth = () => {
    smallScreen.value = (window.innerWidth <= 450);
  }

  onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth);
  });
</script>

<template>
  <div
    class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
    <div class="w-full">
      <h3 class="font-poppins text-small-text-color text-[12px] font-[500] mobile:w-auto text-center tracking-[3.6px]">
        WELCOME TO AUDEMY</h3>
    </div>
    <div class="max-w-[519px]">
      <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]">
        We empower students to excel in their studies</h2>
    </div>
    <div class="flex justify-center">
      <div class="max-w-[744px] w-full">
        <div id="div_about_us" class="flex justify-between mt-[110px] tablet:mt-[72px] mb-[63px] gap-16 tablet:gap-14 mobile:gap-4">
          <AboutUsCard v-for="item in items" :icon="item.icon" :text="item.text" :smallScreen="smallScreen">
          </AboutUsCard>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-full">
      <a href="/about-us"
        class="font-poppins font-semibold px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300  text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] mobile:w-full">
        Learn more about us
      </a>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 450px) {
  #div_about_us {
    flex-wrap: wrap;
  }
}

  .scroll-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
</style>