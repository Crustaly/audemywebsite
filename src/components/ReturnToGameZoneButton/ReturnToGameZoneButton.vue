<script setup>
/* ReturnToGameZoneButton.vue
 *
 * - Re-usable, stylized UI component for DRY code
 * - Renders a simple form with 'Return to Game Zone' button
 * - Currently shared by:
 *   - "Accessibility Statement", "Reset Confirm", & "Not Found" (404) pages
 */

import { useRouter } from 'vue-router';

const router = useRouter();

const toGameZoneLandingPage = () => {
  // Route to 'Game Zone Landing Page' when button is clicked
  router.push('/game-zone-landing-page');
};
</script>

<template>
  <!-- RETURN TO GAME ZONE FORM -->
  <form @submit="toGameZoneLandingPage" method="post" class="form-wrapper">
    <div class="form-action-container flex flex-col items-center w-full">
      <button
        type="submit"
        class="page-button blue-button p-1 md:p-3 mobile:w-[80%] w-[250px] h-auto"
      >
        Return to Game Zone
      </button>
    </div>
  </form>
</template>
