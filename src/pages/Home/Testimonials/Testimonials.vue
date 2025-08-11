<script setup>
import { ref, computed } from 'vue';

const testimonials = [
  {
    image: '/assets/images/testimonials/testimonial1.png',
    text: `"I appreciate Audemy.org for offering a wide variety of games, particularly those focused on nourishing life skills and independence. The option to reward my students at the end of their lessons with 5 quick educational questions/games, fits in well into our busy schedule."`,
    name: 'Stephanie Bissonette',
    role: 'Director of Children Services at the Vermont Association for the Blind (sbissonette@vabvi.org)',
  }, 
  {
    image: '/assets/images/impact/arizonaStudent.png',
    text: `"Hello! My name is Denise Bean, Youth Service Librarian for the Iowa Library for the Blind and Print Disabled, and one of the greatest joys of my work is building meaningful connections with children who are blind or have low vision. During one of our 28 virtual Summer Reading Program events, we introduced a game called Audemy, and what an unforgettable experience it was! The children lit up with excitement, laughter filled the room, and the joy was contagious."`,
    name: 'Denise Bean',
    role: 'Youth service librarian from the Iowa Library for the Blind (Denise.Bean@blind.state.ia.us)',
  },
  {
    image: '/assets/images/testimonials/testimonial2.png',
    text: `"The audio gaming experience on Audemy is incredible! My students are completely immersed in the games - the sound effects, voice acting, and interactive gameplay make it feel like a real gaming console. They can't get enough of the adventure-style games!"`,
    name: 'Technology Coordinator',
    role: 'Texas School for the Blind and Visually Impaired',
  },
  {
    image: '/assets/images/testimonials/testimonial3.png',
    text: `"Audemy's gaming platform is revolutionary for blind gamers. The audio-only design creates an immersive experience that rivals mainstream games. Our students love competing with each other and achieving high scores!"`,
    name: 'Workshop Coordinator',
    role: 'Massachusetts Lighthouse for the Blind',
  },
  {
    image: '/assets/images/testimonials/testimonial4.png',
    text: `"Audemy's games are so much fun! I love the car racing game and the adventure quests. The sound effects make me feel like I'm really driving or exploring. It's the coolest gaming experience I've ever had!"`,
    name: 'Adam',
    role: 'A Student who is blind from Houston',
  },
 
  {
    image: '/assets/images/impact/5b46078e-65e0-42c8-a658-2939c6676a21.jpeg',
    text: `"The gaming mechanics on Audemy are brilliant! The audio cues, spatial awareness features, and competitive elements create an engaging gaming experience that keeps our players coming back. It's like having a professional gaming studio designed specifically for blind gamers."`,
    name: 'Technology Specialist',
    role: 'Iowa Center for the Blind',
  },
  {
    image: '/assets/images/impact/carousel/carousel1.jpg',
    text: `"Audemy has transformed our gaming programs! The multiplayer features and leaderboards create a social gaming experience that's rare for blind players. Crystal has created something truly special - a gaming platform that's both accessible and genuinely fun to play."`,
    name: 'Librarian',
    role: 'for Blind Students',
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
    <div
      class="font-poppins flex flex-col gap-y-3 mobile:px-5 text-center relative"
    >
      <h1 class="text-4.5xl text-title mobile:text-[24px]">
        What people are saying:
      </h1>
     
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
            <p
              class="text-sm text-gray-700 font-poppins leading-relaxed whitespace-pre-wrap"
            >
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
