<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import PressListCard from './PressListCard.vue';

const items = [
  {
    image: 'katy-student-develops.png',
    text: 'Crystal Yang, Founder and CEO of Audemy, develops online tool to help blind gamers',
    network: 'Fox News',
    url: 'https://www.fox26houston.com/news/katy-student-develops-online-tool-help-blind-students',
  },
  {
    image: 'white-house-resized-icon.png',
    text: 'Audemy Featured as Major Organization Committed to Supporting AI Education',
    network: 'The White House',
    url: 'https://www.whitehouse.gov/articles/2025/09/major-organizations-commit-to-supporting-ai-education/',
  },
  {
    image: 'intel-global-Impact-AI-resized.png',
    text: 'Intel celebrates Crystal Yang, winner of Global AI Impact Festival',
    network: 'Intel',
    url: 'https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/winners2024.html',
  },
  {
    image: 'NPR-app-resized.png',
    text: 'Crystal Yang on making gaming accessible for blind players through sound',
    network: 'NPR',
    url: 'https://www.youtube.com/watch?v=-Cd82j8v7Dc&ab_channel=HoustonPublicMedia',
  },
  {
    image: 'PBS-student-develops-app-resized.png',
    text: 'Houston Students raise $100,000 for Accessibility Hackathon, KatyYouthHacks',
    network: 'CW',
    url: 'https://www.youtube.com/watch?v=7y_vTaRb6Mc&t=2382s',
  },
  {
    image: 'acm-chi-2025.png',
    text: 'AI for Accessible Gaming: Personalized Audio-Based Learning for Blind Players (Research Publication)',
    network: 'ACM CHI 2025',
    url: 'https://arxiv.org/abs/2504.17117',
  },
  {
    image: 'ISTE-winner-resized.png',
    text: 'Intel presents: How students and developers are shaping the future of gaming',
    network: 'ISTE',
    url: 'https://conference.iste.org/2025/program/search/detail_session.php?id=118237270',
  },
  {
    image: 'students2.png',
    text: 'Crystal Yang creates audio-based gaming experiences for visually impaired players',
    network: 'Community Impact',
    url: 'https://communityimpact.com/houston/katy-north/nonprofit/2024/06/27/katy-isd-student-creates-audio-based-education-games-for-visually-impaired-children/',
  },
  {
    image: 'points-of-light-resized.png',
    text: 'Championing Accessibility in Gaming for Blind and Visually Impaired Players',
    network: 'Points of Light',
    url: 'https://www.pointsoflight.org/awards/championing-accessibility-in-education-for-blind-and-visually-impaired-students/',
  },
  {
    image: 'pbs-app.png',
    text: 'Audemy, a gaming platform for blind and visually impaired players',
    network: 'PBS',
    url: 'https://www.houstonpublicmedia.org/articles/shows/hello-houston/2025/06/10/523583/hello-houston-june-10-2025/',
  },
  {
    image: 'national_ai.png',
    text: 'Audemy, a bold gaming innovation for blind players',
    network: 'National AI Conference',
    url: 'https://www.hccs.edu/about-hcc/news/articles/hcc-to-host-2025-national-conference-on-artificial-intelligence-in-april.html',
  },
  {
    image: 'yahoo-news.png',
    text: 'Katy ISD student develops online gaming tool to help blind players',
    network: 'Yahoo News',
    url: 'https://www.yahoo.com/news/katy-isd-student-develops-online-223852490.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGGYGPaUqvUCacJ9ExqIFOi7nLlL2Y9NFLcw4cprR1LeexxAbnW5xbK0h8dRPsLum2VnRzbOrFiZ31vzoDnh5Z4lKt2r1Ub_9xVjfD2iLOmXHS8pVYwN-vbuuBQmmIBkKYrqH3xw0my8NZzI5cwqOdUKjODwY97Bm77FRpleNdKM&guccounter=2',
  },
  {
    image: 'devpost-resized.png',
    text: 'How Crystal’s love for hackathons inspired her to host her own',
    network: 'Devpost',
    url: 'https://info.devpost.com/blog/user-story-crystal',
  },
  {
    image: 'Flipboard-resized.png',
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
    image: 'Authority-resized.png',
    text: 'Crystal Yang of Audemy Is Helping To Change Our World',
    network: 'Authority Magazine',
    url: 'https://medium.com/authority-magazine/social-impact-heroes-why-how-crystal-yang-of-audemy-is-helping-to-change-our-world-59d47f21ac81',
  },
  {
    image: 'Canvas-resized.png',
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
  {
    image: 'C-hubworld-resized.png',
    text: 'Game Without Limits with Audemy!',
    network: 'C-hubworld',
    url: 'https://www.instagram.com/c_hubworld/reel/DLkIX7TSlqK/',
  },
  {
    image: 'Devdiscourse.png',
    text: 'AI-powered audio gaming boosts accessibility for visually impaired players',
    network: 'Dev Discourse',
    url: 'https://www.devdiscourse.com/article/education/3358683-ai-powered-audio-learning-boosts-accessibility-for-visually-impaired-students',
  },
  {
    image: 'Disabilitynewsdigest.png',
    text: 'Crystal Yang is transforming gaming for blind and visually impaired players through Audemy',
    network: 'Disability Newsdigest',
    url: 'https://disabilitynewsdigest.substack.com/p/the-last-leg-promotes-disability',
  },
  {
    image: 'stanford.png',
    text: 'Audemy, an Al platform for Accessible Gaming through personalized Audio-Based Learning for Blind Players',
    network: 'Stanford Scale',
    url: 'https://scale.stanford.edu/genai/repository/al-accessible-education-personalized-audio-based-learning-blind-students',
  },
  {
    image: 'EV-resized.png',
    text: 'Crystal Yang develops online gaming tool to help blind players',
    network: 'EV',
    url: 'https://www.elvenezolanohouston.com/estudiante-de-katy-isd-desarrolla-herramienta-online-para-ayudar-a-alumnos-ciegos/',
  },
  {
    image: 'iheart.png',
    text: 'Crystal Yang’s inspiring journey with Audemy',
    network: 'iHeart radio',
    url: 'https://www.iheart.com/podcast/269-hello-houston-the-commuter-271597362/episode/hello-houston-the-commuter-cut-280206632/',
  },
  {
    image: 'Youth-resized.png',
    text: 'Crystal Yang of Audemy is addressing a real need in our gaming industry by creating fun, accessible gaming experiences',
    network: 'Youth Service America',
    url: 'https://ysa.org/crystalyang/',
  },
  {
    image: 'WIT-resized.png',
    text: '"Don’t Optimize for Perfection. Optimize for Progress." – Crystal Yang',
    network: 'WIT Media',
    url: 'https://www.instagram.com/reel/DMO34LeONU5/',
  },
  {
    image: 'Tech.png',
    text: 'Crystal Yang created a gaming app that has been used by more than 7,000 blind players',
    network: 'Tech & Learning',
    url: 'https://www.techlearning.com/how-to/using-ai-and-tech-for-accessibility-5-tips-for-educators-and-students?utm_source=facebook&utm_medium=social&utm_campaign=dhfacebook&utm_content=null',
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
  <div class="font-poppins relative flex w-full justify-center px-10 my-10">
    <!-- MAIN SECTION -->
    <div
      class="flex flex-col items-start justify-start mobile:justify-center h-auto"
    >
      <div class="w-full py-5 md:my-10">
        <!-- Header -->
        <div>
          <h2 class="page-header-accent">PRESS LIST</h2>
        </div>
        <div>
          <h3 class="page-header">
            Trusted by
            <em class="text-secondary-color"> Leading Publications </em>
          </h3>
        </div>
      </div>
      <!-- Responsive Grid Layout: 1 Column (Mobile); 2 Cols (Small); 3 Cols (Medium); 4 Cols (Large) -->
      <div class="flex justify-center">
        <div
          class="w-full mobile:justify-center mobile:items-center mobile:text-center"
        >
          <div
            id="div_about_us"
            class="grid gap-6 my-10 mobile:my-16 w-full mobile:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-500 ease-in-out"
          >
            <div
              v-for="(item, index) in displayedItems"
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
                    <PressListCard
                      :image="item.image"
                      :text="item.text"
                      :network="item.network"
                      :url="item.url"
                      class="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Show More/Less Button -->
          <div class="page-button-flex">
            <button
              @click="toggleShowAll"
              class="page-button blue-button px-10 py-3 mobile:h-auto md:w-[300px]"
            >
              {{ showAll ? 'Show Less' : 'See More' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
