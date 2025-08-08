<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

// Sample toolkit data - in a real app, this would come from an API
const toolkits = [
  {
    id: 1,
    name: 'Call of Duty',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation system for multiplayer maps',
    category: 'FPS'
  },
  {
    id: 2,
    name: 'Minecraft',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Blind-friendly crafting guide and audio cues',
    category: 'Sandbox'
  },
  {
    id: 3,
    name: 'Valorant',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback system for ability usage',
    category: 'FPS'
  },
  {
    id: 4,
    name: 'Roblox',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Accessible navigation for popular games',
    category: 'Platform'
  },
  {
    id: 5,
    name: 'FIFA 23',
    platform: 'Xbox',
    platformIcon: '🎮',
    description: 'Audio commentary and menu navigation',
    category: 'Sports'
  },
  {
    id: 6,
    name: 'Fortnite',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio building and combat assistance',
    category: 'Battle Royale'
  },
  {
    id: 7,
    name: 'GTA V',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio navigation for open world exploration',
    category: 'Action'
  },
  {
    id: 8,
    name: 'League of Legends',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for ability management',
    category: 'MOBA'
  },
  {
    id: 9,
    name: 'Overwatch 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Hero ability audio feedback system',
    category: 'FPS'
  },
  {
    id: 10,
    name: 'Apex Legends',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for battle royale',
    category: 'Battle Royale'
  },
  {
    id: 11,
    name: 'Rocket League',
    platform: 'Xbox',
    platformIcon: '🎮',
    description: 'Audio cues for car control and positioning',
    category: 'Sports'
  },
  {
    id: 12,
    name: 'Among Us',
    platform: 'Mobile',
    platformIcon: '📱',
    description: 'Audio navigation for social deduction',
    category: 'Party'
  },
  {
    id: 13,
    name: 'Fall Guys',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio guidance for obstacle courses',
    category: 'Party'
  },
  {
    id: 14,
    name: 'Dead by Daylight',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for survivor and killer gameplay',
    category: 'Horror'
  },
  {
    id: 15,
    name: 'Rainbow Six Siege',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tactical gameplay',
    category: 'FPS'
  },
  {
    id: 16,
    name: 'Destiny 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for raids and strikes',
    category: 'RPG'
  },
  {
    id: 17,
    name: 'World of Warcraft',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio addons for MMO accessibility',
    category: 'MMO'
  },
  {
    id: 18,
    name: 'Counter-Strike 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for competitive play',
    category: 'FPS'
  },
  {
    id: 19,
    name: 'PUBG',
    platform: 'Mobile',
    platformIcon: '📱',
    description: 'Audio navigation for mobile battle royale',
    category: 'Battle Royale'
  },
  {
    id: 20,
    name: 'Hearthstone',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for card game strategy',
    category: 'Card'
  },
  {
    id: 21,
    name: 'The Last of Us',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio navigation for story-driven gameplay',
    category: 'Adventure'
  },
  {
    id: 22,
    name: 'God of War',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio cues for combat and exploration',
    category: 'Action'
  },
  {
    id: 23,
    name: 'Red Dead Redemption 2',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for western open world',
    category: 'Action'
  },
  {
    id: 24,
    name: 'Cyberpunk 2077',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for futuristic RPG',
    category: 'RPG'
  },
  {
    id: 25,
    name: 'Elden Ring',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for challenging combat',
    category: 'RPG'
  },
  {
    id: 26,
    name: 'Spider-Man',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio navigation for web-swinging',
    category: 'Action'
  },
  {
    id: 27,
    name: 'Assassin\'s Creed',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for stealth gameplay',
    category: 'Action'
  },
  {
    id: 28,
    name: 'Resident Evil',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for survival horror',
    category: 'Horror'
  },
  {
    id: 29,
    name: 'Street Fighter 6',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for fighting combos',
    category: 'Fighting'
  },
  {
    id: 30,
    name: 'Mortal Kombat',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for brutal combat',
    category: 'Fighting'
  },
  {
    id: 31,
    name: 'Super Smash Bros',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio feedback for platform fighting',
    category: 'Fighting'
  },
  {
    id: 32,
    name: 'Mario Kart',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio cues for racing gameplay',
    category: 'Racing'
  },
  {
    id: 33,
    name: 'Gran Turismo',
    platform: 'PS5',
    platformIcon: '🎮',
    description: 'Audio feedback for realistic racing',
    category: 'Racing'
  },
  {
    id: 34,
    name: 'Forza Horizon',
    platform: 'Xbox',
    platformIcon: '🎮',
    description: 'Audio navigation for open-world racing',
    category: 'Racing'
  },
  {
    id: 35,
    name: 'Need for Speed',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for high-speed racing',
    category: 'Racing'
  },
  {
    id: 36,
    name: 'Animal Crossing',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio navigation for peaceful life sim',
    category: 'Simulation'
  },
  {
    id: 37,
    name: 'The Sims',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for life simulation',
    category: 'Simulation'
  },
  {
    id: 38,
    name: 'Stardew Valley',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for farming simulation',
    category: 'Simulation'
  },
  {
    id: 39,
    name: 'Cities: Skylines',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for city building',
    category: 'Strategy'
  },
  {
    id: 40,
    name: 'Civilization VI',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for turn-based strategy',
    category: 'Strategy'
  },
  {
    id: 41,
    name: 'Age of Empires',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for RTS gameplay',
    category: 'Strategy'
  },
  {
    id: 42,
    name: 'StarCraft',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for sci-fi strategy',
    category: 'Strategy'
  },
  {
    id: 43,
    name: 'Total War',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for historical battles',
    category: 'Strategy'
  },
  {
    id: 44,
    name: 'XCOM',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for tactical combat',
    category: 'Strategy'
  },
  {
    id: 45,
    name: 'Fire Emblem',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio feedback for tactical RPG',
    category: 'Strategy'
  },
  {
    id: 46,
    name: 'Pokemon',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio cues for monster battles',
    category: 'RPG'
  },
  {
    id: 47,
    name: 'Final Fantasy',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for JRPG storytelling',
    category: 'RPG'
  },
  {
    id: 48,
    name: 'Dragon Quest',
    platform: 'Switch',
    platformIcon: '🎮',
    description: 'Audio cues for classic RPG',
    category: 'RPG'
  },
  {
    id: 49,
    name: 'Persona',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for social RPG',
    category: 'RPG'
  },
  {
    id: 50,
    name: 'The Witcher',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio navigation for fantasy RPG',
    category: 'RPG'
  },
  {
    id: 51,
    name: 'Skyrim',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for open-world fantasy',
    category: 'RPG'
  },
  {
    id: 52,
    name: 'Fallout',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for post-apocalyptic RPG',
    category: 'RPG'
  },
  {
    id: 53,
    name: 'Mass Effect',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for sci-fi RPG',
    category: 'RPG'
  },
  {
    id: 54,
    name: 'Dragon Age',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for fantasy RPG',
    category: 'RPG'
  },
  {
    id: 55,
    name: 'Baldur\'s Gate',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for D&D RPG',
    category: 'RPG'
  },
  {
    id: 56,
    name: 'Divinity',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tactical RPG',
    category: 'RPG'
  },
  {
    id: 57,
    name: 'Pillars of Eternity',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for isometric RPG',
    category: 'RPG'
  },
  {
    id: 58,
    name: 'Pathfinder',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tabletop RPG',
    category: 'RPG'
  },
  {
    id: 59,
    name: 'Disco Elysium',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for narrative RPG',
    category: 'RPG'
  },
  {
    id: 60,
    name: 'Outer Worlds',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for space RPG',
    category: 'RPG'
  },
  {
    id: 61,
    name: 'Outer Wilds',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for space exploration',
    category: 'Adventure'
  },
  {
    id: 62,
    name: 'Journey',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for meditative adventure',
    category: 'Adventure'
  },
  {
    id: 63,
    name: 'Gris',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for emotional platformer',
    category: 'Adventure'
  },
  {
    id: 64,
    name: 'Ori',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for metroidvania',
    category: 'Adventure'
  },
  {
    id: 65,
    name: 'Hollow Knight',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for challenging platformer',
    category: 'Adventure'
  },
  {
    id: 66,
    name: 'Celeste',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for precision platformer',
    category: 'Adventure'
  },
  {
    id: 67,
    name: 'Cuphead',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for boss rush platformer',
    category: 'Adventure'
  },
  {
    id: 68,
    name: 'Dead Cells',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for roguelike action',
    category: 'Adventure'
  },
  {
    id: 69,
    name: 'Hades',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for roguelike dungeon crawler',
    category: 'Adventure'
  },
  {
    id: 70,
    name: 'Slay the Spire',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for deck-building roguelike',
    category: 'Card'
  },
  {
    id: 71,
    name: 'Monster Train',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for deck-building strategy',
    category: 'Card'
  },
  {
    id: 72,
    name: 'Gwent',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for standalone card game',
    category: 'Card'
  },
  {
    id: 73,
    name: 'Magic: The Gathering',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for digital card game',
    category: 'Card'
  },
  {
    id: 74,
    name: 'Yu-Gi-Oh!',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for anime card game',
    category: 'Card'
  },
  {
    id: 75,
    name: 'Artifact',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for Dota card game',
    category: 'Card'
  },
  {
    id: 76,
    name: 'Legends of Runeterra',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for League card game',
    category: 'Card'
  },
  {
    id: 77,
    name: 'Gwent: Rogue Mage',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for single-player card game',
    category: 'Card'
  },
  {
    id: 78,
    name: 'Inscryption',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for horror card game',
    category: 'Card'
  },
  {
    id: 79,
    name: 'Stacklands',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for village-building card game',
    category: 'Card'
  },
  {
    id: 80,
    name: 'Vampire Survivors',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for survival action',
    category: 'Action'
  },
  {
    id: 81,
    name: 'Risk of Rain',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for roguelike action',
    category: 'Action'
  },
  {
    id: 82,
    name: 'Enter the Gungeon',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for bullet hell roguelike',
    category: 'Action'
  },
  {
    id: 83,
    name: 'Binding of Isaac',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for roguelike dungeon crawler',
    category: 'Action'
  },
  {
    id: 84,
    name: 'Spelunky',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for platformer roguelike',
    category: 'Adventure'
  },
  {
    id: 85,
    name: 'FTL',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for spaceship management',
    category: 'Strategy'
  },
  {
    id: 86,
    name: 'Into the Breach',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for tactical mech combat',
    category: 'Strategy'
  },
  {
    id: 87,
    name: 'Darkest Dungeon',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for gothic roguelike',
    category: 'RPG'
  },
  {
    id: 88,
    name: 'Loop Hero',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for auto-battler roguelike',
    category: 'Strategy'
  },
  {
    id: 89,
    name: 'Griftlands',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for sci-fi roguelike',
    category: 'RPG'
  },
  {
    id: 90,
    name: 'Monster Sanctuary',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for monster collection RPG',
    category: 'RPG'
  },
  {
    id: 91,
    name: 'Temtem',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for monster collection MMO',
    category: 'MMO'
  },
  {
    id: 92,
    name: 'Palworld',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for monster survival',
    category: 'Survival'
  },
  {
    id: 93,
    name: 'ARK',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for dinosaur survival',
    category: 'Survival'
  },
  {
    id: 94,
    name: 'Rust',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for multiplayer survival',
    category: 'Survival'
  },
  {
    id: 95,
    name: 'DayZ',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for zombie survival',
    category: 'Survival'
  },
  {
    id: 96,
    name: '7 Days to Die',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for zombie crafting survival',
    category: 'Survival'
  },
  {
    id: 97,
    name: 'Subnautica',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for underwater survival',
    category: 'Survival'
  },
  {
    id: 98,
    name: 'The Forest',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for forest survival horror',
    category: 'Survival'
  },
  {
    id: 99,
    name: 'Green Hell',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio cues for jungle survival',
    category: 'Survival'
  },
  {
    id: 100,
    name: 'Valheim',
    platform: 'PC',
    platformIcon: '🖥️',
    description: 'Audio feedback for Viking survival',
    category: 'Survival'
  }
];

import { ref, computed } from 'vue';

const searchQuery = ref('');
const displayedToolkits = computed(() => {
  if (!searchQuery.value) {
    return toolkits.slice(0, 8);
  }
  return toolkits.filter(toolkit => 
    toolkit.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    toolkit.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    toolkit.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <ScrollUpButton />

  <div
    :class="[
      'relative',
      !isTablet && !isMobile ? 'px-14' : '',
      isTablet ? 'px-6' : '',
      isMobile ? 'px-8' : '',
    ]"
    ref="content"
  >
    <Header :logoPath="'/assets/images/header/toolkit.png'" />
    
    <!-- Hero Section -->
    <div class="flex items-center mobile:flex-col-reverse gap-x-6 py-8 mt-20">
      <div
        class="w-6/12 mobile:w-full flex flex-col gap-y-4 mobile:items-center mobile:text-center"
      >
        <div class="font-poppins">
          <h1
            class="text-4xl tablet:text-[24px] mobile:text-[24px] leading-normal text-title font-poppins"
          >
            Mainstream Games, Made Accessible
          </h1>
        </div>

        <div>
          <p
            class="font-poppins text-body text-xl mobile:text-[16px] max-w-md leading-8"
          >
            Blind players in 136 countries are enjoying top titles like Call of Duty, Minecraft, Valorant, and Roblox through our 100+ accessibility toolkits.
          </p>
        </div>

        <div class="flex gap-8 mobile:flex-col mobile:gap-4">
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
      <div class="w-4/12 mobile:w-full mobile:mb-14">
        <img
          src="/src/assets/character/toolkit.png"
          alt="Game Toolkit illustration"
          class="z-7 w-50"
        />
      </div>
    </div>
 <!-- Developer Partnerships Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          Developer Partnerships
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[800px] w-full overflow-hidden">
          <div class="logo-carousel mt-[40px] tablet:mt-[72px] mb-[63px]">
            <div class="logo-track">
              <div class="logo-slide">
                <img src="/src/assets/logos/activision.svg" alt="Activision" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/microsoft.png" alt="Microsoft" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/riot.png" alt="Riot Games" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/roblox.png" alt="Roblox" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/Minecraft-Logo.png" alt="Minecraft" class="h-16 w-auto object-contain" />
              </div>
              <!-- Duplicate logos for seamless loop -->
              <div class="logo-slide">
                <img src="/src/assets/logos/activision.svg" alt="Activision" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/microsoft.png" alt="Microsoft" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/riot.png" alt="Riot Games" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/roblox.png" alt="Roblox" class="h-16 w-auto object-contain" />
              </div>
              <div class="logo-slide">
                <img src="/src/assets/logos/Minecraft-Logo.png" alt="Minecraft" class="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    <!-- Toolkit Gallery Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          Toolkit Gallery
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[1200px] w-full">
          <div class="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-6 mt-[40px] tablet:mt-[72px] mb-[63px]">
            <div
              v-for="toolkit in displayedToolkits.slice(0, 8)"
              :key="toolkit.id"
              class="bg-white border-2 border-[#0C0D0D] rounded-lg p-4 shadow-[4px_4px_0px_#0C0D0D] hover:shadow-[6px_6px_0px_#0C0D0D] transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-poppins text-[18px] font-[600] text-[#151E22]">{{ toolkit.name }}</h3>
                <span class="text-2xl">{{ toolkit.platformIcon }}</span>
              </div>
              <p class="font-poppins text-[14px] text-body mb-3">{{ toolkit.description }}</p>
              <div class="bg-[#E5F0F5] rounded px-2 py-1 inline-block">
                <span class="font-poppins text-[12px] text-[#087BB4] font-[500]">{{ toolkit.category }}</span>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              href="#toolkit-database"
              class="font-poppins font-semibold px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D]"
            >
              View All Toolkits
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          How It Works
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-16 tablet:gap-14 mobile:gap-4 mobile:flex-col">
            <!-- Step 1 -->
            <div class="w-4/12 mobile:w-full flex flex-col items-center text-center">
              <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#087BB4]">
                <span class="text-white text-2xl font-bold">🎮</span>
              </div>
              <h3 class="text-center text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-4">
                We Test the Game
              </h3>
              <p class="text-center text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                Real blind players & assistive tech experts explore game mechanics.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="w-4/12 mobile:w-full flex flex-col items-center text-center">
              <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#FE892A]">
                <span class="text-white text-2xl font-bold">🔧</span>
              </div>
              <h3 class="text-center text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-4">
                We Build the Toolkit
              </h3>
              <p class="text-center text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                Audio guides, tactile maps, and adapted instructions.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="w-4/12 mobile:w-full flex flex-col items-center text-center">
              <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#06C270]">
                <span class="text-white text-2xl font-bold">🌍</span>
              </div>
              <h3 class="text-center text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-4">
                We Share Globally
              </h3>
              <p class="text-center text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                Free downloads for players and devs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

   

    <!-- Call to Action Section -->
    <div class="mobile:min-w-full tablet:min-w-[504px] mx-auto bg-white mobile:mb-12">
      <div class="max-w-[504px] mobile:max-w-[358px] mx-auto pb-[78px]">
        <h1
          class="font-poppins text-[40px] tablet:text-[32px] leading-[60px] tablet:leading-[60px] text-center text-[#151E22]"
        >
          Ready to make gaming accessible?
        </h1>
        <div
          class="flex mobile:flex-col justify-between mobile:gap-[20px] mobile:mx-[16px] items-center mt-8"
        >
          <a
            href="#toolkit-database"
            class="font-poppins font-[600] w-[236.07px] mobile:w-full h-[56px] leading-[56px] tablet:h-[60px] tablet:leading-[60px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] text-[16px] text-center text-white shadow-[4px_4px_0px_#0C0D0D]"
          >
            Download a Toolkit
          </a>
          <a
            href="/accessibility-studio"
            class="font-poppins font-[600] w-[236.07px] mobile:w-full h-[56px] leading-[56px] tablet:h-[60px] tablet:leading-[60px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#FE892A] hover:bg-[#D6711F] text-[16px] text-center text-[#0D0C0C] shadow-[4px_4px_0px_#0C0D0D]"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </div>

    <!-- Toolkit Database Section -->
    <div id="toolkit-database" class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          Toolkit Database
        </h2>
      </div>
      
      <!-- Search Bar -->
      <div class="max-w-[600px] w-full mb-12">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for toolkits by game name, description, or category..."
            class="w-full px-6 py-4 border-2 border-[#0C0D0D] rounded-lg font-poppins text-[16px] focus:outline-none focus:border-[#087BB4] shadow-[4px_4px_0px_#0C0D0D]"
          />
          <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
            <span class="text-2xl">🔍</span>
          </div>
        </div>
      </div>

      <!-- Toolkit Grid -->
      <div class="flex justify-center">
        <div class="max-w-[1200px] w-full">
          <div class="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-6 mb-8">
            <div
              v-for="toolkit in displayedToolkits"
              :key="toolkit.id"
              class="bg-white border-2 border-[#0C0D0D] rounded-lg p-4 shadow-[4px_4px_0px_#0C0D0D] hover:shadow-[6px_6px_0px_#0C0D0D] transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-poppins text-[18px] font-[600] text-[#151E22]">{{ toolkit.name }}</h3>
                <span class="text-2xl">{{ toolkit.platformIcon }}</span>
              </div>
              <p class="font-poppins text-[14px] text-body mb-3">{{ toolkit.description }}</p>
              <div class="bg-[#E5F0F5] rounded px-2 py-1 inline-block">
                <span class="font-poppins text-[12px] text-[#087BB4] font-[500]">{{ toolkit.category }}</span>
              </div>
            </div>
          </div>
          
                     <!-- Results Summary -->
           <div class="text-center">
             <p class="font-poppins text-[18px] text-body mb-4">
               {{ displayedToolkits.length }} toolkits displayed out of our 100+ games!
               <span v-if="!searchQuery && displayedToolkits.length === 8" class="text-[#087BB4] font-semibold">
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