<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentSlide = ref(0);
const carousel = ref(null);
const maxLength = ref(0);

function goToSlide(slide, container) {
  container.value.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide.value)}%)`;
  });
}

const goToPrevSlide = () => {
  if (currentSlide.value === 0) return;
  currentSlide.value--;
  goToSlide(currentSlide, carousel);
};

const goToNextSlide = () => {
  if (currentSlide.value === maxLength.value - 1) {
    currentSlide.value = 0;
  } else {
    currentSlide.value++;
  }
  goToSlide(currentSlide, carousel);
};

onMounted(() => {
  // Define carousel object & max length
  carousel.value = document.querySelectorAll('.carousel__slide');
  maxLength.value = carousel.value.length;

  // Reset carousel to first slide
  goToSlide(0, carousel);
  currentSlide.value = 0;
});

// Extracted shared RWD classes for arrow buttons
const arrowButtonClasses = [
  'absolute',
  'top-1/2',
  'z-10',
  'w-10',
  'h-10',
  '2xl:w-14',
  '2xl:h-14',
];

// Extracted shared RWD classes for arrow icons
const arrowIconClasses = [
  'cursor-pointer',
  'w-10',
  'h-10',
  '2xl:w-14',
  '2xl:h-14',
  'transition',
  'hover:scale-125',
  'duration-300',
];
</script>

<template>
  <div class="relative h-full w-full">
    <!-- Previous / Left icon -->
    <button
      @click="goToPrevSlide"
      aria-label="See previous image"
      :class="[arrowButtonClasses, '-left-12 md:-left-16']"
    >
      <img
        src="/assets/images/testimonials/arrow.png"
        :class="[arrowIconClasses, 'rotate-180']"
        aria-hidden="true"
      />
    </button>
    <div
      class="relative carousel mobile:h-60 h-80 xl:h-96 overflow-hidden"
      id="projects-carousel"
    >
      <!-- Render slides dynamically from prop -->
      <!-- SR Accessibility: Conditionally set aria-hidden & output alt text -->
      <div
        v-for="(img, index) in images"
        :key="index"
        class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        :aria-hidden="index == !currentSlide"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          class="-z-10 w-full h-full object-cover rounded-[16px] shadow-lg"
        />
      </div>
    </div>
    <!-- Next / Right icon -->
    <button
      @click="goToNextSlide"
      aria-label="See next image"
      :class="[arrowButtonClasses, '-right-12 md:-right-16']"
    >
      <img
        src="/assets/images/testimonials/arrow.png"
        :class="[arrowIconClasses]"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
