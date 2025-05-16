<template>
  <div>
    <div class="text-center text-3xl font-bold pt-2 pb-1">Game Over</div>
    <div class="text-center text-xl font-medium pt-2 pb-1">
      Score: {{ score }} / 5
    </div>
  </div>
</template>

<script setup>
defineProps({
  score: {
    type: Number,
    required: true,
  },
});
</script>
