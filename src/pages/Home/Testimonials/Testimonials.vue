<script setup>
import { ref, computed } from 'vue';

const testimonials = [
  {
    image: '/assets/images/testimonials/testimonial1.png',
    text: `"I appreciate Audemy.org for offering a wide variety of games, particularly those focused on nourishing life skills and independence. <p class="mt-3">The option to reward my students at the end of their lessons with 5 quick educational questions/games, fits in well into our busy schedule."</p>`,
    name: 'Stephanie Bissonette',
    role: '<i>Director of Children Services at the Vermont Association for the Blind</i> <p class="mt-3"><a href="mailto:sbissonette@vabvi.org" class="underline hover:text-primary-color transition-colors duration-300" tabindex="-1">sbissonette@vabvi.org</a></p>',
  },
  {
    image: '/assets/images/impact/arizonaStudent.png',
    text: `"Hello! My name is Denise Bean, Youth Service Librarian for the Iowa Library for the Blind and Print Disabled, and one of the greatest joys of my work is building meaningful connections with children who are blind or have low vision. <p class="mt-3">During one of our 28 virtual Summer Reading Program events, we introduced a game called Audemy, and what an unforgettable experience it was! The children lit up with excitement, laughter filled the room, and the joy was contagious."</p>`,
    name: 'Denise Bean',
    role: '<i>Youth Service Librarian from the Iowa Library for the Blind</i> <p class="mt-3"><a href="mailto:denise.bean@blind.state.ia.us" class="underline hover:text-primary-color transition-colors duration-300" tabindex="-1">denise.bean@blind.state.ia.us</a></p>',
  },
  {
    image: '/assets/images/testimonials/testimonial2.png',
    text: `"The audio gaming experience on Audemy is incredible! <p class="mt-3">My students are completely immersed in the games - the sound effects, voice acting, and interactive gameplay make it feel like a real gaming console. They can't get enough of the adventure-style games!"</p>`,
    name: 'Technology Coordinator',
    role: '<i>Texas School for the Blind and Visually Impaired</i>',
  },
  {
    image: '/assets/images/testimonials/testimonial3.png',
    text: `"Audemy's gaming platform is revolutionary for blind gamers. The audio-only design creates an immersive experience that rivals mainstream games. <p class="mt-3">Our students love competing with each other and achieving high scores!"</p>`,
    name: 'Workshop Coordinator',
    role: '<i>Massachusetts Lighthouse for the Blind</i>',
  },
  {
    image: '/assets/images/testimonials/testimonial4.png',
    text: `"Audemy's games are so much fun! I love the car racing game and the adventure quests. <p class="mt-3">The sound effects make me feel like I'm really driving or exploring. It's the coolest gaming experience I've ever had!"</p>`,
    name: 'Adam',
    role: '<i>A Student who is blind from Houston</i>',
  },

  {
    image: '/assets/images/impact/5b46078e-65e0-42c8-a658-2939c6676a21.jpeg',
    text: `"The gaming mechanics on Audemy are brilliant! The audio cues, spatial awareness features, and competitive elements create an engaging gaming experience that keeps our players coming back. <p class="mt-3">It's like having a professional gaming studio designed specifically for blind gamers."</p>`,
    name: 'Technology Specialist',
    role: '<i>Iowa Center for the Blind</i>',
  },
  {
    image: '/assets/images/impact/carousel/carousel1.jpg',
    text: `"Audemy has transformed our gaming programs! The multiplayer features and leaderboards create a social gaming experience that's rare for blind players. <p class="mt-3">Crystal has created something truly special - a gaming platform that's both accessible and genuinely fun to play."</p>`,
    name: 'Librarian',
    role: '<i>for Blind Students</i>',
  },
];

const currentIndex = ref(0);

const visibleTestimonials = computed(() => {
  const total = testimonials.length;
  return [
    testimonials[(currentIndex.value + 0) % total],
    testimonials[(currentIndex.value + 1) % total],
    testimonials[(currentIndex.value + 2) % total],
  ];
});

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
}

// Extracted shared RWD classes for testimonial arrow buttons
const arrowButtonClasses = [
  'z-10',
  '-translate-y-1/2',
  'absolute',
  'top-1/2',
  'hover:scale-125',
  'transition',
  'duration-300',
];
</script>

<template>
  <div
    :class="[
      'z-10 font-poppins my-10 py-80',
      'relative flex flex-col gap-y-12 items-center self-center',
    ]"
  >
    <!-- Background image -->
    <img
      src="/assets/images/testimonials/testimonials-bg.png"
      class="absolute top-[4rem] -z-10 h-[70rem] w-full"
      aria-hidden="true"
    />

    <!-- Section Title -->
    <div class="flex flex-col gap-y-3 mobile:px-5 text-center relative">
      <h1 class="page-header">
        What <span class="font-semibold text-primary-color">people</span> are
        saying:
      </h1>
    </div>

    <!-- Carousel Area -->
    <div class="relative w-full max-w-[92rem] px-4 mobile:px-2">
      <!-- Left arrow -->
      <button
        @click="prev"
        :class="[arrowButtonClasses, 'left-2']"
        aria-label="View previous review"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          aria-hidden="true"
          class="w-12 h-12 rotate-180"
        />
      </button>

      <!-- Testimonial Cards -->
      <div class="flex gap-6 justify-center overflow-hidden">
        <div
          v-for="(testimonial, index) in visibleTestimonials"
          :key="index"
          :class="[
            'game-resource-icon-card bg-cross-lines text-center duration-300',
            'mobile:px-4 mobile:py-6 px-6 py-8',
            'w-[320px] h-[520px]',
            'flex flex-col items-center',
          ]"
        >
          <!-- Image -->
          <img
            :src="testimonial.image"
            aria-hidden="true"
            class="w-full h-[160px] object-cover rounded-md mb-4"
          />

          <!-- Scrollable Text Content -->
          <div class="overflow-y-auto no-scrollbar max-h-[220px] mb-4 px-1">
            <p
              class="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap"
              v-html="testimonial.text"
            ></p>
          </div>
          <!-- Name -->
          <p class="text-[15px] font-semibold text-[#2A3338] mt-2">
            – {{ testimonial.name }}
          </p>
          <!-- Role -->
          <p
            class="text-[14px] text-[#2A3338] mt-2 font-poppins leading-snug"
            v-html="testimonial.role"
          ></p>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        @click="next"
        :class="[arrowButtonClasses, 'right-2']"
        aria-label="View next review"
      >
        <img
          src="/assets/images/testimonials/arrow.png"
          aria-hidden="true"
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
