import { computed } from 'vue';
import { useDeviceDetection } from './useDeviceDetection';

export function useGameUI(gameState) {
  const { isTablet, isMobile, isDesktop } = useDeviceDetection();

  const isButtonDisabled = computed(
    () => gameState.isIntroPlaying.value || gameState.isButtonCooldown.value
  );

  const recordButtonClasses = computed(() => [
    'flex items-center justify-center shadow-md',
    isTablet.value
      ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
      : isMobile.value
      ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
      : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
    gameState.isRecording.value ? 'bg-red-500' : 'bg-[#087BB4]',
    'text-white',
    isButtonDisabled.value ? 'opacity-50 cursor-not-allowed' : '',
  ]);

  const recordButtonTitle = computed(() => {
    if (gameState.isIntroPlaying.value)
      return 'Please wait until the introduction finishes';
    if (gameState.isButtonCooldown.value)
      return 'Please wait until the question finishes playing';
    return 'Record your answer';
  });

  return {
    isTablet,
    isMobile,
    isDesktop,
    isButtonDisabled,
    recordButtonClasses,
    recordButtonTitle,
  };
}
