<template>
    <div class="flex flex-col gap-8 items-center py-4">
        <!-- User Greeting -->
        <div class="text-[30px]">
            {{ userName }}, unlock new levels with Carl!
        </div>

        <!-- Language lab Journey -->
        <div class="flex flex-col border-2 items-center border-black rounded-xl w-3/4 py-10">
            <!-- Title -->
            <div class="text-[25px]">
                My Language Lab Journey
            </div>
            
            <!-- Games -->
            <div class="flex flex-row items-center w-full">
                <!-- Arrow Swipe Left -->
                <div class="flex justify-center w-1/6">
                    <button @click="langScrollLeft" class=" py-32  px-4">
                        <img src="/assets/gameImages/buttons/arrow-slide-back.svg" class="h-14"/>
                    </button>
                </div>
                <!-- Horizontal Game List -->
                <div class="flex flex-row overflow-auto gap-16 w-4/6 p-2 lang_gameList">
                    <div v-for="game in languageGames" class="basis-1/4 flex-none">
                        <div><img src="/assets/myProgress/stage1.svg" class="object-fill"/></div>
                        <div class="flex justify-center pt-2">{{ game.title }}</div>
                        <div class="flex justify-center text-gray-500">Level</div>
                    </div>
                </div>
                <!-- Arrow Swipe Right -->
                <div class="flex justify-center w-1/6">
                    <button @click="langScrollRight" class="py-32  px-4">
                        <img src="/assets/gameImages/buttons/arrow-slide-forward.svg" class="h-14"/>
                    </button>
                </div>
            </div>
        </div>

        <!-- Math Magic Journey -->
        <div class="flex flex-col gap-8 border-2 items-center border-black rounded-xl w-3/4 py-10">
            <!-- Title -->
            <div class="text-[25px]">
                My Math Magic Journey
            </div>
            
            <!-- Games -->
            <div class="flex flex-row items-center w-full">
                <!-- Arrow Swipe Left -->
                <div class="flex justify-center w-1/6">
                    <button @click="mathScrollLeft" class="py-32  px-4">
                        <img src="/assets/gameImages/buttons/arrow-slide-back.svg" class="h-14"/>
                    </button>
                </div>
                <!-- Horizontal Game List -->
                <div class="flex flex-row overflow-auto gap-16 w-4/6 p-2 math_gameList">
                    <div v-for="game in mathGames" class="basis-1/4 flex-none">
                        <div><img src="/assets/myProgress/stage2.svg" class="object-fill"/></div>
                        <div class="flex justify-center pt-2">{{ game.title }}</div>
                        <div class="flex justify-center text-gray-500">Level</div>
                    </div>
                </div>
                <!-- Arrow Swipe Right -->
                <div class="flex justify-center w-1/6">
                    <button @click="mathScrollRight" class="py-32  px-4">
                        <img src="/assets/gameImages/buttons/arrow-slide-forward.svg" class="h-14"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { getLanguageGames, getMathGames } from "../GameDB.js";

export default {
  setup() {
    const userName = ref("[Name]");
    let languageGames = ref(getLanguageGames());
    let mathGames = ref(getMathGames());
    return { userName, languageGames, mathGames };
  },
  methods: {
    langScrollRight() {
      let content = document.querySelector(".lang_gameList");
      console.log(content);
      content.scrollLeft += 100;
    },
    langScrollLeft() {
      let content = document.querySelector(".lang_gameList");
      console.log(content);
      content.scrollLeft -= 100;
    },
    mathScrollRight() {
      let content = document.querySelector(".math_gameList");
      console.log(content);
      content.scrollLeft += 100;
    },
    mathScrollLeft() {
      let content = document.querySelector(".math_gameList");
      console.log(content);
      content.scrollLeft -= 100;
    },
  },
};
</script>
