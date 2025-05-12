<template>
  <button
    @click="$emit('play-click')"
    class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
  >
    Play
  </button>
</template>

<script setup>
defineEmits(['play-click']);
</script>
