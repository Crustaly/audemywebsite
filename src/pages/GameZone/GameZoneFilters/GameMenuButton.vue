<script setup>
/*
 * GameMenuButton.vue
 *
 * - Renders a 'Games Menu' button
 * - Applies 'active' styling if 'isMenuOpen' flag is true
 */

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  // gameType: prefix for 'aria-controls' label
  // (ex: 'lang', 'math', 'science', 'life-skills', 'independence-skills')
  gameType: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    type="button"
    aria-haspopup="true"
    :aria-expanded="isMenuOpen"
    :aria-controls="gameType + '-dropdown-div'"
    :class="[
      'game-action-btn-base',
      isMenuOpen ? 'game-menu-btn-active' : 'game-menu-btn-inactive',
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
</template>
