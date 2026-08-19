<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
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
    <main
      class="form-container-view-height text-left lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title ml-[10%]">Privacy Policy</h1>
      <br />
      <div class="form-description">
        <p>
          <i><span class="font-semibold">Last updated:</span> August 19, 2026</i>
        </p>
        <br />
        <p>
          Audemy is operated by Audiobvi Education. This policy explains what
          information Audemy collects through audemy.org, why we use it, and
          the choices available to users, parents, guardians, and educators.
        </p>

        <h2 class="page-subheader">Using Audemy without an account</h2>
        <p>
          Many public pages and games can be used without creating an account.
          The site still receives basic technical and analytics information
          when someone visits, as described below.
        </p>

        <h2 class="page-subheader">Information we collect</h2>
        <ul class="list-disc text-left ml-[8%] lg:ml-[12%] space-y-3">
          <li>
            <span class="font-semibold">Account information:</span> If you
            create an account, we collect your name, email address, school, and
            password. Passwords are hashed before they are stored.
          </li>
          <li>
            <span class="font-semibold">Google sign-in information:</span> If
            you sign in with Google, Google provides your name, email address,
            profile image, and a sign-in token. We may also ask for your school.
          </li>
          <li>
            <span class="font-semibold">Session and activity information:</span>
            We use an Audemy session cookie to keep you signed in. It contains
            an authentication token and, on some sign-in paths, basic account
            information. We also use temporary browser session storage to
            remember a selected game category while you navigate the site.
          </li>
          <li>
            <span class="font-semibold">Game activity:</span> During a game,
            Audemy temporarily processes answers, scores, difficulty, and
            recognized speech in the browser to run the game and provide
            feedback. The current game flow does not save longitudinal progress
            to an account.
          </li>
          <li>
            <span class="font-semibold">Technical information:</span> Our
            systems and service providers may receive IP addresses, browser and
            device information, requested pages, referring pages, timestamps,
            and login or signup attempts. We use this information to operate,
            secure, and troubleshoot the site.
          </li>
          <li>
            <span class="font-semibold">Communications:</span> If you contact
            Audemy or request a password reset, we process the email address and
            message information needed to respond or send the requested email.
          </li>
        </ul>

        <h2 class="page-subheader">Microphone and speech features</h2>
        <p>
          Some games offer voice input. These features ask for microphone
          permission and use the browser's speech-recognition service to turn
          speech into text for the game. Depending on the browser or device,
          audio may be processed by the browser, operating-system provider, or
          another speech-service provider under that provider's privacy terms.
          Recognized speech is temporarily handled as text in the browser.
          Audemy does not intentionally send raw microphone recordings or those
          recognized transcripts to its own database through these game
          features.
        </p>
        <br />
        <p>
          Audemy also uses Google Cloud text-to-speech to generate some audio.
          Text needed to generate that audio may be sent to Google Cloud.
        </p>

        <h2 class="page-subheader">Analytics, advertising, and cookies</h2>
        <p>
          Audemy uses Google Analytics to understand visits and how the site is
          used. Google Analytics may use cookies or similar identifiers and may
          receive page activity, device and browser information, referring
          pages, and approximate location derived from an IP address. Audemy may
          also use Google Ads to measure outreach or promote Audemy. Google may
          connect analytics or ad interactions according to its own settings
          and privacy terms.
        </p>
        <br />
        <p>
          The Audemy session cookie can remain for up to seven days. Google and
          embedded services may set their own cookies. You can limit cookies in
          your browser and review Google's controls at
          <a
            href="https://myadcenter.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="page-link"
            >My Ad Center</a
          >. Blocking the Audemy session cookie may prevent account login from
          working.
        </p>

        <h2 class="page-subheader">How we use information</h2>
        <ul class="list-disc text-left ml-[8%] lg:ml-[12%] space-y-3">
          <li>Provide accounts, games, audio, and other site features.</li>
          <li>Authenticate users and send password-reset messages.</li>
          <li>Understand site use and improve accessibility and reliability.</li>
          <li>Protect the site, prevent abuse, and troubleshoot problems.</li>
          <li>Measure outreach and communicate about Audemy's services.</li>
        </ul>

        <h2 class="page-subheader">Service providers and external content</h2>
        <p>
          Audemy relies on service providers to run the site. These include
          Vercel for deployment, a database provider, Gmail for password-reset
          email, and Google services for analytics, advertising, sign-in,
          fonts, and text-to-speech. Some pages also load external content such
          as YouTube videos or TomTom maps. Those providers may receive
          technical information or set cookies when their services load. Their
          handling of information is governed by their own policies.
        </p>

        <h2 class="page-subheader">Children's privacy</h2>
        <p>
          Audemy is designed for students, including children. The current
          signup form does not ask for a date of birth. A child under 13 should
          not create an account or submit personal information unless a parent,
          guardian, or authorized school has approved and arranged the use. A
          parent or guardian who believes a child submitted information without
          appropriate authorization should contact us so we can review the
          account and delete information when appropriate.
        </p>

        <h2 class="page-subheader">Retention, access, and deletion</h2>
        <p>
          The current site does not offer a self-service account-deletion tool.
          To ask what account information Audemy has, request a correction, or
          request deletion, email us using the address below. We may need to
          verify the request. The current system does not define a fixed
          automatic deletion period for accounts. Some information may remain
          for security, legal, or backup purposes.
        </p>

        <h2 class="page-subheader">Security</h2>
        <p>
          Account passwords are hashed before they are stored. No website or
          storage system is completely secure, so we cannot guarantee absolute
          security.
        </p>

        <h2 class="page-subheader">International use</h2>
        <p>
          Audemy can be accessed outside the United States. Information may be
          processed in the United States or in other locations where our service
          providers operate.
        </p>

        <h2 class="page-subheader">Changes to this policy</h2>
        <p>
          We may update this policy as Audemy's services change. The date at the
          top shows when the policy was last updated.
        </p>

        <h2 class="page-subheader">Contact us</h2>
        <p>
          For privacy questions or requests, contact
          <a href="mailto:connect@audemy.org" class="page-link"
            >connect@audemy.org</a
          >.
        </p>
      </div>
    </main>
  </div>
  <Footer />
</template>
