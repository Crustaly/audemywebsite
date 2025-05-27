<script setup>
import Students from '/assets/images/impact/students 1.svg';
import Problems from '/assets/images/impact/problems 1.svg';
import Globe from '/assets/images/impact/globe 1.svg';
</script>

<template>
  <div
    class="flex items-center justify-center mobile:flex-col-reverse mobile:gap-y-10"
  >
    <div
      class="w-6/12 mobile:w-full flex flex-col justify-start gap-y-8 mobile:gap-y-3 mobile:items-center mobile:text-center mobile:mb-8"
    >
      <h1
        class="font-poppins text-3xl max-w-[90%] leading-normal text-title mobile:text-[22px] mobile:max-w-full"
      >
        Did you know that over 70% of blind students are at least a grade level
        behind in school due to a lack of resources?
      </h1>

      <p
        class="font-poppins text-body text-xl leading-8 text-wrap max-w-[65%] tablet:max-w-[85%] mobile:text-[16px] mobile:text-center mobile:max-w-full"
      >
        We are bridging the educational gap for visually impaired learners with
        interactive audio learning.
      </p>
      <a
        href="/impact"
        class="font-poppins mobile:w-full px-12 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] font-semibold self-start duration-300"
      >
        Explore our impact further
      </a>
    </div>
    <div
      class="w-6/12 mobile:w-full flex items-center mobile:justify-center mobile:gap-2 gap-x-7 ml-auto mobile:mb-20"
    >
      <div
        class="bg-card-background mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] pb-3 px-3"
      >
        <img :src="Students" alt="Student's Image" class="-translate-y-10" />
        <div class="flex flex-col items-center text-body">
          <h1
            class="font-poppins font-medium text-2xl text-wrap mobile:text-[24px]"
          >
            5,000+
          </h1>
          <p class="font-poppins text-base text-center mobile:text-[12px]">
            blind and visually impaired <br />
            students impacted
          </p>
        </div>
      </div>

      <div
        class="bg-card-background mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] translate-y-1/4 pb-3 px-3"
      >
        <img :src="Problems" alt="Problem's Image" class="-translate-y-10" />
        <div class="flex flex-col items-center text-body">
          <h1
            class="font-poppins font-medium text-2xl text-wrap mobile:text-[24px]"
          >
            100,000+
          </h1>
          <p class="font-poppins text-base text-center mobile:text-[12px]">
            educational problems <br />
            solved
          </p>
        </div>
      </div>

      <div
        class="bg-card-background mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] pb-3 px-3"
      >
        <img :src="Globe" alt="Globo's Image" class="-translate-y-10" />
        <div class="flex flex-col items-center text-body">
          <h1
            class="font-poppins font-medium text-2xl text-wrap mobile:text-[24px]"
          >
            19
          </h1>
          <p class="font-poppins text-base text-center mobile:text-[12px]">
            partnering <br />
            schools
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
