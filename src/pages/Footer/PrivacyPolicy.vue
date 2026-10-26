<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

// List of 'Privacy Policy' sections
const policySections = [
  {
    header: `We Don't Collect Personal Data`,
    details: `Audemy is a safe space for kids. We do not collect, store, or share any personal information.`,
  },
  {
    header: 'For Kids, with Care',
    details: `Audemy is built especially for blind and visually impaired students. We designed everything to be private and accessible. You can play our games and learn without an account or providing any personal details.`,
  },
  {
    header: 'COPPA-Compliant',
    details: `We follow the
          <a
            href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa"
            target="_blank"
            class="page-link"
          >
            Children's Online Privacy Protection Act
          </a>
          (COPPA). Since we don't collect any information from users under 13—or
          anyone, really—there's nothing for us to protect. And that's exactly
          how we like it.`,
  },
  {
    header: 'Anonymous Use Only',
    details: `All interactions with Audemy are completely anonymous. Your activity is not tracked, and we do not use cookies or analytics tools that collect user data.`,
  },
  {
    header: 'Questions?',
    details: `If you're a parent, teacher, or guardian and would like to learn more, contact us at <a href="mailto:connect@audemy.org" class="page-link">connect@audemy.org</a>.`,
  },
];
</script>

<template>
  <div class="page-container">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div class="content-container lg:grid lg:grid-cols-3">
    <Banner
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/impact/carl-pencil.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
      :showExtraDecorations="true"
      :anchorCharacterTop="true"
      :denseDecorations="true"
    />
    <div
      class="form-container-view-height text-left lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title ml-[10%]">Privacy Policy</h1>
      <br />
      <div class="form-description">
        <p>
          <i><span class="font-semibold">Last updated:</span> July 30, 2025</i>
        </p>
        <br />
        <p>
          At <span class="text-primary-color font-bold">Audemy</span>, we
          respect and take your privacy very seriously. We created this policy
          to explain—clearly and simply—how we handle your information.
        </p>
        <div v-for="(policy, n) in policySections" :key="n">
          <h2 class="page-subheader">{{ policy.header }}</h2>
          <p v-html="policy.details"></p>
          <br />
          <template v-if="n == 0">
            <p
              class="font-semibold text-primary-color border-b-2 border-primary-color"
            >
              That means:
            </p>
            <ul class="list-disc text-left ml-[15%] lg:ml-[20%]">
              <li>No names</li>
              <li>No email addresses</li>
              <li>No phone numbers</li>
              <li>No photos, voice recordings, or other personal content</li>
              <li>No cookies or trackers</li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
