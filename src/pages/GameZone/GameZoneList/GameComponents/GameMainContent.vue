<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-64px)]">
    <div class="relative w-full max-w-[800px]">
      <!-- Back Button Container -->
      <div v-if="!isMobile" class="absolute top-4 left-4 z-30">
        <button @click="$emit('goBack')">
          <img
            src="/assets/gameImages/buttons/arrow-back.svg"
            class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
            alt="Back Button Image"
          />
        </button>
      </div>

      <!-- Game Elements Container -->
      <div class="flex flex-col justify-center items-center relative z-10 mx-auto" :class="containerClasses">
        <!-- Back Button for Mobile -->
        <div v-if="isMobile" class="self-center -mt-32 mb-8">
          <button @click="$emit('goBack')">
            <img
              src="/assets/gameImages/buttons/arrow-back.svg"
              class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
              alt="Back Button Image"
            />
          </button>
        </div>

        <div class="flex flex-col justify-center items-center mb-8">
          <!-- Game icon and title -->
          <GameHeader
            :isMobile="isMobile"
            :title="title"
            :subtitle="subtitle"
            :iconPath="iconPath"
          />

          <!-- Play button section -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import GameHeader from "./GameHeader.vue";

const props = defineProps({
  isMobile: Boolean,
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


const containerClasses = computed(() => ({
  "h-[calc(60vh-144px)] w-[95%] mt-16": props.isMobile,
  "h-[calc(60vh-64px)] w-[90%]": !props.isMobile,
}));
</script>
