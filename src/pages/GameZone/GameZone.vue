<script setup>
import Header from '../../components/Header/Header.vue';
import GameZoneList from '../GameZone/GameZoneList/GameZoneList.vue';
import GameProgress from '../GameZone/GameProgress/GameProgress.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Footer from '../../components/Footer/Footer.vue';

import { ref, onMounted } from 'vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

const currentPage = ref(1);
const changeCurrentPage = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  const category = sessionStorage.getItem('gameCategory');

  if (category === 'math') {
    changeCurrentPage(2); // Math Games
  } else if (category === 'science') {
    changeCurrentPage(3); // Science Games
  } else {
    changeCurrentPage(1); // Language Games or default
  }

  // Clear it after use
  sessionStorage.removeItem('gameCategory');
});

// Reactive flags to track dropdown visibility for each game menu (for 'aria-expanded')
const isLangMenuOpen = ref(false);
const isMathMenuOpen = ref(false);
const isScienceMenuOpen = ref(false);

// Updates Language menu visibility flag
const changeIsLangMenuOpen = (bool) => {
  isLangMenuOpen.value = bool;
};

// Updates Math menu visibility flag
const changeIsMathMenuOpen = (bool) => {
  isMathMenuOpen.value = bool;
};

// Updates Science menu visibility flag
const changeIsScienceMenuOpen = (bool) => {
  isScienceMenuOpen.value = bool;
};

function activateGameMenu(event) {
  const menuBtn = event.currentTarget;

  // Conditionally activate and style menu button
  const isMenuActive =
    menuBtn.style.getPropertyValue('color') === 'rgb(8, 123, 180)'
      ? true
      : false;
  if (isMenuActive) {
    // Deactivate and reset styling for menu
    deactivateGameMenu(menuBtn);

    // Update reactive flag based on currentPage
    if (currentPage.value === 1) {
      changeIsLangMenuOpen(false);
    } else if (currentPage.value === 2) {
      changeIsMathMenuOpen(false);
    } else {
      changeIsScienceMenuOpen(false);
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
    } else if (currentPage.value === 2) {
      changeIsMathMenuOpen(true);
    } else {
      changeIsScienceMenuOpen(true);
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

// Toggles visibility of the active dropdown menu
function toggleDropdown() {
  let dropdown, isVisible;

  if (currentPage.value === 1) {
    // Toggle Language dropdown visibility
    dropdown = document.getElementById('lang-dropdown-div');
    dropdown.classList.toggle('hidden');
    // Update reactive flag for Language menu
    isVisible = !dropdown.classList.contains('hidden');
    changeIsLangMenuOpen(isVisible);
  } else if (currentPage.value === 2) {
    dropdown = document.getElementById('math-dropdown-div');
    dropdown.classList.toggle('hidden');
    isVisible = !dropdown.classList.contains('hidden');
    changeIsMathMenuOpen(isVisible);
  } else {
    dropdown = document.getElementById('science-dropdown-div');
    dropdown.classList.toggle('hidden');
    isVisible = !dropdown.classList.contains('hidden');
    changeIsScienceMenuOpen(isVisible);
  }
}

function handlePageSwitch(newPage) {
  const pages = {
    1: {
      btn: 'lang-menu-btn',
      dropdown: 'lang-dropdown-div',
    },
    2: {
      btn: 'math-menu-btn',
      dropdown: 'math-dropdown-div',
    },
    3: {
      btn: 'science-menu-btn',
      dropdown: 'science-dropdown-div',
    },
  };

  // Deactivate and hide menus for all other pages
  for (const page in pages) {
    if (parseInt(page) !== newPage) {
      const { btn, dropdown } = pages[page];
      const menuBtn = document.getElementById(btn);
      const dropdownDiv = document.getElementById(dropdown);

      if (menuBtn) deactivateGameMenu(menuBtn);
      if (dropdownDiv && !dropdownDiv.classList.contains('hidden')) {
        dropdownDiv.classList.add('hidden');
      }
    }
  }

  // Update the current page
  changeCurrentPage(newPage);

  // Update reactive flags to reflect menu states for new page
  changeIsLangMenuOpen(newPage === 1);
  changeIsMathMenuOpen(newPage === 2);
  changeIsScienceMenuOpen(newPage === 3);
}

function handleMenuBlur(event) {
  const pageMap = {
    1: 'lang-dropdown-div',
    2: 'math-dropdown-div',
    3: 'science-dropdown-div',
  };
  const dropdownId = pageMap[currentPage.value];
  // Determine the currently active dropdown
  const currentDropdown = document.getElementById(dropdownId);

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

  const pageMap = {
    1: 'lang-menu-btn',
    2: 'math-menu-btn',
    3: 'science-menu-btn',
  };
  const menuBtnId = pageMap[currentPage.value];
  const menuBtn = document.getElementById(menuBtnId);

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
  } else if (currentPage.value === 2) {
    changeIsMathMenuOpen(false);
  } else {
    changeIsScienceMenuOpen(false);
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
        isMobile ? 'px-8' : '',
      ]"
      ref="content"
    >
      <Header
        :textColor="'text-black'"
        :logoPath="'/assets/images/header/header-logo-2.png'"
      />
    </div>
    <div class="w-full pt-10 flex items-center justify-center">
      <div class="w-10/12">
        <h2
          id="game-zone-header"
          class="font-poppins text-black text-[40px] mobile:text-[25px] mobile:text-center M-0 min-[768px]:max-[1024px]:mt-0"
        >
        <em style="color:#077bb3" class="font-semibold"> Play </em> and <em style="color:#fe892a" class="font-semibold"> learn </em> with us!
        </h2>
        <div
          id="game-zone-grid"
          class="w-full flex flex-wrap gap-5 mb-10 mt-10 items-start"
        >
          <div class="flex flex-wrap gap-5 mobile:w-full mobile:justify-center">
            <!-- LANGUAGE GAMES FILTER BUTTON -->
            <button
              @click="handlePageSwitch(1)"
              :class="[
                'game-filter-btn-base',
                currentPage == 1
                  ? 'game-filter-btn-active'
                  : 'game-filter-btn-inactive',
              ]"
            >
              Language Games
            </button>
            <!-- MATH GAMES FILTER BUTTON -->
            <button
              @click="handlePageSwitch(2)"
              :class="[
                'game-filter-btn-base',
                currentPage == 2
                  ? 'game-filter-btn-active'
                  : 'game-filter-btn-inactive',
              ]"
            >
              Math Games
            </button>
            <!-- SCIENCE GAMES FILTER BUTTON -->
            <button
              @click="handlePageSwitch(3)"
              :class="[
                'game-filter-btn-base',
                currentPage == 3
                  ? 'game-filter-btn-active'
                  : 'game-filter-btn-inactive',
              ]"
              id="science-filter-btn"
            >
              Science Games
            </button>
          </div>
          <div
            class="relative flex flex-grow justify-end gap-5 mobile:w-full mobile:justify-center mobile:mt-4"
          >
            <!-- LANGUAGE GAMES MENU -->
            <div
              id="lang-menu-div"
              :class="[currentPage === 1 ? 'flex' : 'hidden', 'relative']"
            >
              <button
                type="button"
                id="lang-menu-btn"
                :class="[
                  'game-menu-btn-base',
                  currentPage === 1
                    ? 'game-menu-btn-active'
                    : 'game-menu-btn-inactive',
                ]"
                @click="activateGameMenu"
                @blur="handleMenuBlur"
                :aria-expanded="isLangMenuOpen"
                aria-haspopup="true"
                aria-controls="lang-dropdown-div"
              >
                <span>Game Menu</span>
                <svg
                  class="svg-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <!-- LANGUAGE GAMES DROPDOWN OPTIONS -->
              <div
                id="lang-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="game-menu-dropdown-base"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="lang-menu-btn"
              >
                <div
                  id="lang-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <a
                    href="/game/definitionDetective"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-1"
                  >
                    Definition Detective
                  </a>
                  <a
                    href="/game/partofspeech"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-2"
                  >
                    Part of Speech
                  </a>
                  <a
                    href="/game/colorgame"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-3"
                  >
                    Color Game
                  </a>
                  <a
                    href="/game/syllableSorting"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-4"
                  >
                    Syllable Sorting
                  </a>
                  <a
                    href="/game/vocabVortex"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-5"
                  >
                    Vocabulary Vortex
                  </a>
                  <a
                    href="/game/polarpairing"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-6"
                  >
                    Polar Pairing
                  </a>
                  <a
                    href="/game/oddoneout"
                    class="game-menu-link"
                    role="menuitem"
                    id="lang-game-7"
                  >
                    Odd One Out
                  </a>
                  <a
                    href="/game/spellingbee"
                    class="game-menu-link !border-b-0"
                    role="menuitem"
                    id="lang-game-8"
                  >
                    Spelling Bee
                  </a>
                </div>
              </div>
            </div>
            <!-- MATH GAMES MENU -->
            <div
              id="math-menu-div"
              :class="[currentPage === 2 ? 'flex' : 'hidden', 'relative']"
            >
              <button
                type="button"
                id="math-menu-btn"
                :class="[
                  'game-menu-btn-base',
                  currentPage === 2
                    ? 'game-menu-btn-active'
                    : 'game-menu-btn-inactive',
                ]"
                @click="activateGameMenu"
                @blur="handleMenuBlur"
                :aria-expanded="isMathMenuOpen"
                aria-haspopup="true"
                aria-controls="math-dropdown-div"
              >
                <span>Game Menu</span>
                <svg
                  class="svg-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <!-- MATH GAMES DROPDOWN OPTIONS -->
              <div
                id="math-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="game-menu-dropdown-base"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="math-menu-btn"
              >
                <div
                  id="math-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <a
                    href="/game/fruitfrenzy"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-1"
                  >
                    Fruit Frenzy
                  </a>
                  <a
                    href="/game/shapeshark"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-2"
                  >
                    Shape Shark
                  </a>
                  <a
                    href="/game/addition"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-3"
                  >
                    Animal Addition
                  </a>
                  <a
                    href="/game/subtraction"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-4"
                  >
                    Subtraction Safari
                  </a>
                  <a
                    href="game/multiplicationmadness"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-5"
                  >
                    Multiplication Madness
                  </a>
                  <a
                    href="/game/DivisionDuel"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-6"
                  >
                    Division Duel
                  </a>
                  <a
                    href="/game/monkeymadness"
                    class="game-menu-link"
                    role="menuitem"
                    id="math-game-7"
                  >
                    Monkey Madness
                  </a>
                  <a
                    href="/game/carcounting"
                    class="game-menu-link !border-b-0"
                    role="menuitem"
                    id="math-game-8"
                  >
                    Car Counting
                  </a>
                </div>
              </div>
            </div>
            <!-- SCIENCE GAMES MENU -->

            <div
              id="science-menu-div"
              :class="[currentPage === 3 ? 'flex' : 'hidden', 'relative']"
            >
              <button
                type="button"
                id="science-menu-btn"
                @click="activateGameMenu"
                @blur="handleMenuBlur"
                :aria-expanded="isScienceMenuOpen"
                aria-haspopup="true"
                aria-controls="science-dropdown-div"
                :class="[
                  'game-menu-btn-base',
                  currentPage === 3
                    ? 'game-menu-btn-active'
                    : 'game-menu-btn-inactive',
                ]"
              >
                <span>Game Menu</span>
                <svg
                  class="svg-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="science-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="game-menu-dropdown-base"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="science-menu-btn"
              >
                <div
                  id="science-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <a
                    href="/game/mattermixup"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-1"
                  >
                    Matter Mix-Up
                  </a>
                  <a
                    href="/game/tinycelltown"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-2"
                  >
                    Tiny Cell Town
                  </a>
                  <a
                    href="/game/weatherwhiz"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-3"
                  >
                    Weather Whiz
                  </a>
                  <a
                    href="/game/spacecase"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-4"
                  >
                    Space Case
                  </a>
                  <a
                    href="/game/dinodetectives"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-5"
                  >
                    Dino Detectives
                  </a>
                  <a
                    href="/game/germsquad"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-6"
                  >
                    Germ Squad
                  </a>
                  <a
                    href="/game/ecorangers"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-7"
                  >
                    Eco Rangers
                  </a>
                  <a
                    href="/game/soundexplorer"
                    class="game-menu-link"
                    role="menuitem"
                    id="science-game-8"
                  >
                    Sound Explorer
                  </a>
                  <a
                    href="/game/robotrepair"
                    class="game-menu-link !border-b-0"
                    role="menuitem"
                    id="science-game-9"
                  >
                    Robot Repair Lab
                  </a>
                  <a
                    href="/game/plantpower"
                    class="game-menu-link !border-b-0"
                    role="menuitem"
                    id="science-game-10"
                  >
                    Plant Power
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div v-if="currentPage != 4">
            <GameZoneList :type="currentPage" />
          </div>
          <div v-if="currentPage === 4">
            <GameProgress />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
