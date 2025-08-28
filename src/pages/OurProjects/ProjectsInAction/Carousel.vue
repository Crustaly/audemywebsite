<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

function goToSlide(slide, container) {
  container.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}

onMounted(() => {
  const carousel = document.querySelectorAll('.carousel__slide');
  goToSlide(0, carousel);
  const prevButton = document.getElementById('left-chevron');
  const nextButton = document.getElementById('right-chevron');

  let currentSlide = 0;
  const maxLength = carousel.length;

  prevButton.addEventListener('click', () => {
    if (currentSlide === 0) return;
    currentSlide--;
    goToSlide(currentSlide, carousel);
  });

  nextButton.addEventListener('click', () => {
    if (currentSlide === maxLength - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide, carousel);
  });
});

// Extracted shared classes for arrow buttons
const arrowButtonClasses = [
  'absolute',
  'top-1/2',
  '-translate-1/2',
  'z-10',
  'cursor-pointer',
  'w-8',
  'h-8',
  'hover:w-10',
  'hover:h-10',
  'duration-300',
];
</script>

<template>
  <div class="relative carousel mobile:h-60 h-80 xl:h-96 overflow-hidden">
    <!-- Previous / Left icon -->
    <img
      src="/assets/images/impact/carousel/leftChevron.svg"
      id="left-chevron"
      :class="[arrowButtonClasses, 'left-1']"
      aria-hidden="true"
    />

    <!-- Render slides dynamically from prop -->
    <div
      v-for="(img, index) in images"
      :key="index"
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        :src="img"
        class="-z-10 w-full h-full object-cover rounded-[16px] shadow-lg"
        aria-hidden="true"
      />
    </div>
    <!-- Next / Right icon -->
    <img
      src="/assets/images/impact/carousel/rightChevron.svg"
      id="right-chevron"
      :class="[arrowButtonClasses, 'right-1']"
      aria-hidden="true"
    />
  </div>
</template>
