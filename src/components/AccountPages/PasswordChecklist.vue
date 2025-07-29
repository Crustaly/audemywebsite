<script setup>
/* PasswordChecklist.vue
 *
 * - Reusable password strength checklist:
 *  - Required: 8+ chars & no PII (Personally Identifiable Info.)
 *  - And at least 2 of:
 *    - Numbers
 *    - Special characters
 *    - Uppercase / lowercase letters
 *
 * - Used in Sign Up and Reset Password forms
 *
 * - Responsive layout (See `form-style.css`):
 *    - Each password criteria list item: 8-column grid
 *    - Icon: 1 col; text: 7 cols
 */

// Imports CheckmarkIcon component for code clarity and DRYer template
import CheckmarkIcon from './CheckmarkIcon.vue';

const props = defineProps({
  hasEnoughChars: {
    type: Boolean,
    default: false,
  },
  hasPersonalInfo: {
    type: Boolean,
    default: false,
  },
  hasLowercase: {
    type: Boolean,
    default: false,
  },
  hasUppercase: {
    type: Boolean,
    default: false,
  },
  hasNumber: {
    type: Boolean,
    default: false,
  },
  hasSpecialChar: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- Accessibility: Checklist (dynamic text & icons) is muted while typing; unmet criteria announced once on form submission -->
  <div class="mt-10 mb-10 w-[80%] ml-[10%] mr-[10%]" aria-hidden="true">
    <ul>
      <li class="checklist-subtitle">
        <p>Your password must:</p>
      </li>
      <li class="checklist-grid">
        <CheckmarkIcon class="checklist-icon" :isVisible="hasEnoughChars" />
        <span class="checklist-req">Be 8 to 15 characters long</span>
      </li>
      <li class="checklist-grid">
        <CheckmarkIcon class="checklist-icon" :isVisible="!hasPersonalInfo" />
        <span class="checklist-req">Not include your name or email</span>
      </li>
      <li class="mt-4 checklist-subtitle">
        <p>And have at least 2 of these:</p>
      </li>
      <li class="checklist-grid">
        <CheckmarkIcon class="checklist-icon" :isVisible="hasLowercase" />
        <span class="checklist-req">Lowercase letters</span>
      </li>
      <li class="checklist-grid">
        <CheckmarkIcon class="checklist-icon" :isVisible="hasUppercase" />
        <span class="checklist-req">Uppercase letters</span>
      </li>
      <li class="checklist-grid">
        <CheckmarkIcon class="checklist-icon" :isVisible="hasNumber" />
        <span class="checklist-req">Numbers</span>
      </li>
      <li class="checklist-grid">
        <CheckmarkIcon class="checklist-icon" :isVisible="hasSpecialChar" />
        <span class="checklist-req">Symbols (like !, @, #) </span>
      </li>
    </ul>
  </div>
</template>
