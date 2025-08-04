export const gameConfigs = {
  addition: {
    title: 'Animal Addition',
    description: 'Add up the animals!',
    bgColor: '#FFBCEE', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/addition.svg',
    introAudio: '/animalAddition/additionintro.mp3',
    dbFile: 'additionDb.json',
    dbKey: 'AdditionGame',
    category: 'math',
  },

  colorGame: {
    title: 'Color Game',
    description: 'Name the color of a given object!',
    bgColor: '#EACAFF', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/color-game.svg',
    introAudio: '/colorGame/colorIntro.mp3',
    dbFile: 'crazyColorsDB.json',
    dbKey: 'ColorQuizGame',
    category: 'language',
  },

  definitionDetective: {
    title: 'Definition Detective',
    description: 'Find the correct word based on the definition.',
    bgColor: '#9AE2EB', // Light Cyan
    iconSrc: '/assets/gameImages/buttons/gameButtons/definition.svg',
    introAudio: '/definitionDetective/definitionIntro.mp3',
    dbFile: 'definitionDetectiveDB.json',
    dbKey: 'DefinitionDetectiveGame',
    category: 'language',
  },

  division: {
    title: 'Division Duel',
    description: 'Divide the given numbers!',
    bgColor: '#6FFFC6', // Light Mint
    iconSrc: '/assets/gameImages/buttons/gameButtons/div.svg',
    introAudio: '/divisionduel/divintro.mp3',
    dbFile: 'divisionDb.json',
    dbKey: 'DivisionGame',
    category: 'math',
  },

  fruitFrenzy: {
    title: 'Fruit Frenzy',
    description: 'How many total fruits are there?',
    bgColor: '#FFC5C5', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/ff.svg',
    introAudio: '/fruitFrenzy/fruitIntro.mp3',
    dbFile: 'fruitFrenzy.json',
    dbKey: 'FruitFrenzy',
    category: 'math',
  },

  monkeyMadness: {
    title: 'Monkey Madness',
    description: 'Help the monkeys split their bananas!',
    bgColor: '#F9AEB0', // Light Salmon
    iconSrc: '/assets/gameImages/buttons/gameButtons/mm.svg',
    introAudio: '/monkeyMadness/monkeyintro.mp3',
    dbFile: 'monkeyMadnessDB.json',
    dbKey: 'MonkeyMadnessGame',
    category: 'math',
  },

  multiplication: {
    title: 'Multiplication Madness',
    description: 'Can you multiply numbers?',
    bgColor: '#AEB9FF', // Light Periwinkle
    iconSrc: '/assets/gameImages/buttons/gameButtons/mul.svg',
    introAudio: '/multiplicationmadness/multiplicationintro.mp3',
    dbFile: 'multiplication.json',
    dbKey: 'MultiplicationGame',
    category: 'math',
  },

  oddOneOut: {
    title: 'Odd One Out',
    description: "Can you find what doesn't belong?",
    bgColor: '#FFD2F4', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/odd-one-out.png',
    introAudio: '/oddoneout/oddoneoutintro.mp3',
    dbFile: 'oddOneOutDB.json',
    dbKey: 'OddOneOutGame',
    category: 'language',
  },

  partOfSpeech: {
    title: 'Part of Speech',
    description: 'Noun, verb, or adjective?',
    bgColor: '#6FFFC6', // Light Mint
    iconSrc: '/assets/gameImages/buttons/gameButtons/pos.svg',
    introAudio: '/partOfSpeech/partofspeechintro.mp3',
    dbFile: 'partOfSpeechDB.json',
    dbKey: 'PartOfSpeechGame',
    category: 'language',
  },

  polarPairing: {
    title: 'Polar Pairing',
    description: 'Test your vocabulary with polar opposites.',
    bgColor: '#EAD2B0', // Tan
    iconSrc: '/assets/gameImages/buttons/gameButtons/strawberry.svg',
    introAudio: '/polarpairing/oppintro.mp3',
    dbFile: 'polarPairingDB.json',
    dbKey: 'PolarPairingGame',
    category: 'language',
  },

  shapeShark: {
    title: 'Shape Shark',
    description: 'Identify the shape based on its sides.',
    bgColor: '#8FD5F8', // Light Sky Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/ss.svg',
    introAudio: '/shapeSharks/shapeintro.mp3',
    dbFile: 'shapeSharkDB.json',
    dbKey: 'ShapeSharkGame',
    category: 'math',
  },

  spellingBee: {
    title: 'Spelling Bee',
    description: 'Buzz your way to spelling mastery!',
    bgColor: '#FAE9B6', // Light Gold
    iconSrc: '/assets/gameImages/buttons/gameButtons/spellingBee.svg',
    introAudio: '/spellingBee/spellingintro.mp3',
    dbFile: 'spellingBeeDB.json',
    dbKey: 'SpellingBeeGame',
    category: 'language',
  },

  subtraction: {
    title: 'Subtraction Safari',
    description: 'Subtract animals in safari scenarios!',
    bgColor: '#9AE2EB', // Light Cyan
    iconSrc: '/assets/gameImages/buttons/gameButtons/subtraction.svg',
    introAudio: '/subtractionSafari/subtractionintro.mp3',
    dbFile: 'subtractionDB.json',
    dbKey: 'SubtractionGame',
    category: 'math',
  },

  syllableSorting: {
    title: 'Syllable Sorting',
    description: 'Can you count the syllables in a given word?',
    bgColor: '#BCC5FF', // Light Periwinkle
    iconSrc: '/assets/gameImages/buttons/gameButtons/syllable-sorting.png',
    introAudio: '/syllableSorting/syllableIntro.mp3',
    dbFile: 'SyllableGameDB.json',
    dbKey: 'SyllableCountingGame',
    category: 'language',
  },

  vocab: {
    title: 'Vocabulary Vortex',
    description:
      'Dive into the vocabulary vortex and match the word to its definition.',
    bgColor: '#F9AEB0', // Light Salmon
    iconSrc: '/assets/gameImages/buttons/gameButtons/book.svg',
    introAudio: '/vocabVortex/vortexintro.mp3',
    dbFile: 'VocabVortexDB.json',
    dbKey: 'VocabVortexGame',
    category: 'language',
  },

  // --- SCIENCE GAME CONFIGS ---

  matterMixUp: {
    title: 'Matter Mix-Up',
    description:
      'Help identify solids, liquids, and gases before they evaporate!',
    bgColor: '#94DDFF', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/matter.png',
    dbFile: 'matterMixUpDB.json',
    dbKey: 'MatterMixUpGame',
    category: 'science',
    introText:
      'A team of kitchen chemists just knocked over a tray of experiments—solids, liquids, and gases are everywhere. Can you help them identify what’s what before it all evaporates?',
  },

  tinyCellTown: {
    title: 'Tiny Cell Town',
    description: 'Guide an alien through the microscopic city of a human cell.',
    bgColor: '#FFB39A', // Peach
    iconSrc: '/assets/gameImages/buttons/gameButtons/cells.png',
    dbFile: 'tinyCellTownDB.json',
    dbKey: 'TinyCellTownGame',
    category: 'science',
    introText:
      "An alien crash-landed inside a human cell and can't tell a nucleus from a ribosome. Guide them through this microscopic city before they mistake mitochondria for a microwave.",
  },

  weatherWhiz: {
    title: 'Weather Whiz',
    description:
      "Interpret the sky's mood swings before the thunder has a tantrum.",
    bgColor: '#CFCFCF', // Light Gray
    iconSrc: '/assets/gameImages/buttons/gameButtons/weather.png',
    dbFile: 'weatherWhizDB.json',
    dbKey: 'WeatherWhizGame',
    category: 'science',
    introText:
      "You’re now a certified Sky Translator. When clouds mumble and lightning shouts, it’s your job to interpret the sky's mood swings before the thunder throws another tantrum.",
  },

  spaceCase: {
    title: 'Space Case',
    description: 'Help a forgetful astronaut remember basic facts about space.',
    bgColor: '#A0B2E8', // Periwinkle
    iconSrc: '/assets/gameImages/buttons/gameButtons/space-case.png',
    dbFile: 'spaceCaseDB.json',
    dbKey: 'SpaceCaseGame',
    category: 'science',
    introText:
      "An astronaut forgot everything about space! You’re mission control. Feed them facts fast, or they might land on a moon thinking it's a marshmallow.",
  },

  dinoDetectives: {
    title: 'Dino Detectives',
    description: 'Use clues from bones and roars to identify ancient beasts.',
    bgColor: '#DCC3A1', // Tan
    iconSrc: '/assets/gameImages/buttons/gameButtons/dino-detectives.png',
    dbFile: 'dinoDetectivesDB.json',
    dbKey: 'DinoDetectivesGame',
    category: 'science',
    introText:
      'A new dinosaur skeleton was just unearthed, but it’s missing its name! Use clues from bones and roars to identify these ancient beasts before they vanish into dust.',
  },

  germSquad: {
    title: 'Germ Squad',
    description:
      'Name the culprits behind a fever before the party gets out of hand.',
    bgColor: '#FF9A9A', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/germ.png',
    dbFile: 'germSquadDB.json',
    dbKey: 'GermSquadGame',
    category: 'science',
    introText:
      "You're on a mission inside a sick body. Bacteria are throwing a party and only science can stop them. Can you name the culprits before the fever hits max?",
  },

  ecoRangers: {
    title: 'Eco Rangers',
    description:
      'Identify environmental threats and help restore balance to nature.',
    bgColor: '#A2EAB8', // Mint Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/landscape.png',
    dbFile: 'ecoRangersDB.json',
    dbKey: 'EcoRangersGame',
    category: 'science',
    introText:
      'The animals are voting someone off the island... and pollution is the top suspect! Help the ecosystem restore balance by identifying environmental threats and natural defenders.',
  },

  soundExplorer: {
    title: 'Sound Explorer',
    description: 'Measure and decode sound waves to escape an echoing cave.',
    bgColor: '#C0A2EA', // Lavender
    iconSrc: '/assets/gameImages/buttons/gameButtons/sound.png',
    dbFile: 'soundExplorerDB.json',
    dbKey: 'SoundExplorerGame',
    category: 'science',
    introText:
      "You're trapped in a cave where everything speaks in sound waves. Use your ears to measure, decode, and respond before the cave echoes you into confusion.",
  },

  robotRepair: {
    title: 'Robot Repair Lab',
    description:
      'Reprogram glitching science robots before they short-circuit the lab.',
    bgColor: '#A2DCEA', // Sky Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/robot.png',
    dbFile: 'robotRepairLabDB.json',
    dbKey: 'RobotRepairGame',
    category: 'science',
    introText:
      'A team of science robots is glitching! Their sensors are scrambled and they’re confusing magnets with muffins. You’re their only hope—reprogram them before they short-circuit the lab!',
  },

  plantPower: {
    title: 'Plant Power',
    description:
      'Learn the parts of a plant by listening to their whispered secrets.',
    bgColor: '#FFE59A', // Light Yellow
    iconSrc: '/assets/gameImages/buttons/gameButtons/alocasia.png',
    dbFile: 'plantPowerDB.json',
    dbKey: 'PlantPowerGame',
    category: 'science',
    introText:
      'You’ve been shrunk into a garden where plants whisper their secrets—but only if you know their parts. Solve each clue before the flowers fall asleep again.',
  },

  // --- LIFE SKILLS GAME CONFIGS ---

  groceryGrab: {
    title: 'Grocery Grab',
    description:
      'Listen to each item and help it find the right spot in the store.',
    bgColor: '#FFDDC1', // Light Peach
    iconSrc: '/assets/gameImages/buttons/gameButtons/grocery.png',
    dbFile: 'groceryGrabDB.json',
    dbKey: 'GroceryGrabGame',
    category: 'life-skills',
    introText:
      'The talking grocery store just had a shelf collapse! Cans are rolling, eggs are squawking, and the bananas are giving orders. Your job? Listen to each item and help it find the right spot in the store before closing time.',
  },

  moneyMatch: {
    title: 'Money Match',
    description: 'Match the right coins and bills to pay for your items.',
    bgColor: '#D4EDD4', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/money.png',
    dbFile: 'moneyMatchDB.json',
    dbKey: 'MoneyMatchGame',
    category: 'life-skills',
    introText:
      'Welcome to Sound City Market, where your wallet talks and the cashier sings your total! You’ll need to match the right coins and bills to pay for your items—and avoid getting tricked by a sneaky vending machine.',
  },

  laundryLegend: {
    title: 'Laundry Legend',
    description:
      'Sort and start your laundry while the machines try to outsmart you.',
    bgColor: '#C9E4F8', // Light Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/laundry.png',
    dbFile: 'laundryLegendDB.json',
    dbKey: 'LaundryLegendGame',
    category: 'life-skills',
    introText:
      'The laundry room is alive! Shirts are shouting colors, socks are going missing, and the dryer keeps spinning riddles. Sort and start your laundry while the machines try to outsmart you.',
  },

  kitchenCues: {
    title: 'Kitchen Cues',
    description:
      'Identify tools and follow recipes using only sound and smell.',
    bgColor: '#F8C9C9', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/kitchen.png',
    dbFile: 'kitchenCuesDB.json',
    dbKey: 'KitchenCuesGame',
    category: 'life-skills',
    introText:
      'Chef! The stovetop is sizzling, and dinner is almost ruined! You’ve got only sound and smell to guide you. Identify tools, follow recipes, and avoid mixing salt with sugar again.',
  },

  dressToImpress: {
    title: 'Dress to Impress',
    description: 'Choose the right outfit based on the weather forecast.',
    bgColor: '#F8EAC9', // Light Yellow
    iconSrc: '/assets/gameImages/buttons/gameButtons/clothing.png',
    dbFile: 'dressToImpressDB.json',
    dbKey: 'DressToImpressGame',
    category: 'life-skills',
    introText:
      'You’re late for your field trip, and your closet is talking back! Every time the weather changes, your wardrobe scrambles. Can you choose the right outfit based on the forecast?',
  },

  safetySirens: {
    title: 'Safety Sirens',
    description:
      'From fire alarms to bumping your knee, learn the safest move.',
    bgColor: '#F8C9E4', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/siren.png',
    dbFile: 'safetySirensDB.json',
    dbKey: 'SafetySirensGame',
    category: 'life-skills',
    introText:
      'It’s Safety Week, and your house is running emergency drills—complete with sound effects! From fire alarms to bumping your knee, you need to know the safest move every time.',
  },

  scheduleShuffle: {
    title: 'Schedule Shuffle',
    description: 'Piece your day back together with clues from talking clocks.',
    bgColor: '#C9F8E4', // Light Teal
    iconSrc: '/assets/gameImages/buttons/gameButtons/schedule.png',
    dbFile: 'scheduleShuffleDB.json',
    dbKey: 'ScheduleShuffleGame',
    category: 'life-skills',
    introText:
      'Your day planner exploded! Now your meals, school, chores, and fun activities are all out of order. Piece your day back together with clues from talking clocks and helpful reminders.',
  },

  cleanMachine: {
    title: 'Clean Machine',
    description: 'Grab your tools and tidy up before the clutter takes over.',
    bgColor: '#E4C9F8', // Light Purple
    iconSrc: '/assets/gameImages/buttons/gameButtons/cleaning.png',
    dbFile: 'cleanMachineDB.json',
    dbKey: 'CleanMachineGame',
    category: 'life-skills',
    introText:
      'The mess monster is back—and it’s taken over your room! Time to grab your tools, listen for clues, and tidy up before the clutter reaches critical mass.',
  },

  healthCheck: {
    title: 'Health Check',
    description: 'Diagnose basic symptoms and keep everyone healthy.',
    bgColor: '#C9DDF8', // Light Cornflower Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/health.png',
    dbFile: 'healthCheckDB.json',
    dbKey: 'HealthCheckGame',
    category: 'life-skills',
    introText:
      "You're the town’s brand-new audio doctor, and your patients describe their symptoms with sound effects. Use your knowledge to diagnose the basics and keep everyone healthy.",
  },

  timeTamer: {
    title: 'Time Tamer',
    description: 'Bring order to the hours by solving time-related challenges.',
    bgColor: '#F8F2C9', // Light Cream
    iconSrc: '/assets/gameImages/buttons/gameButtons/time-tamer.png',
    dbFile: 'timeTamerDB.json',
    dbKey: 'TimeTamerGame',
    category: 'life-skills',
    introText:
      'Time is running wild in your house. The microwave thinks it’s midnight, and your alarm clock is rapping in reverse. Help bring order to the hours by solving time-related challenges.',
  },

  kitchenTimerTrouble: {
    title: 'Kitchen Timer Trouble',
    description: 'Finish cooking before everything overcooks.',
    bgColor: '#F8C9D5', // Light Salmon
    iconSrc: '/assets/gameImages/buttons/gameButtons/kitchen-timer-trouble.png',
    dbFile: 'kitchenTimerTroubleDB.json',
    dbKey: 'KitchenTimerTroubleGame',
    category: 'life-skills',
    introText:
      'Your kitchen’s gone rogue. The fridge hums in Morse code, the oven’s yelling time left, and the microwave keeps guessing your age. Can you finish cooking before everything overcooks?',
  },

  busStopBrainstorm: {
    title: 'Bus Stop Brainstorm',
    description: 'Navigate the city’s bus system using only sound clues.',
    bgColor: '#D2C9F8', // Light Mauve
    iconSrc: '/assets/gameImages/buttons/gameButtons/bus.png',
    dbFile: 'busStopBrainstormDB.json',
    dbKey: 'BusStopBrainstormGame',
    category: 'life-skills',
    introText:
      "You're navigating the city’s bus system, but there’s a catch—the signs are gone! All you’ve got are sound clues and voices from helpful strangers. Can you ride smart?",
  },

  moneyManager: {
    title: 'Money Manager',
    description: 'Save up for your goal while avoiding surprise expenses.',
    bgColor: '#C9F8D5', // Light Mint
    iconSrc: '/assets/gameImages/buttons/gameButtons/piggybank.png',
    dbFile: 'moneyManagerDB.json',
    dbKey: 'MoneyManagerGame',
    category: 'life-skills',
    introText:
      'You’ve got a little allowance and a big goal—saving up for your favorite snack, toy, or treat. But surprise expenses and tempting sounds try to trip you up.',
  },

  healthyPlate: {
    title: 'Healthy Plate',
    description: 'Balance your meal using clues from each food item.',
    bgColor: '#F8D5C9', // Light Terracotta
    iconSrc: '/assets/gameImages/buttons/gameButtons/healthy-plate.png',
    dbFile: 'healthyPlateDB.json',
    dbKey: 'HealthyPlateGame',
    category: 'life-skills',
    introText:
      'Your dinner plate is talking, and it’s picky! Balance your meal using clues from each food item. If you listen carefully, you’ll serve up something healthy and delicious.',
  },

  // --- INDEPENDENCE SKILLS GAME CONFIGS ---

  streetSmart: {
    title: 'Street Smart',
    description: 'Decide when it’s safe to cross the street using sound.',
    bgColor: '#B0E0E6', // Powder Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/street.png',
    dbFile: 'streetSmartDB.json',
    dbKey: 'StreetSmartGame',
    category: 'independence-skills',
    introText:
      'You’re standing at different street corners, listening closely to traffic sounds, crosswalk signals, and nearby footsteps. Your job is to decide when it’s safe to cross, recognize obstacles, and understand street cues.',
  },

  caneCompanion: {
    title: 'Cane Companion',
    description: 'Listen to your cane’s taps to navigate safely.',
    bgColor: '#D2B48C', // Tan
    iconSrc: '/assets/gameImages/buttons/gameButtons/cane.png',
    dbFile: 'caneCompanionDB.json',
    dbKey: 'CaneCompanionGame',
    category: 'independence-skills',
    introText:
      'Your white cane is your guide through various environments — city sidewalks, grassy parks, staircases, and ramps. Listen carefully to the cane’s taps and other sounds to help you navigate safely.',
  },

  doorwayDecisions: {
    title: 'Doorway Decisions',
    description:
      'Figure out how to open different types of doors by touch and sound.',
    bgColor: '#F5DEB3', // Wheat
    iconSrc: '/assets/gameImages/buttons/gameButtons/door.png',
    dbFile: 'doorwayDecisionsDB.json',
    dbKey: 'DoorwayDecisionsGame',
    category: 'independence-skills',
    introText:
      'You approach many types of doors every day: knobs, push bars, automatic sliding doors, heavy fire doors. You have to figure out how to open or pass through them by touch and sound.',
  },

  elevatorExperience: {
    title: 'Elevator Experience',
    description: 'Listen to elevator sounds to act safely and politely.',
    bgColor: '#C0C0C0', // Silver
    iconSrc: '/assets/gameImages/buttons/gameButtons/elevator.png',
    dbFile: 'elevatorExperienceDB.json',
    dbKey: 'ElevatorExperienceGame',
    category: 'independence-skills',
    introText:
      'In busy buildings, elevators announce floors, open and close doors, and beep for warnings. Listen to the sounds around you and decide when and how to act safely and politely.',
  },

  transitTime: {
    title: 'Transit Time',
    description: 'Use announcements and beeps to navigate public transit.',
    bgColor: '#F8C9C9', // Light Red
    iconSrc: '/assets/gameImages/buttons/gameButtons/transit-time.png',
    dbFile: 'transitTimeDB.json',
    dbKey: 'TransitTimeGame',
    category: 'independence-skills',
    introText:
      'You use buses, trains, and subways, relying on announcements, beeps, and crowd noises. It’s your job to figure out stops, board and exit safely, and handle unexpected situations.',
  },

  moneyMatters: {
    title: 'Money Matters',
    description: 'Identify money by touch and feel to make purchases.',
    bgColor: '#90EE90', // Light Green
    iconSrc: '/assets/gameImages/buttons/gameButtons/money-matters.png',
    dbFile: 'moneyMattersDB.json',
    dbKey: 'MoneyMattersGame',
    category: 'independence-skills',
    introText:
      'Coins and bills have different sizes, textures, and sounds. You’re learning to identify money by touch and feel to make purchases and count change confidently.',
  },

  kitchenKnowHow: {
    title: 'Kitchen Know-How',
    description: 'Knowing what kitchen sounds mean helps you cook safely.',
    bgColor: '#F0E68C', // Khaki
    iconSrc: '/assets/gameImages/buttons/gameButtons/chef.png',
    dbFile: 'kitchenKnowHowDB.json',
    dbKey: 'KitchenKnowHowGame',
    category: 'independence-skills',
    introText:
      'The kitchen is full of sounds — boiling, sizzling, timers, and appliances. Knowing what these sounds mean helps you cook safely and efficiently.',
  },

  phoneFriend: {
    title: 'Phone Friend',
    description: 'Manage calls and messages using voice commands.',
    bgColor: '#E6E6FA', // Lavender
    iconSrc: '/assets/gameImages/buttons/gameButtons/phone-friend.png',
    dbFile: 'phoneFriendDB.json',
    dbKey: 'PhoneFriendGame',
    category: 'independence-skills',
    introText:
      'Using voice commands, talking phones, and audio prompts, you manage calls, messages, and settings without looking at the screen.',
  },

  medicationManager: {
    title: 'Medication Manager',
    description:
      'Keep track of medications by listening for alarms and instructions.',
    bgColor: '#FFB6C1', // Light Pink
    iconSrc: '/assets/gameImages/buttons/gameButtons/meds.png',
    dbFile: 'medicationManagerDB.json',
    dbKey: 'MedicationManagerGame',
    category: 'independence-skills',
    introText:
      'Keeping track of your medications means listening for alarms, remembering schedules, and understanding labels and instructions.',
  },

  obstacleAwareness: {
    title: 'Obstacle Awareness',
    description: 'Your cane and other sounds alert you to unexpected objects.',
    bgColor: '#FFA07A', // Light Salmon
    iconSrc: '/assets/gameImages/buttons/gameButtons/obstacle.png',
    dbFile: 'obstacleAwarenessDB.json',
    dbKey: 'ObstacleAwarenessGame',
    category: 'independence-skills',
    introText:
      'You move through indoor and outdoor spaces where obstacles might appear unexpectedly. Your cane taps and other sounds alert you to objects, people, and changes in terrain.',
  },

  socialSense: {
    title: 'Social Sense',
    description: 'Interpret conversations and respond appropriately.',
    bgColor: '#87CEEB', // Sky Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/social.png',
    dbFile: 'socialSenseDB.json',
    dbKey: 'SocialSenseGame',
    category: 'independence-skills',
    introText:
      'Understanding tone, volume, and context helps you interpret conversations and respond appropriately in social situations.',
  },

  askingForAssistance: {
    title: 'Asking for Assistance',
    description: 'Learn how to phrase requests for help clearly and politely.',
    bgColor: '#87CEFA', // Light Sky Blue
    iconSrc: '/assets/gameImages/buttons/gameButtons/assistance.png',
    dbFile: 'askingForAssistanceDB.json',
    dbKey: 'AskingForAssistanceGame',
    category: 'independence-skills',
    introText:
      'Sometimes you need to ask strangers for help or directions. Knowing how to phrase your request clearly and politely is essential.',
  },
};
