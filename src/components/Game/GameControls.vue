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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-mic-fill"
        viewBox="0 0 16 16"
      >
        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
        <path
          d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"
        />
      </svg>
    </button>

    <button
      @click="onRepeatClick"
      :class="[
        'page-button py-5 px-8 text-nowrap flex gap-2.5 items-center justify-center rounded-[20px]',
        isTablet
          ? 'w-[250px] h-[60px]'
          : isMobile
            ? 'w-full h-[60px]'
            : 'w-[250px] h-[116px]',
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-arrow-repeat"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"
        />
        <path
          fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
        />
      </svg>
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
