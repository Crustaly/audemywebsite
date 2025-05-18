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
      description: 'Divide the given numers!',
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
