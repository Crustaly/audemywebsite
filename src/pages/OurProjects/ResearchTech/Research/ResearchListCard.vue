<script setup>
const props = defineProps({
  image: String,
  title: String,
  subtitle: String,
  url: String,
});
const path = '/assets/images/our-projects/';
</script>

<template>
  <div class="w-full mx-auto flex flex-row justify-center h-auto">
    <div class="w-full max-w-[360px] px-4">
      <div
        class="flex flex-col justify-evenly h-auto rounded-[8px] mobile:px-4 mobile:justify-center mobile:items-center"
      >
        <!-- IMAGE -->
        <!-- Accessibility: Remove decorative thumbnail & repeated links from SR output -->
        <div class="w-full">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
            tabindex="-1"
            aria-hidden="true"
          >
            <img
              :src="path + image"
              class="w-[250px] h-[200px] mx-auto object-cover rounded-[16px] border-[1px] border-[#E5E5E5] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              aria-hidden="true"
            />
          </a>
        </div>

        <!-- TEXT -->
        <div class="mt-8 mobile:mt-4 w-full text-center font-poppins">
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <h2
              class="page-text leading-snug hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              <p class="font-semibold">{{ title }}</p>
              <p class="text-[18px] m-3">{{ subtitle }}</p>
            </h2>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
