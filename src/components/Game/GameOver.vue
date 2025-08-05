<template>
  <div class="bg-cross-lines rounded-[16px] p-5 my-4 shadow-md mx-auto">
    <div class="text-center text-3xl font-bold p-2 md:w-[300px]">
      Game Over!
    </div>
    <!-- Display decorative stars on red banner -->
    <div
      class="sm:w-[300px] bg-[#ff4747] rounded-full p-3 px-5 sm:p-2 flex gap-5 justify-center shadow-lg"
      aria-hidden="true"
    >
      <!-- Default: 5 gray stars; filled yellow based on final score -->
      <div v-for="count in totalQuestions">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="bi bi-star-fill"
          :class="
            score > 0 && count <= score ? 'fill-[#f8d058]' : 'fill-gray-200'
          "
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </div>
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
