<script setup>

import Header from "../../components/Header/Header.vue";
import GameZoneList from "../GameZone/GameZoneList/GameZoneList.vue";
import GameProgress from "../GameZone/GameProgress/GameProgress.vue";
import { ref, onMounted } from "vue";

const currentPage = ref(1); // Initialize currentPage to 1 ('Language Games')
const changeCurrentPage = (page) => {
  currentPage.value = page;
};

// Reactive flags to track dropdown visibility for each game menu (for 'aria-expanded')
const isLangMenuOpen = ref(false);
const isMathMenuOpen = ref(false);

// Updates Language menu visibility flag
const changeIsLangMenuOpen = (bool) => {
  isLangMenuOpen.value = bool;
};

// Updates Math menu visibility flag
const changeIsMathMenuOpen = (bool) => {
  isMathMenuOpen.value = bool;
};

onMounted(() => {
  const category = sessionStorage.getItem("gameCategory");

  if (category === "math") {
    changeCurrentPage(2); // Math Games
  } else {
    changeCurrentPage(1); // Language Games or default
  }

  // Clear it after use
  sessionStorage.removeItem("gameCategory");
});

// Activates the clicked game menu button by changing its styles and triggers the dropdown visibility toggle
function activateGameMenu(event) {
  let oppositeGamesMenuBtn = '';

  // Determine and select the opposite menu button
  if (currentPage.value === 2) {
    oppositeGamesMenuBtn = document.getElementById("lang-games-menu-btn");
  } else {
    oppositeGamesMenuBtn = document.getElementById("math-games-menu-btn");
  }

  // Check if the opposite menu is currently active based on its text color
  // Note: rgb(8, 123, 180) = '#087BB4' 
  let isOppositeMenuActive = oppositeGamesMenuBtn.style.getPropertyValue('color') === 'rgb(8, 123, 180)' ? true : false;
  
  // If active, deactivate it
  if (isOppositeMenuActive) {
    deactivateGameMenu(oppositeGamesMenuBtn);
  } 

  // Activate selected game menu 
  const button = event.currentTarget; // safer than event.target if nesting;
  
  // Style inner text 
  button.style.backgroundColor = '#e6f3fa';
  button.style.fontWeight = '600';
  button.style.color = '#087BB4';
  button.style.borderColor = '#087BB4';

  // Style arrow (svg)
  const svgArrow = button.querySelector('svg');
  svgArrow.style.fill = '#087BB4';

  // Toggle dropdown visibility
  const gameType = button.innerText;
  toggleDropdown(gameType);

} 

// Deactivates the game menu button by resetting its styles
function deactivateGameMenu(button) { 
  // Reset button
  button.style.backgroundColor = '#FFFFFF';
  button.style.fontWeight = 'normal';
  button.style.color = '#6E777C';
  button.style.borderColor = '#6E777C';

  // Reset arrow (svg)
  const svgArrow = button.querySelector('svg');
  svgArrow.style.fill = '#6E777C';

  // Update boolean flag 
  if (button.innerText.includes('Math')) {
    changeIsMathMenuOpen(false);
  } else {
    changeIsLangMenuOpen(false);
  }
} 

// Toggles the visibility of the appropriate dropdown menu (Language or Math), ensuring only one is visible at a time
function toggleDropdown(gameType) {
  const langDropdownMenu = document.getElementById("dropdown-lang-games-container");
  const mathDropdownMenu = document.getElementById("dropdown-math-games-container");

  if (gameType.includes('Language')) {
    langDropdownMenu.classList.toggle('hidden');
    mathDropdownMenu.classList.add('hidden'); // Always hide Math menu when Language is toggled

    const isLangVisible = !langDropdownMenu.classList.contains('hidden');
    changeIsLangMenuOpen(isLangVisible);

    // If Language dropdown is now hidden and the current page isn't Language
    if (langDropdownMenu.classList.contains('hidden') && currentPage.value !== 1) {
      const langGamesMenuBtn = document.getElementById("lang-games-menu-btn");
      deactivateGameMenu(langGamesMenuBtn);
    }

  } else if (gameType.includes('Math')) {
    mathDropdownMenu.classList.toggle('hidden');
    langDropdownMenu.classList.add('hidden'); // Always hide Language menu when Math is toggled

    const isMathVisible = !mathDropdownMenu.classList.contains('hidden');
    changeIsLangMenuOpen(isMathVisible); 

    // If Math dropdown is now hidden and the current page isn't Math
    if (mathDropdownMenu.classList.contains('hidden') && currentPage.value !== 2) {
      const mathGamesMenuBtn = document.getElementById("math-games-menu-btn");
      deactivateGameMenu(mathGamesMenuBtn);
    }
  }
}

// Handles click on "All (Language/Math) Games" option: changes the page, hides its dropdown, and deactivates the opposite menu
function handleAllGamesClick(gamePage) {
  changeCurrentPage(gamePage);

  // Default: All Language Games (gamePage === 1)
  let gamesMenuBtn = document.getElementById("lang-games-menu-btn");
  let oppositeGamesMenuBtn = document.getElementById("math-games-menu-btn");

  if (gamePage === 2) {
    // Conditionally update for All Math Games 
    gamesMenuBtn = document.getElementById("math-games-menu-btn");
    oppositeGamesMenuBtn = document.getElementById("lang-games-menu-btn");
  } 

  deactivateGameMenu(oppositeGamesMenuBtn);
  let gameType = gamePage === 2 ? 'Math' : 'Language'
  toggleDropdown(gameType); 
}

</script>



<template>

  <div
    class="relative bg-white h-full overflow-x-hidden flex flex-col justify-center"
  >
    <div class="px-20">
      <Header
        :textColor="'text-black'"
        :logoPath="'/assets/images/header/header-logo-2.png'"
      />
    </div>
    <div class="w-full pt-10 flex align-center justify-center">
      <div class="w-10/12">
        <h2 class="font-poppins text-black text-[40px] mobile:text-[25px] M-0">
          Play and learn with us!
        </h2>

        <div class="relative inline-block mobile:block text-left w-full flex gap-10 mb-10 mt-10">

          <!-- LANGUAGE GAMES DROPDOWN MENU -->
          <div class="relative mobile:mb-[50px]">
            <button type="button" 
                    @click="activateGameMenu"
                    class="inline-flex items-center gap-x-2 font-poppins text-[#087BB4] bg-[#e6f3fa] font-normal border-[#087BB4] mobile:text-[14px] py-2 px-8 rounded-full border" 
                    :aria-expanded="isLangMenuOpen"
                    aria-haspopup="true"
                    :class="[
                        currentPage === 1
                        ? 'text-[#087BB4] bg-[#e6f3fa] font-semibold border-[#087BB4]'
                        : 'text-[#6E777C] bg-white font-normal border-[#6E777C]'
                    ]"
                    id="lang-games-menu-btn"
            >
              <span>Language Games Menu</span>
              <svg class="-mr-1 size-5 text-gray-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  aria-hidden="true" 
                  data-slot="icon"
                  :class="[
                      currentPage === 1
                      ? 'fill-[#087BB4]'
                      : 'fill-[#6E777C]'
                  ]"
              >
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>

            <!-- LANGUAGE GAMES DROPDOWN OPTIONS -->
            <div class="hidden absolute left-0 top-15 mobile:top-10 sm:top-10 md:top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" 
                  role="menu" 
                  aria-orientation="vertical" 
                  aria-labelledby="lang-games-menu-btn"
                  id="dropdown-lang-games-container"
            >
              <div id="dropdown-lang-games-options" class="py-1" role="none">              
                <a type="button" 
                    @click.prevent="handleAllGamesClick(1)"
                    class="block px-4 py-2 text-sm text-gray-700" 
                    role="menuitem" 
                    id="all-lang-games-option"
                    href="#"
                >
                  All Language Games
                </a>              
                <a href="/game/definitionDetective" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-1">
                  Definition Detective
                </a>
                <a href="/game/partofspeech" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-2">
                  Part of Speech
                </a>
                <a href="/game/colorgame" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-3">
                  Color Game
                </a>
                <a href="/game/syllableSorting" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-4">
                  Syllable Sorting
                </a>
                <a href="/game/vocabVortex" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-5">
                  Vocabulary Vortex
                </a>
                <a href="/game/polarpairing" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-6">
                  Polar Pairing
                </a>
                <a href="/game/oddoneout" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-7">
                  Odd One Out
                </a>
                <a href="/game/spellingbee" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="lang-game-8">
                  Spelling Bee
                </a>
              </div>
            </div>
          </div>

          <!-- MATH GAMES DROPDOWN MENU -->
          <div class="relative">
            <button type="button" 
                    @click="activateGameMenu"
                    class="inline-flex items-center gap-x-2 font-poppins text-[#087BB4] bg-[#e6f3fa] font-normal border-[#087BB4] mobile:text-[14px] py-2 px-8 rounded-full border" 
                    :aria-expanded="isMathMenuOpen"
                    aria-haspopup="true"
                    :class="[
                        currentPage === 2
                        ? 'text-[#087BB4] bg-[#e6f3fa] font-semibold border-[#087BB4]'
                        : 'text-[#6E777C] bg-white font-normal border-[#6E777C]'
                    ]"
                    id="math-games-menu-btn"
            >
              <span>Math Games Menu</span>
              <svg class="-mr-1 size-5 text-gray-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  aria-hidden="true" 
                  data-slot="icon"
                  :class="[
                      currentPage === 2
                      ? 'fill-[#087BB4]'
                      : 'fill-[#6E777C]'
                  ]"
              >
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>

            <!-- MATH GAMES DROPDOWN OPTIONS -->
            <div class="hidden absolute left-0 top-15 mobile:top-10 sm:top-10 md:top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" 
                  role="menu" 
                  aria-orientation="vertical" 
                  aria-labelledby="math-games-menu-btn"
                  id="dropdown-math-games-container"
            >
              <div id="dropdown-math-games-options" class="py-1" role="none">              
                <a type="button" 
                    @click.prevent="handleAllGamesClick(2)"
                    class="block px-4 py-2 text-sm text-gray-700" 
                    role="menuitem" 
                    id="all-math-games-option"
                    href="#"
                >
                  All Math Games
                </a>              
                <a href="/game/fruitfrenzy" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-1">
                  Fruit Frenzy
                </a>
                <a href="/game/shapeshark" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-2">
                  Shape Shark
                </a>
                <a href="/game/addition" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-3">
                  Animal Addition
                </a>
                <a href="/game/subtraction" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-4">
                  Subtraction Safari
                </a>
                <a href="game/multiplicationmadness" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-5">
                  Multiplication Madness
                </a>
                <a href="/game/DivisionDuel" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-6">
                  Division Duel
                </a>
                <a href="/game/monkeymadness" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-7">
                  Monkey Madness
                </a>
                <a href="/game/carcounting" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="math-game-8">
                  Car Counting
                </a>
              </div>
            </div>
          </div>

          <!-- WIP: STUDENT PROGRESS -->
          <!-- 
          <button
            @click="changeCurrentPage(3)"
            :class="
              currentPage == 3
                ? 'text-[#087BB4] font-semibold'
                : 'text-[#6E777C]'
            "
            class="font-poppins mobile:text-[14px]"
          >
            My Progress
          </button>
          -->
          <!-- WIP: STUDENT PROGRESS (end of line) -->

        </div>

        <div>
          <div v-if="currentPage != 3">
            <GameZoneList :type="currentPage" />
          </div>
          <div v-if="currentPage === 3">
            <GameProgress />
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>



<style scoped>

#dropdown-lang-games-options a, #dropdown-math-games-options a {
  border-bottom: 1px #D3D3D3 solid;
}

#dropdown-lang-games-options a:last-child, #dropdown-math-games-options a:last-child {
  border-bottom: none;
}

#dropdown-lang-games-options a:hover, #dropdown-math-games-options a:hover {
  background-color: #e6f3fa;
}

</style>