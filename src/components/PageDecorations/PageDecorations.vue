<script setup>
/*
 * PageDecorations.vue:
 *
 * - Decorates page content with four images, positioned at each corner (top/bottom/left/right)
 * - This component is reusable, helping to keep templates DRY and maintainable
 *
 * Usage:
 * - Its parent container must have `relative` positioning
 * - May need to add padding to the parent container to prevent content from overlapping the images
 * - Defaults to repeated star icons, if no image path is provided
 */

import Star from '/assets/images/studio/star.png';

const props = defineProps({
  topLeftImgPath: {
    type: String,
    required: false,
  },
  topRightImgPath: {
    type: String,
    required: false,
  },
  bottomLeftImgPath: {
    type: String,
    required: false,
  },
  bottomRightImgPath: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <!-- Decorative icons -->
  <div aria-hidden="true">
    <img
      :src="topLeftImgPath ? topLeftImgPath : Star"
      class="absolute top-5 left-5 w-[50px] rotate-[-.5rad]"
    />
    <img
      :src="topRightImgPath ? topRightImgPath : Star"
      class="absolute top-10 right-10 w-[40px] rotate-[0.45rad]"
    />
    <img
      :src="bottomLeftImgPath ? bottomLeftImgPath : Star"
      class="absolute bottom-5 left-5 w-[40px] rotate-[-.5rad]"
    />
    <img
      :src="bottomRightImgPath ? bottomRightImgPath : Star"
      class="absolute bottom-5 right-2 w-[45px] rotate-[0.3rad]"
    />
  </div>
</template>
