<template>
  <button
    @click="$emit('start-click')"
    class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b] mb-6"
    :disabled="isIntroPlaying"
    :class="{ 'opacity-50 cursor-not-allowed': isIntroPlaying }"
  >
    {{ isIntroPlaying ? 'Please wait...' : 'Start Questions' }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  isIntroPlaying: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['start-click']);
</script>
