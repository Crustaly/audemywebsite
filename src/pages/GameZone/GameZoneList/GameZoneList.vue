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
import { ref, defineProps, onBeforeMount, watch } from "vue";
import GameZoneCard from "../GameZoneCard/GameZoneCard.vue";
import { getLanguageGames, getMathGames } from "../GameDB.js";
import { useRouter } from "vue-router"; // For navigation

const props = defineProps({
  type: Number,
});

const getGames = (type) =>
  (games.value = type === 1 ? getLanguageGames() : getMathGames());
const games = ref([]);
const router = useRouter(); // For routing
// Changed here
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
</script>

<template>
  <div class="py-10 flex justify-center align-center">
    <div class="w-[90%] grid grid-cols-2 gap-6 mobile:flex mobile:flex-col">
      <div class="w-full h-auto flex justify-center mb-20 " v-for="(game, index) in games" :key="index">
        <GameZoneCard :title="game.title" :icon="game.icon" :textColor="game.textColor" :bgColor="game.bgColor"
          :url="game.url" @selectGame="openGame" />
      </div>
    </div>
  </div>

  <!--
  <div class="bg-white py-10 flex justify-center align-center">
    <div class="w-[90%] flex flex-wrap justify-between">
      <div class="w-[50%] h-auto flex justify-center mb-20" v-for="(game, index) in games" :key="index">
        <GameZoneCard :title="game.title" :icon="game.icon" :textColor="game.textColor" :bgColor="game.bgColor"
          :url="game.url" @selectGame="openGame" />
      </div>
    </div>
  </div>
  -->

</template>
