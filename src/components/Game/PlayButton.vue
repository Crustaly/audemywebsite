<template>
  <button
    @click="$emit('play-click')"
    class="page-button text-nowrap blue-button w-[50%] animate-fade-slide-in"
  >
    Play
  </button>
</template>

<script setup>
defineEmits(['play-click']);
</script>
