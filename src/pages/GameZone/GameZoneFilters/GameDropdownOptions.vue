<script setup>
/*
 * GameDropdownOptions.vue
 *
 * - Renders menu dropdown options for a game category, based on a given 'gamesMap'
 */

const props = defineProps({
  // gamesMap: Array that maps each game title to its URL
  gamesMap: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="py-1 text-[15px]" role="none">
    <!-- Generate game menu links by looping over 'gamesMap' entries -->
    <a
      v-for="{ title, url } in gamesMap"
      :key="url"
      :href="url"
      class="game-menu-link"
      role="menuitem"
    >
      {{ title }}
    </a>
  </div>
</template>
