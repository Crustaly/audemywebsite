<script setup>
import Header from '../../components/Header/Header.vue';
import GameZonePageButton from '../GameZone/GameZoneFilters/GameZonePageButton.vue';
import GameMenuButton from '../GameZone/GameZoneFilters/GameMenuButton.vue';
import GameDropdownOptions from '../GameZone/GameZoneFilters/GameDropdownOptions.vue';
import GameZoneList from '../GameZone/GameZoneList/GameZoneList.vue';
import GameProgress from '../GameZone/GameProgress/GameProgress.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Footer from '../../components/Footer/Footer.vue';

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
 * - lifeSkillGamesMap, independenceSkillGamesMap, etc.
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

const lifeSkillGamesMap = getLifeSkillsGames().map(({ title, url }) => ({
  title,
  url,
}));

const independenceSkillGamesMap = getIndependenceSkillsGames().map(
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

  // If `sessionStorage` exists, use it (Already in Game Zone)
  const category = sessionStorage.getItem('gameCategory');

  // Otherwise: Empty query param (aka `sessionStorage` DNE), default to 'language'
  const pageNumber = categoryPageMap[category ? category : 'language'];

  // Dynamically change current page based on categoryPageMap
  changeCurrentPage(pageNumber);

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

// categoryPageMap: Used in onMounted()
// Dynamically calls changeCurrentPage(), based on session-based 'gameCategory'
// Note: Quotes required for hyphenated object keys
const categoryPageMap = {
  language: 1,
  math: 2,
  science: 3,
  'life-skills': 4,
  'independence-skills': 5,
  // (WIP) 'my-progress': 6,
};

// (Shared) pageConfigsMap: Map page number to matching game configs
// Info for menu button, dropdown, updater(), menu state, & game links (URLs)
const pageConfigsMap = {
  1: {
    btnId: 'lang-menu-btn',
    dropdownId: 'lang-dropdown-div',
    updater: changeIsLangMenuOpen,
    menuState: isLangMenuOpen,
    gameType: 'lang',
    gameLinksMap: languageGamesMap,
  },
  2: {
    btnId: 'math-menu-btn',
    dropdownId: 'math-dropdown-div',
    updater: changeIsMathMenuOpen,
    menuState: isMathMenuOpen,
    gameType: 'math',
    gameLinksMap: mathGamesMap,
  },
  3: {
    btnId: 'science-menu-btn',
    dropdownId: 'science-dropdown-div',
    updater: changeIsScienceMenuOpen,
    menuState: isScienceMenuOpen,
    gameType: 'science',
    gameLinksMap: scienceGamesMap,
  },
  4: {
    btnId: 'life-skills-menu-btn',
    dropdownId: 'life-skills-dropdown-div',
    updater: changeIsLifeSkillsMenuOpen,
    menuState: isLifeSkillsMenuOpen,
    gameType: 'life-skills',
    gameLinksMap: lifeSkillGamesMap,
  },
  5: {
    btnId: 'independence-skills-menu-btn',
    dropdownId: 'independence-skills-dropdown-div',
    updater: changeisIndependenceSkillsMenuOpen,
    menuState: isIndependenceSkillsMenuOpen,
    gameType: 'independence-skills',
    gameLinksMap: independenceSkillGamesMap,
  },
};

function activateGameMenu(event) {
  const menuBtn = event.currentTarget;

  // Conditionally activate and style menu button
  const isMenuActive =
    menuBtn.style.getPropertyValue('color') === 'rgb(8, 123, 180)';

  if (isMenuActive) {
    // Deactivate and reset styling for menu
    deactivateGameMenu(menuBtn);
  } else {
    // Set active styling for menu
    menuBtn.style.backgroundColor = '#e6f3fa';
    menuBtn.style.fontWeight = '600';
    menuBtn.style.color = '#087BB4';
    menuBtn.style.borderColor = '#087BB4';
    const svgArrow = menuBtn.querySelector('svg');
    svgArrow.style.fill = '#087BB4';
  }

  // Get matching map based on current page
  const currentPageConfig = pageConfigsMap[currentPage.value];
  if (currentPageConfig) {
    const updater = currentPageConfig.updater;
    // Toggle isMenuActive flag
    updater(!isMenuActive);
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
  // Get matching map based on current page
  const currentPageConfig = pageConfigsMap[currentPage.value];
  if (currentPageConfig) {
    const dropdown = document.getElementById(currentPageConfig.dropdownId);
    dropdown.classList.toggle('hidden');

    // Update reactive flag for matching menu
    const isVisible = !dropdown.classList.contains('hidden');

    // Dynamically call matching updater()
    const updater = currentPageConfig.updater;
    updater(isVisible);
  } else {
    console.log('toggleDropdown() error: Invalid page number.');
    return;
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
  for (const mapIndex in pageConfigsMap) {
    if (parseInt(mapIndex) !== newPage) {
      // Deconstruct pageConfigsMap; ignore 'updater()' field
      const { btnId, dropdownId } = pageConfigsMap[mapIndex];

      const menuBtn = document.getElementById(btnId);
      if (menuBtn) {
        deactivateGameMenu(menuBtn);
      }

      const dropdownDiv = document.getElementById(dropdownId);
      if (dropdownDiv && !dropdownDiv.classList.contains('hidden')) {
        dropdownDiv.classList.add('hidden');
      }
    }
  }

  changeCurrentPage(newPage);

  // Ensure all menus are reset to a closed state
  for (const mapIndex in pageConfigsMap) {
    // Deconstruct pageConfigsMap; only fetch 'updater()' field
    const { updater } = pageConfigsMap[mapIndex];
    updater(false);
  }
}

function handleMenuBlur(event) {
  // Get matching map based on current page
  const currentPageConfig = pageConfigsMap[currentPage.value];

  // Determine the currently active dropdown
  if (currentPageConfig) {
    const dropdown = document.getElementById(currentPageConfig.dropdownId);

    // Keep menu open if focus moved into the dropdown options (e.g., tabbing through it)
    if (dropdown.contains(event.relatedTarget)) {
      return;
    }

    // Otherwise, hide menu
    // Note: Used native 'currentTarget' (vs document.getElementById()) for efficiency
    const menuBtn = event.currentTarget;
    hideMenuDropdown(menuBtn, dropdown);
  } else {
    console.log('handleMenuBlur() error: Invalid page number.');
  }
}

function handleDropdownFocusOut(event) {
  // Note: Used native 'currentTarget' (vs document.getElementById()) for efficiency
  const currentDropdown = event.currentTarget;

  // Keep dropdown open if focus is still within it (e.g., tabbing through it)
  if (currentDropdown.contains(event.relatedTarget)) {
    return;
  }

  // Get matching map based on current page
  const currentPageConfig = pageConfigsMap[currentPage.value];

  // Hide current Game Menu button
  if (currentPageConfig) {
    const menuBtnId = currentPageConfig.btnId;
    const menuBtn = document.getElementById(menuBtnId);
    hideMenuDropdown(menuBtn, currentDropdown);
  } else {
    console.log('handleDropdownFocusOut() error: Invalid page number.');
  }
}

function hideMenuDropdown(menuBtn, currentDropdown) {
  // Deactivates and reset styling for menu
  deactivateGameMenu(menuBtn);

  // Hides opened dropdown
  currentDropdown.classList.add('hidden');

  // Get matching map based on current page
  const currentPageConfig = pageConfigsMap[currentPage.value];

  // Update matching reactive flag
  if (currentPageConfig) {
    const updater = currentPageConfig.updater;
    updater(false);
  }
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
              1) Mobile / Small Screens (Column): Btn (top), Menu (bottom)
                - Uses flex column
              2) Medium+ Screens (Row): Btn (left), Menu (right)
                - Uses relative + absolute to render one Game Menu & Dropdown at a time
          -->
          <div
            class="md:relative flex items-center justify-center w-full flex-col gap-y-5 mt-5"
          >
            <!-- VIEW ALL CATEGORIES BUTTON (aka Back to Landing Page) -->
            <div>
              <button
                @click="handlePageSwitch(0)"
                type="button"
                class="game-action-btn-base view-all-categories-btn md:absolute md:left-0 md:top-0"
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
            <!-- GENERATE GAME MENUS & DROPDOWNS PER CATEGORY -->
            <!-- Medium+ screens: Absolute positioning (top + right), based on relative parent (flex container) -->
            <div
              class="h-[45px] w-auto md:h-[20px] relative md:ml-auto md:static"
            >
              <div
                v-for="(gameConfigs, gamePage) in pageConfigsMap"
                :key="gamePage"
                :class="[
                  currentPage == gamePage
                    ? 'flex md:absolute md:top-0 md:right-0'
                    : 'hidden',
                ]"
              >
                <!-- GAME MENU BUTTON -->
                <!-- Note: Must unwrap the menuState ref because it is nested within a plain object -->
                <GameMenuButton
                  :id="gameConfigs.btnId"
                  :gameType="gameConfigs.gameType"
                  :isMenuOpen="gameConfigs.menuState.value"
                  @click="activateGameMenu"
                  @blur="handleMenuBlur"
                />
                <!-- DROPDOWN OPTIONS -->
                <div
                  :id="gameConfigs.dropdownId"
                  @focusout="handleDropdownFocusOut"
                  tabindex="-1"
                  class="game-menu-dropdown-base hidden"
                  role="menu"
                  aria-orientation="vertical"
                  :aria-labelledby="gameConfigs.btnId"
                >
                  <GameDropdownOptions :gamesMap="gameConfigs.gameLinksMap" />
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
