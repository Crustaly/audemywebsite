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
    'page-button text-nowrap flex items-center justify-center',
    isTablet.value
      ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px]'
      : isMobile.value
      ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px]'
      : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7',
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
