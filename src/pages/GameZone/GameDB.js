const basedPath = '/assets/gameImages/buttons/gameButtons/';
export const getLanguageGames = () => {
  return [
    {
      icon: basedPath + 'definition.svg',
      title: 'Definition Detective',
      url: '/game/definitionDetective',
      textColor: '#323232',
      bgColor: '#06d4f9', // Bright Cyan
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-definition.svg',
      description: 'Find the correct word based on the definition.',
    },
    {
      icon: basedPath + 'pos.svg',
      title: 'Part of Speech',
      url: '/game/partofspeech',
      textColor: '#323232',
      bgColor: '#00d353', // Bright Green
      description: 'Noun, verb, or adjective?',
    },
    {
      icon: basedPath + 'color-game.svg',
      title: 'Color Game',
      url: '/game/colorgame',
      textColor: '#323232',
      bgColor: '#cf88ff', // Light Purple
      description: 'Name the color of a given object!',
    },

    {
      icon: basedPath + 'book.svg',
      title: 'Syllable Sorting',
      url: '/game/syllableSorting',
      textColor: '#323232',
      bgColor: '#6B7FFF', // Bright Blue
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-syllable.svg',
      description: 'Can you count the syllables in a given word?',
    },
    {
      icon: basedPath + 'book.svg',
      title: 'Vocabulary Vortex',
      url: '/game/vocabVortex',
      textColor: '#323232',
      bgColor: '#ff7373', // Light Red
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-vocab.svg',
      description: 'Match the word to its definition.',
    },
    {
      icon: basedPath + 'strawberry.svg',
      title: 'Polar Pairing',
      url: '/game/polarpairing',
      textColor: '#323232',
      bgColor: '#ff834d', // Bright Orange
      description: 'Test your vocabulary with polar opposites.',
    },

    {
      icon: basedPath + 'oddOneOut.svg',
      title: 'Odd One Out',
      url: '/game/oddoneout',
      textColor: '#323232',
      bgColor: '#FF82E0', // Pink
      description: 'Can you find what doesn’t belong?',
    },

    {
      icon: basedPath + 'spellingBee.svg',
      title: 'Spelling Bee',
      url: '/game/spellingbee',
      textColor: '#323232',
      bgColor: '#F7DA21', // Gold
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-spelling.svg',
      description: 'Buzz your way to spelling mastery!',
    },
  ];
};

export const getMathGames = () => {
  return [
    {
      icon: basedPath + 'ff.svg',
      title: 'Fruit Frenzy',
      url: '/game/fruitfrenzy',
      textColor: '#323232',
      bgColor: '#ff7d7d', // Light Red
      description: 'Practice addition by counting the fruits!',
    },
    {
      icon: basedPath + 'ss.svg',
      title: 'Shape Shark',
      url: '/game/shapeshark',
      textColor: '#323232',
      bgColor: '#0EA1EA', // Bright Blue
      description: 'Identify the shape based on its sides.',
    },

    {
      icon: basedPath + 'addition.svg',
      title: 'Animal Addition',
      url: '/game/addition',
      textColor: '#323232',
      bgColor: '#FF82E0', // Pink
      description: 'Add up the animals!',
    },
    {
      icon: basedPath + 'subtraction.svg',
      title: 'Subtraction Safari',
      url: '/game/subtraction',
      textColor: '#323232',
      bgColor: '#4ad9de', // Teal
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-sub.svg',
      description: 'Subtract animals in safari scenarios!',
    },

    {
      icon: basedPath + 'mul.svg',
      title: 'Multiplication Madness',
      url: '/game/multiplicationmadness',
      textColor: '#323232',
      bgColor: '#6B7FFF', // Bright Blue
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-mul.svg',
      description: 'Can you multiply numbers?',
    },
    {
      icon: basedPath + 'div.svg',
      title: 'Division Duel',
      url: 'game/DivisionDuel',
      textColor: '#323232',
      bgColor: '#00C275',
      description: 'Divide the given numbers!',
    },
    {
      icon: basedPath + 'mm.svg',
      title: 'Monkey Madness',
      url: '/game/monkeymadness',
      textColor: '#323232',
      bgColor: '#F56A6C', // Salmon
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-mm.svg',
      description: 'Help the monkeys split their bananas!',
    },

    {
      icon: basedPath + 'cc.svg',
      title: 'Car Counting',
      url: '/game/carcounting',
      textColor: '#323232',
      bgColor: '#F7DA21', // Gold
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-cc.svg',
      description: 'How many cars are passing by?',
    },
  ];
};

export const getScienceGames = () => {
  return [
    {
      icon: basedPath + 'matter.png',
      title: 'Matter Mix-Up',
      url: '/game/mattermixup',
      textColor: '#323232',
      bgColor: '#4dd4ff', // Light Blue
      description:
        'Help identify solids, liquids, and gases before they evaporate!',
    },
    {
      icon: basedPath + 'cells.png',
      title: 'Tiny Cell Town',
      url: '/game/tinycelltown',
      textColor: '#323232',
      bgColor: '#a7f3d0', // Mint Green
      description:
        'Guide an alien through the microscopic city of a human cell.',
    },
    {
      icon: basedPath + 'weather.png',
      title: 'Weather Whiz',
      url: '/game/weatherwhiz',
      textColor: '#323232',
      bgColor: '#B19CD9', // Lavender
      description:
        'Interpret the sky’s mood swings before the thunder has a tantrum.',
    },
    {
      icon: basedPath + 'astronaut.png',
      title: 'Space Case',
      url: '/game/spacecase',
      textColor: '#323232',
      bgColor: '#d1d5db', // Light Gray
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-star.png',
      description:
        'Help a forgetful astronaut remember basic facts about space.',
    },
    {
      icon: basedPath + 'dino.png',
      title: 'Dino Detectives',
      url: '/game/dinodetectives',
      textColor: '#323232',
      bgColor: '#c08b5f', // Brown
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-dino.png',
      description: 'Use clues from bones and roars to identify ancient beasts.',
    },
    {
      icon: basedPath + 'germ.png',
      title: 'Germ Squad',
      url: '/game/germsquad',
      textColor: '#323232',
      bgColor: '#ff8c69', // Salmon
      description:
        'Name the culprits behind a fever before the party gets out of hand.',
    },
    {
      icon: basedPath + 'landscape.png',
      title: 'Eco Rangers',
      url: '/game/ecorangers',
      textColor: '#323232',
      bgColor: '#52c687', // Green
      description:
        'Identify environmental threats and help restore balance to nature.',
    },
    {
      icon: basedPath + 'sound.png',
      title: 'Sound Explorer',
      url: '/game/soundexplorer',
      textColor: '#323232',
      bgColor: '#fed7aa', // Light Orange
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-sound.png',
      description: 'Measure and decode sound waves to escape an echoing cave.',
    },
    {
      icon: basedPath + 'robot.png',
      title: 'Robot Repair Lab',
      url: '/game/robotrepair',
      textColor: '#323232',
      bgColor: '#0EA1EA', // Bright Blue
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-robot.png',
      description:
        'Reprogram glitching science robots before they short-circuit the lab.',
    },
    {
      icon: basedPath + 'alocasia.png',
      title: 'Plant Power',
      url: '/game/plantpower',
      textColor: '#323232',
      bgColor: '#ffc84d', // Gold
      description:
        'Learn the parts of a plant by listening to their whispered secrets.',
    },
  ];
};

export const getLifeSkillsGames = () => {
  return [
    {
      icon: basedPath + 'grocery.png',
      title: 'Grocery Grab',
      url: '/game/groceryGrab',
      textColor: '#323232',
      bgColor: '#FFDDC1', // Light Peach
      description:
        'Listen to each item and help it find the right spot in the store.',
    },
    {
      icon: basedPath + 'money.png',
      title: 'Money Match',
      url: '/game/moneyMatch',
      textColor: '#323232',
      bgColor: '#D4EDD4', // Light Green
      description: 'Match the right coins and bills to pay for your items.',
    },
    {
      icon: basedPath + 'laundry.png',
      title: 'Laundry Legend',
      url: '/game/laundryLegend',
      textColor: '#323232',
      bgColor: '#C9E4F8', // Light Blue
      description:
        'Sort and start your laundry while the machines try to outsmart you.',
    },
    {
      icon: basedPath + 'kitchen.png',
      title: 'Kitchen Cues',
      url: '/game/kitchenCues',
      textColor: '#323232',
      bgColor: '#F8C9C9', // Light Red
      description:
        'Identify tools and follow recipes using only sound and smell.',
    },
    {
      icon: basedPath + 'clothing.png',
      title: 'Dress to Impress',
      url: '/game/dressToImpress',
      textColor: '#323232',
      bgColor: '#F8EAC9', // Light Yellow
      description: 'Choose the right outfit based on the weather forecast.',
    },
    {
      icon: basedPath + 'siren.png',
      title: 'Safety Sirens',
      url: '/game/safetySirens',
      textColor: '#323232',
      bgColor: '#F8C9E4', // Light Pink
      description:
        'From fire alarms to bumping your knee, learn the safest move.',
    },
    {
      icon: basedPath + 'schedule.png',
      title: 'Schedule Shuffle',
      url: '/game/scheduleShuffle',
      textColor: '#323232',
      bgColor: '#C9F8E4', // Light Teal
      description:
        'Piece your day back together with clues from talking clocks.',
    },
    {
      icon: basedPath + 'cleaning.png',
      title: 'Clean Machine',
      url: '/game/cleanMachine',
      textColor: '#323232',
      bgColor: '#E4C9F8', // Light Purple
      description: 'Grab your tools and tidy up before the clutter takes over.',
    },
    {
      icon: basedPath + 'health.png',
      title: 'Health Check',
      url: '/game/healthCheck',
      textColor: '#323232',
      bgColor: '#C9DDF8', // Light Cornflower Blue
      description: 'Diagnose basic symptoms and keep everyone healthy.',
    },
    {
      icon: basedPath + 'time.png',
      title: 'Time Tamer',
      url: '/game/timeTamer',
      textColor: '#323232',
      bgColor: '#F8F2C9', // Light Cream
      description:
        'Bring order to the hours by solving time-related challenges.',
    },
    {
      icon: basedPath + 'timer.png',
      title: 'Kitchen Timer Trouble',
      url: '/game/kitchenTimerTrouble',
      textColor: '#323232',
      bgColor: '#F8C9D5', // Light Salmon
      description: 'Finish cooking before everything overcooks.',
    },
    {
      icon: basedPath + 'bus.png',
      title: 'Bus Stop Brainstorm',
      url: '/game/busStopBrainstorm',
      textColor: '#323232',
      bgColor: '#D2C9F8', // Light Mauve
      description: 'Navigate the city’s bus system using only sound clues.',
    },
    {
      icon: basedPath + 'piggybank.png',
      title: 'Money Manager',
      url: '/game/moneyManager',
      textColor: '#323232',
      bgColor: '#C9F8D5', // Light Mint
      description: 'Save up for your goal while avoiding surprise expenses.',
    },
    {
      icon: basedPath + 'plate.png',
      title: 'Healthy Plate',
      url: '/game/healthyPlate',
      textColor: '#323232',
      bgColor: '#F8D5C9', // Light Terracotta
      description: 'Balance your meal using clues from each food item.',
    },
  ];
};

export const getIndependenceSkillsGames = () => {
  return [
    {
      icon: basedPath + 'street.png',
      title: 'Street Smart',
      url: '/game/streetSmart',
      textColor: '#323232',
      bgColor: '#B0E0E6', // Powder Blue
      description: 'Decide when it’s safe to cross the street using sound.',
    },
    {
      icon: basedPath + 'cane.png',
      title: 'Cane Companion',
      url: '/game/caneCompanion',
      textColor: '#323232',
      bgColor: '#D2B48C', // Tan
      description: 'Listen to your cane’s taps to navigate safely.',
    },
    {
      icon: basedPath + 'door.png',
      title: 'Doorway Decisions',
      url: '/game/doorwayDecisions',
      textColor: '#323232',
      bgColor: '#F5DEB3', // Wheat
      description:
        'Figure out how to open different types of doors by touch and sound.',
    },
    {
      icon: basedPath + 'elevator.png',
      title: 'Elevator Experience',
      url: '/game/elevatorExperience',
      textColor: '#323232',
      bgColor: '#C0C0C0', // Silver
      description: 'Listen to elevator sounds to act safely and politely.',
    },
    {
      icon: basedPath + 'transit.png',
      title: 'Transit Time',
      url: '/game/transitTime',
      textColor: '#323232',
      bgColor: '#F8C9C9', // Light Red
      description: 'Use announcements and beeps to navigate public transit.',
    },
    {
      icon: basedPath + 'bills.png',
      title: 'Money Matters',
      url: '/game/moneyMatters',
      textColor: '#323232',
      bgColor: '#90EE90', // Light Green
      description: 'Identify money by touch and feel to make purchases.',
    },
    {
      icon: basedPath + 'chef.png',
      title: 'Kitchen Know-How',
      url: '/game/kitchenKnowHow',
      textColor: '#323232',
      bgColor: '#F0E68C', // Khaki
      description: 'Knowing what kitchen sounds mean helps you cook safely.',
    },
    {
      icon: basedPath + 'phone.png',
      title: 'Phone Friend',
      url: '/game/phoneFriend',
      textColor: '#323232',
      bgColor: '#E6E6FA', // Lavender
      description: 'Manage calls and messages using voice commands.',
    },
    {
      icon: basedPath + 'meds.png',
      title: 'Medication Manager',
      url: '/game/medicationManager',
      textColor: '#323232',
      bgColor: '#FFB6C1', // Light Pink
      description:
        'Keep track of medications by listening for alarms and instructions.',
    },
    {
      icon: basedPath + 'obstacle.png',
      title: 'Obstacle Awareness',
      url: '/game/obstacleAwareness',
      textColor: '#323232',
      bgColor: '#FFA07A', // Light Salmon
      description:
        'Your cane and other sounds alert you to unexpected objects.',
    },
    {
      icon: basedPath + 'social.png',
      title: 'Social Sense',
      url: '/game/socialSense',
      textColor: '#323232',
      bgColor: '#D4EDD4', // Light Green
      description: 'Interpret conversations and respond appropriately.',
    },
    {
      icon: basedPath + 'assistance.png',
      title: 'Asking for Assistance',
      url: '/game/askingForAssistance',
      textColor: '#323232',
      bgColor: '#87CEFA', // Light Sky Blue
      description:
        'Learn how to phrase requests for help clearly and politely.',
    },
  ];
};
