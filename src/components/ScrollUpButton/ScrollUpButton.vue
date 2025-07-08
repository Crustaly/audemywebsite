<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

// ScrollUpButton class strings extracted for readability and maintainability
const scrollUpButtonClasses = [
  'w-[56px]',
  'h-[56px]',
  'border-[2px]',
  'border-[#0C0D0D]',
  'rounded-[8px]',
  'bg-white',
  'hover:bg-gray-100',
  'z-50',
  'flex',
  'justify-center',
  'items-center',
  'fixed',
  'desktop:bottom-20',
  'desktop:right-20',
  'tablet:right-10',
  'bottom-10',
  'mobile:right-3',
  'sm:right-5',
  'cursor-pointer',
  'duration-300',
  'ease-in-out',
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 800;
};

const showButton = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="showButton">
    <button
      :class="scrollUpButtonClasses"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <img src="/assets/images/about-us/arrow-up.svg" alt="Arrow up" />
    </button>
  </div>
</template>
