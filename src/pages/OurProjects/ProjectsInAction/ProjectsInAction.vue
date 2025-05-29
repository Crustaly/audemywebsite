<script setup>
import Carousel from './Carousel.vue';
</script>

<template>
  <!--
    <div class="flex gap-24 w-full mb-[6rem] mobile:flex-col">
      CAROUSEL COMPONENT 
      <div class="relative w-1/2 mobile:hidden">
        <img
          src="/assets/images/impact/Union.png"
          class="max-w[100px]"
          alt="Union Image"
        />
        <img
          src="/assets/images/impact/Group 1135.png"
          class="absolute right-[16rem] top-[5rem] z-20"
          alt="Group Image"
        />
        <img
          src="/assets/images/impact/Group 1153.png"
          class="absolute left-40 top-8 z-20"
          alt="Group Image"
        />

        Tablet w/ Carousel 
        
          <img src="/src/assets/images/impact/Group 1182.png" class="absolute left-52 top-28 ml-10" />
          
        <div class="mobile:hidden">
          <div
            class="absolute top-[5rem] left-[5.22rem] w-[639px] h-[462px] bg-white rounded-[12px] border-4 border-[#2A3338] p-3"
          >
            <div
              class="h-full rounded-[12px] border-4 border-[#2A3338] overflow-hidden"
            >
              <Carousel />
            </div>
          </div>
        </div>
      </div>

      TEXT 
      <div class="mt-[12rem] mobile:text-center">
        <div class="mb-4">
          <h3
            class="font-poppins text-[12px] mobile:w-auto text-left tracking-[3.6px] mobile:text-center"
          >
            GALLERY
          </h3>
        </div>

        <div class="max-w-[509px] mobile:justify-center mobile:text-center">
          <h2
            class="text-left font-poppins text-[#151e22] text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-8"
          >
            Our Projects in action
          </h2>
          <p
            class="text-body text-xl font-poppins leading-8 mobile:text-center mobile:px-4"
          >
            Want to see Audemy in action? Swipe through this collection of images
            that showcase not only our achievements, but the lives we've touched
            and the impact we strive to make every day.
          </p>
        </div>
      </div>
    </div>
  -->
  <div class="flex flex-col gap-4 md:flex-row lg:gap-10">
    <div class="p-4 md:basis-1/2">
      <div
        class="bg-white rounded-xl border-4 border-[#2A3338] p-2"
      >
        <div
          class="h-full rounded-xl border-4 border-[#2A3338] overflow-hidden xl:h-96"
        >
          <Carousel />
        </div>
      </div>
           
    </div>
    <div class="flex items-center font-poppins text-center md:basis-1/2">
      <div class="flex flex-col gap-4">
        <h3 class="text-sm uppercase tracking-[3.6px]">
          Gallery
        </h3>

        <h2
          class="text-[32px] md:text-4.5xl"
        >
          Our Projects in action
        </h2>

        <p
          class="text-lg text-body leading-8 lg:text-xl"
        >
          Want to see Audemy in action? Swipe through this collection of images
          that showcase not only our achievements, but the lives we've touched
          and the impact we strive to make every day.
        </p>
      </div>
    </div>
  </div>
</template>
