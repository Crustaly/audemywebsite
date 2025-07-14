<!-- <script setup>
import { ref, defineProps, onBeforeMount, watch } from 'vue';
import GameZoneCard from '../GameZoneCard/GameZoneCard.vue';
import { getLanguageGames, getMathGames } from '../GameDB.js';

const props = defineProps({
  type: Number
});

const getGames = (type) => games.value = type === 1 ? getLanguageGames() : getMathGames();
const games = ref([]);

// Changed here
const openGame = (url) => {
  router.push(url);
};
onBeforeMount(() => {
  getGames(props.type);
});

watch(() => props.type, (newType, oldType) => {
  getGames(newType);
});

</script>

<template>
  <div class="bg-white py-10 flex justify-center align-center">
    <div class="w-[90%] flex flex-wrap justify-between">
      <div class="w-[50%] h-auto flex justify-center mb-20" v-for="(game, index) in games" :key="index">
        <GameZoneCard :title="game.title" :icon="game.icon" :textColor="game.textColor" :bgColor="game.bgColor"
          @selectGame="openGame" />
      </div>
    </div>
  </div>
</template>
 -->

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import GameZoneCard from '../GameZoneCard/GameZoneCard.vue';
import {
  getLanguageGames,
  getMathGames,
  getScienceGames,
  getLifeSkillsGames,
  getIndependenceSkillsGames,
} from '../GameDB.js';
import { useRouter } from 'vue-router';

const props = defineProps({
  type: Number,
});

const games = ref([]);
const router = useRouter();

const getGames = (type) => {
  if (type === 1) {
    games.value = getLanguageGames();
  } else if (type === 2) {
    games.value = getMathGames();
  } else if (type === 3) {
    games.value = getScienceGames();
  } else if (type === 4) {
    games.value = getLifeSkillsGames();
  } else if (type === 5) {
    games.value = getIndependenceSkillsGames();
  } else {
    games.value = []; // Default to empty if type is unknown
  }
};

const openGame = (url) => {
  router.push(url);
};
onBeforeMount(() => {
  getGames(props.type);
});

watch(
  () => props.type,
  (newType, oldType) => {
    getGames(newType);
  }
);

const getCardClass = (index) => {
  const pattern = [
    'w-[67%] tablet:w-[50%] mobile:w-[100%]',
    'w-[30%] tablet:w-[45%] mobile:w-[48%]',
    'w-[30%] tablet:w-[45%] mobile:w-[48%]',
    'w-[67%] tablet:w-[50%] mobile:w-[100%]',
  ];
  return pattern[index % 4];
};
</script>

<template>
  <div class="w-full flex justify-center align-center">
    <div class="w-full gap-1 mobile:gap-0 flex flex-wrap justify-between">
      <div
        class="h-auto mb-10 mobile:w-full"
        :class="getCardClass(index)"
        v-for="(game, index) in games"
        :key="index"
      >
        <GameZoneCard
          :title="game.title"
          :icon="game.icon"
          :textColor="game.textColor"
          :bgColor="game.bgColor"
          :url="game.url"
          @selectGame="openGame"
          :description="game.description"
          :bgDecoration="game.bgDecoration ?? false"
          :bgImage="game.bgImage"
          class="hover:scale-105 hover:transition hover:duration-500"
        />
      </div>
    </div>
  </div>
</template>
