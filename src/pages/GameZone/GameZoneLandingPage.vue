<script setup>
import Header from '../../components/Header/Header.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import GameZoneCard from './GameZoneCard/GameZoneCard.vue';
import Footer from '../../components/Footer/Footer.vue';

// Array to dynamically generate a <GameZoneCard /> per game category
const gameMenusMap = [
  {
    icon: 'all-language-games-icon.png',
    count: '8',
    title: 'Language Games',
    description: 'Includes spelling, grammar, parts of speech, and more.',
    url: '',
    bgColor: '#D8F8F4',
  },
  {
    icon: 'all-math-games-icon.png',
    count: '8',
    title: 'Math Games',
    description:
      'Includes addition, subtraction, division, multiplication, and more.',
    url: '',
    bgColor: '#E2CFFF',
  },
  {
    icon: 'all-science-games-icon.png',
    title: 'Science Games',
    count: '10',
    description:
      'Includes states of matter, biology, our environment, and more.',
    url: '',
    bgColor: '#FFE8A0',
  },
  {
    icon: 'all-life-skills-games-icon.png',
    count: '14',
    title: 'Life Skills Games',
    description: 'Includes time and money management, health, and more.',
    url: '',
    bgColor: '#CAF6CA',
  },
  {
    icon: 'all-independence-skills-games-icon.png',
    count: '12',
    title: 'Independence Skills Games',
    description: 'Includes social cues, decision-making, and more.',
    url: '',
    bgColor: '#FEDBFF',
  },
  /*
  // (WIP) Feature: Play a Random Game
  {
    icon: 'mystery-box.png',
    count: '',
    title: 'Surprise Me!',
    description: 'Play a random game!',
    url: '/game/mattermixup',
    bgColor: '#FFF7BF', 
  },
  */
];
</script>

<template>
  <ScrollUpButton />
  <div
    class="relative bg-white h-full overflow-x-hidden flex flex-col justify-center"
  >
    <div class="relative px-8 sm:px-8 md:px-6 lg:px-14" ref="content">
      <Header
        :textColor="'text-black'"
        :logoPath="'/assets/images/header/header-logo-2.png'"
      />
    </div>
    <div class="w-full pt-10 flex items-center justify-center">
      <div class="w-10/12">
        <h2
          class="font-poppins text-black text-[40px] mobile:text-[25px] mobile:text-center mb-[3%]"
        >
          <em style="color: #077bb3">Explore</em>
          our
          <em style="color: #fe892a">Games</em>
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-10 text-[#323232] mb-10"
        >
          <!-- NOTE: 'url' placeholder to generate random games (:url="/game/random_url_here") -->
          <GameZoneCard
            v-for="(
              { icon, count, title, description, url, bgColor }, pageNumber
            ) in gameMenusMap"
            :key="pageNumber"
            :icon="'/assets/gameImages/landingPageImages/' + icon"
            :count="count"
            :title="title"
            :description="description"
            :url="url"
            :bgColor="bgColor"
            :isLandingPage="true"
            :pageNumber="pageNumber + 1"
            class="hover-zoom-in"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
