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

// Map page numbers to game category names for button labels
const gamePagesMap = {
  1: 'Language',
  2: 'Math',
  3: 'Science',
  4: 'Life Skills',
  5: 'Blind-Specific Skills',
  6: 'My Progress', // Future page in GameZone
};
</script>

<template>
  <!-- 
    TODO (Refactor): 
    - Add click handler (@click="handlePageSwitch(pageNumber)") 
    - and move related logic and state management into this component 
  -->
  <button
    :class="[
      'game-filter-btn-base',
      currentPage == pageNumber
        ? 'game-filter-btn-active'
        : 'game-filter-btn-inactive',
    ]"
  >
    <span>
      {{ gamePagesMap[pageNumber] }}
      <span v-show="pageNumber !== 6"> Games</span>
    </span>
  </button>
</template>
