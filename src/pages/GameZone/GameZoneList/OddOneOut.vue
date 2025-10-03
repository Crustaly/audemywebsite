<template>
  <GameLayout
    :bgColor="gameConfig.bgColor"
    :isTablet="isTablet"
    :isMobile="isMobile"
    :currentAudios="currentAudios"
    :handleSthNotWorkingButtonClick="handleSthNotWorkingButtonClick"
    :goBack="goBack"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <GameHeader
        :iconSrc="gameConfig.iconSrc"
        :title="gameConfig.title"
        :description="gameConfig.description"
        :isMobile="isMobile"
        :showCaptions="
          playButton &&
          !isIntroPlaying &&
          numOfAudiosPlayed > 0 &&
          numOfAudiosPlayed < 5
        "
        :currentQuestionIndex="currentQuestionIndex"
        :currentQuestion="currentQuestion"
        :isAnswerPlaying="isAnswerPlaying"
        :isCorrect="isCorrect"
      />

      <PlayButton v-if="playButton === false" @play-click="playButton = true" />

      <div
        v-else-if="numOfAudiosPlayed < 5 && playButton === true"
        class="flex flex-col p-4 justify-center"
        id="content"
      >
        <StartQuestionsButton
          v-show="numOfAudiosPlayed === 0"
          :isIntroPlaying="isIntroPlaying"
          @start-click="startFirstQuestion"
        />

        <GameControls
          v-show="!isIntroPlaying && numOfAudiosPlayed > 0"
          :isTablet="isTablet"
          :isMobile="isMobile"
          :isRecording="isRecording"
          :isFinalResult="isFinalResult"
          :isIntroPlaying="isIntroPlaying"
          :isButtonCooldown="isButtonCooldown"
          :transcription="transcription"
          :numOfAudiosPlayed="numOfAudiosPlayed"
          :recordButtonText="recordButtonText"
          :recordButtonClasses="recordButtonClasses"
          :recordButtonTitle="recordButtonTitle"
          :isButtonDisabled="isButtonDisabled"
          @record-click="toggleRecording"
          @repeat-click="repeatQuestion"
        />
      </div>

      <GameOver v-else :score="score" />
    </div>
  </GameLayout>
</template>

<script setup>
import GameLayout from '../../../components/Game/GameLayout.vue';
import GameControls from '../../../components/Game/GameControls.vue';
import GameHeader from '../../../components/Game/GameHeader.vue';
import PlayButton from '../../../components/Game/PlayButton.vue';
import StartQuestionsButton from '../../../components/Game/StartQuestionsButton.vue';
import GameOver from '../../../components/Game/GameOver.vue';

import { useGameCore } from '../../../composables/useGameCore';
import { gameConfigs } from '../../../config/gameConfigs';

const gameConfig = gameConfigs.oddOneOut;

const {
  numOfAudiosPlayed,
  currentQuestionIndex,
  score,
  isRecording,
  isFinalResult,
  transcription,
  playButton,
  isIntroPlaying,
  isButtonCooldown,
  isAnswerPlaying,
  isCorrect,
  isTablet,
  isMobile,
  currentAudios,
  currentQuestion,
  isButtonDisabled,
  recordButtonClasses,
  recordButtonTitle,
  recordButtonText,
  toggleRecording,
  goBack,
  repeatQuestion,
  startFirstQuestion,
  handleSthNotWorkingButtonClick,
} = useGameCore(gameConfig);
</script>
