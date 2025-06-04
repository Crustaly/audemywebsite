<script setup>
import { onMounted } from 'vue';

// This is the slider function, we use it to navigate to the next or previous one.
function goToSlide(slide, container) {
  container.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}
// We use onMounted because in setup state the DOM is not loaded and we cannot choose elements when the dom is not loaded.
onMounted(() => {
  // These are the elements
  const carousel = document.querySelectorAll('.carousel__slide');
  goToSlide(0, carousel);
  const prevButton = document.getElementById('left-chevron');
  const nextButton = document.getElementById('right-chevron');
  // This is to indicate which slider we are currently on.
  let currentSlide = 0;

  // The maximum length of the slider
  const maxLength = carousel.length;

  // This listener is for the previous button.
  prevButton.addEventListener('click', (e) => {
    if (currentSlide === 0) {
      // If we are on the first slide, user is only allowed to the next slider
      return;
    } else {
      // we use "--" to reduce our index by 1
      currentSlide--;
      goToSlide(currentSlide, carousel);
    }
  });

  nextButton.addEventListener('click', (e) => {
    if (currentSlide === maxLength - 1) {
      // When the slider hits its maximum index. We redefine the current slider variable as 0 and call the slider function.
      currentSlide = 0;
      goToSlide(currentSlide, carousel);
      return;
    } else {
      // we use "++" to add 1 to our index
      currentSlide++;
      goToSlide(currentSlide, carousel);
    }
  });
});
</script>

<template>
  <div class="relative carousel h-48 md:h-60 xl:h-96 overflow-hidden">
    <img
      src="/assets/images/impact/carousel/leftChevron.svg"
      id="left-chevron"
      class="absolute top-1/2 left-1 -translate-1/2 z-10 cursor-pointer"
      alt="Left Chevron Image"
    />

    <div
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        src="/assets/images/impact/carousel/carousel1.jpg"
        class="-z-10 w-full h-full object-cover"
        alt="Carousel Image"
      />
    </div>

    <div
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        src="/assets/images/impact/carousel/carousel2.png"
        class="-z-10 w-full h-full object-cover"
        alt="Carousel Image"
      />
    </div>

    <div
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        src="/assets/images/impact/carousel/carousel3.png"
        class="-z-10 w-full h-full object-cover"
        alt="Carousel Image"
      />
    </div>

    <div
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        src="/assets/images/impact/carousel/carousel4.png"
        class="-z-10 w-full h-full object-cover"
        alt="Carousel Image"
      />
    </div>

    <div
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        src="/assets/images/impact/carousel/carousel5.png"
        class="-z-10 w-full h-full object-cover"
        alt="Carousel Image"
      />
    </div>

    <div
      class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
    >
      <img
        src="/assets/images/impact/carousel/carousel6.jpeg"
        class="-z-10 w-full h-full object-cover"
        alt="Carousel Image"
      />
    </div>
    <img
      src="/assets/images/impact/carousel/rightChevron.svg"
      id="right-chevron"
      class="absolute top-1/2 right-1 -translate-1/2 z-10 cursor-pointer"
      alt="Right Chevron Image"
    />
  </div>
</template>
