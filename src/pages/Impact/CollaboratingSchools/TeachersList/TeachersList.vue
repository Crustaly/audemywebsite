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
        <div class="mx-2">
          <img
            src="/assets/images/impact/starBullet.svg"
            class="mr-2 inline-block"
            alt="Star Bullet Image"
          />
          <p
            class="inline text-center text-[16px] text-body-text-color font-poppins tablet:text-[16px] font-[400]"
            v-html="name"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
