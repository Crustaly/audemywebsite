<template>
    <div v-if="userSession" class="flex flex-col gap-8 items-center py-4">
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
                        <div><img :src="game.progressImage ? game.progressImage:'/assets/myProgress/stage1.svg'" class="object-fill"/></div>
                        <div class="flex justify-center text-center pt-2">{{ game.title }}</div> 
                        <div class="flex justify-center text-gray-500">{{ game.difficultyLevel || 'Loading...' }}</div>
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
                        <div><img :src="game.progressImage ? game.progressImage:'/assets/myProgress/stage1.svg'" class="object-fill"/></div>
                        <div class="flex justify-center text-center pt-2">{{ game.title }}</div>
                        <div class="flex justify-center text-gray-500">{{ game.difficultyLevel || 'Loading...' }}</div>
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

    <div v-else class="flex flex-col text-[30px] text-center border-2 border-black rounded-xl p-12">
        <div class="flex justify-center"><img src="/public/assets/images/impact/globe 1.svg" alt="Under Construction" /></div>
        <div>
            <span class="font-bold">Log in</span> to see your progress
        </div>
    </div>
</template>

<script setup> // Changed from <script>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';
import { getLanguageGames, getMathGames } from "../GameDB.js";

const userSession = ref(null);
const userName = ref("[Name]");
const userEmail = ref('');
const languageGames = ref(getLanguageGames());
const mathGames = ref(getMathGames());
const level = ['Beginner', 'Intermediate', 'Advanced'];
const isProgressLoaded = ref(false);

const langScrollRight = () => {
  const content = document.querySelector(".lang_gameList");
  if (content) content.scrollLeft += 150;
};

const langScrollLeft = () => {
  const content = document.querySelector(".lang_gameList");
  if (content) content.scrollLeft -= 150;
};

const mathScrollRight = () => {
  const content = document.querySelector(".math_gameList");
  if (content) content.scrollLeft += 150;
};

const mathScrollLeft = () => {
  const content = document.querySelector(".math_gameList");
  if (content) content.scrollLeft -= 150;
};

const fetchUserProgress = async (email) => {
  try {
    const response = await fetch(`/api/db/get-user-progress?email=${email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    const progressArray = data?.Progress?.progress_json?.progress || [];
    
    gamesWithProgress(languageGames.value, progressArray.slice(0,8));
    gamesWithProgress(mathGames.value, progressArray.slice(8,16));

    isProgressLoaded.value = true;
  } catch (error) {
    console.error("Failed to fetch user progress:", error);
    isProgressLoaded.value = true;
  }
};

const gamesWithProgress = (games, progressArray) => {
    const imagePath = '/assets/myProgress/stage';
    for (let n=0; n<8; n++){
        games[n].difficultyLevel = level[progressArray[n].difficulty_id - 1];
        games[n].progressImage = imagePath + String(progressArray[n].difficulty_id) + '.svg';
    }
    console.log('Modified Game:', games);
};


onMounted(() => {
    const session = Cookies.get("audemyUserSession");
    if (session) {
        try {
            const parsed = JSON.parse(session);
            console.log("Parsed session:", parsed);
            userSession.value = parsed;
            userName.value = parsed.user.name;
            userEmail.value = parsed.user.email;
            console.log('User Email is:', userEmail.value)

            fetchUserProgress(userEmail.value);
        } catch (e) {
            console.error("Failed to parse user session cookie:", e);
        }
    }
});
</script>