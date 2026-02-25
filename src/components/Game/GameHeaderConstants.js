/*
 * GameHeaderConstants.js:
 *
 * - Extracted, shared UI classes & game title constants for <GameHeader/> components
 * - Improves script readability & maintainability for:
 *  - <GameHeader/>, <QuestionCaptions/>, & <AnswerCaptions/>
 */

/* --- EXTRACTED RWD & STYLE CLASSES --- */

// RWD classes for outermost <GameHeader/> wrapper
export const gameHeaderClasses = [
  'relative', // RWD & positioning layout
  'flex',
  'flex-col',
  'items-center',
  'mobile:w-[70%]', // RWD size
  'w-[400px]',
  'md:w-full',
  'bg-cross-lines', // Styling & spacing
  'py-5',
  'px-12',
  'md:p-10',
  'my-2',
  'md:my-5',
  'rounded-[16px]',
  'shadow-md',
  'animate-fade-slide-in',
];

// RWD classes for multiple-choice captions
export const multipleChoiceClasses = [
  'bg-[#edf7fc]',
  'rounded-full',
  'p-0',
  'md:p-1',
  'my-3',
  'ease-in',
  'duration-300',
  'w-full' /* Mobile & small screens: Column layout */,
  'md:w-[45%]' /* Medium+ screens: Row layout */,
];

// RWD classes for user feedback message
export const feedbackClasses = [
  'flex', // RWD
  'gap-x-2',
  'md:flex-col',
  'items-center',
  'justify-center',
  'rounded-t-[16px]', // Styling, size, & text
  'md:rounded-l-[16px]',
  'md:rounded-r-[0px]',
  'w-full',
  'md:w-1/4',
  'p-1',
];

// Shared RWD classes for background (behind captions)
export const transparentBgClasses = [
  '-z-[1]',
  'absolute',
  'top-0',
  'left-0',
  'bg-white',
  'w-full',
  'h-full',
  'opacity-70',
  'rounded-b-[16px]',
  'md:rounded-l-[0px]',
  'md:rounded-r-[16px]',
];

/* --- CONSTANTS FOR MCQ & MULTI-PART QUESTION TYPES --- */
export const multipleChoiceGames = [
  'Vocabulary Vortex',
  'Polar Pairing',
  'Odd One Out',
];

export const multiPartsGames = [
  'Fruit Frenzy',
  'Monkey Madness',
  'Shape Shark',
];
