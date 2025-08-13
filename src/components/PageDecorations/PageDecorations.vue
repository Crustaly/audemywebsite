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
  // increaseIconSize: flag used to scale small icons
  increaseIconSize: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <!-- Decorative icons -->
  <div aria-hidden="true">
    <img
      :src="topLeftImgPath ? topLeftImgPath : Star"
      :class="[
        increaseIconSize ? 'w-[60px]' : 'w-[50px]',
        'absolute top-5 left-5 rotate-[-.5rad]',
      ]"
    />
    <img
      :src="topRightImgPath ? topRightImgPath : Star"
      :class="[
        increaseIconSize ? 'w-[55px]' : 'w-[40px]',
        'absolute top-10 right-10 rotate-[0.45rad]',
      ]"
    />
    <img
      :src="bottomLeftImgPath ? bottomLeftImgPath : Star"
      :class="[
        increaseIconSize ? 'w-[55px]' : 'w-[40px]',
        'absolute bottom-5 left-5 rotate-[-.5rad]',
      ]"
    />
    <img
      :src="bottomRightImgPath ? bottomRightImgPath : Star"
      :class="[
        increaseIconSize ? 'w-[60px]' : 'w-[45px]',
        'absolute bottom-5 right-2 rotate-[0.3rad]',
      ]"
    />
  </div>
</template>
