<script setup>
const props = defineProps({
  smallScreen: Boolean,
  school: Object,
});
</script>

<template>
  <div v-if="!smallScreen" class="mx-1 flex flex-col mb-4">
    <!-- School Name and Link -->
    <div class="flex flex-row items-center mb-2">
      <img
        src="/assets/images/impact/school.png"
        class="mr-2 w-4 h-4"
        alt="School Icon"
      />
      <a
        class="text-[16px] text-body-text-color font-poppins tablet:text-[16px] font-[400]"
        target="_blank"
        :href="school.link"
      >
        {{ school.name }}
      </a>
    </div>

    <!-- Educators List -->
    <div v-if="school.educators && school.educators.length > 0" class="ml-6">
      <div
        v-for="(educator, index) in school.educators"
        :key="index"
        class="mb-2"
      >
        <!-- Educator Name -->
        <div class="flex flex-row items-center mb-1">
          <img
            src="/assets/images/impact/arrow.png"
            class="mr-2 w-3 h-3"
            alt="Arrow Icon"
          />
          <span
            class="text-[14px] text-body-text-color font-poppins tablet:text-[16px] font-[400]"
          >
            {{ educator.name }}
          </span>
        </div>

        <!-- Educator Email -->
        <div class="flex flex-row items-center ml-5">
          <span
            class="text-[14px] text-body-text-color font-poppins tablet:text-[16px] font-[400]"
          >
            Email:
            <a
              :href="`mailto:${educator.email}`"
              class="hover:text-blue-800 underline"
            >
              {{ educator.email }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
