<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import PressListCard from './PressListCard.vue';

const items = [
  {
    image: 'katy-student-develops.png',
    text: 'Crystal Yang, Founder and CEO of Audemy, develops online tool to help blind students',
    network: 'Fox News',
    url: 'https://www.fox26houston.com/news/katy-student-develops-online-tool-help-blind-students',
  },
  {
    image: 'intel-globalImpactAI.png',
    text: 'Intel celebrates Crystal Yang, winner of Global AI Impact Festival',
    network: 'Intel',
    url: 'https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/winners2024.html',
  },
  {
    image: 'NPR-app.png',
    text: 'Crystal Yang on making education accessible for blind students through sound',
    network: 'NPR',
    url: 'https://www.youtube.com/watch?v=-Cd82j8v7Dc&ab_channel=HoustonPublicMedia',
  },
  {
    image: 'PBS-student-developes-app.png',
    text: 'Houston Students raise $100,000 for Accessibility Hackathon, KatyYouthHacks',
    network: 'CW',
    url: 'https://www.youtube.com/watch?v=7y_vTaRb6Mc&t=2382s',
  },
  {
    image: 'acm-chi-2025.png',
    text: 'AI for Accessible Education: Personalized Audio-Based Learning for Blind Students (Research Publication)',
    network: 'ACM CHI 2025',
    url: 'https://arxiv.org/abs/2504.17117',
  },
  {
    image: 'ISTE.png',
    text: 'Intel presents: How students and educators are shaping the future',
    network: 'ISTE',
    url: 'https://conference.iste.org/2025/program/search/detail_session.php?id=118237270',
  },
  {
    image: 'students2.png',
    text: 'Crystal Yang creates audio based education game for visually impaired children.',
    network: 'Community Impact',
    url: 'https://communityimpact.com/houston/katy-north/nonprofit/2024/06/27/katy-isd-student-creates-audio-based-education-games-for-visually-impaired-children/',
  },
  {
    image: 'points-of-light.png',
    text: 'Championing Accessibility in Education for Blind and Visually Impaired Students Championing',
    network: 'Points of Light',
    url: 'https://www.pointsoflight.org/awards/championing-accessibility-in-education-for-blind-and-visually-impaired-students/',
  },
  {
    image: 'pbs-app.png',
    text: 'Audemy, an educational platform for blind and visually impaired students.',
    network: 'PBS',
    url: 'https://www.houstonpublicmedia.org/articles/shows/hello-houston/2025/06/10/523583/hello-houston-june-10-2025/',
  },
  {
    image: 'national_ai.png',
    text: 'Audemy, a bold education innovation for blind students',
    network: 'National AI Conference',
    url: 'https://www.hccs.edu/about-hcc/news/articles/hcc-to-host-2025-national-conference-on-artificial-intelligence-in-april.html',
  },
  {
    image: 'yahoo-news.png',
    text: 'Katy ISD student develops online tool to help blind students',
    network: 'Yahoo News',
    url: 'https://www.yahoo.com/news/katy-isd-student-develops-online-223852490.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGGYGPaUqvUCacJ9ExqIFOi7nLlL2Y9NFLcw4cprR1LeexxAbnW5xbK0h8dRPsLum2VnRzbOrFiZ31vzoDnh5Z4lKt2r1Ub_9xVjfD2iLOmXHS8pVYwN-vbuuBQmmIBkKYrqH3xw0my8NZzI5cwqOdUKjODwY97Bm77FRpleNdKM&guccounter=2',
  },
  {
    image: 'devpost.png',
    text: 'How Crystal’s love for hackathons inspired her to host her own',
    network: 'Devpost',
    url: 'https://info.devpost.com/blog/user-story-crystal',
  },
  {
    image: 'Flipboard.png',
    text: 'Crystal’s Games Are Changing Education for Blind Students Nationwide',
    network: 'Flipboard edu',
    url: 'https://flipboardedu.substack.com/p/she-solved-a-friends-problem-now',
  },
  {
    image: 'acm-icmi-2024.png',
    text: 'HEARD-LE: An Intelligent Conversational Interface for Wordle (Research Publication)',
    network: 'ACM ICMI 2024',
    url: 'https://dl.acm.org/doi/10.1145/3610661.3617150',
  },
  {
    image: 'Authority.png',
    text: 'Crystal Yang of Audemy Is Helping To Change Our World',
    network: 'Authority Magazine',
    url: 'https://medium.com/authority-magazine/social-impact-heroes-why-how-crystal-yang-of-audemy-is-helping-to-change-our-world-59d47f21ac81',
  },
  {
    image: 'Canvas.png',
    text: 'Meet Crystal Yang!',
    network: 'By Canvas rebel',
    url: 'https://canvasrebel.com/meet-crystal-yang/',
  },
  {
    image: 'Voyage.png',
    text: 'Inspiring Conversations with Crystal Yang of Audemy',
    network: 'Voyage Houston',
    url: 'https://voyagehouston.com/interview/inspiring-conversations-with-crystal-yang-of-audemy',
  },
  {
    image: 'BoldJourney.png',
    text: 'Crystal Yang’s Journey',
    network: 'Bold Journey',
    url: 'https://boldjourney.com/meet-crystal-yang/',
  },
];

let smallScreen = ref(window.innerWidth <= 450);
let showAll = ref(false);

const updateScreenWidth = () => {
  smallScreen.value = window.innerWidth <= 450;
};

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

const getInitialDisplayCount = () => {
  return smallScreen.value ? 4 : 8;
};

const displayedItems = ref(items.slice(0, getInitialDisplayCount()));

const updateDisplayedItems = () => {
  if (showAll.value) {
    displayedItems.value = items;
  } else {
    const initialCount = getInitialDisplayCount();
    displayedItems.value = items.slice(0, initialCount);
  }
};

watch([showAll, smallScreen], updateDisplayedItems);

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <div class="relative flex w-full justify-center px-10 mt-20 mb-16">
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
            Trusted by <em style="color:#fe892a;"> Leading Publications </em>
          </h2>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="w-full mobile:justify-center mobile:items-center mobile:text-center"
        >
          <div
            id="div_about_us"
            class="grid gap-6 mt-[40px] tablet:mt-[72px] mb-[32px] w-full grid-cols-4 mobile:grid-cols-2 transition-all duration-500 ease-in-out"
          >
            <div 
              v-for="(item, index) in displayedItems" 
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
                    <PressListCard
                      :image="item.image"
                      :text="item.text"
                      :network="item.network"
                      :smallScreen="smallScreen"
                      :url="item.url"
                      class="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Show More/Less Button -->
          <div class="flex justify-center mb-[31px]">
            <button
              @click="toggleShowAll"
              class="w-[244px] mobile:w-auto font-poppins font-semibold px-[4.20rem] py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-white shadow-[3px_4px_0px_#0C0D0D]"
              >
              {{ showAll ? 'Show Less' : 'See More' }}
            </button>
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