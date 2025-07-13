<script setup>
import Header from '../../components/Header/Header.vue';
import GameZoneList from '../GameZone/GameZoneList/GameZoneList.vue';
import GameProgress from '../GameZone/GameProgress/GameProgress.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Footer from '../../components/Footer/Footer.vue';

import { ref, onMounted } from 'vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

/* The following three game maps help keep code DRY:
 * - 'languageGames', 'mathGames', and 'scienceGames'
 * - Each map pairs a game title with its URL post-fix
 * - Used to dynamically generate <a> links by game type
 * - Future improvement:
 *    - Use a GET API (e.g. get_game_links_info) to fetch from the DB
 *    - Create a reusable 'GameMenuDropdown' component
 */

// Page 1: Language Games
const languageGames = {
  'Definition Detective': 'definitionDetective',
  'Part of Speech': 'partofspeech',
  'Color Game': 'colorgame',
  'Syllable Sorting': 'syllableSorting',
  'Vocabulary Vortex': 'vocabVortex',
  'Polar Pairing': 'polarpairing',
  'Odd One Out': 'oddoneout',
  'Spelling Bee': 'spellingbee',
};

// Page 2: Math Games
const mathGames = {
  'Fruit Frenzy': 'fruitfrenzy',
  'Shape Shark': 'shapeshark',
  'Animal Addition': 'addition',
  'Subtraction Safari': 'subtraction',
  'Multiplication Madness': 'multiplicationmadness',
  'Division Duel': 'DivisionDuel',
  'Monkey Madness': 'monkeymadness',
  'Car Counting': 'carcounting',
};

// Page 3: Science Games
const scienceGames = {
  'Matter Mix-Up': 'mattermixup',
  'Tiny Cell Town': 'tinycelltown',
  'Weather Whiz': 'weatherwhiz',
  'Space Case': 'spacecase',
  'Dino Detectives': 'dinodetectives',
  'Germ Squad': 'germsquad',
  'Eco Rangers': 'ecorangers',
  'Sound Explorer': 'soundexplorer',
  'Robot Repair Lab': 'robotrepair',
  'Plant Power': 'plantpower',
};

// Page 4: Life Skills Games
const lifeSkillsGames = {
  'Grocery Grab': 'groceryGrab',
  'Money Match': 'moneyMatch',
  'Laundry Legend': 'laundryLegend',
  'Kitchen Cues': 'kitchenCues',
  'Dress to Impress': 'dressToImpress',
  'Safety Sirens': 'safetySirens',
  'Schedule Shuffle': 'scheduleShuffle',
  'Clean Machine': 'cleanMachine',
  'Health Check': 'healthCheck',
  'Time Tamer': 'timeTamer',
  'Kitchen Timer Trouble': 'kitchenTimerTrouble',
  'Bus Stop Brainstorm': 'busStopBrainstorm',
  'Money Manager': 'moneyManager',
  'Healthy Plate': 'healthyPlate',
};

// Page 5: Blind-Specific Skills Games
const blindSpecificSkillsGames = {
  'Street Smart': 'streetSmart',
  'Cane Companion': 'caneCompanion',
  'Doorway Decisions': 'doorwayDecisions',
  'Elevator Experience': 'elevatorExperience',
  'Transit Time': 'transitTime',
  'Money Matters': 'moneyMatters',
  'Kitchen Know-How': 'kitchenKnowHow',
  'Phone Friend': 'phoneFriend',
  'Medication Manager': 'medicationManager',
  'Obstacle Awareness': 'obstacleAwareness',
  'Social Sense': 'socialSense',
  'Asking for Assistance': 'askingForAssistance',
};

const currentPage = ref(1);
const changeCurrentPage = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  const category = sessionStorage.getItem('gameCategory');

  if (category === 'math') {
    changeCurrentPage(2);
  } else if (category === 'science') {
    changeCurrentPage(3);
  } else if (category === 'life-skills') {
    changeCurrentPage(4);
  } else if (category === 'blind-specific-skills') {
    changeCurrentPage(5);
  } else {
    changeCurrentPage(1); // Default to Language Games
  }

  // Clear it after use
  sessionStorage.removeItem('gameCategory');
});

// Reactive flags to track dropdown visibility for each game menu (for 'aria-expanded')
const isLangMenuOpen = ref(false);
const isMathMenuOpen = ref(false);
const isScienceMenuOpen = ref(false);
const isLifeSkillsMenuOpen = ref(false);
const isBlindSkillsMenuOpen = ref(false);

// Updater functions for visibility flags
const changeIsLangMenuOpen = (bool) => (isLangMenuOpen.value = bool);
const changeIsMathMenuOpen = (bool) => (isMathMenuOpen.value = bool);
const changeIsScienceMenuOpen = (bool) => (isScienceMenuOpen.value = bool);
const changeIsLifeSkillsMenuOpen = (bool) =>
  (isLifeSkillsMenuOpen.value = bool);
const changeIsBlindSkillsMenuOpen = (bool) =>
  (isBlindSkillsMenuOpen.value = bool);

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

    if (currentPage.value === 1) changeIsLangMenuOpen(false);
    else if (currentPage.value === 2) changeIsMathMenuOpen(false);
    else if (currentPage.value === 3) changeIsScienceMenuOpen(false);
    else if (currentPage.value === 4) changeIsLifeSkillsMenuOpen(false);
    else if (currentPage.value === 5) changeIsBlindSkillsMenuOpen(false);
  } else {
    menuBtn.style.backgroundColor = '#e6f3fa';
    menuBtn.style.fontWeight = '600';
    menuBtn.style.color = '#087BB4';
    menuBtn.style.borderColor = '#087BB4';
    const svgArrow = menuBtn.querySelector('svg');
    svgArrow.style.fill = '#087BB4';

    if (currentPage.value === 1) changeIsLangMenuOpen(true);
    else if (currentPage.value === 2) changeIsMathMenuOpen(true);
    else if (currentPage.value === 3) changeIsScienceMenuOpen(true);
    else if (currentPage.value === 4) changeIsLifeSkillsMenuOpen(true);
    else if (currentPage.value === 5) changeIsBlindSkillsMenuOpen(true);
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
  const pageMap = {
    1: { id: 'lang-dropdown-div', updater: changeIsLangMenuOpen },
    2: { id: 'math-dropdown-div', updater: changeIsMathMenuOpen },
    3: { id: 'science-dropdown-div', updater: changeIsScienceMenuOpen },
    4: { id: 'life-skills-dropdown-div', updater: changeIsLifeSkillsMenuOpen },
    5: {
      id: 'blind-skills-dropdown-div',
      updater: changeIsBlindSkillsMenuOpen,
    },
  };

  const currentPageConfig = pageMap[currentPage.value];
  if (currentPageConfig) {
    const dropdown = document.getElementById(currentPageConfig.id);
    dropdown.classList.toggle('hidden');
    const isVisible = !dropdown.classList.contains('hidden');
    currentPageConfig.updater(isVisible);
  }
}

function handlePageSwitch(newPage) {
  const pages = {
    1: { btn: 'lang-menu-btn', dropdown: 'lang-dropdown-div' },
    2: { btn: 'math-menu-btn', dropdown: 'math-dropdown-div' },
    3: { btn: 'science-menu-btn', dropdown: 'science-dropdown-div' },
    4: { btn: 'life-skills-menu-btn', dropdown: 'life-skills-dropdown-div' },
    5: { btn: 'blind-skills-menu-btn', dropdown: 'blind-skills-dropdown-div' },
  };

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

  changeCurrentPage(newPage);
  changeIsLangMenuOpen(newPage === 1);
  changeIsMathMenuOpen(newPage === 2);
  changeIsScienceMenuOpen(newPage === 3);
  changeIsLifeSkillsMenuOpen(newPage === 4);
  changeIsBlindSkillsMenuOpen(newPage === 5);
}

function handleMenuBlur(event) {
  const pageMap = {
    1: 'lang-dropdown-div',
    2: 'math-dropdown-div',
    3: 'science-dropdown-div',
    4: 'life-skills-dropdown-div',
    5: 'blind-skills-dropdown-div',
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
  if (currentDropdown.contains(event.relatedTarget)) return;

  const pageMap = {
    1: 'lang-menu-btn',
    2: 'math-menu-btn',
    3: 'science-menu-btn',
    4: 'life-skills-menu-btn',
    5: 'blind-skills-menu-btn',
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
  if (currentPage.value === 1) changeIsLangMenuOpen(false);
  else if (currentPage.value === 2) changeIsMathMenuOpen(false);
  else if (currentPage.value === 3) changeIsScienceMenuOpen(false);
  else if (currentPage.value === 4) changeIsLifeSkillsMenuOpen(false);
  else if (currentPage.value === 5) changeIsBlindSkillsMenuOpen(false);
}
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
            <!-- LIFE SKILLS GAMES FILTER BUTTON -->
            <button
              @click="handlePageSwitch(4)"
              :class="[
                'game-filter-btn-base',
                currentPage == 4
                  ? 'game-filter-btn-active'
                  : 'game-filter-btn-inactive',
              ]"
            >
              Life Skills
            </button>
            <!-- BLIND SPECIFIC SKILLS GAMES FILTER BUTTON -->
            <button
              @click="handlePageSwitch(5)"
              :class="[
                'game-filter-btn-base',
                currentPage == 5
                  ? 'game-filter-btn-active'
                  : 'game-filter-btn-inactive',
              ]"
            >
              Blind-Specific Skills
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
                  isLangMenuOpen
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
                class="game-menu-dropdown-base hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="lang-menu-btn"
              >
                <div
                  id="lang-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <!-- Generate game menu links by looping over 'languageGames' map entries -->
                  <a
                    v-for="[title, path] in Object.entries(languageGames)"
                    :key="path"
                    :href="`/game/${path}`"
                    class="game-menu-link"
                    role="menuitem"
                  >
                    {{ title }}
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
                  isMathMenuOpen
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
                class="game-menu-dropdown-base hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="math-menu-btn"
              >
                <div
                  id="math-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <!-- Generate game menu links by looping over 'mathGames' map entries -->
                  <a
                    v-for="[title, path] in Object.entries(mathGames)"
                    :key="path"
                    :href="`/game/${path}`"
                    class="game-menu-link"
                    role="menuitem"
                  >
                    {{ title }}
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
                  isScienceMenuOpen
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
              <!-- SCIENCE GAMES DROPDOWN OPTIONS -->
              <div
                id="science-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="game-menu-dropdown-base hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="science-menu-btn"
              >
                <div
                  id="science-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <!-- Generate game menu links by looping over 'scienceGames' map entries -->
                  <a
                    v-for="[title, path] in Object.entries(scienceGames)"
                    :key="path"
                    :href="`/game/${path}`"
                    class="game-menu-link"
                    role="menuitem"
                  >
                    {{ title }}
                  </a>
                </div>
              </div>
            </div>
            <!-- LIFE SKILLS GAMES MENU -->
            <div
              id="life-skills-menu-div"
              :class="[currentPage === 4 ? 'flex' : 'hidden', 'relative']"
            >
              <button
                type="button"
                id="life-skills-menu-btn"
                :class="[
                  'game-menu-btn-base',
                  isLifeSkillsMenuOpen
                    ? 'game-menu-btn-active'
                    : 'game-menu-btn-inactive',
                ]"
                @click="activateGameMenu"
                @blur="handleMenuBlur"
                :aria-expanded="isLifeSkillsMenuOpen"
                aria-haspopup="true"
                aria-controls="life-skills-dropdown-div"
              >
                <span>Game Menu</span>
                <svg class="svg-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <!-- LIFE SKILLS GAMES DROPDOWN OPTIONS -->
              <div
                id="life-skills-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="game-menu-dropdown-base hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="life-skills-menu-btn"
              >
                <div
                  id="life-skills-dropdown-options"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <!-- Generate game menu links by looping over 'lifeSkillsGames' map entries -->
                  <a
                    v-for="[title, path] in Object.entries(lifeSkillsGames)"
                    :key="path"
                    :href="`/game/${path}`"
                    class="game-menu-link"
                    role="menuitem"
                    >{{ title }}</a
                  >
                </div>
              </div>
            </div>
            <!-- BLIND SPECIFIC SKILLS GAMES MENU -->
            <div
              id="blind-skills-menu-div"
              :class="[currentPage === 5 ? 'flex' : 'hidden', 'relative']"
            >
              <button
                type="button"
                id="blind-skills-menu-btn"
                :class="[
                  'game-menu-btn-base',
                  isBlindSkillsMenuOpen
                    ? 'game-menu-btn-active'
                    : 'game-menu-btn-inactive',
                ]"
                @click="activateGameMenu"
                @blur="handleMenuBlur"
                :aria-expanded="isBlindSkillsMenuOpen"
                aria-haspopup="true"
                aria-controls="blind-skills-dropdown-div"
              >
                <span>Game Menu</span>
                <svg class="svg-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <!-- BLIND SPECIFIC SKILLS GAMES DROPDOWN OPTIONS -->
              <div
                id="blind-skills-dropdown-div"
                @focusout="handleDropdownFocusOut"
                tabindex="-1"
                class="game-menu-dropdown-base hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="blind-skills-menu-btn"
              >
                <div
                  id="blind-skills-dropdown"
                  class="py-1 text-[15px]"
                  role="none"
                >
                  <!-- Generate game menu links by looping over 'blindSpecificSkillsGames' map entries -->
                  <a
                    v-for="[title, path] in Object.entries(
                      blindSpecificSkillsGames
                    )"
                    :key="path"
                    :href="`/game/${path}`"
                    class="game-menu-link"
                    role="menuitem"
                    >{{ title }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div v-if="currentPage >= 1 && currentPage <= 5">
            <GameZoneList :type="currentPage" />
          </div>
          <div v-if="currentPage === 6">
            <GameProgress />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
