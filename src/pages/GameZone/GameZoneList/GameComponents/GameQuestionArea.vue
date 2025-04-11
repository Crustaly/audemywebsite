<template>
  <div v-if="playButton === false">
    <button
      @click="playButton = true"
      class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
    >
      Play
    </button>
  </div>

  <!-- Question and answer section -->
  <div
    v-else-if="numOfAudiosPlayed < 5 && playButton === true"
    class="flex flex-col p-4 justify-center"
    id="content"
  >
    <!-- Mobile/Tablet Start Questions Button - Only show before questions start -->
    <div v-if="(isTablet || isMobile) && numOfAudiosPlayed === 0">
      <button
        @click="startFirstQuestion"
        class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b] mb-6"
        :disabled="isIntroPlaying"
        :class="{ 'opacity-50 cursor-not-allowed': isIntroPlaying }"
      >
        {{ isIntroPlaying ? "Please wait..." : "Start Questions" }}
      </button>
    </div>

    <!-- Different button styling for tablet -->
    <div
      v-show="
        !(isTablet || isMobile) || (!isIntroPlaying && numOfAudiosPlayed > 0)
      "
      :class="[
        isTablet
          ? 'flex gap-[25px] mb-6'
          : isMobile
          ? 'flex flex-col gap-4 mb-6'
          : 'flex gap-6 mb-6',
      ]"
    >
      <!-- Record Answer Button -->
      <button
        @click="toggleRecording"
        :class="[
          'flex items-center justify-center shadow-md',
          isTablet
            ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
            : isMobile
            ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
            : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
          isRecording ? 'bg-red-500' : 'bg-[#087BB4]',
          'text-white',
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
            ? 'Please wait until the question finishes playing'
            : 'Record your answer'
        "
      >
        <span class="text-lg font-medium">
          {{
            isRecording
              ? "Stop Recording"
              : isTablet || isMobile
              ? "Record"
              : "Record Answer"
          }}
        </span>
        <img
          src="/assets/gameImages/buttons/mic.png"
          class="w-6 h-6"
          alt="Record Icon"
        />
      </button>

      <!-- Repeat Question Button -->
      <button
        @click="repeatQuestion"
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
          isTablet || isMobile ? "Repeat" : "Repeat Question"
        }}</span>
        <img
          src="/assets/gameImages/buttons/repeat.png"
          class="w-6 h-6"
          alt="Repeat Icon"
        />
      </button>
    </div>

    <div
      id="transcript"
      v-show="
        !(isTablet || isMobile) || (!isIntroPlaying && numOfAudiosPlayed > 0)
      "
      class="text-center text-xl font-bold pt-2 pb-1"
    >
      You said: {{ transcription }}
    </div>
  </div>

  <!-- Game over section -->
  <div v-else>
    <div class="text-center text-3xl font-bold pt-2 pb-1">Game Over</div>
    <div class="text-center text-xl font-medium pt-2 pb-1">
      Score: {{ score }} / 5
    </div>
  </div>
</template>

<script setup>
defineProps(["isMobile", "isTablet", "isDesktop"]);
</script>
