<script setup>
import Students from '/assets/images/impact/students 1.svg';
import Problems from '/assets/images/impact/problems 1.svg';
import Globe from '/assets/images/impact/globe 1.svg';

const impactImages = [
  '/assets/images/impact/IMG.png',
  '/assets/images/impact/IMG_1661.jpeg',
  '/assets/images/impact/arizonaStudent.png',
  '/assets/images/impact/5b46078e-65e0-42c8-a658-2939c6676a21.jpeg',
  '/assets/images/impact/IMG_0779.jpeg',
  '/assets/images/impact/spellsafariuser.png',
  '/assets/images/impact/IMG2.png',
  '/assets/images/impact/visuallyImpairedArizonaStudent.png',
  '/assets/images/impact/IMG_0489.jpeg',
  '/assets/images/impact/image_720.png',
  '/assets/images/impact/Screenshot 2025-07-24 155925.png',
  '/assets/images/impact/image_721.png',
];
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-20">
    <h3
      class="font-poppins text-[12px] font-[500] tracking-[3.6px] mb-4 text-[#6E777C] text-center"
    >
      OUR REACH
    </h3>
    <div class="w-[450px] max-w-full px-4">
      <h2
        class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] font-[400]"
      >
        Transforming lives,
        <em style="color: #fe892a"> one child at a time </em>
      </h2>
    </div>
  </div>

  <div
    class="relative w-full flex flex-col items-center px-4 md:px-12 lg:px-24 py-12 pb-24"
  >
    <!-- Decorative icons -->
    <img
      src="/assets/images/impact/Union.png"
      class="absolute max-w-[100px] -z-10 -top-6 -left-8 md:-left-14 md:-top-14 xl:-top-28"
      alt="Union"
    />
    <img
      src="/assets/images/impact/Group 1135.png"
      class="absolute right-28 top-8 h-8 md:h-16 md:left-56 xl:left-72 z-20"
      alt="Star"
    />
    <img
      src="/assets/images/impact/Group 1153.png"
      class="absolute left-20 -top-5 h-8 md:h-16 md:left-24 md:-top-10 xl:-top-14 z-20"
      alt="Chat"
    />

    <!-- ✅ Uniform Image Grid with Slight Tilt -->
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
    >
      <div
        v-for="(img, index) in impactImages"
        :key="index"
        :class="[
          'rounded-xl overflow-hidden shadow-md w-full h-[250px] transition-transform duration-300 ease-in-out hover:scale-105',
          index % 6 === 0
            ? 'rotate-[-1.5deg]'
            : index % 6 === 1
              ? 'rotate-[1deg]'
              : index % 6 === 2
                ? 'rotate-[1.5deg]'
                : index % 6 === 3
                  ? 'rotate-[-2deg]'
                  : index % 6 === 4
                    ? 'rotate-[0.5deg]'
                    : '',
        ]"
      >
        <img :src="img" alt="Impact" class="w-full h-full object-cover" />
      </div>
    </div>

   
   
  </div>
</template>
