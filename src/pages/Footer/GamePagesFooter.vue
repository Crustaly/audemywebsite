<!-- GamePagesFooter.vue -->
<template>
  <footer
    class="absolute bottom-1/2 right-[-113px] z-50 rotate-[-90deg] flex items-center justify-between ml-auto bg-cross-lines md-shadow"
  >
    <!-- Something Not Working? Button -->
    <div class="whitespace-nowrap">
      <button
        @click="handleSthNotWorkingButtonClick"
        class="text-[16px] text-black font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
      >
        <img
          src="/assets/gameImages/buttons/info.png"
          aria-hidden="true"
          class="w-6 h-6"
        />
        <span>Something Not Working?</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  handleSthNotWorkingButtonClick: Function,
  currentAudios: Array,
});
</script>
