<script setup>
/*
 * CheckmarkIcon.vue
 *
 * - Decorative icon used in the password strength checklist
 * - Improves readability and keeps <PasswordChecklist /> DRY by reusing it (6 instances)
 * - Used in Sign Up and Reset Password forms
 */

// isVisible: true = show icon; false = hide (transparent)
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="#087BB4"
      class="bi bi-check inline"
      :class="isVisible ? 'fill-[#087BB4]' : 'fill-transparent'"
      viewBox="0 0 16 16"
    >
      <path
        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
      />
    </svg>
  </span>
</template>
