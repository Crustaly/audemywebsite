<script setup>
import { onMounted } from 'vue';

// Images

// Script Actions
onMounted(() => {
  function changeButtonBorder(buttonId) {
    buttonId.classList.add('custom-border');
  }
  function removeButtonBorder(buttonId) {
    buttonId.classList.remove('custom-border');
  }

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
  var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var stop = false;
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  var diagnostic = document.querySelector('.output');
  var bg = document.querySelector('html');
  var hints = document.querySelector('.hints');

  var roundCount = 1;
  var clickable = false;
  var insideGame = false;
  var input = '';
  var correct = false;

  var menu = false;
  var selectedShape = '';

  var num1;
  var num2;
  var word = '';
  var count = 0;
  var right = 0;
  var answers = [];
  var carTotal = 0;
  let audioInstance;

  gameMenu();
  speak('');

  async function playAudio(audio, len) {
    var a = new Audio(audio);
    a.play();
    audioInstance = a;
    console.log(audioInstance);
    await waitForSeconds(len);
  }

  function removeImages() {
    disappear('fruitFrenzyScreen');
    disappear('spellSafariScreen');
    disappear('blastOffScreen');
    disappear('animalSortScreen');
    disappear('carCountScreen');
    disappear('shapeParadeScreen');
    disappear('storyBuilderScreen');
    //disappear('monkeyMadnessScreen');
    //  disappear('dogDetectorScreen');
  }
  function removeMenuButtons() {
    disappear('fruitFrenzy');
    disappear('carCounting');
    disappear('shapeParade');
    disappear('spellingSafari');
    disappear('animalSorting');
    disappear('storyBuilder');
    disappear('spellTitle');
    disappear('mathTitle');
    disappear('dogDetector');
    disappear('monkeyMadness');
    disappear('penguinParty');
    disappear('crimeBusters');
    disappear('skeletonSlumber');
    disappear('makeABand');
    disappear('fridgeRefill');
    disappear('addTitle');
    disappear('wordTitle');
    disappear('countTitle');
    disappear('dogDetector1');
    disappear('fruitFrenzy1');
    disappear('carCounting1');
    disappear('spellingSafari1');
    disappear('countingGames');
    disappear('languageSection');
    disappear('mathSection');
    disappear('addGames');
    disappear('wordGames');
    // disappear('start');
    // disappear('mainInformation');
    menu = false;
  }

  function gameMenu() {
    appear('fruitFrenzy');
    appear('carCounting');
    appear('shapeParade');
    appear('spellingSafari');
    appear('animalSorting');
    appear('storyBuilder');
    appear('dogDetector');
    appear('monkeyMadness');
    appear('penguinParty');
    appear('crimeBusters');
    appear('skeletonSlumber');
    appear('makeABand');
    appear('fridgeRefill');
    appear('addTitle');
    appear('wordTitle');
    appear('countTitle');

    appear('dogDetector1');
    appear('fruitFrenzy1');
    appear('carCounting1');
    appear('spellingSafari1');

    // disappear('start');
    // disappear('mainInformation');
    appear('spellTitle');
    appear('mathTitle');
    removeImages();
    // menu = true;
    //  newButton = buttonsGrid[0][0];
    //playNewAudio(document.getElementById('fruitFrenzyAudio'));
  }
  function inGame(gameId) {
    insideGame = true;
    //remove menu buttons is in each function because there are cases where something is passed here that is not a game.
    if (gameId == 'blastOff' || gameId == 'blastOff1') {
      runBlastOff();
      removeMenuButtons();
    }
    if (gameId == 'fruitFrenzy' || gameId == 'fruitFrenzy1') {
      runFruitFrenzy();
      removeMenuButtons();
    }
    if (gameId == 'spellingSafari' || gameId == 'spellingSafari1') {
      runSpellSafari();
      removeMenuButtons();
    }
    if (gameId == 'shapeParade' || gameId == 'shapeParade1') {
      runShapeParade();
      removeMenuButtons();
    }
    if (gameId == 'storyBuilder' || gameId == 'storyBuilder1') {
      runStoryBuilder();
      removeMenuButtons();
    }
    if (gameId == 'carCounting' || gameId == 'carCounting1') {
      runCarCount();
      removeMenuButtons();
    }
    if (gameId == 'animalSort' || gameId == 'animalSort1') {
      runAnimalSort();
      removeMenuButtons();
    }
    if (gameId == 'dogDetector' || gameId == 'dogDetector1') {
      runDogDetector();
      removeMenuButtons();
    }
    if (gameId == 'pengiunParty' || gameId == 'pengiunParty1') {
      runDogDetector();
      removeMenuButtons();
    }
    if (gameId == 'monkeyMadness' || gameId == 'monkeyMadness1') {
      runMonkeyMadness();
      removeMenuButtons();
    }
    if (gameId == 'skeletonSlumber' || gameId == 'skeletonSlumber1') {
      runSkeletonSlumber();
      removeMenuButtons();
    }
    if (gameId == 'crimeBusters' || gameId == 'crimeBusters1') {
      runCrimeBusters();
      removeMenuButtons();
    }
    if (gameId == 'makeABand' || gameId == 'makeABand1') {
      runMakeABand();
      removeMenuButtons();
    }
    if (gameId == 'fridgeRefill' || gameId == 'fridgeRefill1') {
      runFridgeRefill();
      removeMenuButtons();
    }

    insideGame = false;
  }
  function disappear(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.display = 'none';
  }

  function appear(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.display = 'block'; // or "inline" or any valid display value
  }

  async function runFruitFrenzy() {
    appear('fruitFrenzyScreen');
    await playAudio('audioFiles/fruitFrenzy/fruitIntro.mp3', 18);
    roundCount = 5;
    clickable = false;
    var right = 0;
    count = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await fruitMathQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);
        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(num1 + num2);
        await waitForSeconds(0.5);
      }
    }
    if (right > 3) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }
  async function runCrimeBusters() {
    appear('');
    await playAudio('audioFiles/fruitFrenzy/fruitIntro.mp3', 18);
    roundCount = 5;
    clickable = false;
    var right = 0;
    count = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await crimeMathQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(num1 + num2);
        await waitForSeconds(0.5);
      }
    }
    if (right > 3) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }
  async function runSkeletonSlumber() {
    await playAudio('audioFiles/fruitFrenzy/fruitIntro.mp3', 18);
    roundCount = 5;
    clickable = false;
    var right = 0;
    count = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await skeletonMathQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(num1 + num2);
        await waitForSeconds(0.5);
      }
    }
    if (right > 3) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }
  async function runStoryBuilder() {
    appear('storyBuilderScreen');

    answers = [];
    await playAudio('audioFiles/storyBuilder/storyBuilderIntro.mp3', 31);
    await playAudio('audioFiles/storyBuilder/q1.mp3', 5);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    answers.push(input);
    await playAudio('audioFiles/storyBuilder/q2.mp3', 3);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    answers.push(input);
    await playAudio('audioFiles/storyBuilder/q3.mp3', 2);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    answers.push(input);
    await playAudio('audioFiles/storyBuilder/q4.mp3', 5);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    answers.push(input);
    await playAudio('audioFiles/storyBuilder/q5.mp3', 2);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    answers.push(input);
    await playAudio('audioFiles/storyBuilder/q6.mp3', 2);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    answers.push(input);
    clickable = false;
    await playAudio('audioFiles/storyBuilder/finished!.mp3', 4);
    await playAudio('audioFiles/storyBuilder/part1.mp3', 3.5);
    speak(answers[0]);
    await waitForSeconds(2);
    await playAudio('audioFiles/storyBuilder/part2.mp3', 5.5);
    speak(answers[1]);
    await waitForSeconds(2);
    await playAudio('audioFiles/storyBuilder/part3.mp3', 3.2);
    speak(answers[2]);
    await waitForSeconds(2);
    await playAudio('audioFiles/storyBuilder/partt4.mp3', 2);
    speak(answers[3]);
    await waitForSeconds(2);
    await playAudio('audioFiles/storyBuilder/part5.mp3', 3);
    speak(answers[4]);
    await waitForSeconds(2);
    await playAudio('audioFiles/storyBuilder/part6.mp3', 2.4);
    speak(answers[5]);
    await waitForSeconds(2);

    gameMenu();
  }
  async function runAnimalSort() {
    count = 0;
    appear('animalSortScreen');
    await playAudio('audioFiles/animalSort/animalSortIntro.mp3', 24);
    roundCount = 3;
    clickable = false;
    var right = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await animalSortQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);
        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);
        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
      }
    }
    if (right >= 2) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }

  async function runShapeParade() {
    count = 0;
    appear('shapeParadeScreen');
    await playAudio('audioFiles/shapeParade/shapeParadeIntro.mp3', 25);
    roundCount = 3;
    clickable = false;
    var right = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await shapeParadeQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);

        await playAudio('audioFiles/generalGame/correctWas.mp3', 1.5);
        speak(selectedShape.sides);
        await waitForSeconds(1);
      }
    }
    if (right >= 2) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }
  async function runSpellSafari() {
    count = 0;

    appear('spellSafariScreen');
    await playAudio('audioFiles/spellSafari/safariIntro.mp3', 18);
    roundCount = 5;
    clickable = false;
    var right = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await spellQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(splitWordWithSpaces(word));
        await waitForSeconds(3);
      }
    }
    if (right > 3) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }

  async function runCarCount() {
    count = 0;

    appear('carCountScreen');
    await playAudio('audioFiles/carCount/carCountIntro.mp3', 12);
    roundCount = 3;
    clickable = false;
    var right = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await carCountQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(carTotal);
        await waitForSeconds(0.5);
      }
    }
    if (right >= 2) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }
  async function runDogDetector() {
    count = 0;
    // appear("carCountScreen");
    await playAudio('audioFiles/dogDetector/dogDetectorIntro.mp3', 8);
    roundCount = 3;
    clickable = false;
    var right = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await dogDetectorQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(carTotal);
        await waitForSeconds(0.5);
      }
    }
    if (right >= 2) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }

  async function runMonkeyMadness() {
    count = 0;
    // appear("carCountScreen");
    await playAudio('audioFiles/monkeyMadness/monkeyMadnessIntro.mp3', 19);
    roundCount = 3;
    clickable = false;
    var right = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await monkeyMadnessQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);

        await playAudio('audioFiles/generalGame/correct.mp3', 1);
        right++;
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);

        await playAudio('audioFiles/generalGame/wrong.mp3', 1);
        await playAudio('audioFiles/generalGame/correctWas.mp3', 2);

        speak(carTotal);
        await waitForSeconds(0.5);
      }
    }
    if (right >= 2) {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/greatJob.mp3', 1);
    } else {
      await playAudio('audioFiles/generalGame/youGot.mp3', 1);
      speak(right);
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/questionsCorrect.mp3', 1);
      await playAudio('audioFiles/generalGame/keepPracticing.mp3', 2);
    }
    await waitForSeconds(2);
    clickable = false;
    gameMenu();
  }

  async function runBlastOff() {
    count = 0;

    appear('blastOffScreen');
    await playAudio('audioFiles/gameNames/blastOff/blastOffIntro.mp3', 40);
    roundCount = 8;
    clickable = false;
    var distance = 0;
    while (count < roundCount) {
      count++;
      clickable = false;
      correct = false;
      await playAudio('audioFiles/generalGame/qNum.mp3', 1.7);
      speak(count);
      await mathQuestion();
      if (correct) {
        await playAudio('audioFiles/generalGame/ding.mp3', 0.5);
        var amount = Math.floor(Math.random() * 15) + 15;
        distance = distance + amount;
        await playAudio('audioFiles/gameNames/blastOff/correctQuestion.mp3', 3);
        speak(amount);
        await waitForSeconds(0.5);
        await playAudio('audioFiles/gameNames/blastOff/kilometers.mp3', 2);
      } else {
        await playAudio('audioFiles/generalGame/drum.mp3', 0.5);
        var amount = Math.floor(Math.random() * 5) + 5;
        distance = distance + amount;
        await playAudio('audioFiles/gameNames/blastOff/wrongQuestion.mp3', 2.7);
        speak(amount);
        await waitForSeconds(0.5);
        await playAudio('audioFiles/gameNames/blastOff/kilometers.mp3', 2);
        await playAudio('audioFiles/gameNames/blastOff/correctWas.mp3', 2);
        speak(num1 + num2);
        await waitForSeconds(0.5);
      }
    }
    if (distance >= 100) {
      await playAudio('audioFiles/gameNames/blastOff/congratsPart1.mp3', 3);
      speak(distance);
      await waitForSeconds(1);
      await playAudio('audioFiles/gameNames/blastOff/kilometers.mp3', 2);
    } else {
      await playAudio('audioFiles/gameNames/blastOff/failPart1.mp3', 4.5);
      speak(distance);
      await waitForSeconds(1);
      await playAudio('audioFiles/gameNames/blastOff/kilometers.mp3', 2);
    }
    clickable = false;
    await waitForSeconds(3);
    gameMenu();
  }
  async function shapeParadeQuestion() {
    await waitForSeconds(1);
    await playAudio('audioFiles/shapeParade/how many.mp3', 2.9);
    const randomIndex = Math.floor(Math.random() * shapes.length);
    selectedShape = shapes[randomIndex];
    speak(selectedShape.name);
    await waitForSeconds(1);

    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    if (toNum(input) == selectedShape.sides) {
      correct = true;
    }
    clickable = false;
  }
  async function spellQuestion() {
    generateWord();
    await playAudio('audioFiles/generalGame/howSpell.mp3', 1.7);
    speak(word);
    await waitForSeconds(1);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    formatString(input);

    if (word == input) {
      correct = true;
    }
  }
  function splitWordWithSpaces(word) {
    // Split the word into an array of letters
    const lettersArray = word.split('');

    // Join the letters back together with spaces in between
    const spacedWord = lettersArray.join(' ');

    return spacedWord;
  }

  async function mathQuestion() {
    generateAdditionProblems();
    speak('What is');
    await waitForSeconds(1);
    speak(num1);
    await waitForSeconds(2.5);
    await playAudio('audioFiles/generalGame/plus.mp3', 1);
    speak(num2);
    await waitForSeconds(1);
    clickable = true;
    await waitForRecognitionResult();
    if (num1 + num2 == toNum(input)) {
      correct = true;
    }
  }
  async function animalSortQuestion() {
    const land = Math.floor(Math.random() * 2) + 1;
    await waitForSeconds(1);
    await playAudio('audioFiles/animalSort/isA.mp3', 1.5);
    if (land == 1) {
      speak(randomLandAnimal());
    } else {
      speak(randomSeaAnimal());
    }
    await waitForSeconds(1);
    await playAudio('audioFiles/animalSort/seaorland.mp3', 2.8);
    await playAudio('audioFiles/animalSort/sayoceanorland.mp3', 7);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    if (land == 1) {
      if (input.toLowerCase().includes('land')) {
        correct = true;
      }
    }
    if (land == 2) {
      if (input.toLowerCase().includes('ocean') || input.includes('land')) {
        correct = true;
      }
    }
  }

  async function fruitMathQuestion() {
    const fruitNames = [
      'audioFiles/fruitFrenzy/oranges.mp3',
      'audioFiles/fruitFrenzy/bananas.mp3',
      'audioFiles/fruitFrenzy/apples.mp3',
    ];

    generateAdditionProblems();
    await waitForSeconds(1);
    await playAudio('audioFiles/fruitFrenzy/thereAre.mp3', 1.2);
    await waitForSeconds(0.4);
    speak(num1);
    await waitForSeconds(0.7);
    var randomIndex = Math.floor(Math.random() * 3);

    await playAudio(fruitNames[randomIndex], 0.5);
    await waitForSeconds(0.5);
    speak('and' + num2);
    await waitForSeconds(0.6);

    randomIndex = Math.floor(Math.random() * 3);
    await playAudio(fruitNames[randomIndex], 1);
    clickable = true;
    await playAudio('audioFiles/fruitFrenzy/fruitTotal.mp3', 1.5);
    if (count == 1) {
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    }
    await waitForRecognitionResult();
    if (num1 + num2 == toNum(input)) {
      correct = true;
    }
  }

  async function skeletonMathQuestion() {
    const fruitNames = [
      'audioFiles/fruitFrenzy/oranges.mp3',
      'audioFiles/fruitFrenzy/bananas.mp3',
      'audioFiles/fruitFrenzy/apples.mp3',
    ];

    generateAdditionProblems();
    await waitForSeconds(1);
    await playAudio('audioFiles/fruitFrenzy/thereAre.mp3', 1.2);
    await waitForSeconds(0.4);
    speak(num1);
    await waitForSeconds(0.7);
    var randomIndex = Math.floor(Math.random() * 3);

    await playAudio(fruitNames[randomIndex], 0.5);
    await waitForSeconds(0.5);
    speak('and' + num2);
    await waitForSeconds(0.6);

    randomIndex = Math.floor(Math.random() * 3);
    await playAudio(fruitNames[randomIndex], 1);
    clickable = true;
    await playAudio('audioFiles/fruitFrenzy/fruitTotal.mp3', 1.5);
    if (count == 1) {
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    }
    await waitForRecognitionResult();
    if (num1 + num2 == toNum(input)) {
      correct = true;
    }
  }
  async function crimeMathQuestion() {
    const fruitNames = [
      'audioFiles/fruitFrenzy/oranges.mp3',
      'audioFiles/fruitFrenzy/bananas.mp3',
      'audioFiles/fruitFrenzy/apples.mp3',
    ];

    generateAdditionProblems();
    await waitForSeconds(1);
    await playAudio('audioFiles/fruitFrenzy/thereAre.mp3', 1.2);
    await waitForSeconds(0.4);
    speak(num1);
    await waitForSeconds(0.7);
    var randomIndex = Math.floor(Math.random() * 3);

    await playAudio(fruitNames[randomIndex], 0.5);
    await waitForSeconds(0.5);
    speak('and' + num2);
    await waitForSeconds(0.6);

    randomIndex = Math.floor(Math.random() * 3);
    await playAudio(fruitNames[randomIndex], 1);
    clickable = true;
    await playAudio('audioFiles/fruitFrenzy/fruitTotal.mp3', 1.5);
    if (count == 1) {
      await waitForSeconds(0.5);
      await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    }
    await waitForRecognitionResult();
    if (num1 + num2 == toNum(input)) {
      correct = true;
    }
  }

  async function carCountQuestion() {
    carTotal = Math.floor(Math.random() * 5) + 1;
    await waitForSeconds(1);
    await playAudio('audioFiles/carCount/carInformation.mp3', 4);
    for (let i = 0; i < carTotal; i++) {
      await playAudio('audioFiles/carCount/carDrive.wav', 4);
    }

    await waitForSeconds(0.1);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);

    clickable = true;
    await waitForRecognitionResult();
    if (carTotal == toNum(input)) {
      correct = true;
    }
  }

  async function monkeyMadnessQuestion() {
    carTotal = Math.floor(Math.random() * 3) + 1;
    await waitForSeconds(1);
    await playAudio('audioFiles/monkeyMadness/startCountMoneky.mp3', 4);
    for (let i = 0; i < carTotal; i++) {
      await playAudio('audioFiles/monkeyMadness/monkeySwings.mp3', 2);
    }
    await waitForSeconds(0.1);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    if (carTotal == toNum(input)) {
      correct = true;
    }
  }
  async function dogDetectorQuestion() {
    carTotal = Math.floor(Math.random() * 3) + 1;
    await waitForSeconds(1);
    await playAudio('audioFiles/dogDetector/countStart.mp3', 2);
    for (let i = 0; i < carTotal; i++) {
      await playAudio('audioFiles/dogDetector/dogBark.mp3', 1);
    }
    await waitForSeconds(0.1);
    await playAudio('audioFiles/generalGame/clickandsay.mp3', 4);
    clickable = true;
    await waitForRecognitionResult();
    if (carTotal == toNum(input)) {
      correct = true;
    }
  }
  function handleClickOrSpace(event) {
    // Check if the event is a click event
    if (
      event.type === 'click' ||
      (event.type === 'keydown' && event.key == 'Shift')
    ) {
      if (clickable) {
        recognition.start();
      } else if (!insideGame) {
        inGame(event.target.id);
      }
    }

    // Check if the event is a keypress event and the key is space bar
    if (event.type === 'keypress' && event.key === ' ') {
      // Prevent the default action of the space bar (scrolling the page)
      event.preventDefault();
    }
  }

  document.addEventListener('keydown', handleClickOrSpace);

  document.addEventListener('click', handleClickOrSpace);

  async function waitForRecognitionResult() {
    return new Promise((resolve) => {
      recognition.onresult = async function (event) {
        input = event.results[0][0].transcript;
        input = input.toLowerCase();
        resolve();
      };
    });
  }

  // function playAudio(audio) {
  //   audio.play();
  // }

  function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0; // Resets audio to beginning
  }

  recognition.onerror = function () {
    speak(
      "Sorry, I didn't catch that. Please click the shift key or tap the screen and try again."
    );
    clickable = true;
  };
  recognition.onspeechend = function () {
    recognition.stop();
  };

  function generateAdditionProblems() {
    num1 = Math.floor(Math.random() * 9) + 2;
    num2 = Math.floor(Math.random() * 9) + 2;
  }

  function generateWord() {
    word = easyWords[Math.floor(Math.random() * easyWords.length)];
  }
  function formatString(str) {
    const formattedStr = str
      .toLowerCase()
      .replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    input = formattedStr;
  }

  function waitForSeconds(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  }

  function speak(s) {
    //some browsers are special so... ijust did this hopefully this works!
    let utterance = new SpeechSynthesisUtterance(s);
    // voices = speechSynthesis.getVoices()
    // utterance.voice = voices[2];
    if (s == 1) {
    }
    speechSynthesis.speak(utterance);
  }

  const easyWords = [
    'cat',
    'dog',
    'hat',
    'moon',
    'star',
    'fish',
    'bird',
    'tree',
    'cake',
    'ball',
    'duck',
    'frog',
    'desk',
    'door',
    'home',
    'lamp',
    'leaf',
    'milk',
    'nest',
    'park',
    'soap',
    'sock',
    'chair',
    'table',
    'mouse',
    'horse',
    'apple',
    'banana',
    'lemon',
    'grape',
    'melon',
    'orange',
    'peach',
    'pear',
    'cherry',
    'candy',
    'pizza',
    'burger',
    'apple',
    'bread',
    'cheese',
    'chicken',
    'pasta',
    'pizza',
    'salad',
    'sauce',
    'coffee',
    'juice',
    'water',
    'muffin',
    'butter',
    'sugar',
    'honey',
    'bread',
    'bottle',
    'bag',
    'car',
    'bus',
    'bike',
    'train',
    'truck',
    'plane',
    'boat',
    'van',
    'house',
    'store',
    'bank',
    'park',
    'zoo',
    'pool',
    'beach',
    'river',
    'lake',
    'hill',
    'city',
    'town',
    'school',
    'park',
    'farm',
    'forest',
    'ocean',
    'planet',
    'moon',
    'star',
    'sky',
    'cloud',
    'rain',
    'snow',
    'wind',
    'storm',
    'light',
    'dark',
    'cold',
    'hot',
    'warm',
    'cool',
    'wet',
    'dry',
    'fast',
    'slow',
    'quick',
    'easy',
    'hard',
    'soft',
    'loud',
    'quiet',
    'big',
    'small',
    'short',
    'tall',
    'thick',
    'thin',
    'skinny',
    'young',
    'old',
    'new',
    'fresh',
    'clean',
    'dirty',
    'happy',
    'sad',
    'angry',
    'scared',
    'tired',
    'sleepy',
    'purple',
    'green',
    'brown',
    'orange',
    'yellow',
    'pink',
    'black',
    'fun',
    'boring',
    'nice',
    'mean',
    'kind',
    'rude',
    'good',
    'bad',
    'right',
    'wrong',
    'true',
    'false',
    'smart',
    'dumb',
    'brave',
    'coward',
    'rich',
    'safe',
    'danger',
    'healthy',
    'sick',
    'alive',
    'dead',
    'beautiful',
    'ugly',
    'pretty',
    'handsome',
    'clever',
    'stupid',
    'calm',
    'wild',
    'friendly',
    'happy',
    'merry',
    'joyful',
    'sad',
    'gloomy',
    'serious',
    'silly',
    'laugh',
    'cry',
    'smile',
    'frown',
    'wink',
    'nod',
    'shake',
    'blink',
    'yawn',
    'stretch',
    'jump',
    'run',
    'walk',
    'crawl',
    'swim',
    'fly',
    'climb',
    'fall',
    'ride',
    'drive',
    'row',
    'lift',
    'push',
    'pull',
    'throw',
    'catch',
    'kick',
    'hit',
    'fight',
    'argue',
    'agree',
    'disagree',
    'listen',
    'speak',
    'talk',
    'whisper',
    'shout',
    'read',
    'write',
    'draw',
    'paint',
    'color',
    'build',
    'destroy',
    'fix',
    'break',
    'open',
    'close',
    'start',
    'finish',
    'stop',
    'go',
    'stay',
    'leave',
    'enter',
    'exit',
    'find',
    'lose',
    'win',
    'lose',
    'earn',
    'spend',
    'buy',
    'sell',
    'pay',
    'receive',
    'give',
    'take',
    'keep',
    'throw',
    'catch',
    'drop',
    'pick',
    'put',
    'move',
    'turn',
    'lift',
    'pull',
    'push',
    'carry',
    'hold',
    'touch',
    'feel',
    'watch',
    'listen',
    'smell',
    'taste',
    'drink',
    'sleep',
    'dream',
    'wake',
    'work',
    'rest',
    'play',
    'study',
    'learn',
    'teach',
    'think',
    'forget',
    'know',
    'believe',
    'doubt',
    'hope',
    'wish',
    'imagine',
    'create',
    'invent',
    'discover',
    'explore',
    'solve',
    'plan',
    'decide',
    'choose',
    'change',
    'stay',
    'remain',
    'live',
    'born',
    'grow',
    'develop',
    'age',
    'mature',
    'youth',
    'adult',
    'child',
    'baby',
    'parent',
    'mother',
    'father',
    'brother',
    'sister',
    'friend',
    'enemy',
    'stranger',
    'teacher',
    'student',
    'doctor',
    'nurse',
    'engineer',
    'artist',
    'musician',
    'actor',
    'writer',
    'singer',
    'dancer',
    'chef',
    'waiter',
    'driver',
    'pilot',
    'captain',
    'sailor',
    'farmer',
    'soldier',
    'fireman',
    'lawyer',
    'judge',
    'athlete',
    'coach',
    'referee',
    'judge',
  ];

  function randomLandAnimal() {
    const randomIndex = Math.floor(Math.random() * landAnimals.length);

    return landAnimals[randomIndex];
  }
  function randomSeaAnimal() {
    const randomIndex = Math.floor(Math.random() * seaAnimals.length);

    return seaAnimals[randomIndex];
  }
  // Array of land animals
  const landAnimals = [
    'Dog',
    'Cat',
    'Cow',
    'Horse',
    'Sheep',
    'Pig',
    'Rabbit',
    'Deer',
    'Squirrel',
    'Elephant',
    'Giraffe',
    'Lion',
    'Tiger',
    'Bear',
    'Fox',
    'Kangaroo',
    'Panda',
    'Zebra',
    'Camel',
    'Goat',
  ];

  // Array of sea animals
  const seaAnimals = [
    'Fish',
    'Shark',
    'Dolphin',
    'Whale',
    'Octopus',
    'Seal',
    'Turtle',
    'Jellyfish',
    'Crab',
    'Starfish',
    'Seahorse',
    'Lobster',
    'Squid',
    'Eel',
    'Pufferfish',
    'Clownfish',
    'Manta Ray',
    'Manatee',
    'Sea Lion',
    'Orca',
  ];
  function toNum(num) {
    //be careful! includes goes to 1  if input is 10
    if (num.includes('ten') || num.includes('10')) {
      return 10;
    } else if (num.includes('eleven') || num.includes('11')) {
      return 11;
    } else if (num.includes('twelve') || num.includes('12')) {
      return 12;
    } else if (num.includes('thirteen') || num.includes('13')) {
      return 13;
    } else if (num.includes('fourteen') || num.includes('14')) {
      return 14;
    } else if (num.includes('fifteen') || num.includes('15')) {
      return 15;
    } else if (num.includes('sixteen') || num.includes('16')) {
      return 16;
    } else if (num.includes('seventeen') || num.includes('17')) {
      return 17;
    } else if (num.includes('eighteen') || num.includes('18')) {
      return 18;
    } else if (num.includes('nineteen') || num.includes('19')) {
      return 19;
    } else if (num.includes('twenty') || num.includes('20')) {
      return 20;
    } else if (num.includes('one') || num.includes('1')) {
      return 1;
    } else if (num.includes('two') || num.includes('2')) {
      return 2;
    } else if (num.includes('three') || num.includes('3')) {
      return 3;
    } else if (num.includes('four') || num.includes('4')) {
      return 4;
    } else if (num.includes('five') || num.includes('5')) {
      return 5;
    } else if (num.includes('six') || num.includes('6')) {
      return 6;
    } else if (num.includes('seven') || num.includes('7')) {
      return 7;
    } else if (num.includes('eight') || num.includes('8')) {
      return 8;
    } else if (num.includes('nine') || num.includes('9')) {
      return 9;
    } else if (num.includes('exit')) {
      return 'exit';
    } else {
      return 'unknown';
    }
  }

  const shapes = [
    { name: 'triangle', sides: 3 },
    { name: 'square', sides: 4 },
    { name: 'pentagon', sides: 5 },
    { name: 'hexagon', sides: 6 },
    { name: 'octagon', sides: 8 },
  ];

  const audioElements = Array.from(document.querySelectorAll('audio'));
  console.log(audioElements);

  const playHomeButton = document.getElementById('play-home-button');

  playHomeButton.addEventListener('click', (e) => {
    audioElements.map((el) => {
      console.log(el);
      el.pause();
    });
    audioInstance.pause();
  });
});
</script>

<template>
  <div class="navbar">
    <div>
      <img
        src="../../assets/gameImages/buttons/logoNav.png"
        alt="Logo"
        width="50"
        onclick="window.location.reload()"
      />
    </div>

    <div>
      <RouterLink
        id="play-home-button"
        onclick="window.location.reload()"
        to="/"
        >Home</RouterLink
      >
    </div>
  </div>

  <div class="play-container" id="mathSection">
    <section>
      <h2 id="mathTitle" class="title">Popular Math Games</h2>
      <div class="game-buttons">
        <button id="fruitFrenzy">
          <img
            data-audio="fruitFrenzyAudio"
            src="../../assets/gameImages/buttons/gameButtons/fruitFrenzyButtonv2.png"
            alt="fruit Frenzy"
            class="game-button"
            id="fruitFrenzy"
          />
        </button>
        <button id="carCounting">
          <img
            data-audio="carCountingAudio"
            src="../../assets/gameImages/buttons/gameButtons/carCountButtonv2.png"
            alt="car Counting"
            class="game-button"
            id="carCounting"
          />
        </button>
        <button id="shapeParade">
          <img
            data-audio="shapeParadeAudio"
            src="../../assets/gameImages/buttons/gameButtons/shapeParadeButtonv2.png"
            alt="shape Parade"
            class="game-button"
            id="shapeParade"
          />
        </button>
        <button id="dogDetector">
          <img
            src="../../assets/gameImages/buttons/gameButtons/dogDetectorButton.png"
            alt="dog detector"
            class="game-button"
            id="dogDetector"
          />
        </button>
      </div>
    </section>
  </div>

  <div class="play-container" id="languageSection">
    <section>
      <h2 id="spellTitle" class="title">Popular Language Games</h2>
      <div class="game-buttons">
        <button id="spellingSafari">
          <img
            data-audio="spellingSafariAudio"
            src="../../assets/gameImages/buttons/gameButtons/spellingSafariButtonv2.png"
            alt="spelling Safari"
            class="game-button"
            id="spellingSafari"
          />
        </button>
        <button id="animalSorting">
          <img
            data-audio="animalSortAudio"
            src="../../assets/gameImages/buttons/gameButtons/animalSortButtonv2.png"
            alt="animal Sort"
            class="game-button"
            id="animalSort"
          />
        </button>
        <button id="storyBuilder">
          <img
            data-audio="storyBuilderAudio"
            src="../../assets/gameImages/buttons/gameButtons/storyBuilderButtonv2.png"
            alt="story Builder"
            class="game-button"
            id="storyBuilder"
          />
        </button>
        <button id="penguinParty">
          <img
            src="../../assets/gameImages/buttons/gameButtons/penguinParty.png"
            alt="penguin Party"
            class="game-button"
            id="penguinParty"
          />
        </button>
      </div>
    </section>
  </div>

  <div class="play-container" id="countingGames">
    <section>
      <h2 id="countTitle" class="title">Counting Games</h2>
      <div class="game-buttons">
        <button id="dogDetector1">
          <img
            src="../../assets/gameImages/buttons/gameButtons/dogDetectorButton.png"
            alt="dog detector"
            class="game-button"
            id="dogDetector1"
          />
        </button>

        <button id="monkeyMadness">
          <img
            src="../../assets/gameImages/buttons/gameButtons/monkeyMadnessButton.png"
            alt="monkey madness"
            class="game-button"
            id="monkeyMadness"
          />
        </button>

        <button id="carCounting1">
          <img
            src="../../assets/gameImages/buttons/gameButtons/carCountButtonv2.png"
            alt="car Counting"
            class="game-button"
            id="carCounting1"
          />
        </button>
      </div>
    </section>
  </div>

  <div class="play-container" id="addGames">
    <section>
      <h2 id="addTitle" class="title">Addition Games</h2>
      <div class="game-buttons">
        <button id="fruitFrenzy1">
          <img
            data-audio="fruitFrenzyAudio"
            src="../../assets/gameImages/buttons/gameButtons/fruitFrenzyButtonv2.png"
            alt="fruit Frenzy"
            class="game-button"
            id="fruitFrenzy1"
          />
        </button>

        <button id="skeletonSlumber">
          <img
            src="../../assets/gameImages/buttons/gameButtons/skeletonSlumber.png"
            alt="skeleton slumber"
            class="game-button"
            id="skeletonSlumber"
          />
        </button>

        <button id="crimeBusters">
          <img
            src="../../assets/gameImages/buttons/gameButtons/crimeBusters.png"
            alt="Crime Busters"
            class="game-button"
            id="crimeBusters"
          />
        </button>
      </div>
    </section>
  </div>

  <div class="play-container" id="wordGames">
    <section>
      <h2 id="wordTitle" class="title">Word Games</h2>
      <div class="game-buttons">
        <button id="spellingSafari1">
          <img
            data-audio="fruitFrenzyAudio"
            src="../../assets/gameImages/buttons/gameButtons/spellingSafariButtonv2.png"
            alt="spelling Safari"
            class="game-button"
            id="spellingSafari1"
          />
        </button>

        <button id="fridgeRefill">
          <img
            src="../../assets/gameImages/buttons/gameButtons/refrigeratorRefill.png"
            alt="fridgeRefill"
            class="game-button"
            id="fridgeRefill"
          />
        </button>

        <button id="makeABand">
          <img
            src="../../assets/gameImages/buttons/gameButtons/makeABand.png"
            alt="makeABand"
            class="game-button"
            id="makeABand"
          />
        </button>
      </div>
    </section>
  </div>
  <div class="audios">
    <audio
      id="fruitFrenzyAudio"
      src="../../assets/audioFiles/gameNames/newGameNames/fruitFrenzy.mp3"
    ></audio>
    <audio
      id="carCountingAudio"
      src="../../assets/audioFiles/gameNames/newGameNames/carCount.mp3"
    ></audio>
    <audio
      id="shapeParadeAudio"
      src="../../assets/audioFiles/gameNames/newGameNames/shapeParade.mp3"
    ></audio>
    <audio
      id="spellingSafariAudio"
      src="../../assets/audioFiles/gameNames/newGameNames/spellSafari.mp3"
    ></audio>
    <audio
      id="animalSortAudio"
      src="../../assets/audioFiles/gameNames/newGameNames/animalSort.mp3"
    ></audio>
    <audio
      id="storyBuilderAudio"
      src="../../assets/audioFiles/gameNames/newGameNames/storyBuilder.mp3"
    ></audio>
  </div>

  <div>
    <img
      src="../../assets/audioFiles/fruitFrenzy/background.png"
      alt=""
      class="screen"
      id="fruitFrenzyScreen"
    />
  </div>
  <div>
    <img
      src="../../assets/audioFiles/spellSafari/spellSafariScreen.png"
      alt=""
      class="screen"
      id="spellSafariScreen"
    />
  </div>
  <div>
    <img
      src="../../assets/audioFiles/spellSafari/spellSafariScreen.png"
      alt=""
      class="screen"
      id="blastOffScreen"
    />
  </div>
  <div>
    <img
      src="../../assets/audioFiles/storyBuilder/storyBuilderScreen.png"
      alt=""
      class="screen"
      id="storyBuilderScreen"
    />
  </div>
  <div>
    <img
      src="../../assets/audioFiles/shapeParade/shapeParadeScreen.png"
      alt=""
      class="screen"
      id="shapeParadeScreen"
    />
  </div>
  <div>
    <img
      src="../../assets/audioFiles/carCount/carCountScreen.png"
      alt=""
      class="screen"
      id="carCountScreen"
    />
  </div>
  <div>
    <img
      src="../../assets/audioFiles/animalSort/animalSortScreen.png"
      alt=""
      class="screen"
      id="animalSortScreen"
    />
  </div>

  <footer>
    <img
      src="../../assets/gameImages/buttons/logoNav.png"
      alt="Audemy Logo"
      width="300vh"
    />
    <p>Blind and Visually Impaired Education</p>
  </footer>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

button {
  border: none;
  background: none;
}
.title {
  font-family: 'DynaPuff', sans-serif;
  padding: 20px;
  font-weight: 700;
  font-size: 50px;
  text-transform: none;
  letter-spacing: normal;
  line-height: normal;
}
#start {
  display: block;
  margin: auto;
}
#mainInformation {
  text-align: center;
}
.screen {
  display: block;
  margin: auto;

  max-width: 60%;
}
.navbar {
  background-color: #fe892a;
  color: white;
  padding: 05px 5px; /* Increased padding for thicker navbar */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar img {
  width: 20%;
  height: auto;
}
/* Remove borders for buttons and images */

/* Remove border around images within buttons */

.navbar a {
  color: white;
  text-decoration: none;
  font-family: 'Adlam', sans-serif;
}

.play-container {
  padding: 20px;
}

h2 {
  margin-top: 30px; /* Increased gap between sections */
}

.start-button:hover {
  background-color: #f0f0f0;
}

.game-button:hover {
  background-color: #f0f0f0;
}

.start-button {
  width: 80%;

  padding: 20px;
  background-color: transparent;
  border: 0; /* Set border to 0 */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none; /* Remove outline on focus */
}

.game-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* border: none; */
}

.game-button {
  width: 70%;

  padding: 20px;
  background-color: transparent;
  /* border: 0; /* Set border to 0 */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none; /* Remove outline on focus */
}

a {
  all: initial;
  cursor: pointer;
}

@media (max-width: 768px) {
  .game-buttons {
    flex-direction: column;
    align-items: center;
    border: none;
  }

  .game-button {
    border: none;
    width: 80%;
    margin-bottom: 10px;
  }
}

.hidden {
  display: none;
}
/* Universal focus selector */
.custom-border {
  border: 2px solid #fe892a; /* Adjust border width and color as desired */
  box-shadow: 0 0 5px #fe892a; /* Optional: Add a slight box-shadow for a better visual effect */
  outline: none; /* Keep outline set to none */
}
#mathTitle {
  margin-bottom: 10px;
  text-align: center; /* Centered text */
  color: #000f1f; /* Darker text color */
  background-color: #50d246;
}
#countTitle {
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center; /* Centered text */
  color: #000f1f; /* Darker text color */
  background-color: #ad5fec;
}
#spellTitle {
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center; /* Centered text */
  color: #000f1f; /* Darker text color */
  background-color: #0087db;
}
footer {
  background-color: #fe892a;
  color: white;
  padding: 20px;
  text-align: center;
  font-family: 'Adlam', sans-serif;
}
#addTitle {
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center; /* Centered text */
  color: #000f1f; /* Darker text color */
  background-color: #ec5f8a;
}
#wordTitle {
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center; /* Centered text */
  color: #000f1f; /* Darker text color */
  background-color: #ece15f;
}
#mathSection {
  background-color: #a2ec9c; /* Blue background */
}
#languageSection {
  background-color: #8ad0ff; /* Blue background */
}
#countingGames {
  background-color: #df9cec; /* Blue background */
}
#addGames {
  background-color: #ec9ca4; /* Blue background */
}
#wordGames {
  background-color: #ecea9c; /* Blue background */
}
</style>
