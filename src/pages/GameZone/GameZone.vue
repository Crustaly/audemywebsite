<script setup>
import Header from '../../components/Header/Header.vue';
import GameZonePageButton from '../GameZone/GameZoneFilters/GameZonePageButton.vue';
import GameMenuButton from '../GameZone/GameZoneFilters/GameMenuButton.vue';
import GameZoneList from '../GameZone/GameZoneList/GameZoneList.vue';
import GameProgress from '../GameZone/GameProgress/GameProgress.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Footer from '../../components/Footer/Footer.vue';

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useDeviceType } from '../../Utilities/checkDeviceType';

import {
  getLanguageGames,
  getMathGames,
  getScienceGames,
  getLifeSkillsGames,
  getIndependenceSkillsGames,
} from './GameDB.js';

/*
 * Extracted lists of objects for dropdown menus:
 * - languageGamesMap, mathGamesMap, scienceGamesMap,
 * - lifeSkillGameMap, independenceSkillGameMap, etc.
 *
 * Each object contains game title and URL
 * - Example format: [{ title: 'Definition Detective', url: '/game/definitionDetective' }, ...]
 */

const languageGamesMap = getLanguageGames().map(({ title, url }) => ({
  title,
  url,
}));

const mathGamesMap = getMathGames().map(({ title, url }) => ({
  title,
  url,
}));

const scienceGamesMap = getScienceGames().map(({ title, url }) => ({
  title,
  url,
}));

const lifeSkillGameMap = getLifeSkillsGames().map(({ title, url }) => ({
  title,
  url,
}));

const independenceSkillGameMap = getIndependenceSkillsGames().map(
  ({ title, url }) => ({
    title,
    url,
  })
);

import { computed } from 'vue';
const totalPages = 5; // TODO: Update to 6 once "My Progress" is ready

/*
 * Returns an array [1 ... totalPages] for rendering <GameZonePageButton /> (via v-for)
 * "Page 0" is reserved for navigating back to <GameZoneLandingPage />
 */
const pageNumberList = computed(() =>
  Array.from({ length: totalPages }, (_, i) => i + 1)
);

const currentPage = ref(1);
const changeCurrentPage = (page) => {
  currentPage.value = page;
};

const route = useRoute();
const router = useRouter();

/* Validates 'page' query parameter in '/game-zone' URL
 * Set via <GameZoneLandingPage />
 * Invalid query param: Display error message
 */
const isValidPageParam = ref(true);

onMounted(() => {
  // Try: query parameter (if navigating from Game Zone Landing Page)
  if (route.query.page) {
    const pageParam = Number(route.query.page);
    // Check if valid page param: Must be a number within [1, totalPages]
    if (!isNaN(pageParam) && pageParam >= 1 && pageParam <= totalPages) {
      isValidPageParam.value = true;
      changeCurrentPage(pageParam);
      return;
    } else {
      // Fallback: Reset and mark page parameter as invalid
      // Cases: isNaN (ex: "abc"), or Number is not within [1, totalPages]
      isValidPageParam.value = false;
      return;
    }
  }

  // Otherwise, retrieve `sessionStorage` (Already in Game Zone)
  const category = sessionStorage.getItem('gameCategory');

  if (category === 'math') {
    changeCurrentPage(2);
  } else if (category === 'science') {
    changeCurrentPage(3); // Science Games
  } else if (category === 'life-skills') {
    changeCurrentPage(4); // Life Skills Games
  } else if (category === 'independence-skills') {
    changeCurrentPage(5); // Independence Skills Games
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
const isIndependenceSkillsMenuOpen = ref(false);

// Updater functions for visibility flags
const changeIsLangMenuOpen = (bool) => (isLangMenuOpen.value = bool);
const changeIsMathMenuOpen = (bool) => (isMathMenuOpen.value = bool);
const changeIsScienceMenuOpen = (bool) => (isScienceMenuOpen.value = bool);
const changeIsLifeSkillsMenuOpen = (bool) =>
  (isLifeSkillsMenuOpen.value = bool);
const changeisIndependenceSkillsMenuOpen = (bool) =>
  (isIndependenceSkillsMenuOpen.value = bool);

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
    else if (currentPage.value === 5) changeisIndependenceSkillsMenuOpen(false);
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
    else if (currentPage.value === 5) changeisIndependenceSkillsMenuOpen(true);
  }
  // Toggle visibility of dropdown
  toggleDropdown();
}

// Deactivates the game menu button by resetting its styles
function deactivateGameMenu(menuBtn) {
  // Reset button
  menuBtn.style.backgroundColor = '#FFFFFF';
  menuBtn.style.fontWeight = 'normal';
  menuBtn.style.color = '#000000';
  menuBtn.style.borderColor = '#000000';

  // Reset arrow (svg)
  const svgArrow = menuBtn.querySelector('svg');
  svgArrow.style.fill = '#000000';
}

// Toggles visibility of the active dropdown menu
function toggleDropdown() {
  const pageMap = {
    1: { id: 'lang-dropdown-div', updater: changeIsLangMenuOpen },
    2: { id: 'math-dropdown-div', updater: changeIsMathMenuOpen },
    3: { id: 'science-dropdown-div', updater: changeIsScienceMenuOpen },
    4: { id: 'life-skills-dropdown-div', updater: changeIsLifeSkillsMenuOpen },
    5: {
      id: 'independence-skills-dropdown-div',
      updater: changeisIndependenceSkillsMenuOpen,
    },
  };

  const currentPageConfig = pageMap[currentPage.value];
  if (currentPageConfig) {
    const dropdown = document.getElementById(currentPageConfig.id);
    dropdown.classList.toggle('hidden');
    // Update reactive flag for Language menu
    isVisible = !dropdown.classList.contains('hidden');
    changeIsLangMenuOpen(isVisible);
  } else if (currentPage.value === 2) {
    dropdown = document.getElementById('math-dropdown-div');
    dropdown.classList.toggle('hidden');
    isVisible = !dropdown.classList.contains('hidden');
    changeIsMathMenuOpen(isVisible);
  } else if (currentPage.value === 3) {
    dropdown = document.getElementById('science-dropdown-div');
    dropdown.classList.toggle('hidden');
    isVisible = !dropdown.classList.contains('hidden');
    changeIsScienceMenuOpen(isVisible);
  } else if (currentPage.value === 4) {
    dropdown = document.getElementById('life-skills-dropdown-div');
    dropdown.classList.toggle('hidden');
    isVisible = !dropdown.classList.contains('hidden');
    changeIsLifeSkillsMenuOpen(isVisible);
  } else {
    dropdown = document.getElementById('independence-skills-dropdown-div');
    dropdown.classList.toggle('hidden');
    isVisible = !dropdown.classList.contains('hidden');
    changeisIndependenceSkillsMenuOpen(isVisible);
  }
}

function handlePageSwitch(newPage) {
  /*
   * Default behavior:
   * - Resets query param flag
   * - Clears any query param from URL (no page refresh)
   *
   * Handles 2 edge cases:
   * - 1. Navigating from Landing Page with valid query param,
   *      then switches to another page within Game Zone
   * - 2. Error message currently shown (invalid query param in URL),
   *      then user clicks on a valid page button
   */
  isValidPageParam.value = true;
  router.push({
    path: route.path,
    query: {},
  });

  // Special case: If newPage is 0, navigate back to Landing Page
  // (User clicks on "Back" button within Game Zone)
  if (newPage == 0) {
    router.push('/game-zone-landing-page');
  }

  // Otherwise, proceed with regular page switch
  const pages = {
    1: { btn: 'lang-menu-btn', dropdown: 'lang-dropdown-div' },
    2: { btn: 'math-menu-btn', dropdown: 'math-dropdown-div' },
    3: { btn: 'science-menu-btn', dropdown: 'science-dropdown-div' },
    4: { btn: 'life-skills-menu-btn', dropdown: 'life-skills-dropdown-div' },
    5: {
      btn: 'independence-skills-menu-btn',
      dropdown: 'independence-skills-dropdown-div',
    },
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

  // Ensure all menus are reset to a closed state
  changeIsLangMenuOpen(false);
  changeIsMathMenuOpen(false);
  changeIsScienceMenuOpen(false);
  changeIsLifeSkillsMenuOpen(false);
  changeisIndependenceSkillsMenuOpen(false);
}

function handleMenuBlur(event) {
  const pageMap = {
    1: 'lang-dropdown-div',
    2: 'math-dropdown-div',
    3: 'science-dropdown-div',
    4: 'life-skills-dropdown-div',
    5: 'independence-skills-dropdown-div',
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
    5: 'independence-skills-menu-btn',
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
  else if (currentPage.value === 5) changeisIndependenceSkillsMenuOpen(false);
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
          <em style="color: #077bb3"> Play </em> and
          <em style="color: #fe892a"> learn </em> with us!
        </h2>
        <div
          id="game-zone-grid"
          class="w-full flex flex-wrap gap-5 mb-10 mt-10 items-start"
        >
          <div class="flex flex-wrap gap-5 w-full justify-center">
            <!-- RENDER PAGE BUTTONS FOR GAME CATEGORIES (includes WIP: 'My Progress') -->
            <GameZonePageButton
              v-for="pageNumber in pageNumberList"
              :key="pageNumber"
              :pageNumber="pageNumber"
              :currentPage="currentPage"
              @click="handlePageSwitch(pageNumber)"
            />
          </div>
          <!-- FLEX CONTAINER: 'View All Categories' Button + 'Games Menu' Dropdown 
              - Mobile / Small Screens (Column): Btn (top), Menu (bottom)
              - Medium+ Screens (Row): Btn (left), Menu (right) 
          -->
          <div
            class="flex justify-between items-center w-full mobile:flex-col mobile:gap-y-10 mobile:mt-5"
          >
            <!-- VIEW ALL CATEGORIES BUTTON (aka Back to Landing Page) -->
            <div>
              <button
                @click="handlePageSwitch(0)"
                type="button"
                class="game-action-btn-base view-all-categories-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-grid"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
                  />
                </svg>
                <span>View All Categories</span>
              </button>
            </div>
            <div>
              <!-- LANGUAGE GAMES MENU -->
              <div
                id="lang-menu-div"
                :class="[currentPage === 1 ? 'flex' : 'hidden', 'relative']"
              >
                <GameMenuButton
                  id="lang-menu-btn"
                  gameType="lang"
                  :isMenuOpen="isLangMenuOpen"
                  @click="activateGameMenu"
                  @blur="handleMenuBlur"
                />
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
                    <!-- Generate game menu links by looping over 'languageGamesMap' entries -->
                    <a
                      v-for="{ title, url } in languageGamesMap"
                      :key="url"
                      :href="url"
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
                <GameMenuButton
                  id="math-menu-btn"
                  gameType="math"
                  :isMenuOpen="isMathMenuOpen"
                  @click="activateGameMenu"
                  @blur="handleMenuBlur"
                />
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
                    <!-- Generate game menu links by looping over 'mathGamesMap' map entries -->
                    <a
                      v-for="{ title, url } in mathGamesMap"
                      :key="url"
                      :href="url"
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
                <GameMenuButton
                  id="science-menu-btn"
                  gameType="science"
                  :isMenuOpen="isScienceMenuOpen"
                  @click="activateGameMenu"
                  @blur="handleMenuBlur"
                />
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
                    <!-- Generate game menu links by looping over 'scienceGamesMap' map entries -->
                    <a
                      v-for="{ title, url } in scienceGamesMap"
                      :key="url"
                      :href="url"
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
                <GameMenuButton
                  id="life-skills-menu-btn"
                  gameType="life-skills"
                  :isMenuOpen="isLifeSkillsMenuOpen"
                  @click="activateGameMenu"
                  @blur="handleMenuBlur"
                />
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
                    <!-- Generate game menu links by looping over 'lifeSkillGameMap' entries -->
                    <a
                      v-for="{ title, url } in lifeSkillGameMap"
                      :key="url"
                      :href="url"
                      class="game-menu-link"
                      role="menuitem"
                    >
                      {{ title }}
                    </a>
                  </div>
                </div>
              </div>
              <!-- INDEPENDENCE SKILLS GAMES MENU -->
              <div
                id="independence-skills-menu-div"
                :class="[currentPage === 5 ? 'flex' : 'hidden', 'relative']"
              >
                <GameMenuButton
                  id="independence-skills-menu-btn"
                  gameType="independence-skills"
                  :isMenuOpen="isIndependenceSkillsMenuOpen"
                  @click="activateGameMenu"
                  @blur="handleMenuBlur"
                />
                <!-- INDEPENDENCE SKILLS GAMES DROPDOWN OPTIONS -->
                <div
                  id="independence-skills-dropdown-div"
                  @focusout="handleDropdownFocusOut"
                  tabindex="-1"
                  class="game-menu-dropdown-base hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="independence-skills-menu-btn"
                >
                  <div
                    id="independence-skills-dropdown-options"
                    class="py-1 text-[15px]"
                    role="none"
                  >
                    <!-- Generate game menu links by looping over 'independenceSkillGameMap' map entries -->
                    <a
                      v-for="{ title, url } in independenceSkillGameMap"
                      :key="url"
                      :href="url"
                      class="game-menu-link"
                      role="menuitem"
                    >
                      {{ title }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="font-poppins">
          <div v-if="isValidPageParam && currentPage != 6">
            <GameZoneList :type="currentPage" />
          </div>
          <div v-if="isValidPageParam && currentPage === 6">
            <GameProgress />
          </div>
          <!-- EDGE CASE: If invalid page parameter in URL, display error message -->
          <div v-if="!isValidPageParam" class="text-center p-10 h-[350px]">
            <p class="text-[18px] md:text-[20px] font-semibold mb-10">
              Oops! No matching games.
            </p>
            <p class="text-[16px]">
              Please check your URL, or explore any of our available categories
              above!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
