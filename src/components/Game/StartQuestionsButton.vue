<template>
  <button
    @click="$emit('start-click')"
    class="page-button text-nowrap bg-[#087BB4] text-white px-10 w-full"
    :disabled="isIntroPlaying"
    :class="[
      isIntroPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0C587D]',
    ]"
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
