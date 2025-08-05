<template>
  <div
    v-show="showControls"
    :class="[
      'justify-center',
      isTablet
        ? 'flex gap-[25px] mb-6'
        : isMobile
        ? 'flex flex-col gap-4 mb-6'
        : 'flex gap-6 mb-6',
    ]"
  >
    <button
      @click="onRecordClick"
      :class="recordButtonClasses"
      :disabled="isButtonDisabled"
      :title="recordButtonTitle"
    >
      <span class="text-lg font-medium">
        {{ recordButtonText }}
      </span>
      <img
        src="/assets/gameImages/buttons/mic.png"
        class="w-6 h-6"
        aria-hidden="true"
      />
    </button>

    <button
      @click="onRepeatClick"
      :class="[
        'page-button text-nowrap flex items-center justify-center',
        isTablet
          ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
          : isMobile
          ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
          : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
        'bg-white border border-[#0096D6] text-[#0096D6]',
        isIntroPlaying || isButtonCooldown
          ? 'opacity-50 cursor-not-allowed'
          : '',
      ]"
      :disabled="isIntroPlaying || isButtonCooldown"
      :title="
        isIntroPlaying
          ? 'Please wait until the introduction finishes'
          : isButtonCooldown
          ? 'Please wait before repeating the question again'
          : 'Repeat the current question'
      "
    >
      <span class="text-lg font-medium">{{
        isTablet || isMobile ? 'Repeat' : 'Repeat Question'
      }}</span>
      <img
        src="/assets/gameImages/buttons/repeat.png"
        class="w-6 h-6"
        aria-hidden="true"
      />
    </button>
  </div>

  <div
    v-show="showControls"
    id="transcript"
    class="bg-cross-lines rounded-[16px] p-4 my-4 shadow-md mx-auto mobile:w-[280px] w-[300px] md:w-[500px] flex flex-col gap-y-4 items-center justify-center"
  >
    <div
      class="text-xl font-bold border-primary-color border-b-2 w-full text-center"
    >
      You said:
    </div>
    <div>{{ transcription }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isTablet: {
    type: Boolean,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
  isRecording: {
    type: Boolean,
    required: true,
  },
  isFinalResult: {
    type: Boolean,
    required: true,
  },
  isIntroPlaying: {
    type: Boolean,
    required: true,
  },
  isButtonCooldown: {
    type: Boolean,
    required: true,
  },
  transcription: {
    type: String,
    required: true,
  },
  numOfAudiosPlayed: {
    type: Number,
    required: true,
  },
  recordButtonText: {
    type: String,
    required: true,
  },
  recordButtonClasses: {
    type: Array,
    required: true,
  },
  recordButtonTitle: {
    type: String,
    required: true,
  },
  isButtonDisabled: {
    type: Boolean,
    required: true,
  },
});

const showControls = computed(() => {
  return (
    !(props.isTablet || props.isMobile) ||
    (!props.isIntroPlaying && props.numOfAudiosPlayed > 0)
  );
});

const emits = defineEmits(['record-click', 'repeat-click']);

const onRecordClick = () => {
  emits('record-click');
};

const onRepeatClick = () => {
  emits('repeat-click');
};
</script>
