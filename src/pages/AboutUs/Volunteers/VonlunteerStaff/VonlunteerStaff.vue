<script setup>
// import { defineProps } from "vue";
const props = defineProps({
  staffTitle: String,
  staff: Array,
});
</script>

<template>
  <div
    class="flex justify-between items-center mobile:flex-col tablet:flex-col"
  >
    <div
      class="w-3/12 tablet:w-full mobile:w-full mb-4 tablet:mb-4 items-center"
    >
      <h3
        class="font-poppins text-2xl tablet:text-[32px] mobile:text-[24px] text-start tablet:text-center mobile:text-center font-[400]"
      >
        {{ staffTitle }}
      </h3>
    </div>
    <div
      class="w-9/12 tablet:w-full mobile:w-full flex justify-start flex-wrap tablet:flex-col mobile:flex-col"
    >
      <div
        class="w-4/12 tablet:w-full mobile:w-full mb-8 flex justify-center"
        v-for="volunteer in staff"
        :key="volunteer.name"
      >
        <div
          class="w-[240px] h-[300px] flex flex-col justify-between items-center"
        >
          <img
            :src="volunteer.image"
            :alt="volunteer.name"
            class="w-[160px] h-[160px]"
          />
          <div class="gap-2 text-center">
            <h3 class="font-poppins text-[20px] m-0 w-full">
              <b>{{ volunteer.name }}</b>
            </h3>
            <h4 class="font-poppins text-[18px] w-full mb-3">
              {{ volunteer.role }}
            </h4>
            
            <!-- Social Media Icons -->
            <div class="flex justify-center gap-3 mt-2">
              <!-- LinkedIn Icon (shown for everyone) -->
              <a
                v-if="volunteer.linkedin"
                :href="volunteer.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/assets/images/about-us/linkedin.png"
                  alt="LinkedIn"
                  class="w-6 h-6"
                />
              </a>
              
              <!-- GitHub Icon (shown only for devs) -->
              <a
                v-if="volunteer.github"
                :href="volunteer.github"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/assets/images/about-us/github.png"
                  alt="GitHub"
                  class="w-6 h-6"
                />
              </a>

              <!-- email Icon -->
              <a
                v-if="volunteer.email"
                :href="`mailto:${volunteer.email}`"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/assets/images/about-us/email.png"
                  alt="Email"
                  class="w-6 h-6"
                />
              </a>

              <!-- website Icon -->
              <a
                v-if="volunteer.website"
                :href="volunteer.website"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
              >
                <img
                  src="/assets/images/about-us/domain.png"
                  alt="Website"
                  class="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>