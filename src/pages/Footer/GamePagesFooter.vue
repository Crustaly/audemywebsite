<!-- GamePagesFooter.vue -->
<template>
  <header class="flex items-center justify-between px-8 py-4 bg-transparent">
    <!-- Something Not Working? Button -->
    <div class="fixed bottom-10 left-10 z-50">
      <button
        @click="handleSthNotWorkingButtonClick"
        class="text-black font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
      >
        <img
          src="/public/assets/gameImages/buttons/info.png"
          alt="Icon"
          class="w-6 h-6"
        />
        <span>Something Not Working?</span>
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  handleSthNotWorkingButtonClick: Function,
  currentAudios: Array,
});
</script>
