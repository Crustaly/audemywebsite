import { computed } from 'vue';
import { useDeviceDetection } from './useDeviceDetection';

export function useGameUI(gameState) {
  const { isTablet, isMobile, isDesktop } = useDeviceDetection();

  const isButtonDisabled = computed(
    () =>
      gameState.isIntroPlaying.value ||
      gameState.isButtonCooldown.value ||
      (gameState.isRecording.value && !gameState.isFinalResult.value)
  );

  const recordButtonClasses = computed(() => [
    'page-button py-5 px-8 text-nowrap flex gap-2.5 items-center justify-center',
    isTablet.value
      ? 'w-[250px] h-[60px]'
      : isMobile.value
        ? 'w-full h-[60px]'
        : 'w-[250px] h-[116px]',
    gameState.isRecording.value ? 'bg-red-500' : 'bg-[#087BB4]',
    'text-white',
    isButtonDisabled.value ? 'opacity-50 cursor-not-allowed' : '',
  ]);

  const recordButtonTitle = computed(() => {
    if (gameState.isIntroPlaying.value)
      return 'Please wait until the introduction finishes';
    if (gameState.isButtonCooldown.value)
      return 'Please wait until the question finishes playing';
    if (gameState.isRecording.value && !gameState.isFinalResult.value)
      return 'Processing your speech...';
    return 'Record your answer';
  });

  const recordButtonText = computed(() => {
    if (gameState.isRecording.value && !gameState.isFinalResult.value) {
      return isTablet.value || isMobile.value
        ? 'Processing...'
        : 'Processing Speech...';
    }
    return gameState.isRecording.value
      ? 'Stop Recording'
      : isTablet.value || isMobile.value
        ? 'Record'
        : 'Record Answer';
  });

  return {
    isTablet,
    isMobile,
    isDesktop,
    isButtonDisabled,
    recordButtonClasses,
    recordButtonTitle,
    recordButtonText,
  };
}
