<script setup>
import { onMounted, ref } from 'vue';
import getAllVolunteers from './Staff.js';
import VolunteerStaff from './VolunteerStaff/VolunteerStaff.vue';

const staff = ref([]);
onMounted(() => {
  staff.value = getAllVolunteers();
});
</script>

<template>
  <div class="font-poppins flex justify-center mb-10">
    <div class="w-full p-5 h-auto">
      <!-- Section Header -->
      <div class="w-full">
        <h3 class="page-header-accent">OUR TEAM</h3>
      </div>
      <div class="w-full mb-10">
        <h2 class="page-header">Volunteers for Good</h2>
      </div>
      <!-- Volunteer Staff Section -->
      <div
        class="p-5 w-full my-10 flex flex-col gap-10 items-center justify-between"
        v-for="item in staff"
        :key="item.staffTitle"
      >
        <VolunteerStaff :staffTitle="item.staffTitle" :staff="item.staff" />
      </div>
      <!-- Call to Action -->
      <div
        class="w-full my-36 flex flex-col justify-center items-center gap-10"
      >
        <h4 class="text-center page-text">
          Be part of this journey to change lives,
          <span class="font-semibold text-primary-color"
            >one game at a time.</span
          >
        </h4>
        <div class="flex items-center justify-center mx-auto">
          <a
            href="mailto:connect@audemy.org"
            class="page-button blue-button mobile:h-auto md:w-[240px] mobile:p-5 p-10 md:p-3 flex flex-col text-center justify-center items-center"
          >
            Join the team
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
