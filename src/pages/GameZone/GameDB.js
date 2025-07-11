const basedPath = '/assets/gameImages/buttons/gameButtons/';
export const getLanguageGames = () => {
  return [
    {
      icon: basedPath + 'definition.svg',
      title: 'Definition Detective',
      url: '/game/definitionDetective',
      textColor: '#323232',
      bgColor: '#06d4f9',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-definition.svg',
      description: 'Find the correct word based on the definition.',
    },
    {
      icon: basedPath + 'pos.svg',
      title: 'Part of Speech',
      url: '/game/partofspeech',
      textColor: '#323232',
      bgColor: '#00d353',
      description: 'Noun, verb, or adjective?',
    },
    {
      icon: basedPath + 'color-game.svg',
      title: 'Color Game',
      url: '/game/colorgame',
      textColor: '#323232',
      bgColor: '#cf88ff',
      description: 'Name the color of a given object!',
    },

    {
      icon: basedPath + 'book.svg',
      title: 'Syllable Sorting',
      url: '/game/syllableSorting',
      textColor: '#323232',
      bgColor: '#6B7FFF',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-syllable.svg',
      description: 'Can you count the syllables in a given word?',
    },
    {
      icon: basedPath + 'book.svg',
      title: 'Vocabulary Vortex',
      url: '/game/vocabVortex',
      textColor: '#323232',
      bgColor: '#ff7373',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-vocab.svg',
      description: 'Match the word to its definition.',
    },
    {
      icon: basedPath + 'strawberry.svg',
      title: 'Polar Pairing',
      url: '/game/polarpairing',
      textColor: '#323232',
      bgColor: '#ff834d',
      description: 'Test your vocabulary with polar opposites.',
    },

    {
      icon: basedPath + 'oddOneOut.svg',
      title: 'Odd One Out',
      url: '/game/oddoneout',
      textColor: '#323232',
      bgColor: '#FF82E0',
      description: 'Can you find what doesn’t belong?',
    },

    {
      icon: basedPath + 'spellingBee.svg',
      title: 'Spelling Bee',
      //url: "/game/spelling-bee",
      url: '/game/spellingbee',
      textColor: '#323232',
      bgColor: '#F7DA21',
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
      bgColor: '#ff7d7d   ',
      description: 'Practice addition by counting the fruits!',
    },
    {
      icon: basedPath + 'ss.svg',
      title: 'Shape Shark',
      url: '/game/shapeshark',
      textColor: '#323232',
      bgColor: '#0EA1EA',
      description: 'Identify the shape based on its sides.',
    },

    {
      icon: basedPath + 'addition.svg',
      title: 'Animal Addition',
      url: '/game/addition',
      textColor: '#323232',
      bgColor: '#FF82E0',
      description: 'Add up the animals!',
    },
    {
      icon: basedPath + 'subtraction.svg',
      title: 'Subtraction Safari',
      url: '/game/subtraction',
      textColor: '#323232',
      bgColor: '#4ad9de',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-sub.svg',
      description: 'Subtract animals in safari scenarios!',
    },

    {
      icon: basedPath + 'mul.svg',
      title: 'Multiplication Madness',
      url: '/game/multiplicationmadness',
      textColor: '#323232',
      bgColor: '#6B7FFF',
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
      bgColor: '#F56A6C',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-mm.svg',
      description: 'Help the monkeys split their bananas!',
    },

    {
      icon: basedPath + 'cc.svg',
      title: 'Car Counting',
      url: '/game/carcounting',
      textColor: '#323232',
      bgColor: '#F7DA21',
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
      bgColor: '#4dd4ff',
      description:
        'Help identify solids, liquids, and gases before they evaporate!',
    },
    {
      icon: basedPath + 'cells.png',
      title: 'Tiny Cell Town',
      url: '/game/tinycelltown',
      textColor: '#323232',
      bgColor: '#a7f3d0',
      description:
        'Guide an alien through the microscopic city of a human cell.',
    },
    {
      icon: basedPath + 'weather.png',
      title: 'Weather Whiz',
      url: '/game/weatherwhiz',
      textColor: '#323232',
      bgColor: '#B19CD9',
      description:
        'Interpret the sky’s mood swings before the thunder has a tantrum.',
    },
    {
      icon: basedPath + 'astronaut.png',
      title: 'Space Case',
      url: '/game/spacecase',
      textColor: '#323232',
      bgColor: '#d1d5db',
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
      bgColor: '#c08b5f',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-dino.png',
      description: 'Use clues from bones and roars to identify ancient beasts.',
    },
    {
      icon: basedPath + 'germ.png',
      title: 'Germ Squad',
      url: '/game/germsquad',
      textColor: '#323232',
      bgColor: '#ff8c69',
      description:
        'Name the culprits behind a fever before the party gets out of hand.',
    },
    {
      icon: basedPath + 'landscape.png',
      title: 'Eco Rangers',
      url: '/game/ecorangers',
      textColor: '#323232',
      bgColor: '#52c687',
      description:
        'Identify environmental threats and help restore balance to nature.',
    },
    {
      icon: basedPath + 'sound.png',
      title: 'Sound Explorer',
      url: '/game/soundexplorer',
      textColor: '#323232',
      bgColor: '#fed7aa',
      bgDecoration: true,
      bgImage: '/assets/gameImages/bg-sound.png',
      description: 'Measure and decode sound waves to escape an echoing cave.',
    },
    {
      icon: basedPath + 'robot.png',
      title: 'Robot Repair Lab',
      url: '/game/robotrepair',
      textColor: '#323232',
      bgColor: '#0EA1EA',
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
      bgColor: '#ffc84d',
      description:
        'Learn the parts of a plant by listening to their whispered secrets.',
    },
  ];
};
