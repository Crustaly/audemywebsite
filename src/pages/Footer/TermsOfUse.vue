<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

// Extracted Tailwind classes for readability and DRYer code
const contactListClasses = [
  'flex',
  'flex-col',
  'gap-y-3',
  'justify-center',
  'sm:pl-4',
  'sm:border-l-2',
  'sm:border-primary-color',
  'sm:mx-[15%]',
  'md:mx-[20%]',
  'ease-in',
  'duration-200',
];

const contactLabelClasses = ['font-semibold', 'mr-[3%]', 'justify-self-start'];

const contactLinkClasses = ['page-link', 'justify-self-end'];
</script>

<template>
  <div class="page-container">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div class="content-container lg:grid lg:grid-cols-3">
    <Banner
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/SignUpImg/signup-carl.png'"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
    />
    <div
      class="form-container-view-height lg:col-span-2 lg:pb-[50px] text-left"
    >
      <h1 class="form-title ml-[10%]">Terms of Use</h1>
      <br />
      <div class="form-description">
        <p>
          <i><span class="font-semibold">Last updated:</span> July 30, 2025</i>
        </p>
        <br />
        <p>
          Welcome to <span class="text-primary-color font-bold">Audemy</span>!
        </p>
        <br />
        <p>
          These Terms & Conditions (“Terms”) govern your use of Audemy’s
          educational games, services, and website (collectively, the
          “Services”). By using our Services, you agree to these Terms.
        </p>
        <ol>
          <li>
            <h2 class="page-subheader">1. Eligibility</h2>
            <p>
              Our Services are designed for students, parents, and educators.
            </p>
          </li>
          <li>
            <h2 class="page-subheader">2. Data and Privacy</h2>
            <p>
              Audemy does not collect, store, or share any personal data from
              users. Our Services are designed to be used without requiring
              accounts, personal information, or data tracking. Because no user
              data is collected or stored, there is no risk of your personal
              information being sold or disclosed.
            </p>
          </li>
          <li>
            <h2 class="page-subheader">3. Purpose of Services</h2>
            <p>
              Audemy provides AI‑powered, educational games designed to support
              blind and visually impaired students, as well as the broader
              learning community. The Services are for educational and personal
              use only and may not be used for commercial resale or distribution
              without written permission.
            </p>
          </li>
          <li>
            <h2 class="page-subheader">4. Intellectual Property</h2>
            <p>
              All content, games, software, and materials provided through
              Audemy are the property of Audemy or its licensors. You may not
              reproduce, sell, or exploit any part of the Services without prior
              written consent.
            </p>
          </li>
          <li>
            <h2 class="page-subheader">5. Limitation of Liability</h2>
            <p>
              Our Services are provided “as-is,” without warranties of any kind.
              Since no personal data is collected or stored, Audemy is not
              responsible for any data loss or unauthorized access to personal
              information.
            </p>
          </li>
          <li>
            <h2 class="page-subheader">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <br />
            <!-- Responsive Container for Email + Website
                - Parent (list): flex column; inner (each list item): 2-column grid
            -->
            <ul :class="contactListClasses">
              <li class="grid grid-cols-2">
                <span :class="contactLabelClasses">Email:</span>
                <a href="mailto:connect@audemy.org" :class="contactLinkClasses"
                  >connect@audemy.org</a
                >
              </li>
              <li class="grid grid-cols-2">
                <span :class="contactLabelClasses">Website:</span>
                <a
                  href="https://audemy.org/"
                  target="_blank"
                  :class="contactLinkClasses"
                  >www.audemy.org</a
                >
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <Footer />
</template>
