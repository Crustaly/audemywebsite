<script setup>
import PageDecorations from '../../../../components/PageDecorations/PageDecorations.vue';
import YellowStar from '/assets/images/testimonials/star.svg';

const props = defineProps({
  staffTitle: String,
  staff: Array,
});

// Decorate every other staff section
// NOTE: Avoids extra v-for loop and checking current index
const decorativeSections = ['Founder', 'Design', 'Outreach'];

// Extracted RWD classes for staff cards for readability
const staffCardClasses = [
  'bg-cross-lines', // Default styles
  'rounded-[16px]',
  'w-[250px]', // Staff card sizes
  'xl:w-[300px]',
  'h-auto',
  'p-5',
  'flex', // RWD Layout
  'flex-col',
  'gap-y-5',
  'items-center',
  'shadow-md', // Hover effects
  'hover:shadow-lg',
  'transition',
  'duration-300',
];
</script>

<template>
  <div
    class="w-full relative flex flex-col items-center"
    :class="[staffTitle == 'Founder' ? 'md:p-18' : '']"
  >
    <PageDecorations
      :class="[
        decorativeSections.includes(staffTitle) ? 'hidden md:block' : 'hidden',
      ]"
      :topLeftImgPath="YellowStar"
      :bottomRightImgPath="YellowStar"
    />
    <div class="flex justify-center w-full my-3 md:my-5">
      <h3 class="text-[18px] md:text-[24px] xl:text-[28px]">
        {{ staffTitle }}
      </h3>
    </div>
    <div class="w-full flex flex-wrap justify-center py-5">
      <!-- RWD Layout for Staff Cards: 
        - Mobile & Small: 1 column
        - Medium: 2 cols // To accomodate long names & avoid uneven cards
        - Large: 3 cols
        - X-Large+: 4 cols 
      -->
      <div
        class="my-5 p-5 flex flex-1 justify-center"
        :class="[
          staffTitle == 'Founder' ? 'w-auto' : 'md:w-1/2 lg:w-1/3 xl:w-1/4',
        ]"
        v-for="volunteer in staff"
        :key="volunteer.name"
      >
        <div :class="[staffCardClasses, 'relative']">
          <!-- Hide decorative background card banner -->
          <div
            class="-z-1 absolute top-0 left-0 h-1/4 w-full bg-[#e7f0f5] rounded-t-[16px]"
            aria-hidden="true"
          ></div>
          <!-- NOTE: Conditionally add border. Excludes founder's image (built-in border) & default icons (black border) -->
          <img
            :src="volunteer.image"
            aria-hidden="true"
            class="z-0 w-[130px] h-[130px] rounded-full"
            :class="[
              staffTitle == 'Founder' || volunteer.image.includes('default')
                ? 'border-0'
                : 'border-2 border-white',
            ]"
          />
          <div
            class="text-center rounded-[16px] p-5 flex flex-col flex-1 gap-y-3 xl:gap-y-5 w-full"
          >
            <h3 class="font-poppins text-[18px] xl:text-[18.5px] w-full">
              <b>{{ volunteer.name }}</b>
            </h3>
            <h4 class="font-poppins text-[16px] xl:text-[18px] w-full my-auto">
              {{ volunteer.role }}
            </h4>

            <!-- Social Media Icons -->
            <div class="flex justify-center justify-around my-auto py-3">
              <!-- LinkedIn Icon (shown for everyone) -->
              <a
                v-if="volunteer.linkedin"
                :href="volunteer.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
                aria-label="LinkedIn"
              >
                <img
                  src="/assets/images/about-us/linkedin.png"
                  alt=""
                  class="w-6 h-6"
                />
              </a>

              <!-- GitHub Icon (shown only for devs) -->
              <a
                v-if="volunteer.github"
                :href="volunteer.github"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
                aria-label="GitHub"
              >
                <img
                  src="/assets/images/about-us/github.png"
                  alt=""
                  class="w-6 h-6"
                />
              </a>

              <!-- Email Icon -->
              <a
                v-if="volunteer.email"
                :href="`mailto:${volunteer.email}`"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
                aria-label="Email"
              >
                <img
                  src="/assets/images/about-us/email.png"
                  alt=""
                  class="w-6 h-6"
                />
              </a>

              <!-- Website Icon -->
              <a
                v-if="volunteer.website"
                :href="volunteer.website"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-75 transition-opacity"
                aria-label="Portfolio site"
              >
                <img
                  src="/assets/images/about-us/domain.png"
                  alt=""
                  class="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
