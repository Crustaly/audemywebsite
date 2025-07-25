<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const testimonials = [
  {
    image: '/assets/images/testimonials/testimonial1.png',
    text: `“I appreciate Audemy.org for offering a wide variety of academic games, particularly those focused on nourishing spelling, life skills and independence...”`,
    author: 'Stephanie Bissonette',
    role: 'Director of Children Services at the Vermont Association for the Blind'
  },
  {
    image: '/assets/images/testimonials/testimonial2.png',
    text: `“Audemy has been an invaluable tool within my classroom. My students who played the games were very into it...”`,
    author: 'Teacher from the Texas School for the Blind and Visually Impaired',
    role: ''
  },
  {
    image: '/assets/images/testimonials/testimonial3.png',
    text: `“Audemy’s games provide accessible and engaging educational content for our blind students...”`,
    author: 'Staff from Kansas School for the Blind',
    role: ''
  },
  {
    image: '/assets/images/testimonials/testimonial4.png',
    text: `“Audemy’s audio games are really cool! My favorite game was car counting because I love cars and math.”`,
    author: 'Adam',
    role: 'A Blind Student from Houston'
  }
]

function prev() {
  currentIndex.value =
    currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

function next() {
  currentIndex.value =
    currentIndex.value === testimonials.length - 1 ? 0 : currentIndex.value + 1
}
</script>

<template>
  <section class="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

    <div
      class="relative z-10 flex flex-col items-center gap-y-12 px-6 md:px-20 py-16 max-w-7xl w-full"
    >
      <!-- Heading -->
      <div class="font-poppins text-center">
        <h1 class="text-4.5xl text-title mobile:text-[24px]">What people are saying</h1>
        <p class="text-body text-xl mobile:text-[16px] mt-2">
          Our learners are our top priority, and we strive to make their experience unique and enriching.
        </p>
      </div>

      <!-- Testimonial Card -->
      <div
        class="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl"
      >
        <div class="w-full md:w-1/2 h-64 md:h-auto">
          <img
            :src="testimonials[currentIndex].image"
            alt="testimonial image"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <p class="text-xl italic mb-4 font-poppins">
            {{ testimonials[currentIndex].text }}
          </p>
          <p class="font-semi-bold mt-2 font-poppins text-body">— {{ testimonials[currentIndex].author }}</p>
          <p class="text-sm mt-4 font-poppins text-body" v-if="testimonials[currentIndex].role">
            {{ testimonials[currentIndex].role }}
          </p>
        </div>
      </div>

      <!-- Arrows -->
      <div class="flex gap-6 mt-4">
        <button
          @click="prev"
          class="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100"
        >
          ←
        </button>
        <button
          @click="next"
          class="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100"
        >
          →
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pulse {
  animation: pulse 1.1s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.text-title {
  color: #0c0d0d;
}
.text-body {
  color: #5a5a5a;
}
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
