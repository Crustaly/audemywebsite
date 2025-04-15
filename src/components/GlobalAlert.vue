<!-- src/components/GlobalAlert.vue -->
<script setup>
import { useErrorStore } from '../stores/errorStore';
import { computed, watch } from 'vue';

const errorStore = useErrorStore();

const isVisible = computed(() => errorStore.isVisible);
const errorMessage = computed(() => errorStore.errorMessage);
const errorType = computed(() => errorStore.errorType);

const getAlertClass = computed(() => {
  switch (errorType.value) {
    case 'error':
      return 'bg-red-100 border-red-400 text-red-700';
    case 'warning':
      return 'bg-yellow-100 border-yellow-400 text-yellow-700';
    case 'info':
      return 'bg-blue-100 border-blue-400 text-blue-700';
    case 'success':
      return 'bg-green-100 border-green-400 text-green-700';
    default:
      return 'bg-gray-100 border-gray-400 text-gray-700';
  }
});

const getIconClass = computed(() => {
  switch (errorType.value) {
    case 'error':
      return 'text-red-500';
    case 'warning':
      return 'text-yellow-500';
    case 'info':
      return 'text-blue-500';
    case 'success':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
});

const closeAlert = () => {
  errorStore.clearError();
};

// Close on escape key
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isVisible.value) {
    closeAlert();
  }
};

// Add and remove event listeners
watch(isVisible, (newVal) => {
  if (newVal) {
    window.addEventListener('keydown', handleKeyDown);
  } else {
    window.removeEventListener('keydown', handleKeyDown);
  }
});
</script>

<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-x-0 top-0 z-50 px-4 py-2 sm:p-6 sm:items-start sm:justify-end"
      role="alert"
      aria-live="assertive"
    >
      <div
        class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto border-l-4"
        :class="getAlertClass"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <!-- Error icon -->
              <svg
                v-if="errorType === 'error'"
                class="h-6 w-6"
                :class="getIconClass"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              
              <!-- Warning icon -->
              <svg
                v-else-if="errorType === 'warning'"
                class="h-6 w-6"
                :class="getIconClass"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              
              <!-- Info icon -->
              <svg
                v-else
                class="h-6 w-6"
                :class="getIconClass"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium">{{ errorMessage }}</p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                @click="closeAlert"
                class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>