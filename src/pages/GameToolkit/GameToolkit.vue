<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import PageDecorations from '../../components/PageDecorations/PageDecorations.vue';

// Sample toolkit data - in a real app, this would come from an API
const toolkits = [
  {
    id: 1,
    name: 'Call of Duty',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation system for multiplayer maps',
    category: 'FPS',
  },
  {
    id: 2,
    name: 'Minecraft',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Blind-friendly crafting guide and audio cues',
    category: 'Sandbox',
  },
  {
    id: 3,
    name: 'Valorant',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback system for ability usage',
    category: 'FPS',
  },
  {
    id: 4,
    name: 'Roblox',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Accessible navigation for popular games',
    category: 'Platform',
  },
  {
    id: 5,
    name: 'FIFA 23',
    platform: 'Xbox',
    platformIcon: '🎮',
    description: 'Audio commentary and menu navigation',
    category: 'Sports',
  },
  {
    id: 6,
    name: 'Fortnite',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio building and combat assistance',
    category: 'Battle Royale',
  },
  {
    id: 7,
    name: 'GTA V',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio navigation for open world exploration',
    category: 'Action',
  },
  {
    id: 8,
    name: 'League of Legends',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for ability management',
    category: 'MOBA',
  },
  {
    id: 9,
    name: 'Overwatch 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Hero ability audio feedback system',
    category: 'FPS',
  },
  {
    id: 10,
    name: 'Apex Legends',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for battle royale',
    category: 'Battle Royale',
  },
  {
    id: 11,
    name: 'Rocket League',
    platform: 'Xbox',
    platformIcon: '🎮',
    description: 'Audio cues for car control and positioning',
    category: 'Sports',
  },
  {
    id: 12,
    name: 'Among Us',
    platform: 'Mobile',
    platformIcon: '📱',
    description: 'Audio navigation for social deduction',
    category: 'Party',
  },
  {
    id: 13,
    name: 'Fall Guys',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio guidance for obstacle courses',
    category: 'Party',
  },
  {
    id: 14,
    name: 'Dead by Daylight',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for survivor and killer gameplay',
    category: 'Horror',
  },
  {
    id: 15,
    name: 'Rainbow Six Siege',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tactical gameplay',
    category: 'FPS',
  },
  {
    id: 16,
    name: 'Destiny 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for raids and strikes',
    category: 'RPG',
  },
  {
    id: 17,
    name: 'World of Warcraft',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio addons for MMO accessibility',
    category: 'MMO',
  },
  {
    id: 18,
    name: 'Counter-Strike 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for competitive play',
    category: 'FPS',
  },
  {
    id: 19,
    name: 'PUBG',
    platform: 'Mobile',
    platformIcon: '📱',
    description: 'Audio navigation for mobile battle royale',
    category: 'Battle Royale',
  },
  {
    id: 20,
    name: 'Hearthstone',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for card game strategy',
    category: 'Card',
  },
  {
    id: 21,
    name: 'The Last of Us',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio navigation for story-driven gameplay',
    category: 'Adventure',
  },
  {
    id: 22,
    name: 'God of War',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio cues for combat and exploration',
    category: 'Action',
  },
  {
    id: 23,
    name: 'Red Dead Redemption 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for western open world',
    category: 'Action',
  },
  {
    id: 24,
    name: 'Cyberpunk 2077',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for futuristic RPG',
    category: 'RPG',
  },
  {
    id: 25,
    name: 'Elden Ring',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for challenging combat',
    category: 'RPG',
  },
  {
    id: 26,
    name: 'Spider-Man',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio navigation for web-swinging',
    category: 'Action',
  },
  {
    id: 27,
    name: "Assassin's Creed",
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for stealth gameplay',
    category: 'Action',
  },
  {
    id: 28,
    name: 'Resident Evil',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for survival horror',
    category: 'Horror',
  },
  {
    id: 29,
    name: 'Street Fighter 6',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for fighting combos',
    category: 'Fighting',
  },
  {
    id: 30,
    name: 'Mortal Kombat',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for brutal combat',
    category: 'Fighting',
  },
  {
    id: 31,
    name: 'Super Smash Bros',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio feedback for platform fighting',
    category: 'Fighting',
  },
  {
    id: 32,
    name: 'Mario Kart',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio cues for racing gameplay',
    category: 'Racing',
  },
  {
    id: 33,
    name: 'Gran Turismo',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio feedback for realistic racing',
    category: 'Racing',
  },
  {
    id: 34,
    name: 'Forza Horizon',
    platform: 'Xbox',
    platformIcon: '🎮',
    description: 'Audio navigation for open-world racing',
    category: 'Racing',
  },
  {
    id: 35,
    name: 'Need for Speed',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for high-speed racing',
    category: 'Racing',
  },
  {
    id: 36,
    name: 'Animal Crossing',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio navigation for peaceful life sim',
    category: 'Simulation',
  },
  {
    id: 37,
    name: 'The Sims',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for life simulation',
    category: 'Simulation',
  },
  {
    id: 38,
    name: 'Stardew Valley',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for farming simulation',
    category: 'Simulation',
  },
  {
    id: 39,
    name: 'Cities: Skylines',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for city building',
    category: 'Strategy',
  },
  {
    id: 40,
    name: 'Civilization VI',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for turn-based strategy',
    category: 'Strategy',
  },
  {
    id: 41,
    name: 'Age of Empires',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for RTS gameplay',
    category: 'Strategy',
  },
  {
    id: 42,
    name: 'StarCraft',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for sci-fi strategy',
    category: 'Strategy',
  },
  {
    id: 43,
    name: 'Total War',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for historical battles',
    category: 'Strategy',
  },
  {
    id: 44,
    name: 'XCOM',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for tactical combat',
    category: 'Strategy',
  },
  {
    id: 45,
    name: 'Fire Emblem',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio feedback for tactical RPG',
    category: 'Strategy',
  },
  {
    id: 46,
    name: 'Pokemon',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio cues for monster battles',
    category: 'RPG',
  },
  {
    id: 47,
    name: 'Final Fantasy',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for JRPG storytelling',
    category: 'RPG',
  },
  {
    id: 48,
    name: 'Dragon Quest',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio cues for classic RPG',
    category: 'RPG',
  },
  {
    id: 49,
    name: 'Persona',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for social RPG',
    category: 'RPG',
  },
  {
    id: 50,
    name: 'The Witcher',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for fantasy RPG',
    category: 'RPG',
  },
  {
    id: 51,
    name: 'Skyrim',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for open-world fantasy',
    category: 'RPG',
  },
  {
    id: 52,
    name: 'Fallout',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for post-apocalyptic RPG',
    category: 'RPG',
  },
  {
    id: 53,
    name: 'Mass Effect',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for sci-fi RPG',
    category: 'RPG',
  },
  {
    id: 54,
    name: 'Dragon Age',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for fantasy RPG',
    category: 'RPG',
  },
  {
    id: 55,
    name: "Baldur's Gate",
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for D&D RPG',
    category: 'RPG',
  },
  {
    id: 56,
    name: 'Divinity',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tactical RPG',
    category: 'RPG',
  },
  {
    id: 57,
    name: 'Pillars of Eternity',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for isometric RPG',
    category: 'RPG',
  },
  {
    id: 58,
    name: 'Pathfinder',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tabletop RPG',
    category: 'RPG',
  },
  {
    id: 59,
    name: 'Disco Elysium',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for narrative RPG',
    category: 'RPG',
  },
  {
    id: 60,
    name: 'Outer Worlds',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for space RPG',
    category: 'RPG',
  },
  {
    id: 61,
    name: 'Outer Wilds',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for space exploration',
    category: 'Adventure',
  },
  {
    id: 62,
    name: 'Journey',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for meditative adventure',
    category: 'Adventure',
  },
  {
    id: 63,
    name: 'Gris',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for emotional platformer',
    category: 'Adventure',
  },
  {
    id: 64,
    name: 'Ori',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for metroidvania',
    category: 'Adventure',
  },
  {
    id: 65,
    name: 'Hollow Knight',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for challenging platformer',
    category: 'Adventure',
  },
  {
    id: 66,
    name: 'Celeste',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for precision platformer',
    category: 'Adventure',
  },
  {
    id: 67,
    name: 'Cuphead',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for boss rush platformer',
    category: 'Adventure',
  },
  {
    id: 68,
    name: 'Dead Cells',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for roguelike action',
    category: 'Adventure',
  },
  {
    id: 69,
    name: 'Hades',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for roguelike dungeon crawler',
    category: 'Adventure',
  },
  {
    id: 70,
    name: 'Slay the Spire',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for deck-building roguelike',
    category: 'Card',
  },
  {
    id: 71,
    name: 'Monster Train',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for deck-building strategy',
    category: 'Card',
  },
  {
    id: 72,
    name: 'Gwent',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for standalone card game',
    category: 'Card',
  },
  {
    id: 73,
    name: 'Magic: The Gathering',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for digital card game',
    category: 'Card',
  },
  {
    id: 74,
    name: 'Yu-Gi-Oh!',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for anime card game',
    category: 'Card',
  },
  {
    id: 75,
    name: 'Artifact',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for Dota card game',
    category: 'Card',
  },
  {
    id: 76,
    name: 'Legends of Runeterra',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for League card game',
    category: 'Card',
  },
  {
    id: 77,
    name: 'Gwent: Rogue Mage',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for single-player card game',
    category: 'Card',
  },
  {
    id: 78,
    name: 'Inscryption',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for horror card game',
    category: 'Card',
  },
  {
    id: 79,
    name: 'Stacklands',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for village-building card game',
    category: 'Card',
  },
  {
    id: 80,
    name: 'Vampire Survivors',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for survival action',
    category: 'Action',
  },
  {
    id: 81,
    name: 'Risk of Rain',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for roguelike action',
    category: 'Action',
  },
  {
    id: 82,
    name: 'Enter the Gungeon',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for bullet hell roguelike',
    category: 'Action',
  },
  {
    id: 83,
    name: 'Binding of Isaac',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for roguelike dungeon crawler',
    category: 'Action',
  },
  {
    id: 84,
    name: 'Spelunky',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for platformer roguelike',
    category: 'Adventure',
  },
  {
    id: 85,
    name: 'FTL',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for spaceship management',
    category: 'Strategy',
  },
  {
    id: 86,
    name: 'Into the Breach',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tactical mech combat',
    category: 'Strategy',
  },
  {
    id: 87,
    name: 'Darkest Dungeon',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for gothic roguelike',
    category: 'RPG',
  },
  {
    id: 88,
    name: 'Loop Hero',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for auto-battler roguelike',
    category: 'Strategy',
  },
  {
    id: 89,
    name: 'Griftlands',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for sci-fi roguelike',
    category: 'RPG',
  },
  {
    id: 90,
    name: 'Monster Sanctuary',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for monster collection RPG',
    category: 'RPG',
  },
  {
    id: 91,
    name: 'Temtem',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for monster collection MMO',
    category: 'MMO',
  },
  {
    id: 92,
    name: 'Palworld',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for monster survival',
    category: 'Survival',
  },
  {
    id: 93,
    name: 'ARK',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for dinosaur survival',
    category: 'Survival',
  },
  {
    id: 94,
    name: 'Rust',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for multiplayer survival',
    category: 'Survival',
  },
  {
    id: 95,
    name: 'DayZ',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for zombie survival',
    category: 'Survival',
  },
  {
    id: 96,
    name: '7 Days to Die',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for zombie crafting survival',
    category: 'Survival',
  },
  {
    id: 97,
    name: 'Subnautica',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for underwater survival',
    category: 'Survival',
  },
  {
    id: 98,
    name: 'The Forest',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for forest survival horror',
    category: 'Survival',
  },
  {
    id: 99,
    name: 'Green Hell',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for jungle survival',
    category: 'Survival',
  },
  {
    id: 100,
    name: 'Valheim',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for Viking survival',
    category: 'Survival',
  },
];

import { ref, computed } from 'vue';

const searchQuery = ref('');
const displayedToolkits = computed(() => {
  if (!searchQuery.value) {
    return toolkits.slice(0, 8);
  }
  return toolkits.filter(
    (toolkit) =>
      toolkit.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      toolkit.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      toolkit.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />

    <!-- Hero Section -->
    <div
      class="flex items-center md:items-start md:flex-row flex-col-reverse gap-x-5 py-8 my-5"
    >
      <div
        class="lg:w-6/12 w-full flex flex-col gap-y-4 items-center text-center md:text-left lg:text-center mx-auto"
      >
        <!-- Main Page Header -->
        <div class="px-5">
          <h1 class="studio-header">
            Mainstream Games, Made
            <span class="font-semibold text-primary-color">Accessible</span>
          </h1>
        </div>
        <div class="my-10 px-5">
          <p class="text-body text-xl mobile:text-[16px] leading-8">
            Blind players in
            <span class="font-semibold">136 countries</span>
            are enjoying top titles like Call of Duty, Minecraft, Valorant, and
            Roblox through our
            <span class="font-semibold">100+ accessibility toolkits.</span>
          </p>
        </div>
        <!-- Game Toolkit Stats: Flex Container -->
        <div
          class="flex justify-center items-center gap-10 mobile:flex-col mobile:gap-10"
        >
          <div class="text-center">
            <div class="text-3xl font-bold text-[#087BB4]">136</div>
            <div class="text-sm text-body">Countries reached</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#FE892A]">100+</div>
            <div class="text-sm text-body">Accessibility toolkits released</div>
          </div>
        </div>
      </div>
      <div
        class="lg:w-6/12 w-full my-10 md:my-0 mobile:py-5 md:py-24 lg:py-0 relative"
        aria-hidden="true"
      >
        <!-- Accessibility: Hide decorative SVG, icons, and images -->
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          class="z-0 absolute w-full h-[450px] md:h-[500px] lg:h-[500px] mobile:top-[-90px] top-0 lg:top-[-90px]"
        >
          <path
            fill="#e7f0f5"
            d="M29.9,-47.5C38,-41.3,43.1,-31.7,54.1,-20.9C65,-10,81.7,2.1,83.1,14C84.6,25.9,70.8,37.6,58.5,49.4C46.3,61.1,35.5,72.8,23.4,73.7C11.2,74.7,-2.5,64.8,-19.2,61.6C-35.9,58.5,-55.7,62,-67.6,54.9C-79.5,47.8,-83.4,30.2,-79.9,15.2C-76.4,0.1,-65.3,-12.3,-56.9,-24C-48.5,-35.7,-42.7,-46.6,-33.7,-52.3C-24.6,-57.9,-12.3,-58.4,-0.7,-57.3C10.9,-56.2,21.8,-53.6,29.9,-47.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <PageDecorations
          topRightImgPath="/assets/images/studio/sparkles.png"
          bottomLeftImgPath="/assets/images/studio/shooting-stars.png"
        />
        <img
          src="/src/assets/character/toolkit.png"
          alt=""
          class="z-10 w-[60%] sm:w-[45%] md:w-[50%] mx-auto rotate-[6rad] md:rotate-[0.20rad]"
        />
      </div>
    </div>
    <!-- Developer Partnerships Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-20 my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">Developer Partnerships</h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[800px] w-full overflow-hidden">
          <div class="logo-carousel mt-[40px] tablet:mt-[72px] mb-[63px]">
            <div class="logo-track">
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/activision.svg"
                  alt="Activision"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/microsoft.png"
                  alt="Microsoft"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/riot.png"
                  alt="Riot Games"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/roblox.png"
                  alt="Roblox"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/Minecraft-Logo.png"
                  alt="Minecraft"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <!-- Duplicate logos for seamless loop -->
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/activision.svg"
                  alt="Activision"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/microsoft.png"
                  alt="Microsoft"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/riot.png"
                  alt="Riot Games"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/roblox.png"
                  alt="Roblox"
                  class="h-16 w-auto object-contain"
                />
              </div>
              <div class="logo-slide">
                <img
                  src="/src/assets/logos/Minecraft-Logo.png"
                  alt="Minecraft"
                  class="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Toolkit Gallery Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-10 my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">Toolkit Gallery</h2>
      </div>
      <div class="flex justify-center">
        <div class="mobile:w-[310px] w-[85%]">
          <div
            class="grid mobile:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
          >
            <div
              v-for="toolkit in displayedToolkits.slice(0, 8)"
              :key="toolkit.id"
              class="relative bg-cross-lines border-2 border-[#0C0D0D] rounded-lg p-4 shadow-[4px_4px_0px_#0C0D0D] hover:shadow-[6px_6px_0px_#0C0D0D] transition-all duration-300"
            >
              <div class="studio-card-banner h-1/3" aria-hidden="true">
                <!-- Decorative card banner (empty) -->
              </div>
              <div class="flex items-center justify-between mb-3">
                <h3 class="z-50 text-[18px] font-[600] text-white">
                  {{ toolkit.name }}
                </h3>
                <span aria-hidden="true" class="z-50 text-2xl">{{
                  toolkit.platformIcon
                }}</span>
              </div>
              <p class="text-[14px] text-body mb-3">
                {{ toolkit.description }}
              </p>
              <div class="bg-[#E5F0F5] rounded px-2 py-1 inline-block">
                <span class="text-[12px] text-[#087BB4] font-[500]">{{
                  toolkit.category
                }}</span>
              </div>
            </div>
          </div>
          <div class="md:mx-auto flex justify-center items-center my-16 mx-10">
            <a
              href="#toolkit-database"
              class="studio-base-btn h-[70px] tablet:h-[60px] bg-primary-color text-white py-3 md:py-5"
            >
              View All Toolkits
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-10 my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">How it Works</h2>
      </div>
      <div class="flex justify-center">
        <div class="w-full">
          <div
            class="flex justify-between py-5 px-5 md:gap-x-10 lg:gap-x-24 mobile:gap-y-12 mobile:flex-col"
          >
            <!-- Step 1: Test -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card relative" aria-hidden="true">
                <img
                  src="/assets/images/game-toolkit/testing.png"
                  class="absolute w-[50px]"
                  alt=""
                />
              </div>
              <h3 class="studio-card-subtitle">We Test the Game</h3>
              <p class="text-center studio-card-caption">
                Real blind players & assistive tech experts explore game
                mechanics.
              </p>
            </div>
            <!-- Step 2: Build -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card relative" aria-hidden="true">
                <img
                  src="/assets/images/game-toolkit/toolkit.png"
                  class="absolute w-[50px]"
                  alt=""
                />
              </div>
              <h3 class="studio-card-subtitle">We Build the Toolkit</h3>
              <p class="text-center studio-card-caption">
                Audio guides, tactile maps, and adapted instructions.
              </p>
            </div>
            <!-- Step 3: Share -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card relative" aria-hidden="true">
                <img
                  src="/assets/images/game-toolkit/friends.png"
                  class="absolute w-[50px]"
                  alt=""
                />
              </div>
              <h3 class="studio-card-subtitle">We Share Globally</h3>
              <p class="text-center studio-card-caption">
                Free downloads for players and devs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div
      class="flex flex-col items-center justify-center mobile:justify-center w-full h-auto py-10 md:py-10 my-10"
    >
      <div class="w-full relative p-16">
        <PageDecorations
          topRightImgPath="/assets/images/game-toolkit/game-control.png"
          bottomLeftImgPath="/assets/images/game-toolkit/game-console.png"
        />
        <h2 class="studio-header">
          Ready to make gaming <br /><span
            class="font-semibold text-primary-color"
            >accessible?</span
          >
        </h2>
        <div
          class="md:mx-auto flex justify-center items-center my-16 mx-10 gap-y-10 flex-col md:flex-row md:gap-16"
        >
          <a
            href="#toolkit-database"
            class="studio-base-btn h-[70px] tablet:h-[60px] bg-[#FE892A] text-[#0D0C0C] mobile:px-5 py-3 md:py-5"
          >
            Download a Toolkit
          </a>
          <a
            href="/accessibility-studio"
            class="studio-base-btn h-[70px] tablet:h-[60px] bg-primary-color text-white py-3 md:py-5"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </div>

    <!-- Toolkit Database Section -->
    <div
      id="toolkit-database"
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-10 my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">Toolkit Database</h2>
      </div>

      <!-- Search Bar -->
      <div class="w-full md:w-[80%] mb-12">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for toolkits by game name, description, or category"
            class="w-full px-6 py-4 border-2 border-[#0C0D0D] rounded-lg text-[16px] focus:outline-none focus:border-[#087BB4] shadow-[4px_4px_0px_#0C0D0D]"
          />
          <div
            class="absolute right-4 top-1/2 transform -translate-y-1/2"
            aria-hidden="true"
          >
            <!-- Accessibility: Hide decorative search icon -->
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <!-- Toolkit Grid -->
      <div class="flex justify-center">
        <div class="mobile:w-[310px] w-[85%]">
          <div
            class="grid mobile:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
          >
            <div
              v-for="toolkit in displayedToolkits"
              :key="toolkit.id"
              class="relative bg-cross-lines border-2 border-[#0C0D0D] rounded-lg p-4 shadow-[4px_4px_0px_#0C0D0D] hover:shadow-[6px_6px_0px_#0C0D0D] transition-all duration-300"
            >
              <div class="studio-card-banner h-1/3" aria-hidden="true">
                <!-- Decorative card banner (empty) -->
              </div>
              <div class="flex items-center justify-between mb-3">
                <h3 class="z-50 text-[18px] font-[600] text-white">
                  {{ toolkit.name }}
                </h3>
                <span aria-hidden="true" class="text-2xl z-50">{{
                  toolkit.platformIcon
                }}</span>
              </div>
              <p class="text-[14px] text-body mb-3">
                {{ toolkit.description }}
              </p>
              <div class="bg-[#E5F0F5] rounded px-2 py-1 inline-block">
                <span class="text-[12px] text-[#087BB4] font-[500]">{{
                  toolkit.category
                }}</span>
              </div>
            </div>
          </div>

          <!-- Results Summary -->
          <div class="text-center">
            <p class="text-[18px] text-body mb-4">
              {{ displayedToolkits.length }} toolkits displayed out of our 100+
              games!
              <span
                v-if="!searchQuery && displayedToolkits.length === 8"
                class="text-[#087BB4] font-semibold"
              >
                Search to find your game
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
@media screen and (max-width: 450px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Logo Carousel Animation */
.logo-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.logo-track {
  display: flex;
  animation: scroll 20s linear infinite;
  width: max-content;
}

.logo-slide {
  flex-shrink: 0;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.logo-carousel:hover .logo-track {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .logo-slide {
    margin: 0 1rem;
    min-width: 100px;
  }

  .logo-track {
    animation-duration: 15s;
  }
}

@media (max-width: 600px) {
  .logo-slide {
    margin: 0 0.5rem;
    min-width: 80px;
  }

  .logo-track {
    animation-duration: 12s;
  }
}
</style>
