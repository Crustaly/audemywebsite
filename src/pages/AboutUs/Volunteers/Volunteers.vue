<script setup>
import { onMounted, ref } from 'vue';
import getAllVolunteers from './Staff.js';
import VonlunteerStaff from './VonlunteerStaff/VonlunteerStaff.vue';

const staff = ref([]);
onMounted(() => {
  staff.value = getAllVolunteers();
});
</script>

<template>
  <div class="flex justify-center mb-10">
    <div class="max-w-[85%] w-full h-auto">
      <!-- Section Header -->
      <div class="w-full">
        <h3
          class="font-poppins text-small-text-color text-[12px] font-[500] mobile:w-auto text-center tracking-[3.6px]"
        >
          OUR TEAM
        </h3>
      </div>
      <div class="w-full mb-24">
        <h2
          class="font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] text-center font-[400]"
        >
          Volunteers for Good
        </h2>
      </div>
      <!-- Volunteer Staff Section -->
      <div
        class="w-full mb-10 grid grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1 gap-6 items-center justify-between"
        v-for="item in staff"
        :key="item.staffTitle"
      >
        <VonlunteerStaff :staffTitle="item.staffTitle" :staff="item.staff" />
      </div>
      <!-- Call to Action -->
      <div
        class="w-full my-20 flex flex-col justify-center items-center gap-10"
      >
        <h4
          class="text-center font-poppins text-[18px] max-w-[500px] mobile:text-[16px]"
        >
          Be part of this journey to change lives, one game at a time.
        </h4>
        <div class="flex items-center justify-center">
          <a
            href="mailto:connect.audemy@gmail.com"
            class="w-[240px] h-[60px] font-poppins font-semibold px-4 py-4 font-[16px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] mobile:w-[200px] mobile:h-[50px] mobile:px-2 mobile:text-sm"
          >
            Join the team
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
