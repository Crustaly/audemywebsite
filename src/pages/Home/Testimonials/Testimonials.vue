<script setup>
import { ref, computed } from 'vue'

const testimonials = [
  {
    image: '/assets/images/testimonials/testimonial1.png',
    text: `“I appreciate Audemy.org for offering a wide variety of academic games, particularly those focused on nourishing spelling, life skills and independence. The option to reward my students at the end of their lessons with 5 quick educational questions/games, fits in well into our busy schedule.”`,
    name: 'Stephanie Bissonette',
    role: 'Director of Children Services at the Vermont Association for the Blind (sbissonette@vabvi.org)',
  },
  {
    image: '/assets/images/testimonials/testimonial2.png',
    text: `“Audemy has been an invaluable tool within my classroom. My students who played the games were very into it, and the games cover tons of educational topics like math and language!”`,
    name: 'Teacher',
    role: 'Texas School for the Blind and Visually Impaired',
  },
  {
    image: '/assets/images/testimonials/testimonial3.png',
    text: `“Audemy’s games provide accessible and engaging educational content for our blind students. We encourage parents and other teachers to check it out as well.”`,
    name: 'Staff',
    role: 'Kansas School for the Blind',
  },
  {
    image: '/assets/images/testimonials/testimonial4.png',
    text: `“Audemy’s audio games are really cool! My favorite game was car counting because I love cars and math.”`,
    name: 'Adam',
    role: 'A Student who is blind from Houston',
  },
]

const currentIndex = ref(0)

const visibleTestimonials = computed(() => {
  const total = testimonials.length
  return [
    testimonials[(currentIndex.value + 0) % total],
    testimonials[(currentIndex.value + 1) % total],
    testimonials[(currentIndex.value + 2) % total],
  ]
})

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<template>
  <div
    class="flex flex-col items-center gap-y-12 self-center pt-80 mobile:pt-64 pb-[6rem] mobile:mt-5 mobile:pb-16 px-20 mobile:px-0 relative z-10"
  >
    <!-- Background image -->
    <img
      src="/assets/images/testimonials/testimonials-bg.png"
      class="absolute top-[4rem] -z-10 h-[70rem] fill"
      alt="Background image"
    />

    <!-- Section Title -->
    <div class="font-poppins flex flex-col gap-y-3 mobile:px-5 text-center relative">
      <h1 class="text-4.5xl text-title mobile:text-[24px]">
        What people are saying
      </h1>
      <p class="text-body text-xl mobile:text-[16px]">
        Our learners are our top priority, and we strive to make their
        experience unique and enriching.
      </p>
    </div>

    <!-- Carousel Area -->
    <div class="relative w-full max-w-[92rem] px-4 mobile:px-2">
      <!-- Left arrow -->
      <button
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:scale-125 transition"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          alt="Previous"
          class="w-12 h-12 rotate-180"
        />
      </button>

      <!-- Testimonial Cards -->
      <div class="flex gap-6 justify-center overflow-hidden">
        <div
          v-for="(testimonial, index) in visibleTestimonials"
          :key="index"
          class="bg-white border-2 border-[#2A3338] shadow-[3px_4px_0px_#0C0D0D] rounded-lg flex flex-col items-center text-center px-6 py-8 mobile:px-4 mobile:py-6 w-[320px] h-[520px]"
        >
          <!-- Image -->
          <img
            :src="testimonial.image"
            alt="testimonial image"
            class="w-full h-[160px] object-cover rounded-md mb-4"
          />

          <!-- Scrollable Text Content -->
          <div class="overflow-y-auto no-scrollbar max-h-[220px] mb-4 px-1">
            <p class="text-sm text-gray-700 font-poppins leading-relaxed whitespace-pre-wrap">
              {{ testimonial.text }}
            </p>
          </div>

          <!-- Name -->
          <p class="text-[15px] font-semibold font-poppins text-[#2A3338] mt-2">
            – {{ testimonial.name }}
          </p>

          <!-- Role -->
          <p class="text-sm text-[#2A3338] mt-2 font-poppins leading-snug">
            {{ testimonial.role }}
          </p>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:scale-125 transition"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          alt="Next"
          class="w-12 h-12"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.fill {
  width: -webkit-fill-available;
}
</style>
