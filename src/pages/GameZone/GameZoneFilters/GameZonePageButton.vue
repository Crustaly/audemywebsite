<script setup>
/*
 * GameZonePageButton.vue
 *
 * - Renders a filter-like button for a game category, based on the given page number
 * - Applies 'active' styling if the button matches the current page
 * - Uses a map to get the category name for each page number
 */

const props = defineProps({
  pageNumber: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

// Map page numbers to their corresponding icon + category title
const gamePagesMap = {
  1: {
    icon: '/assets/gameImages/landingPageImages/all-language-games-icon.png',
    title: 'Language',
  },
  2: {
    icon: '/assets/gameImages/landingPageImages/all-math-games-icon.png',
    title: 'Math',
  },
  3: {
    icon: '/assets/gameImages/landingPageImages/all-science-games-icon.png',
    title: 'Science',
  },
  4: {
    icon: '/assets/gameImages/landingPageImages/all-life-skills-games-icon.png',
    title: 'Life Skills',
  },
  5: {
    icon: '/assets/gameImages/landingPageImages/all-independence-skills-games-icon.png',
    title: 'Independence Skills',
  },
  /* WIP: Future page in GameZone */
  6: {
    icon: '',
    title: 'My Progress',
  },
};
</script>

<template>
  <!-- Accessibility: Append 'Games' for screen readers; visually hidden for sighted users -->
  <button
    :aria-label="`${gamePagesMap[pageNumber].title} Games`"
    :class="[
      'game-filter-btn-base',
      currentPage == pageNumber
        ? 'game-filter-btn-active'
        : 'game-filter-btn-inactive',
    ]"
  >
    <!-- Use pageNumber to fetch matching icon and title from gamePagesMap -->
    <span aria-hidden="true">
      <span class="flex justify-center m-2">
        <img :src="gamePagesMap[pageNumber].icon" class="h-[30px] w-[30px]" />
      </span>
      <span>{{ gamePagesMap[pageNumber].title }}</span>
    </span>
  </button>
</template>
