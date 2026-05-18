import { useCarCounting } from '../composables/useCarCounting';

export const gameConfigs = {
  addition: {
    title: 'Animal Addition',
    description: 'Add up the animals!',
    bgColor: '#F8C9E4', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/giraffe.png',
    introAudio: '/gameIntroAudio/additionIntro.mp3',
    dbFile: 'additionDB.json',
    dbKey: 'AdditionGame',
    category: 'math',
  },

  carCounting: {
    title: 'Car Counting',
    description: 'How many cars are passing by?',
    bgColor: '#F8F2C9', // Light Yellow
    iconSrc: '/assets/gameImages/buttons/gameButtons/new-car.png',
    introAudio: '/gameIntroAudio/carCountIntro.mp3',
    dbFile: '', // Special case: Game Qs generated via useCarCounting.js
    dbKey: '',
    category: 'math',
    usesCustomLogic: true,
    showAnswerOnly: true,
    customLogic: useCarCounting,
  },

  colorGame: {
    title: 'Color Game',
    description: 'Name the color of a given object!',
    bgColor: '#EACAFF', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/paint-brush.png',
    introAudio: '/gameIntroAudio/colorIntro.mp3',
    dbFile: 'crazyColorsDB.json',
    dbKey: 'ColorQuizGame',
    category: 'language',
  },

  definitionDetective: {
    title: 'Definition Detective',
    description: 'Find the correct word based on the definition.',
    bgColor: '#c3deff', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/detective.png',
    introAudio: '/gameIntroAudio/definitionIntro.mp3',
    dbFile: 'definitionDetectiveDB.json',
    dbKey: 'DefinitionDetectiveGame',
    category: 'language',
  },

  division: {
    title: 'Division Duel',
    description: 'Divide the given numbers!',
    bgColor: '#e1f7d5', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/pie-chart.png',
    introAudio: '/gameIntroAudio/divIntro.mp3',
    dbFile: 'divisionDB.json',
    dbKey: 'DivisionGame',
    category: 'math',
  },

  fruitFrenzy: {
    title: 'Fruit Frenzy',
    description: 'How many total fruits are there?',
    bgColor: '#FFCCCB', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/tropical-fruit.png',
    introAudio: '/gameIntroAudio/fruitIntro.mp3',
    dbFile: 'fruitFrenzyDB.json',
    dbKey: 'FruitFrenzy',
    category: 'math',
  },

  monkeyMadness: {
    title: 'Monkey Madness',
    description: 'Help the monkeys split their bananas!',
    bgColor: '#FFCCCB', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/new-monkey.png',
    introAudio: '/gameIntroAudio/monkeyIntro.mp3',
    dbFile: 'monkeyMadnessDB.json',
    dbKey: 'MonkeyMadnessGame',
    category: 'math',
  },

  multiplication: {
    title: 'Multiplication Madness',
    description: 'Can you multiply numbers?',
    bgColor: '#E5D9F2', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/mul.svg',
    introAudio: '/gameIntroAudio/multiplicationIntro.mp3',
    dbFile: 'multiplicationDB.json',
    dbKey: 'MultiplicationGame',
    category: 'math',
  },

  oddOneOut: {
    title: 'Odd One Out',
    description: "Can you find what doesn't belong?",
    bgColor: '#FFE5E5', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/odd-one-out.png',
    introAudio: '/gameIntroAudio/oddOneOutIntro.mp3',
    dbFile: 'oddOneOutDB.json',
    dbKey: 'OddOneOutGame',
    category: 'language',
  },

  partOfSpeech: {
    title: 'Part of Speech',
    description: 'Noun, verb, or adjective?',
    bgColor: '#e1f7d5', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/chat-bubble.png',
    introAudio: '/gameIntroAudio/partOfSpeechIntro.mp3',
    dbFile: 'partOfSpeechDB.json',
    dbKey: 'PartOfSpeechGame',
    category: 'language',
  },

  polarPairing: {
    title: 'Polar Pairing',
    description: 'Test your vocabulary with polar opposites.',
    bgColor: '#fed7aa', // Light Orange
    iconSrc: '/assets/gameImages/buttons/gameButtons/magnet.png',
    introAudio: '/gameIntroAudio/polarIntro.mp3',
    dbFile: 'polarPairingDB.json',
    dbKey: 'PolarPairingGame',
    category: 'language',
  },

  shapeShark: {
    title: 'Shape Shark',
    description: 'Identify the shape based on its sides.',
    bgColor: '#c3deff', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/new-shark.png',
    introAudio: '/gameIntroAudio/shapeIntro.mp3',
    dbFile: 'shapeSharkDB.json',
    dbKey: 'ShapeSharkGame',
    category: 'math',
  },

  spellingBee: {
    title: 'Spelling Bee',
    description: 'Buzz your way to spelling mastery!',
    bgColor: '#F8F2C9', // Light cream
    iconSrc: '/assets/gameImages/buttons/gameButtons/bee.png',
    introAudio: '/gameIntroAudio/spellingIntro.mp3',
    dbFile: 'spellingBeeDB.json',
    dbKey: 'SpellingBeeGame',
    category: 'language',
    validationType: 'spelling',
  },

  subtraction: {
    title: 'Subtraction Safari',
    description: 'Subtract animals in safari scenarios!',
    bgColor: '#C6E7FF', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/subtract-pie.png',
    introAudio: '/gameIntroAudio/subtractionIntro.mp3',
    dbFile: 'subtractionDB.json',
    dbKey: 'SubtractionGame',
    category: 'math',
  },

  syllableSorting: {
    title: 'Syllable Sorting',
    description: 'Can you count the syllables in a given word?',
    bgColor: '#BCC5FF', // Light Periwinkle
    iconSrc: '/assets/gameImages/buttons/gameButtons/syllable-sorting.png',
    introAudio: '/gameIntroAudio/syllableIntro.mp3',
    dbFile: 'syllableGameDB.json',
    dbKey: 'SyllableCountingGame',
    category: 'language',
  },

  vocab: {
    title: 'Vocabulary Vortex',
    description:
      'Dive into the vocabulary vortex and match the word to its definition.',
    bgColor: '#FFCCCB', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/dictionary.png',
    introAudio: '/gameIntroAudio/vortexIntro.mp3',
    dbFile: 'vocabVortexDB.json',
    dbKey: 'VocabVortexGame',
    category: 'language',
  },

  // --- SCIENCE GAME CONFIGS ---

  matterMixUp: {
    title: 'Matter Mix-Up',
    description:
      'Help identify solids, liquids, and gases before they evaporate!',
    bgColor: '#C9E4F8', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/icicles.png',
    introAudio: '/gameIntroAudio/matterIntro.m4a',
    bgmAudio: '/bgmAudio/happy-kids.mp3',
    dbFile: 'matterMixUpDB.json',
    dbKey: 'MatterMixUpGame',
    category: 'science',
  },

  tinyCellTown: {
    title: 'Tiny Cell Town',
    description: 'Guide an alien through the microscopic city of a human cell.',
    bgColor: '#a7f3d0', // Mint Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/cells.png',
    introAudio: '/gameIntroAudio/cellIntro.m4a',
    bgmAudio: '/bgmAudio/another-happy-kids.mp3',
    dbFile: 'tinyCellTownDB.json',
    dbKey: 'TinyCellTownGame',
    category: 'science',
  },

  weatherWhiz: {
    title: 'Weather Whiz',
    description:
      "Interpret the sky's mood swings before the thunder has a tantrum.",
    bgColor: '#E4C9F8', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/season.png',
    introAudio: '/gameIntroAudio/weatherIntro.m4a',
    bgmAudio: '/bgmAudio/penguin.mp3',
    dbFile: 'weatherWhizDB.json',
    dbKey: 'WeatherWhizGame',
    category: 'science',
  },

  spaceCase: {
    title: 'Space Case',
    description: 'Help a forgetful astronaut remember basic facts about space.',
    bgColor: '#efdcff', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/space-case.png',
    introAudio: '/gameIntroAudio/spaceIntro.m4a',
    bgmAudio: '/bgmAudio/abstract-beauty.mp3',
    dbFile: 'spaceCaseDB.json',
    dbKey: 'SpaceCaseGame',
    category: 'science',
  },

  dinoDetectives: {
    title: 'Dino Detectives',
    description: 'Use clues from bones and roars to identify ancient beasts.',
    bgColor: '#DCC3A1', // Tan
    iconSrc: '/assets/gameImages/buttons/gameButtons/dino-detectives.png',
    introAudio: '/gameIntroAudio/dinoIntro.m4a',
    bgmAudio: '/bgmAudio/creative-technology.mp3',
    dbFile: 'dinoDetectivesDB.json',
    dbKey: 'DinoDetectivesGame',
    category: 'science',
  },

  germSquad: {
    title: 'Germ Squad',
    description:
      'Name the culprits behind a fever before the party gets out of hand.',
    bgColor: '#FFC5C5', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/germ.png',
    introAudio: '/gameIntroAudio/germIntro.m4a',
    bgmAudio: '/bgmAudio/happy.mp3',
    dbFile: 'germSquadDB.json',
    dbKey: 'GermSquadGame',
    category: 'science',
  },

  ecoRangers: {
    title: 'Eco Rangers',
    description:
      'Identify environmental threats and help restore balance to nature.',
    bgColor: '#A2EAB8', // Mint Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/earth.png',
    introAudio: '/gameIntroAudio/ecoIntro.m4a',
    bgmAudio: '/bgmAudio/chasing-sunshine.mp3',
    dbFile: 'ecoRangersDB.json',
    dbKey: 'EcoRangersGame',
    category: 'science',
  },

  soundExplorer: {
    title: 'Sound Explorer',
    description: 'Measure and decode sound waves to escape an echoing cave.',
    bgColor: '#fed7aa', // Light Orange
    iconSrc: '/assets/gameImages/buttons/gameButtons/sound.png',
    introAudio: '/gameIntroAudio/soundIntro.m4a',
    bgmAudio: '/bgmAudio/happy-kids.mp3',
    dbFile: 'soundExplorerDB.json',
    dbKey: 'SoundExplorerGame',
    category: 'science',
  },

  robotRepair: {
    title: 'Robot Repair Lab',
    description:
      'Reprogram glitching science robots before they short-circuit the lab.',
    bgColor: '#C9E4F8', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/new-robot.png',
    introAudio: '/gameIntroAudio/robotIntro.m4a',
    bgmAudio: '/bgmAudio/another-happy-kids.mp3',
    dbFile: 'robotRepairLabDB.json',
    dbKey: 'RobotRepairGame',
    category: 'science',
  },

  plantPower: {
    title: 'Plant Power',
    description:
      'Learn the parts of a plant by listening to their whispered secrets.',
    bgColor: '#FFE59A', // Light Yellow
    iconSrc: '/assets/gameImages/buttons/gameButtons/flower-pot.png',
    introAudio: '/gameIntroAudio/plantIntro.m4a',
    bgmAudio: '/bgmAudio/penguin.mp3',
    dbFile: 'plantPowerDB.json',
    dbKey: 'PlantPowerGame',
    category: 'science',
  },

  // --- LIFE SKILLS GAME CONFIGS ---

  groceryGrab: {
    title: 'Grocery Grab',
    description:
      'Listen to each item and help it find the right spot in the store.',
    bgColor: '#FFDDC1', // Light Peach
    iconSrc: '/assets/gameImages/buttons/gameButtons/healthy-food.png',
    introAudio: '/gameIntroAudio/groceryIntro.m4a',
    bgmAudio: '/bgmAudio/abstract-beauty.mp3',
    dbFile: 'groceryGrabDB.json',
    dbKey: 'GroceryGrabGame',
    category: 'life-skills',
  },

  moneyMatch: {
    title: 'Money Match',
    description: 'Match the right coins and bills to pay for your items.',
    bgColor: '#D4EDD4', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/money.png',
    introAudio: '/gameIntroAudio/moneyMatchIntro.m4a',
    bgmAudio: '/bgmAudio/creative-technology.mp3',
    dbFile: 'moneyMatchDB.json',
    dbKey: 'MoneyMatchGame',
    category: 'life-skills',
  },

  laundryLegend: {
    title: 'Laundry Legend',
    description:
      'Sort and start your laundry while the machines try to outsmart you.',
    bgColor: '#C9E4F8', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/new-laundry.png',
    introAudio: '/gameIntroAudio/laundryIntro.m4a',
    bgmAudio: '/bgmAudio/happy.mp3',
    dbFile: 'laundryLegendDB.json',
    dbKey: 'LaundryLegendGame',
    category: 'life-skills',
  },

  kitchenCues: {
    title: 'Kitchen Cues',
    description:
      'Identify tools and follow recipes using only sound and smell.',
    bgColor: '#F8C9C9', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/kitchen.png',
    introAudio: '/gameIntroAudio/kitchenCuesIntro.m4a',
    bgmAudio: '/bgmAudio/chasing-sunshine.mp3',
    dbFile: 'kitchenCuesDB.json',
    dbKey: 'KitchenCuesGame',
    category: 'life-skills',
  },

  dressToImpress: {
    title: 'Dress to Impress',
    description: 'Choose the right outfit based on the weather forecast.',
    bgColor: '#F8EAC9', // Light Yellow
    iconSrc: '/assets/gameImages/buttons/gameButtons/clothes.png',
    introAudio: '/gameIntroAudio/dressIntro.m4a',
    bgmAudio: '/bgmAudio/happy-kids.mp3',
    dbFile: 'dressToImpressDB.json',
    dbKey: 'DressToImpressGame',
    category: 'life-skills',
  },

  safetySirens: {
    title: 'Safety Sirens',
    description:
      'From fire alarms to bumping your knee, learn the safest move.',
    bgColor: '#F8C9E4', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/siren.png',
    introAudio: '/gameIntroAudio/safetyIntro.m4a',
    bgmAudio: '/bgmAudio/another-happy-kids.mp3',
    dbFile: 'safetySirensDB.json',
    dbKey: 'SafetySirensGame',
    category: 'life-skills',
  },

  scheduleShuffle: {
    title: 'Schedule Shuffle',
    description: 'Piece your day back together with clues from talking clocks.',
    bgColor: '#C9F8E4', // Light Teal
    iconSrc: '/assets/gameImages/buttons/gameButtons/deadline.png',
    introAudio: '/gameIntroAudio/scheduleIntro.m4a',
    bgmAudio: '/bgmAudio/penguin.mp3',
    dbFile: 'scheduleShuffleDB.json',
    dbKey: 'ScheduleShuffleGame',
    category: 'life-skills',
  },

  cleanMachine: {
    title: 'Clean Machine',
    description: 'Grab your tools and tidy up before the clutter takes over.',
    bgColor: '#E5D9F2', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/chores.png',
    introAudio: '/gameIntroAudio/cleanMachineIntro.m4a',
    bgmAudio: '/bgmAudio/abstract-beauty.mp3',
    dbFile: 'cleanMachineDB.json',
    dbKey: 'CleanMachineGame',
    category: 'life-skills',
  },

  healthCheck: {
    title: 'Health Check',
    description: 'Diagnose basic symptoms and keep everyone healthy.',
    bgColor: '#C9DDF8', // Light Cornflower Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/health.png',
    introAudio: '/gameIntroAudio/healthCheckIntro.m4a',
    bgmAudio: '/bgmAudio/creative-technology.mp3',
    dbFile: 'healthCheckDB.json',
    dbKey: 'HealthCheckGame',
    category: 'life-skills',
  },

  timeTamer: {
    title: 'Time Tamer',
    description: 'Bring order to the hours by solving time-related challenges.',
    bgColor: '#F8F2C9', // Light Cream
    iconSrc: '/assets/gameImages/buttons/gameButtons/time-tamer.png',
    introAudio: '/gameIntroAudio/timeTamerIntro.m4a',
    bgmAudio: '/bgmAudio/happy.mp3',
    dbFile: 'timeTamerDB.json',
    dbKey: 'TimeTamerGame',
    category: 'life-skills',
  },

  kitchenTimerTrouble: {
    title: 'Kitchen Timer Trouble',
    description: 'Finish cooking before everything overcooks.',
    bgColor: '#FFE5E5', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/kitchen-timer-trouble.png',
    introAudio: '/gameIntroAudio/kitchenTimerIntro.m4a',
    bgmAudio: '/bgmAudio/chasing-sunshine.mp3',
    dbFile: 'kitchenTimerTroubleDB.json',
    dbKey: 'KitchenTimerTroubleGame',
    category: 'life-skills',
  },

  busStopBrainstorm: {
    title: 'Bus Stop Brainstorm',
    description: 'Navigate the city’s bus system using only sound clues.',
    bgColor: '#D2C9F8', // Light Mauve
    iconSrc: '/assets/gameImages/buttons/gameButtons/school-bus.png',
    introAudio: '/gameIntroAudio/busStopIntro.m4a',
    bgmAudio: '/bgmAudio/happy-kids.mp3',
    dbFile: 'busStopBrainstormDB.json',
    dbKey: 'BusStopBrainstormGame',
    category: 'life-skills',
  },

  moneyManager: {
    title: 'Money Manager',
    description: 'Save up for your goal while avoiding surprise expenses.',
    bgColor: '#C9F8D5', // Light Mint
    iconSrc: '/assets/gameImages/buttons/gameButtons/piggy-bank.png',
    introAudio: '/gameIntroAudio/moneyManagerIntro.m4a',
    bgmAudio: '/bgmAudio/another-happy-kids.mp3',
    dbFile: 'moneyManagerDB.json',
    dbKey: 'MoneyManagerGame',
    category: 'life-skills',
  },

  healthyPlate: {
    title: 'Healthy Plate',
    description: 'Balance your meal using clues from each food item.',
    bgColor: '#F8D5C9', // Light Terracotta
    iconSrc: '/assets/gameImages/buttons/gameButtons/healthy-plate.png',
    introAudio: '/gameIntroAudio/healthyPlateIntro.m4a',
    bgmAudio: '/bgmAudio/penguin.mp3',
    dbFile: 'healthyPlateDB.json',
    dbKey: 'HealthyPlateGame',
    category: 'life-skills',
  },

  // --- INDEPENDENCE SKILLS GAME CONFIGS ---

  streetSmart: {
    title: 'Street Smart',
    description: 'Decide when it’s safe to cross the street using sound.',
    bgColor: '#B0E0E6', // Powder Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/traffic-light.png',
    introAudio: '/gameIntroAudio/streetSmartIntro.m4a',
    bgmAudio: '/bgmAudio/abstract-beauty.mp3',
    dbFile: 'streetSmartDB.json',
    dbKey: 'StreetSmartGame',
    category: 'independence-skills',
  },

  caneCompanion: {
    title: 'Cane Companion',
    description: 'Listen to your cane’s taps to navigate safely.',
    bgColor: '#DCC3A1', // Tan
    iconSrc: '/assets/gameImages/buttons/gameButtons/cane.png',
    introAudio: '/gameIntroAudio/caneIntro.m4a',
    bgmAudio: '/bgmAudio/creative-technology.mp3',
    dbFile: 'caneCompanionDB.json',
    dbKey: 'CaneCompanionGame',
    category: 'independence-skills',
  },

  doorwayDecisions: {
    title: 'Doorway Decisions',
    description:
      'Figure out how to open different types of doors by touch and sound.',
    bgColor: '#F5DEB3', // Wheat
    iconSrc: '/assets/gameImages/buttons/gameButtons/new-door.png',
    introAudio: '/gameIntroAudio/doorwayIntro.m4a',
    bgmAudio: '/bgmAudio/happy.mp3',
    dbFile: 'doorwayDecisionsDB.json',
    dbKey: 'DoorwayDecisionsGame',
    category: 'independence-skills',
  },

  elevatorExperience: {
    title: 'Elevator Experience',
    description: 'Listen to elevator sounds to act safely and politely.',
    bgColor: '#C0C0C0', // Silver
    iconSrc: '/assets/gameImages/buttons/gameButtons/lift.png',
    introAudio: '/gameIntroAudio/elevatorIntro.m4a',
    bgmAudio: '/bgmAudio/chasing-sunshine.mp3',
    dbFile: 'elevatorExperienceDB.json',
    dbKey: 'ElevatorExperienceGame',
    category: 'independence-skills',
  },

  transitTime: {
    title: 'Transit Time',
    description: 'Use announcements and beeps to navigate public transit.',
    bgColor: '#F8C9C9', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/transit-time.png',
    introAudio: '/gameIntroAudio/transitIntro.m4a',
    bgmAudio: '/bgmAudio/happy-kids.mp3',
    dbFile: 'transitTimeDB.json',
    dbKey: 'TransitTimeGame',
    category: 'independence-skills',
  },

  moneyMatters: {
    title: 'Money Matters',
    description: 'Identify money by touch and feel to make purchases.',
    bgColor: '#D4EDD4', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/money-matters.png',
    introAudio: '/gameIntroAudio/moneyMattersIntro.m4a',
    bgmAudio: '/bgmAudio/another-happy-kids.mp3',
    dbFile: 'moneyMattersDB.json',
    dbKey: 'MoneyMattersGame',
    category: 'independence-skills',
  },

  kitchenKnowHow: {
    title: 'Kitchen Know-How',
    description: 'Knowing what kitchen sounds mean helps you cook safely.',
    bgColor: '#F8F2C9', // Light Cream
    iconSrc: '/assets/gameImages/buttons/gameButtons/chef.png',
    introAudio: '/gameIntroAudio/kitchenKnowHowIntro.m4a',
    bgmAudio: '/bgmAudio/penguin.mp3',
    dbFile: 'kitchenKnowHowDB.json',
    dbKey: 'KitchenKnowHowGame',
    category: 'independence-skills',
  },

  phoneFriend: {
    title: 'Phone Friend',
    description: 'Manage calls and messages using voice commands.',
    bgColor: '#E6E6FA', // Lavender
    iconSrc: '/assets/gameImages/buttons/gameButtons/smartphone.png',
    introAudio: '/gameIntroAudio/phoneFriendIntro.m4a',
    bgmAudio: '/bgmAudio/abstract-beauty.mp3',
    dbFile: 'phoneFriendDB.json',
    dbKey: 'PhoneFriendGame',
    category: 'independence-skills',
  },

  medicationManager: {
    title: 'Medication Manager',
    description:
      'Keep track of medications by listening for alarms and instructions.',
    bgColor: '#FFE5E5', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/meds.png',
    introAudio: '/gameIntroAudio/medicationIntro.m4a',
    bgmAudio: '/bgmAudio/creative-technology.mp3',
    dbFile: 'medicationManagerDB.json',
    dbKey: 'MedicationManagerGame',
    category: 'independence-skills',
  },

  obstacleAwareness: {
    title: 'Obstacle Awareness',
    description: 'Your cane and other sounds alert you to unexpected objects.',
    bgColor: '#fed7aa', // Light Orange
    iconSrc: '/assets/gameImages/buttons/gameButtons/obstacle.png',
    introAudio: '/gameIntroAudio/obstacleIntro.m4a',
    bgmAudio: '/bgmAudio/happy.mp3',
    dbFile: 'obstacleAwarenessDB.json',
    dbKey: 'ObstacleAwarenessGame',
    category: 'independence-skills',
  },

  socialSense: {
    title: 'Social Sense',
    description: 'Interpret conversations and respond appropriately.',
    bgColor: '#D4EDD4', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/idea.png',
    introAudio: '/gameIntroAudio/socialSenseIntro.m4a',
    bgmAudio: '/bgmAudio/chasing-sunshine.mp3',
    dbFile: 'socialSenseDB.json',
    dbKey: 'SocialSenseGame',
    category: 'independence-skills',
  },

  askingForAssistance: {
    title: 'Asking for Assistance',
    description: 'Learn how to phrase requests for help clearly and politely.',
    bgColor: '#C9E4F8', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/charity.png',
    introAudio: '/gameIntroAudio/assistanceIntro.m4a',
    bgmAudio: '/bgmAudio/happy-kids.mp3',
    dbFile: 'askingForAssistanceDB.json',
    dbKey: 'AskingForAssistanceGame',
    category: 'independence-skills',
  },
};
