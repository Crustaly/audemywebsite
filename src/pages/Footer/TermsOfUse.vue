<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

// List of 'Terms of Use' sections
const termSections = [
  {
    header: 'Eligibility',
    details: `Our Services are designed for students, parents, and educators.`,
  },
  {
    header: 'Data and Privacy',
    details: `Audemy does not collect, store, or share any personal data from
              users. Our Services are designed to be used without requiring
              accounts, personal information, or data tracking. Because no user
              data is collected or stored, there is no risk of your personal
              information being sold or disclosed.`,
  },
  {
    header: 'Purpose of Services',
    details: `Audemy provides AI‑powered, educational games designed to support
              blind and visually impaired students, as well as the broader
              learning community. The Services are for educational and personal
              use only and may not be used for commercial resale or distribution
              without written permission.`,
  },
  {
    header: 'Limitation of Liability',
    details: `Our Services are provided “as-is,” without warranties of any kind.
              Since no personal data is collected or stored, Audemy is not
              responsible for any data loss or unauthorized access to personal
              information.`,
  },
  {
    header: 'Contact Us',
    details: `If you have any questions about these Terms, please contact us:`,
  },
];

// Extracted Tailwind classes for readability and DRYer code
const contactInfo = [
  {
    label: 'Email',
    text: 'connect@audemy.org',
    link: 'mailto:connect@audemy.org',
  },
  { label: 'Website', text: 'www.audemy.org', link: 'https://audemy.org/' },
];

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
      :showExtraDecorations="true"
      :anchorCharacterTop="true"
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
          <li v-for="(term, n) in termSections" :key="n">
            <h2 class="page-subheader">{{ n + 1 }}. {{ term.header }}</h2>
            <p>{{ term.details }}</p>
            <template v-if="term.header == 'Contact Us'">
              <br />
              <!-- Responsive Container for Email + Website
                  - Parent (list): flex column; inner (each list item): 2-column grid
              -->
              <ul :class="contactListClasses">
                <li
                  v-for="(contact, n) in contactInfo"
                  :key="n"
                  class="grid grid-cols-2"
                >
                  <span :class="contactLabelClasses">{{ contact.label }}:</span>
                  <a :href="contact.link" :class="contactLinkClasses">{{
                    contact.text
                  }}</a>
                </li>
              </ul>
            </template>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <Footer />
</template>
