import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useDeviceDetection() {
  const isTablet = ref(false);
  const isMobile = ref(false);

  const isDesktop = computed(() => !isTablet.value && !isMobile.value);

  /**
   * Checks the device type on mount and on window resize
   */
  const checkDeviceType = () => {
    const width = window.innerWidth;
    if (width >= 640 && width < 768) {
      // Small devices (large phones)
      isTablet.value = false;
      isMobile.value = true;
    } else if (width >= 768 && width <= 1024) {
      // Medium devices (tablets, including iPad Pro width)
      isTablet.value = true;
      isMobile.value = false;
    } else if (width > 1024) {
      // Large devices (laptops/desktops)
      isTablet.value = false;
      isMobile.value = false;
    } else {
      // Extra small devices (phones)
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
    isTablet,
    isMobile,
    isDesktop,
    checkDeviceType,
  };
}
