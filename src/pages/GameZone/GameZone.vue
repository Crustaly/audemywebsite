<script setup>
import Header from "../../components/Header/Header.vue";
import GameZoneList from "../GameZone/GameZoneList/GameZoneList.vue";
import GameProgress from "../GameZone/GameProgress/GameProgress.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import Footer from "../../components/Footer/Footer.vue";

import { ref, onMounted, onUnmounted } from "vue";

import { useDeviceType } from "../../Utilities/checkDeviceType";
const { isMobile, isTablet } = useDeviceType();

const currentPage = ref(1);
const changeCurrentPage = (page) => {
    currentPage.value = page;
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

function activateGameMenu(event) {
  const menuBtn = event.currentTarget;

  // Conditionally activate and style menu button
  const isMenuActive = menuBtn.style.getPropertyValue('color') === 'rgb(8, 123, 180)' ? true : false;
  if (isMenuActive) {
    // Deactivate and reset styling for menu 
    deactivateGameMenu(menuBtn);

    // Update reactive flag based on currentPage
    if (currentPage.value === 1) {
      changeIsLangMenuOpen(false);
    } else {
      changeIsMathMenuOpen(false);
    }

  } else {
    menuBtn.style.backgroundColor = '#e6f3fa';
    menuBtn.style.fontWeight = '600';
    menuBtn.style.color = '#087BB4';
    menuBtn.style.borderColor = '#087BB4';

    // Style arrow (svg)
    const svgArrow = menuBtn.querySelector('svg');
    svgArrow.style.fill = '#087BB4';

    // Update reactive flag based on currentPage
    if (currentPage.value === 1) {
      changeIsLangMenuOpen(true);
    } else {
      changeIsMathMenuOpen(true);
    }
  }
  // Toggle visibility of dropdown
  toggleDropdown();
}

// Deactivates the game menu button by resetting its styles
function deactivateGameMenu(menuBtn) { 
  // Reset button
  menuBtn.style.backgroundColor = '#FFFFFF';
  menuBtn.style.fontWeight = 'normal';
  menuBtn.style.color = '#6E777C';
  menuBtn.style.borderColor = '#6E777C';

  // Reset arrow (svg)
  const svgArrow = menuBtn.querySelector('svg');
  svgArrow.style.fill = '#6E777C';

} 

// Toggles visibility of the active dropdown menu (Language or Math)
function toggleDropdown() {
  if (currentPage.value === 1) {
    // Toggle Language dropdown visibility
    const langDropdown = document.getElementById("lang-dropdown-div");
    langDropdown.classList.toggle('hidden');

    // Update reactive flag for Language menu
    const isLangVisible = !langDropdown.classList.contains('hidden');
    changeIsLangMenuOpen(isLangVisible);

  } else {
    // Toggle Math dropdown visibility
    const mathDropdown = document.getElementById("math-dropdown-div");
    mathDropdown.classList.toggle('hidden');

    // Update reactive flag for Math menu
    const isMathVisible = !mathDropdown.classList.contains('hidden');
    changeIsMathMenuOpen(isMathVisible); 
  }
}

function handlePageSwitch(newPage) {
  // Deactivate and reset styling for the opposite menu button
  let oppositeMenuBtn = document.getElementById('lang-menu-btn');
  let oppositeDropdown = document.getElementById('lang-dropdown-div');

  if (newPage === 1) {
    // Opposite page = Math Games
    oppositeMenuBtn = document.getElementById('math-menu-btn');
    oppositeDropdown = document.getElementById('math-dropdown-div');
  } 

  deactivateGameMenu(oppositeMenuBtn);

  // Hide the opposite dropdown if it's currently visible
  if (!oppositeDropdown.classList.contains('hidden')) {
    oppositeDropdown.classList.add('hidden');
  }
  
  // Update the current page
  changeCurrentPage(newPage);

  // Update reactive flags to reflect menu states for new page
  if (newPage === 1) {
    changeIsLangMenuOpen(true);
    changeIsMathMenuOpen(false);
  } else {
    changeIsMathMenuOpen(true);
    changeIsLangMenuOpen(false);
  }
}

function handleMenuBlur(event) {
  // Determine the currently active dropdown
  let currentDropdown = document.getElementById('math-dropdown-div');
  if (currentPage.value === 1) {
    currentDropdown = document.getElementById('lang-dropdown-div');
  } 

  // Keep menu open if focus moved into the dropdown options (e.g., tabbing through it)
  if (currentDropdown.contains(event.relatedTarget)) {
    return;
  }

  const menuBtn = event.currentTarget;
  hideMenuDropdown(menuBtn, currentDropdown);
}

function handleDropdownFocusOut(event) {
  const currentDropdown = event.currentTarget;

  // Keep dropdown open if focus is still within it (e.g., tabbing through it)
  if (currentDropdown.contains(event.relatedTarget)) {
    return;
  }

  // Otherwise, close dropdown and deactivate the corresponding menu button
  let menuBtn = document.getElementById('lang-menu-btn');
  if (currentPage.value === 2) {
    menuBtn = document.getElementById('math-menu-btn');
  }

  hideMenuDropdown(menuBtn, currentDropdown);
}

function hideMenuDropdown(menuBtn, currentDropdown) {
  // Deactivates and reset styling for menu
  deactivateGameMenu(menuBtn);

  // Hides opened dropdown
  currentDropdown.classList.add('hidden');

  // Update reactive flag 
  if (currentPage.value === 1) {
    changeIsLangMenuOpen(false);
  } else {
    changeIsMathMenuOpen(false);
  }
}

</script>



<template>
  <ScrollUpButton />
  <div
    class="relative bg-white h-full overflow-x-hidden flex flex-col justify-center"
  >
    <div 
      :class="[
        'relative', 
        !isTablet && !isMobile ? 'px-14' : '',
        isTablet ? 'px-6' : '',
        isMobile ? 'px-8' : ''
      ]" 
      ref="content"
    >
      <Header
        :textColor="'text-black'"
        :logoPath="'/assets/images/header/header-logo-2.png'"
      />
    </div>
    <div class="w-full pt-10 flex align-center justify-center">
      <div class="w-10/12">
        <h2 id="game-zone-header" class="font-poppins text-black text-[40px] mobile:text-[25px] mobile:text-center M-0">
          Play and learn with us!
        </h2>
        <div id="game-zone-grid" class="w-full grid grid-rows-3 gap-5 mb-10 mt-10">

          <!-- LANGUAGE GAMES FILTER BUTTON -->
          <button
            @click="handlePageSwitch(1)"
            :class="[
              currentPage == 1
                ? 'text-[#087BB4] bg-[#e6f3fa] font-semibold border-[#087BB4]'
                : 'text-[#6E777C] bg-white border-[#6E777C]'
            ]"
            class="font-poppins mobile:text-[14px] py-2 px-8 rounded-full border"
            id="lang-filter-btn"
          >
            Language Games
          </button>

          <!-- MATH GAMES FILTER BUTTON -->
          <button
            @click="handlePageSwitch(2)"
            :class="[
              currentPage == 2
                ? 'text-[#087BB4] bg-[#e6f3fa] font-semibold border-[#087BB4]'
                : 'text-[#6E777C] bg-white border-[#6E777C]'
            ]"
            class="font-poppins mobile:text-[14px] py-2 px-8 rounded-full border"
            id="math-filter-btn"
          >
            Math Games
          </button>

          <!-- MY PROGRESS BUTTON -->
          <button
            @click="changeCurrentPage(3)"
            :class="
              currentPage == 3
                ? 'text-[#087BB4] bg-[#e6f3fa] font-semibold border-[#087BB4]'
                : 'text-[#6E777C] bg-white border-[#6E777C]'
            "
            class="font-poppins mobile:text-[14px] py-2 px-8 rounded-full border"
          >
            My Progress
          </button>

          <!-- LANGUAGE GAMES MENU -->
          <div class="relative w-full h-full" 
              id="lang-menu-div"
              :class="[
                currentPage === 1 ? 'flex' : 'hidden'
              ]"
          >
            <button type="button" 
                    id="lang-menu-btn"
                    @click="activateGameMenu"
                    @blur="handleMenuBlur"
                    :aria-expanded="isLangMenuOpen"
                    aria-haspopup="true"
                    aria-controls="lang-dropdown-div"
                    :class="[
                      currentPage === 1 ? 'flex' : 'hidden',
                      'w-full items-center justify-center gap-2 font-poppins text-[#6E777C] bg-[#FFFFFF] font-normal border border-[#6E777C] mobile:text-[14px] py-2 px-8 rounded-full'
                    ]"
            >
              <span>Game Menu</span>
                <svg class="inline size-5 text-gray-400 fill-[#6E777C]" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      aria-hidden="true" 
                      data-slot="icon"
                      :class="[
                          currentPage === 1
                          ? 'fill-[#6E777C]'
                          : 'hidden'
                      ]"
                >
                  <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
    
            <!-- LANGUAGE GAMES DROPDOWN OPTIONS -->
            <div
                id="lang-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="hidden absolute left-0 top-10 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden text-center" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="lang-menu-btn"
            >
              <div id="lang-dropdown-options" class="py-1 text-[15px]" role="none">             
                <a href="/game/definitionDetective" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-1">
                  Definition Detective
                </a>
                <a href="/game/partofspeech" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-2">
                  Part of Speech
                </a>
                <a href="/game/colorgame" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-3">
                  Color Game
                </a>
                <a href="/game/syllableSorting" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-4">
                  Syllable Sorting
                </a>
                <a href="/game/vocabVortex" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-5">
                  Vocabulary Vortex
                </a>
                <a href="/game/polarpairing" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-6">
                  Polar Pairing
                </a>
                <a href="/game/oddoneout" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-7">
                  Odd One Out
                </a>
                <a href="/game/spellingbee" class="block px-4 py-2 text-gray-700" role="menuitem" id="lang-game-8">
                  Spelling Bee
                </a>
              </div>
            </div>
          </div>
          
          <!-- MATH GAMES MENU -->
          <div class="relative w-full h-full" 
              id="math-menu-div"
              :class="[
                currentPage === 2 ? 'flex' : 'hidden'
              ]"
          >
            <button type="button" 
                    id="math-menu-btn"
                    @click="activateGameMenu"
                    @blur="handleMenuBlur"
                    :aria-expanded="isMathMenuOpen"
                    aria-haspopup="true"
                    aria-controls="math-dropdown-div"
                    :class="[
                      currentPage === 2 ? 'flex' : 'hidden',
                      'w-full items-center justify-center gap-2 font-poppins text-[#6E777C] bg-[#FFFFFF] font-normal border border-[#6E777C] mobile:text-[14px] py-2 px-8 rounded-full'
                    ]"
            >
              <span>Game Menu</span>
                <svg class="size-5 text-gray-400" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      aria-hidden="true" 
                      data-slot="icon"
                      :class="[
                          currentPage === 2
                          ? 'fill-[#6E777C]'
                          : 'hidden'
                      ]"
                >
                  <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
            <!-- MATH GAMES DROPDOWN OPTIONS -->
            <div 
                id="math-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="hidden absolute left-0 top-10 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden text-center" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="math-menu-btn"
            >
              <div id="math-dropdown-options" class="py-1 text-[15px]" role="none">           
                <a href="/game/fruitfrenzy" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-1">
                  Fruit Frenzy
                </a>
                <a href="/game/shapeshark" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-2">
                  Shape Shark
                </a>
                <a href="/game/addition" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-3">
                  Animal Addition
                </a>
                <a href="/game/subtraction" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-4">
                  Subtraction Safari
                </a>
                <a href="game/multiplicationmadness" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-5">
                  Multiplication Madness
                </a>
                <a href="/game/DivisionDuel" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-6">
                  Division Duel
                </a>
                <a href="/game/monkeymadness" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-7">
                  Monkey Madness
                </a>
                <a href="/game/carcounting" class="block px-4 py-2 text-gray-700" role="menuitem" id="math-game-8">
                  Car Counting
                </a>
              </div>
            </div>
          </div>
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
  <Footer />
</template>



<style scoped>

button:hover, #lang-menu-btn:hover, #math-menu-btn:hover {
  background-color: #e6f3fa; 
}

#lang-dropdown-options a, #math-dropdown-options a {
  border-bottom: 1px #D3D3D3 solid;
}

#lang-dropdown-options a:last-child, #math-dropdown-options a:last-child {
  border-bottom: none;
}

#lang-dropdown-options a:hover, #math-dropdown-options a:hover {
  background-color: #e6f3fa;
}

/* * * * * Edge Case: 'Language Games' button expands horizontally between 767px–803px widths * * * * */
/* Shift both Language and Math dropdowns downward to avoid overlap with expanded button */
@media only screen and (min-width: 767px) and (max-width: 803px) {
  #lang-dropdown-div, #math-dropdown-div {
    margin-top: 30px;
  }
}

/* * * * * Medium Viewports (width ≥768px and <= 1024px) * * * * */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  #game-zone-header {
    margin-top: 0;
  }

  #game-zone-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto; /* switches to single row */
  }
}

/* * * * * Large Viewports (width ≥ 1025px) * * * * */
@media only screen and (min-width: 1025px) {
  #game-zone-header {
    margin-top: 0;
  }

  #game-zone-grid {
    grid-template-areas: 'lang math . . . . menu';
    grid-template-rows: auto;
  }

  #lang-filter-btn {
    grid-area: lang;
  }

  #math-filter-btn {
    grid-area: math;
  }

  #lang-menu-div, #math-menu-div {
    grid-area: menu;
  }
}

</style>