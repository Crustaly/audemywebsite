<template>
  <div class="bg-cross-lines rounded-[16px] p-5 my-4 shadow-md mx-auto">
    <div class="text-center text-3xl font-bold p-2 md:w-[300px]">
      Game Over!
    </div>
    <div class="text-center font-medium p-2 mt-2 relative">
      <span class="font-semibold text-xl">Score</span>
      <div
        class="font-semibold text-3xl bg-[#edf7fc] rounded-full w-[60%] mx-auto"
      >
        {{ score }}
      </div>
      <span class="font-semibold">out of 5</span>
      <!-- Decorative pencil icon: Bottom right corner -->
      <span aria-hidden="true">
        <img
          src="/assets/gameImages/pencil.png"
          class="w-[60px] h-auto absolute bottom-[30%] right-0"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
const totalQuestions = 5;

defineProps({
  score: {
    type: Number,
    required: true,
  },
});
</script>
