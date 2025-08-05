<template>
  <button
    @click="$emit('start-click')"
    class="page-button text-nowrap bg-[#087bb4] text-white px-10 w-full"
    :disabled="isIntroPlaying"
    :class="{ 'opacity-50 cursor-not-allowed': isIntroPlaying }"
  >
    {{ isIntroPlaying ? 'Please wait...' : 'Start Questions' }}
  </button>
</template>

<script setup>
defineProps({
  isIntroPlaying: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['start-click']);
</script>
