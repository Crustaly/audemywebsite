<script setup>
// Extracted footer class arrays for readability and maintainability

// Root <footer> wrapper
const parentFooterClasses = [
  'bg-white',
  'text-primary-color',
  'w-full',
  'h-[850px]',
  'sm:h-[900px]',
  'md:h-[750px]',
  'lg:h-[620px]',
  'pt-[10%]',
  'pb-[10%]',
  'md:pt-[5%]',
  'md:pb-[5%]',
  'lg:pt-[6%]',
  'lg:pb-[6%]',
  'font-poppins',
];

// Main grid container inside footer
/* Footer Layout Behavior (mobile-first, down to 320px):
 *
 * A) Mobile + sm:
 *   - Row 1: [Logo]
 *   - Row 2: [Quick Links] [Social Media]
 *   - Row 3: [Contact]
 *   - Row 4: [Bio & Policies]
 *
 * B) md (≥768px):
 *   - Row 1: [Logo]
 *   - Row 2 (3-col grid): [Quick Links] [Social Media] [Contact]
 *
 * C) lg (≥1024px):
 *   - Single horizontal row with 4 cols:
 *     [Logo] [Quick Links] [Social Media] [Contact]
 *
 * D) Custom grid:
 *    - Improves spacing, margins, & scroll-up button alignment
 */
const ftrContainerClasses = [
  'grid',
  'grid-cols-2',
  'gap-x-8',
  'sm:gap-x-24',
  'gap-y-4',
  'md:grid-cols-3',
  'md:gap-x-8',
  'lg:[grid-template-columns:1.3fr_0.5fr_0.8fr_0.8fr]',
  'border-b-2',
  'border-t-2',
  'pb-4',
  'pt-4',
  'border-primary-color',
  'ml-[17%]',
  'mr-[17%]',
  'md:ml-[10%]',
  'md:mr-[10%]',
  'lg:ml-[8%]',
  'lg:mr-[8%]',
  'lg:pt-[3%]',
];

/* Social media layout (Mobile):
 * - Custom grid to avoid text/link overflow on hover
 * - Accommodate long link names like "Instagram"
 */
const socialMediaGridClasses = [
  'grid',
  '[grid-template-columns:1.1fr_1fr]',
  'md:grid-cols-2',
];
</script>

<template>
  <footer id="parentFooter" :class="parentFooterClasses">
    <div id="ftr-container" :class="ftrContainerClasses">
      <!-- First Row (mobile): Logo -->
      <div
        id="ftr-logo-item"
        class="flex justify-center items-center lg:self-end col-span-2 md:col-span-3 lg:col-span-1 mb-[5%] md:mb-8 lg:mb-8"
      >
        <a
          id="logo-link"
          href="/"
          class="border-b-transparent border-b-0"
          aria-hidden="true"
          tabindex="-1"
        >
          <img
            id="ftr-logo"
            :src="'../assets/images/header/header-logo-2.png'"
            alt="Home page"
            class="w-[279px] text-lg font-bold hover:cursor-pointer"
            loading="lazy"
          />
        </a>
      </div>
      <!-- Second Row, First Column (mobile): Quick Links -->
      <div id="quick-links-items" class="col-span-1 mb-[5%]">
        <p class="ftr-subheader">Quick Links</p>
        <ul>
          <li class="ftr-subtext">
            <a href="/">Home</a>
          </li>
          <li class="ftr-subtext">
            <a href="/about-us">Our Team</a>
          </li>
          <li class="ftr-subtext">
            <a href="/our-projects">Our Projects</a>
          </li>
          <li class="ftr-subtext">
            <a href="/impact">Impact</a>
          </li>
          <li class="ftr-subtext">
            <a href="/press">Press & Recognition</a>
          </li>
          <li class="ftr-subtext">
            <a href="/game-zone">Game Zone</a>
          </li>
        </ul>
      </div>
      <!-- Second Row, Second Column (mobile): Social Media -->
      <div id="social-media-items" class="col-span-1 mb-[5%]">
        <p class="ftr-subheader">Social Media</p>
        <ul>
          <!-- Instagram -->
          <li class="ftr-subtext" :class="socialMediaGridClasses">
            <a
              href="https://www.instagram.com/audemyapp"
              target="_blank"
              class="social-link"
            >
              Instagram
            </a>
            <a
              href="https://www.instagram.com/audemyapp"
              target="_blank"
              aria-hidden="true"
              tabindex="-1"
              class="social-icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-instagram social-brand"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                />
              </svg>
            </a>
          </li>
          <!-- LinkedIn -->
          <li class="ftr-subtext" :class="socialMediaGridClasses">
            <a
              href="https://www.linkedin.com/company/audemy/"
              target="_blank"
              class="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/company/audemy/"
              target="_blank"
              aria-hidden="true"
              tabindex="-1"
              class="social-icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-linkedin social-brand"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                />
              </svg>
            </a>
          </li>
          <!-- GitHub -->
          <li class="ftr-subtext" :class="socialMediaGridClasses">
            <a
              href="https://github.com/Crustaly/audemywebsite"
              target="_blank"
              class="social-link"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Crustaly/audemywebsite"
              target="_blank"
              aria-hidden="true"
              tabindex="-1"
              class="social-icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-github social-brand"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>
          </li>
          <!-- YouTube -->
          <li class="ftr-subtext" :class="socialMediaGridClasses">
            <a
              href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
              target="_blank"
              class="social-link"
            >
              YouTube
            </a>
            <a
              href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
              target="_blank"
              class="social-icon-link"
              aria-hidden="true"
              tabindex="-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-youtube social-brand"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <!-- Third Row (mobile): Contact -->
      <div id="contact-items" class="col-span-2 md:col-span-1 mb-[5%]">
        <p class="ftr-subheader">Contact</p>
        <ul>
          <li class="ftr-subtext">
            <a href="mailto:connect@audemy.org" class="break-all md:max-w-full">
              connect@audemy.org
            </a>
          </li>
        </ul>
      </div>
      <!-- Fourth Row (mobile): Bio & Website Policies -->
      <div
        id="policies-items"
        class="col-span-2 mt-[15%] md:col-span-3 md:text-center lg:col-span-4 lg:mt-[5%]"
      >
        <!-- Bio -->
        <p class="ftr-bio">
          Audemy is a U.S.-based 501(c)(3) nonprofit organization (EIN: 99-2595553).
        </p>
        <!-- Simple flex for single column (mobile, small) or row (md, lg) layout -->
        <ul class="md:flex md:flex-row md:gap-10 md:justify-center">
          <!-- Copyright -->
          <li class="ftr-bio">&copy; 2024 Audemy</li>
          <li class="ftr-subtext">
            <a href="/accessibility-statement">Accessibility Statement</a>
          </li>
          <li class="ftr-subtext">
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>