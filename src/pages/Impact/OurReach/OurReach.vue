<script setup>
import Students from '/assets/images/impact/students 1.svg';
import Problems from '/assets/images/impact/problems 1.svg';
import Globe from '/assets/images/impact/globe 1.svg';
import Carousel from '../../OurProjects/ProjectsInAction/Carousel.vue';

const impactImages = [
  '/assets/images/impact/IMG.png',
  '/assets/images/impact/IMG_1661.jpeg',
  '/assets/images/impact/IMG_0779.jpeg',
  '/assets/images/impact/IMG2.png',
  '/assets/images/impact/IMG_0489.jpeg',
  '/assets/images/impact/image_720.png',
];
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <h3
        class="font-poppins text-small-text-color text-[12px] font-[500] mobile:w-auto text-center tracking-[3.6px] mb-4 text-[#6E777C]"
      >
        OUR REACH
      </h3>
    </div>

    <div class="w-[450px]">
      <h2
        class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]"
      >
        Transforming lives, <em style="color:#fe892a;"> one child at a time </em> 
      </h2>
    </div>
  </div>
  <div class="relative w-full flex flex-col items-center px-4 md:px-12 lg:px-24 py-12">
    <!-- Decorative icons -->
    <img
      src="/assets/images/impact/Union.png"
      class="absolute max-w-[100px] -z-10 -top-6 -left-8 md:-left-14 md:-top-14 xl:-top-28"
      alt="Union Image"
    />
    <img
      src="/assets/images/impact/Group 1135.png"
      class="absolute right-28 top-8 h-8 md:h-16 md:left-56 xl:left-72 z-20"
      alt="Star Icon"
    />
    <img
      src="/assets/images/impact/Group 1153.png"
      class="absolute left-20 -top-5 h-8 md:h-16 md:left-24 md:-top-10 xl:-top-14 z-20"
      alt="Chat Icon"
    />

    <!-- Main row: carousel right, stat cards left -->
    <div class="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 mt-10">
      
      <!-- Carousel on the right -->
      <div class="w-full md:w-1/2">
        <div class="bg-white rounded-xl border-4 border-[#2A3338] p-2">
          <div class="h-full rounded-xl border-4 border-[#2A3338] overflow-hidden xl:h-[26rem]">
            <Carousel :images="impactImages" />
          </div>
        </div>
      </div>

      <!-- Stat Cards on the left -->
      <div
        class="w-6/12 mobile:w-full flex items-center justify-between mobile:justify-center mobile:flex-wrap gap-x-7 gap-y-6 ml-auto mobile:mb-20"
      >
        <!-- Card 1 -->
        <div
          class="bg-card-background w-[280px] mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] pb-3 px-3"
        >
          <img :src="Students" alt="Student's Image" class="-translate-y-10" />
          <div class="flex flex-col items-center text-body">
            <h1
              class="font-serif font-semi-bold text-7xl mobile:text-4xl text-[#d96f1f]"
            >
              1 in 5
            </h1>
            <p class="font-poppins text-base text-center mobile:text-[12px]">
              blind students<br />
              learning through play
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-card-background w-[280px] mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] translate-y-1/4 pb-3 px-3"
        >
          <img :src="Problems" alt="Problem's Image" class="-translate-y-10" />
          <div class="flex flex-col items-center text-body">
            <h1
              class="font-serif font-bold text-7xl text-wrap mobile:text-4xl"
              style="color: #077bb3"
            >
              36
            </h1>
            <p class="font-poppins text-base text-center mobile:text-[12px]">
              partnering <br />
              schools
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-card-background w-[280px] mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] pb-3 px-3"
        >
          <img :src="Globe" alt="Globe's Image" class="-translate-y-10" />
          <div class="flex flex-col items-center text-body">
            <h1
              class="font-serif font-bold text-7xl text-wrap mobile:text-4xl"
              style="color: #d96f1f"
            >
              66
            </h1>
            <p class="font-poppins text-base text-center mobile:text-[12px]">
              countries <br />
              and counting...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
