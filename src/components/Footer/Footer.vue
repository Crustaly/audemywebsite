<script setup></script>

<template>
  <footer class="bg-[#2F3E45] text-center w-full px-20 md:px-10 h-[580px] md:h-[380px] md:pt-[41px] pt-[28px]">
    <div id="ftr-grid">

      <!-- First Row "AUDEMY" -->
      <div id="ftr-title-subgrid">
        <div id="ftr-title">
          <a href="#" class="font-poppins font-extrabold text-[24px] text-[#B9D6DF]">
            AUDEMY
          </a>
        </div>
        <hr id="ftr-title-divider" class="mt-[5px] mb-[5px] bg-[#2F3E45]">
      </div> 
      
      <!-- First Column "Contact" -->
      <div id="ftr-contact-subgrid" class="text-white">
        <div
          id="ftr-contact"
          class="mb-[17px] font-jakarta font-bold text-[16px] text-[#B9D6DF] leading-[18px] pt-[2px] pb-[2px]">
          Contact
        </div>
        <div id="ftr-contact-email">
          <a href="mailto:connect.audemy@gmail.com"
            class="font-jakarta font-bold text-[14px] leading-[18px]">
            connect.audemy@gmail.com
          </a>
        </div>
      </div>

      <!-- Second Column "Quick Links" -->
      <div id="ftr-links-subgrid" class="mt-[10px]">
        <div id="ftr-links" class="mb-[17px] font-jakarta font-bold text-[16px] leading-[18px] text-[#B9D6DF] pt-[2px] pb-[2px]">
          Quick Links
        </div>
        <ul id="ftr-links-inner-subgrid">
          <li
            id="ftr-home-item"
            class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="/home">Home</a>
          </li>
          <li
            id="ftr-about-item"
            class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="/about-us">About us</a>
          </li>
          <li
            id="ftr-projects-item"
            class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="/our-projects">Our projects</a>
          </li>
          <li
            id="ftr-impact-item"
            class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="/impact">Impact</a>
          </li>
          <li
            id="ftr-games-item"
            class="font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="/game-zone">Game zone</a>
          </li>
        </ul>
      </div>
    
      <!-- Third Column "Social Media" --> 
      <div id="ftr-socials-subgrid"  >
        <div id="ftr-socials" class="font-jakarta font-bold text-[16px] leading-[18px] text-[#B9D6DF] pt-[2px] pb-[2px]">
          Social Media
        </div>

        <!-- Medium, Large Views: Social Media Links -->
        <ul id="ftr-socials-list">
          <li class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="https://www.instagram.com/audemyapp" target="_blank">Instagram</a>
          </li>
          <li class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="https://www.linkedin.com/company/audemy/" target="_blank">LinkedIn</a>
          </li>
          <li class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="https://github.com/Crustaly/audemy" target="_blank">Github</a>
          </li>
          <li class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="https://x.com/AudemyApp" target="_blank">X</a>
          </li>
          <li class="mb-[17px] font-jakarta font-bold text-[14px] text-white leading-[18px]">
            <a href="https://www.youtube.com/@applelooeducationalvideosf1743/featured" target="_blank">Youtube</a>
          </li>
        </ul>

        <!-- Mobile, Small Views: Social Media Icons -->
        <!-- Note: Added aria-labels to improve screen reader accessibility --> 
        <ul id="small-ftr-socials-inner-subgrid" class="mt-[17px]">
          <!-- Instagram --> 
          <a id="insta-icon" href="https://www.instagram.com/audemyapp" target="_blank" 
            class="w-[44px] h-[44px]"
            aria-label="Visit Audemy's Instagram"
          >
            <box-icon type="logo" name="instagram" class="fill-[#fff] w-[44px] h-[44px] text-white p-0"></box-icon>
          </a>
          <!-- LinkedIn --> 
          <a id="linkedin-icon" href="https://www.linkedin.com/company/audemy/" target="_blank" 
            class="w-[44px] h-[44px]"
            aria-label="Visit Audemy's LinkedIn"
          >
            <box-icon type="logo" name="linkedin-square" class="fill-[#fff] w-[44px] h-[44px] text-white p-0"></box-icon>
          </a>
          <!-- GitHub -->
          <a id="github-icon" href="https://github.com/Crustaly/audemy" target="_blank" class="w-[44px] h-[44px]" aria-label="Visit Audemy's GitHub">
            <box-icon type="logo" name="github" class="fill-[#fff] w-[44px] h-[44px] text-white p-0"></box-icon>
          </a>
          <!-- X (fka Twitter) -->
          <a id="twitter-icon" href="https://x.com/AudemyApp" target="_blank" aria-label="Visit Audemy's X (fka Twitter)">
            <svg height="44" width="44" class="fill-[#fff] w-[44px] h-[44px] text-white p-0" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
              </path>
            </svg>
          </a>
          <!-- Youtube -->
          <a id="youtube-icon" href="https://www.youtube.com/@applelooeducationalvideosf1743/featured" target="_blank" class="w-[44px] h-[44px]" aria-label="Visit Audemy's Youtube">
            <box-icon type="logo" name="youtube" class="fill-[#fff] w-[44px] h-[44px] text-white p-0"></box-icon>
          </a>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* * * * * Default: Mobile-first, Small Viewports * * * * */
/* * * * * The following refers to the footer as ftr * * * * */

#ftr-contact-email a:hover, #ftr-links-inner-subgrid a:hover, #ftr-socials-list a:hover {
  color: #087bb4;
  border-bottom: 2px solid #087bb4;
  padding-bottom: 5px;
}

#small-ftr-socials-inner-subgrid box-icon:hover, #small-ftr-socials-inner-subgrid svg:hover {
  fill: #087bb4;
}

#ftr-grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto; /* 5-column grid */
  gap: 4px;
}

#ftr-title-subgrid {
  display: grid;
  grid-area: 1 / span 5;
  grid-template-rows: auto auto; /* 2-column subgrid */
}

#ftr-title {
  grid-area: 1 / span 5;
}

#ftr-title-divider {
  grid-area: 2 / span 5;
}

#ftr-contact-subgrid {
  grid-area: 3 / span 5;
  display: grid;
  grid-template-rows: auto auto; /* 2-column subgrid */
}

#ftr-contact {
  grid-area: 1 / span 5;
}

#ftr-contact-email {
  grid-area: 2 / span 5;
}

#ftr-links-subgrid {
  grid-area: 5 / span 5;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto; /* 6-column subgrid */
}

#ftr-links {
  grid-area: 1 / span 5;
}

#ftr-links-inner-subgrid {
  grid-area: 2 / span 5;
} 

#ftr-socials-subgrid {
  grid-area: 10 / span 5;
  display: grid;
  grid-template-columns: auto auto auto auto auto; /* 5-column subgrid */
}

#ftr-socials {
  grid-area: 1 / span 5;
}

#ftr-socials-list {
  display: none;
}

#small-ftr-socials-inner-subgrid {
  grid-area: 2 / span 5;
  display: grid;
  grid-template-columns: auto auto auto auto auto; /* 5-column subgrid */
  justify-content: space-evenly;
} 

#small-ftr-socials-inner-subgrid > a {
  grid-area: 1 / span 1;
}

#twitter-icon {
  display: inline-block;
}

/* * * * * Responsive Media Queries: Medium and Large Devices (≥768px) * * * * */
@media only screen and (min-width: 768px) {
  footer {
    height: 380px;
  }

  #ftr-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-areas: 
                      "title title title" 
                      "contact links social";
  }

  #ftr-title-subgrid {
    grid-area: title;
  }

  #ftr-contact-subgrid {
    grid-area: contact;
  }

  #ftr-links-subgrid {
    margin-top: 0;
    grid-area: links;
  }

  #ftr-contact {
    margin-bottom: 0;
  }

  #ftr-links, #ftr-socials, #ftr-games-item {
    margin-bottom: 17px;
  } 

  #ftr-socials-subgrid {
    display: grid;
    grid-area: social;
  }

  #ftr-socials-list {
    display: grid;
    grid-column: 1 / -1; /* Span from first (1) to last column (-1) of #ftr-socials-subgrid to fill full width */
  }

  #small-ftr-socials-inner-subgrid {
    /* Hide Social Media Icons for Mobile and Small Viewports */
    display: none;
  }
}
</style>