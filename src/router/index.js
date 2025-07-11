import { createWebHistory, createRouter } from 'vue-router';

import Home from '../pages/Home/Home.vue';
import OurProjects from '../pages/OurProjects/OurProjects.vue';
import GameZone from '../pages/GameZone/GameZone.vue';
import LogIn from '../pages/LogIn/LogIn.vue';
import NotFound from '../pages/NotFound/NotFound.vue';
import SignUp from '../pages/SignUp/SignUp.vue';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword.vue';
import ResetLinkSent from '../pages/ForgotPassword/ResetLinkSent.vue';
import ResetPassword from '../pages/ResetPassword/ResetPassword.vue';
import ResetConfirm from '../pages/ResetPassword/ResetConfirm.vue';
import ResetLandingPage from '../pages/ResetPassword/ResetLandingPage.vue';
import AboutUs from '../pages/AboutUs/AboutUs.vue';
import Impact from '../pages/Impact/Impact.vue';
import Troubleshooting from '../pages/Troubleshooting/Troubleshooting.vue';
// import SpellingBee from "../pages/GameZone/GameZoneList/SpellingBee/SpellingBee.vue";
import MainDashboard from '../pages/Dashboard/MainDashboard.vue';
import StudentList from '../pages/Dashboard/StudentList.vue';
import TeacherDashboard from '../pages/Dashboard/TeacherDashboard.vue';
import GamesDashboard from '../pages/Dashboard/GamesDashboard.vue';
import DashboardSummary from '../pages/Dashboard/DashboardSummary.vue';
import Press from '../pages/Press/Press.vue';

const routes = [
  { path: '/home', redirect: '/' },
  { path: '/', name: 'Home', component: Home },
  { path: '/game-zone', name: 'Game-Zone', component: GameZone },
  { path: '/our-projects', name: 'Our-Projects', component: OurProjects },
  { path: '/impact', name: 'Impact', component: Impact },
  { path: '/about-us', name: 'About-Us', component: AboutUs },
  { path: '/press', name: 'Press', component: Press},
  { path: '/login', name: 'LogIn', component: LogIn },
  { path: '/signup', name: 'Sign Up', component: SignUp },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: ForgotPassword,
  },
  {
    path: '/reset-link-sent',
    name: 'Reset Link Sent',
    component: ResetLinkSent,
  },
  { path: '/reset-password', name: 'Reset Password', component: ResetPassword },
  { path: '/reset-confirm', name: 'Reset Confirm', component: ResetConfirm },
  {
    path: '/reset-landing-page',
    name: 'Reset Landing Page',
    component: ResetLandingPage,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  {
    path: '/troubleshooting',
    name: 'Troubleshooting Page',
    component: Troubleshooting,
  },
  {
    path: '/game/addition',
    name: 'AdditionGame',
    component: () => import('../pages/GameZone/GameZoneList/AdditionGame.vue'),
  },
  {
    path: '/game/multiplicationmadness',
    name: 'MultiplicationMadness',
    component: () =>
      import('../pages/GameZone/GameZoneList/MultiplicationMadness.vue'),
  },
  {
    path: '/game/subtraction',
    name: 'SubtractionGame',
    component: () =>
      import('../pages/GameZone/GameZoneList/SubtractionGame.vue'),
  },
  {
    path: '/game/vocabVortex',
    name: 'vocabVortex',
    component: () => import('../pages/GameZone/GameZoneList/Vocab.vue'),
  },
  {
    path: '/game/divisionDuel',
    name: 'DivisionDuel',
    component: () => import('../pages/GameZone/GameZoneList/DivisionDuel.vue'),
  },
  {
    path: '/game/oddoneout',
    name: 'OddOneOut',
    component: () => import('../pages/GameZone/GameZoneList/OddOneOut.vue'),
  },
  {
    path: '/game/polarpairing',
    name: 'PolarPairing',
    component: () => import('../pages/GameZone/GameZoneList/PolarPairing.vue'),
  },
  // {
  //     path: "/game/spelling-bee",
  //     name: "SpellingBee",
  //     component: SpellingBee,
  // },
  {
    path: '/game/spellingbee',
    name: 'SpellingBee',
    component: () => import('../pages/GameZone/GameZoneList/SpellingBee.vue'),
  },
  {
    path: '/game/carcounting',
    name: 'CarCounting',
    component: () => import('../pages/GameZone/GameZoneList/CarCounting.vue'),
  },
  {
    path: '/game/fruitfrenzy',
    name: 'FruitFrenzy',
    component: () => import('../pages/GameZone/GameZoneList/FruitFrenzy.vue'),
  },
  {
    path: '/game/monkeymadness',
    name: 'MonkeyMadness',
    component: () => import('../pages/GameZone/GameZoneList/MonkeyMadness.vue'),
  },
  {
    path: '/game/shapeshark',
    name: 'ShapeShark',
    component: () => import('../pages/GameZone/GameZoneList/ShapeShark.vue'),
  },
  {
    path: '/game/syllableSorting',
    name: 'SyllableSorting',
    component: () =>
      import('../pages/GameZone/GameZoneList/SyllableSorting.vue'),
  },
  {
    path: '/game/definitionDetective',
    name: 'DefinitionDetective',
    component: () =>
      import('../pages/GameZone/GameZoneList/DefinitionDetective.vue'),
  },
  {
    path: '/game/partofspeech',
    name: 'PartOfSpeech',
    component: () => import('../pages/GameZone/GameZoneList/PartOfSpeech.vue'),
  },
  {
    path: '/game/colorgame',
    name: 'ColorGame',
    component: () => import('../pages/GameZone/GameZoneList/ColorGame.vue'),
  },

  // Science Games

  {
    path: '/game/mattermixup',
    name: 'MatterMixUp',
    component: () => import('../pages/GameZone/GameZoneList/MatterMixUp.vue'),
  },
  {
    path: '/game/tinycelltown',
    name: 'TinyCellTown',
    component: () => import('../pages/GameZone/GameZoneList/TinyCellTown.vue'),
  },
  {
    path: '/game/weatherwhiz',
    name: 'WeatherWhiz',
    component: () => import('../pages/GameZone/GameZoneList/WeatherWhiz.vue'),
  },
  {
    path: '/game/spacecase',
    name: 'SpaceCase',
    component: () => import('../pages/GameZone/GameZoneList/SpaceCase.vue'),
  },
  {
    path: '/game/dinodetectives',
    name: 'DinoDetectives',
    component: () =>
      import('../pages/GameZone/GameZoneList/DinoDetectives.vue'),
  },
  {
    path: '/game/germsquad',
    name: 'GermSquad',
    component: () => import('../pages/GameZone/GameZoneList/GermSquad.vue'),
  },
  {
    path: '/game/ecorangers',
    name: 'EcoRangers',
    component: () => import('../pages/GameZone/GameZoneList/EcoRangers.vue'),
  },
  {
    path: '/game/soundexplorer',
    name: 'SoundExplorer',
    component: () => import('../pages/GameZone/GameZoneList/SoundExplorer.vue'),
  },
  {
    path: '/game/robotrepair',
    name: 'RobotRepair',
    component: () => import('../pages/GameZone/GameZoneList/RobotRepair.vue'),
  },
  {
    path: '/game/plantpower',
    name: 'PlantPower',
    component: () => import('../pages/GameZone/GameZoneList/PlantPower.vue'),
  },

  // --- NEW LIFE SKILLS ROUTES ADDED BELOW ---

  {
    path: '/game/groceryGrab',
    name: 'GroceryGrab',
    component: () => import('../pages/GameZone/GameZoneList/GroceryGrab.vue'),
  },
  {
    path: '/game/moneyMatch',
    name: 'MoneyMatch',
    component: () => import('../pages/GameZone/GameZoneList/MoneyMatch.vue'),
  },
  {
    path: '/game/laundryLegend',
    name: 'LaundryLegend',
    component: () => import('../pages/GameZone/GameZoneList/LaundryLegend.vue'),
  },
  {
    path: '/game/kitchenCues',
    name: 'KitchenCues',
    component: () => import('../pages/GameZone/GameZoneList/KitchenCues.vue'),
  },
  {
    path: '/game/dressToImpress',
    name: 'DressToImpress',
    component: () =>
      import('../pages/GameZone/GameZoneList/DressToImpress.vue'),
  },
  {
    path: '/game/safetySirens',
    name: 'SafetySirens',
    component: () => import('../pages/GameZone/GameZoneList/SafetySirens.vue'),
  },
  {
    path: '/game/scheduleShuffle',
    name: 'ScheduleShuffle',
    component: () =>
      import('../pages/GameZone/GameZoneList/ScheduleShuffle.vue'),
  },
  {
    path: '/game/cleanMachine',
    name: 'CleanMachine',
    component: () => import('../pages/GameZone/GameZoneList/CleanMachine.vue'),
  },
  {
    path: '/game/healthCheck',
    name: 'HealthCheck',
    component: () => import('../pages/GameZone/GameZoneList/HealthCheck.vue'),
  },
  {
    path: '/game/timeTamer',
    name: 'TimeTamer',
    component: () => import('../pages/GameZone/GameZoneList/TimeTamer.vue'),
  },
  {
    path: '/game/kitchenTimerTrouble',
    name: 'KitchenTimerTrouble',
    component: () =>
      import('../pages/GameZone/GameZoneList/KitchenTimerTrouble.vue'),
  },
  {
    path: '/game/busStopBrainstorm',
    name: 'BusStopBrainstorm',
    component: () =>
      import('../pages/GameZone/GameZoneList/BusStopBrainstorm.vue'),
  },
  {
    path: '/game/moneyManager',
    name: 'MoneyManager',
    component: () => import('../pages/GameZone/GameZoneList/MoneyManager.vue'),
  },
  {
    path: '/game/healthyPlate',
    name: 'HealthyPlate',
    component: () => import('../pages/GameZone/GameZoneList/HealthyPlate.vue'),
  },

  // --- NEW BLIND-SPECIFIC SKILLS ROUTES ADDED BELOW ---

  {
    path: '/game/streetSmart',
    name: 'StreetSmart',
    component: () => import('../pages/GameZone/GameZoneList/StreetSmart.vue'),
  },
  {
    path: '/game/caneCompanion',
    name: 'CaneCompanion',
    component: () => import('../pages/GameZone/GameZoneList/CaneCompanion.vue'),
  },
  {
    path: '/game/doorwayDecisions',
    name: 'DoorwayDecisions',
    component: () =>
      import('../pages/GameZone/GameZoneList/DoorwayDecisions.vue'),
  },
  {
    path: '/game/elevatorExperience',
    name: 'ElevatorExperience',
    component: () =>
      import('../pages/GameZone/GameZoneList/ElevatorExperience.vue'),
  },
  {
    path: '/game/transitTime',
    name: 'TransitTime',
    component: () => import('../pages/GameZone/GameZoneList/TransitTime.vue'),
  },
  {
    path: '/game/moneyMatters',
    name: 'MoneyMatters',
    component: () => import('../pages/GameZone/GameZoneList/MoneyMatters.vue'),
  },
  {
    path: '/game/kitchenKnowHow',
    name: 'KitchenKnowHow',
    component: () =>
      import('../pages/GameZone/GameZoneList/KitchenKnowHow.vue'),
  },
  {
    path: '/game/phoneFriend',
    name: 'PhoneFriend',
    component: () => import('../pages/GameZone/GameZoneList/PhoneFriend.vue'),
  },
  {
    path: '/game/medicationManager',
    name: 'MedicationManager',
    component: () =>
      import('../pages/GameZone/GameZoneList/MedicationManager.vue'),
  },
  {
    path: '/game/obstacleAwareness',
    name: 'ObstacleAwareness',
    component: () =>
      import('../pages/GameZone/GameZoneList/ObstacleAwareness.vue'),
  },
  {
    path: '/game/socialSense',
    name: 'SocialSense',
    component: () => import('../pages/GameZone/GameZoneList/SocialSense.vue'),
  },
  {
    path: '/game/askingForAssistance',
    name: 'AskingForAssistance',
    component: () =>
      import('../pages/GameZone/GameZoneList/AskingForAssistance.vue'),
  },

  {
    path: '/dashboard',
    component: MainDashboard,
    children: [
      {
        path: '',
        name: 'DashboardSummary',
        component: DashboardSummary,
      },
      {
        path: '/studentlist',
        name: 'studentlist',
        component: StudentList,
      },
      {
        path: '/teacher',
        name: 'teacher',
        component: TeacherDashboard,
      },
      {
        path: '/games',
        name: 'games',
        component: GamesDashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
