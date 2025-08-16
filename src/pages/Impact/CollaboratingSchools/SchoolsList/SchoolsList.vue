<script setup>
const props = defineProps({
  smallScreen: Boolean,
  link: String,
  name: String,
});
</script>

<template>
  <div v-if="!smallScreen" class="mx-1 flex flex-row items-center h-auto">
    <div class="">
      <div class="flex flex-col justify-evenly items-center">
        <!-- TEXT -->
        <!-- Accessibility: Hide decorative icon -->
        <div class="mx-2">
          <img
            src="/assets/images/impact/starBullet.svg"
            class="mr-2 inline-block"
            aria-hidden="true"
          />
          <a
            class="text-center text-[16px] text-body-text-color font-poppins tablet:text-[16px] font-[400]"
            target="_blank"
            v-html="name"
            :href="link"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
