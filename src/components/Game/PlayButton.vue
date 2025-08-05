<template>
  <button
    @click="$emit('play-click')"
    class="page-button text-nowrap bg-[#087bb4] text-white w-[50%]"
  >
    Play
  </button>
</template>

<script setup>
defineEmits(['play-click']);
</script>
