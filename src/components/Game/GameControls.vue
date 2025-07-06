<template>
  <div
    v-show="showControls"
    :class="[
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
      style="box-shadow: 10px 10px 20px 0px #32323233"
      :disabled="isButtonDisabled"
      :title="recordButtonTitle"
    >
      <span class="text-lg font-medium">
        {{
          isRecording
            ? 'Stop Recording'
            : isTablet || isMobile
            ? 'Record'
            : 'Record Answer'
        }}
      </span>
      <img
        src="/assets/gameImages/buttons/mic.png"
        class="w-6 h-6"
        alt="Record Icon"
      />
    </button>

    <button
      @click="onRepeatClick"
      :class="[
        'flex items-center justify-center shadow-md',
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
      style="box-shadow: 10px 10px 20px 0px #32323233"
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
        alt="Repeat Icon"
      />
    </button>
  </div>

  <div
    v-show="showControls && !isRecording"
    id="transcript"
    class="text-center text-xl font-bold pt-2 pb-1"
  >
    Transcription will take place {{ transcription }}
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
  finalTranscript1: {
    type: String,
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

const isButtonDisabled = computed(
  () => props.isIntroPlaying || props.isButtonCooldown
);

const recordButtonClasses = computed(() => [
  'flex items-center justify-center shadow-md',
  props.isTablet
    ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
    : props.isMobile
    ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
    : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
  props.isRecording ? 'bg-red-500' : 'bg-[#087BB4]',
  'text-white',
  isButtonDisabled.value ? 'opacity-50 cursor-not-allowed' : '',
]);

const recordButtonTitle = computed(() => {
  if (props.isIntroPlaying)
    return 'Please wait until the introduction finishes';
  if (props.isButtonCooldown)
    return 'Please wait until the question finishes playing';
  return 'Record your answer';
});

// console.log('Final Transcript:', finalTranscript1.value);

const onRecordClick = () => {
  emits('record-click');
};

const onRepeatClick = () => {
  emits('repeat-click');
};
</script>
