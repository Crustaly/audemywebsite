<template>
  <div
    class="min-h-screen font-poppins"
    :style="{ 'background-color': backgroundColor }"
  >
    <!-- Header -->
    <div class="w-full">
      <GamePagesHeader />
    </div>

    <!-- Decorative Elements -->
    <GameDecorations
      :isTablet="isTablet"
      :isMobile="isMobile"
      :isDesktop="isDesktop"
    />

    <!-- Main Content -->
    <GameMainContent
      :isMobile="isMobile"
      :title="title"
      :subtitle="subtitle"
      :iconPath="iconPath"
      @goBack="$emit('goBack')"
      @startFirstQuestion="$emit('startFirstQuestion')"
      @toggleRecording="$emit('toggleRecording')"
      @repeatQuestion="$emit('repeatQuestion')"
      @updatePlayButton="(val) => (playButton = val)"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { requestMicPermission } from "../../../../Utilities/requestMicAccess";
import GamePagesHeader from "../../../Header/GamePagesHeader.vue";
import GameDecorations from "./GameDecorations.vue";
import GameMainContent from "./GameMainContent.vue";

defineProps({
  backgroundColor: {
    type: String,
    default: "#FFBCEE",
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  iconPath: {
    type: String,
    default: "",
  },
  playButton: Boolean,
  isRecording: Boolean,
  isIntroPlaying: Boolean,
  isButtonCooldown: Boolean,
  numOfAudiosPlayed: Number,
});

onMounted(() => {
  // Request microphone access on page load
  console.log("Requesting microphone access...");
  requestMicPermission();

  // Check device type
  checkDeviceType();
  window.addEventListener("resize", checkDeviceType);
});

// Device detection
const isTablet = ref(false);
const isMobile = ref(false);
const isDesktop = computed(() => !isTablet.value && !isMobile.value);

// Check device type on mount and on window resize
const checkDeviceType = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    // Small devices (large phones)
    isTablet.value = false;
    isMobile.value = true;
  } else if (width >= 768 && width <= 1024) {
    // Medium devices (tablets, including iPad Pro width)
    isTablet.value = true;
    isMobile.value = false;
  } else if (width > 1024) {
    // Large devices (laptops/desktops)
    isTablet.value = false;
    isMobile.value = false;
  } else {
    // Extra small devices (phones)
    isTablet.value = false;
    isMobile.value = true;
  }
};

onUnmounted(() => {
  console.log("Navigated Back!");
  window.removeEventListener("resize", checkDeviceType);
});
</script>
