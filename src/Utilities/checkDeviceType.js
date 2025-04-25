// Returns device type based on viewport size.
// Used across all navbar pages to ensure consistent margins and responsive behavior on resize.
import { ref, onMounted, onUnmounted } from 'vue';

export function useDeviceType() {
  const isTablet = ref(false);
  const isMobile = ref(false);

  const checkDeviceType = () => {
    const width = window.innerWidth;
    if (width >= 640 && width < 768) {
      isTablet.value = false;
      isMobile.value = true;
    } else if (width >= 768 && width < 1024) {
      isTablet.value = true;
      isMobile.value = false;
    } else if (width >= 1024) {
      isTablet.value = false;
      isMobile.value = false;
    } else {
      isTablet.value = false;
      isMobile.value = true;
    }
  };

  onMounted(() => {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDeviceType);
  });

  return {
    isMobile,
    isTablet,
  };
}