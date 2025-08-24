<template>
  <div class="relative flex flex-col font-poppins">
    <!-- Hide decorative blue arrow -->
    <img
      src="/assets/images/our-projects/blue-arrow.png"
      class="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] absolute right-0 bottom-[18%] sm:bottom-[10%] sm:right-[10%] md:bottom-20 lg:bottom-1/2 lg:right-[-5%] z-40 duration-300"
      aria-hidden="true"
    />
    <div class="flex justify-center">
      <h2 class="page-header-accent">Social Media Content</h2>
    </div>
    <div class="flex justify-center">
      <h3 class="page-header">
        Explore
        <span style="color: #077bb3" class="font-semibold">
          Apple Loo Education
        </span>
      </h3>
    </div>
    <div class="page-text text-center my-5">
      <p>
        Our YouTube channel that
        <span class="font-semibold">
          educates young students through engaging videos.
        </span>
      </p>
    </div>
    <div class="relative flex place-content-center mt-10">
      <img
        src="/assets/images/our-projects/tablet.png"
        class="h-auto w-3/4"
        aria-hidden="true"
      />
      <div
        class="absolute top-0 left-[15%] h-[100%] w-[70%] flex items-center justify-center"
      >
        <div class="w-full h-full aspect-video max-w-[100%] max-h-[90%]">
          <iframe
            class="w-full h-full rounded-[15px]"
            src="https://www.youtube.com/embed?listType=playlist&list=UU_QnL2hAtkxcMUNYBUFm6rQ"
            frameborder="0"
            allowfullscreen
            style="pointer-events: auto"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <a
        href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
        target="_blank"
        class="page-button blue-button page-button-flex px-9 py-4"
      >
        Watch more videos
      </a>
    </div>
  </div>
</template>
