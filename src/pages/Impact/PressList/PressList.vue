<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import PressListCard from './PressListCard.vue';

const items = [
  {
    image: 'katy-student-develops.png',
    text: 'Katy ISD student develops online tool to help blind students',
    author: '-- By Fox News',
    url: 'https://www.fox26houston.com/news/katy-student-develops-online-tool-help-blind-students',
  },
  {
    image: 'intel-globalImpactAI.png',
    text: 'Intel Celebrates AI Innovations by Students with Global Impact Festival',
    author: '-- By Intel',
    url: "https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/winners2024.html"
  },
  {
    image: 'acm-chi-2025.png',
    text: 'AI for Accessible Education: Personalized Audio-Based Learning for Blind Students',
    author: '-- By ACM CHI 2025 (Research Publication)',
    url: "https://arxiv.org/abs/2504.17117"
  },
  {
    image: 'students2.png',
    text: 'Katy ISD student creates audio-based education games for visually impaired children',
    author: '-- By Community Impact',
    url: "https://communityimpact.com/houston/katy-north/nonprofit/2024/06/27/katy-isd-student-creates-audio-based-education-games-for-visually-impaired-children/"
  },
  {
    image: 'houstonhappens.png',
    text: 'Stay motivated during the school year with Houston Happens!',
    author: '-- By CW39 Houston',
    url: "https://www.youtube.com/watch?v=7y_vTaRb6Mc&t=2382s"
  },
  {
    image: 'points-of-light.png',
    text: 'Championing Accessibility in Education for Blind and Visually Impaired Students',
    author: '-- By Points of Light',
    url: "https://www.pointsoflight.org/awards/championing-accessibility-in-education-for-blind-and-visually-impaired-students/"
  },
  {
    image: 'yahoo-news.png',
    text: 'Katy ISD student develops online tool to help blind students',
    author: '-- By Yahoo News',
    url: "https://www.yahoo.com/news/katy-isd-student-develops-online-223852490.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGGYGPaUqvUCacJ9ExqIFOi7nLlL2Y9NFLcw4cprR1LeexxAbnW5xbK0h8dRPsLum2VnRzbOrFiZ31vzoDnh5Z4lKt2r1Ub_9xVjfD2iLOmXHS8pVYwN-vbuuBQmmIBkKYrqH3xw0my8NZzI5cwqOdUKjODwY97Bm77FRpleNdKM&guccounter=2"
  },
  {
    image: 'devpost.png',
    text: 'User story: How Crystal’s love for hackathons inspired her to host her own',
    author: '-- By Devpost',
    url: "https://info.devpost.com/blog/user-story-crystal"
  },
  {
    image: 'acm-icmi-2024.png',
    text: 'HEARD-LE: An Intelligent Conversational Interface for Wordle',
    author: '-- By ACM ICMI 2024 (Research Publication)',
    url: "https://dl.acm.org/doi/10.1145/3610661.3617150"
  },
  {
    image: 'authority-magazine.png',
    text: 'Social Impact Heroes: Why & How Crystal Yang of Audemy Is Helping To Change Our World',
    author: '-- By Authority Magazine',
    url: "https://medium.com/authority-magazine/social-impact-heroes-why-how-crystal-yang-of-audemy-is-helping-to-change-our-world-59d47f21ac81"
  },
  {
    image: 'meet-crystal-yang.png',
    text: 'Meet Crystal Yang',
    author: '-- By Canvas rebel',
    url: "https://medium.com/authority-magazine/social-impact-heroes-why-how-crystal-yang-of-audemy-is-helping-to-change-our-world-59d47f21ac81"
  },
  {
    image: 'voyage-houston.png',
    text: 'Inspiring Conversations with Crystal Yang of Audemy',
    author: '-- By Voyage Houston',
    url: "https://voyagehouston.com/interview/inspiring-conversations-with-crystal-yang-of-audemy"
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
              <div class="flex flex-col h-full w-full min-h-[300px] mb-3">
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
