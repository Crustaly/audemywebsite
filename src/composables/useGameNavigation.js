import { stopAudios } from '../Utilities/playAudio';

export function useGameNavigation(currentAudios, category = 'math') {
  const goBack = () => {
    stopAudios(currentAudios);
    sessionStorage.setItem('gameCategory', category);
    window.location.href = '/game-zone';
  };

  const handleSthNotWorkingButtonClick = () => {
    stopAudios(currentAudios);
    window.location.href = '/troubleshooting';
  };

  return {
    goBack,
    handleSthNotWorkingButtonClick,
  };
}
