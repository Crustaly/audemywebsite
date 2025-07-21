import { empty } from "@prisma/client/runtime/library";

const managementStaff = [
  {
    name: 'Eleonora Paoli',
    role: 'Lead Designer',
    image: '/assets/images/about-us/volunteers/eleonora.png',
    website: 'https://www.eleonorapaoli.com/',
    email: 'eleonorabh@gmail.com'
  },

  {
    name: 'Anmol Bal',
    role: 'Chief Financial Officer',
    image: '/assets/images/about-us/volunteers/anmol.png',
  },
  {
    name: 'Shrikrishna Bhat',
    role: 'Lead Developer and Systems Architect',
    image: '/assets/images/about-us/volunteers/shrikrishna.png',
    github: 'https://github.com/master-of-none',
    linkedin: 'https://www.linkedin.com/in/shrikrishna-bhat',
    email: 's.bhat@audemy.org'
  },
];
const founderStaff = [
  {
    name: 'Crystal Yang',
    role: 'Founder & Chief Executive Officer',
    image: '/assets/images/about-us/volunteers/crystal.png',
    github: "https://github.com/crustaly",
    linkedin: "https://www.linkedin.com/in/crustaly/",
    email: "crystal@audemy.org",
    website: "https://yangcrystal.com/"
  },
];

const designStaff = [
  {
    name: 'Elsa Fajar',
    role: 'Lead UI/UX Designer',
    image: '/assets/images/about-us/volunteers/default3.svg',
    email: 'efp.wrk@gmail.com'
  },
  {
    name: 'Jessie Zhang',
    role: 'UI/UX Designer',
    image: '/assets/images/about-us/volunteers/jessie.png',
    email: 'jessiezhangjz1@gmail.com'
  },
  {
    name: 'Jhordan John',
    role: 'UX/UI Designer',
    image: '/assets/images/about-us/volunteers/jhordan.png',
    email: 'jhordanjohn@gmail.com'
  },
  {
    name: 'Samantha Rodrigues',
    role: 'UX/UI Designer',
    image: '/assets/images/about-us/volunteers/samantha.png',
    email: 'samanthanna.r@gmail.com'
  },
  {
    name: 'Katerina Rabadzhyiska',
    role: 'UX/UI Designer',
    image: '/assets/images/about-us/volunteers/katerina.png',
    email: 'katerinarabadzhyiska@gmail.com'
  },
  {
    name: 'Priya Patel',
    role: 'Illustrator',
    image: '/assets/images/about-us/volunteers/priya.png',
    email: 'priyal99ptl@gmail.com'
  },
  {
    name: 'Aisha Naveed',
    role: 'Artist',
    image: '/assets/images/about-us/volunteers/default1.svg',
    email: 'aisha.naveed55@gmail.com'
  },
];

const developmentStaff = [
  {
    name: 'Josephraj Velpula',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/josephraj.png',
    github: 'https://github.com/Joe-26',
    linkedin: 'https://www.linkedin.com/in/josephraj-velpula/',
    email: 'v.josephraj26@gmail.com'
  },
  {
    name: 'Rajat Kulkarni',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/rajat.png',
    github: 'https://github.com/rajat-k1',
    linkedin: 'https://www.linkedin.com/in/cs-rajat-kulkarni',
    email: 'rajat.kulkarni017@gmail.com'
  },
  {
    name: 'Pedro Venâncio',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/pedro.png',
    github: 'https://github.com/pedrohenriquevenancio',
    linkedin: 'https://www.linkedin.com/in/pedrohenriquevenancio',
    email: 'pedrohenriquevenancio2004@gmail.com'
  },
  {
    name: 'Prajwala Shambulingappa',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/prajwala.png',
    github: "https://github.com/PrajwalaMugajjiShambulingappa",
    linkedin: "https://www.linkedin.com/in/prajwalashambulingappa/",
    email: 'prajwalams99@gmail.com'
  },
  {
    name: 'Ankita Shendge',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/ankita.png',
    github: 'https://github.com/ankita-shendge',
    linkedin: 'https://www.linkedin.com/in/ankita-shendge/'
  },
  {
    name: 'Isabelle Huang',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/isabelle.png',
    github: 'https://github.com/Isabelle1007',
    linkedin: 'https://www.linkedin.com/in/chen-syuan-huang/',
    email: 'chensyuan.huang@gmail.com'
  },
  {
    name: 'DooHwan Kim',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/doohwan.png',
    github: 'https://github.com/DooHwanKim0419',
    linkedin: 'https://www.linkedin.com/in/doohwankim/',
    email: 'dkimh0419@gmail.com'
  },
  {
    name: 'Jesus Luigi Sison',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/jesus.png',
  },
  {
    name: 'Faruk Saridanismet',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default1.svg',
    github: 'https://github.com/HyperEnginer',
    linkedin: '',
    email: 'asaridanismet@gmail.com'
  },
  {
    name: 'Alex Santos',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/alex.png',
    github: 'https://github.com/alex-s4',
    linkedin: 'https://www.linkedin.com/in/alex-santos-1b6767195/',
    email: 'al39726867@gmail.com'
  },
  {
    name: 'Tim Chapin',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/tim.png',
    github: 'https://github.com/timchapin96',
    linkedin: 'https://www.linkedin.com/in/timothy-chapin/',
    email: 'chapin.timothys@gmail.com'
  },
  {
    name: 'Sherman Hamo Rasho',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/sherman.png',
    website: 'https://shersuz.com/',
    email: 'shermanhamorashoca@gmail.com'
  },
  {
    name: 'Biruk Bizuayehu',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/biruk.png',
    github: 'https://github.com/brook1167',
    linkedin: 'https://www.linkedin.com/in/biruk-bizuayehu-b919412ab/',
    email: 'birukbizuayehu1167@gmail.com'
  },
  {
    name: 'Guna Thangavel',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default2.svg',
    email: 'guna.thangavel36@gmail.com'
  },
  {
    name: 'Rithik Kumar',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default3.svg',
    email: 'rithikk8802@gmail.com'
  },
  {
    name: 'Riya Divakaran',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/riya.png',
    email: 'riyadivakaran03@gmail.com'
  },
  {
    name: 'May Lynn',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/may.png',
    email: 'maylynnespinola@gmail.com'
  },
  {
    name: 'Eashan Sadasivuni',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/eashan.png',
  },
  {
    name: 'Shyaka Chaste',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/shyaka.png',
  },
  {
    name: 'Jennifer Chhie',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/jennifer.png',
    github: 'https://github.com/jschhie',
    linkedin: '',
    email: 'jschhie@gmail.com'
  },
  {
    name: 'Brian Ference',
    role: 'Project Manager',
    image: '/assets/images/about-us/volunteers/brian.png',
    linkedin: 'https://www.linkedin.com/in/brianference?trk=people-guest_people_search-card',
    email: 'brianference@protonmail.com'
  },
  {
    name: 'Carter Sargent',
    role: 'Accessibility Specialist',
    image: '/assets/images/about-us/volunteers/default2.svg',
    github: 'https://github.com/krs9851',
    linkedin: 'https://www.linkedin.com/in/carter-sargent-0b1821192'
  },
  {
    name: 'Jennifer Shi',
    role: 'Accessibility Specialist',
    image: '/assets/images/about-us/volunteers/default1.svg',
    email: 'jennifershi3872@gmail.com'
  },
  {
    name: 'Shobha Sudha Kamath',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default3.svg',
    email: 'shobha.sudha.kamath@gmail.com'
  },
  {
    name: 'Zainab Rizvi',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default1.svg',
    email: 'szainabr@gmail.com'
  },
  {
    name: 'Aaron Baumgarten',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default2.svg',
    github: 'https://github.com/aaronbau1',
    linkedin: 'https://www.linkedin.com/in/aaron-baumgarten-8492b215b',
    email: 'aaronbau@umich.edu'
  },
  {
    name: 'Maria Schrijnder van Velzen',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default3.svg',
    email: 'm.schrijndervv@gmail.com'
  },
  {
    name: 'Sai Vardhan',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default1.svg',
    email: 'vardhan.vsd94@gmail.com'
  },
  {
    name: 'Chau Le',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default2.svg',
    email: 'chaule0917@gmail.com'
  },
  {
    name: 'Swetha Batta',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default3.svg',
    email: 'swetha.batta16@gmail.com'
  },
  {
    name: 'Dhanshri Agarwal',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default1.svg',
    email: 'dhanshri1496@gmail.com'
  },
  {
    name: 'Akshay Jayaram',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default2.svg',
    email: 'akshayj1814@gmail.com'
  },
  {
    name: 'Zining Cen',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default3.svg',
    email: 'ziningcen@gmail.com'
  },
  {
    name: 'Ellie Karyo',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/default1.svg',
    email: 'elliekaryo@outlook.com'
  },
  {
    name: 'Yashwanth',
    role: 'Developer',
    image: '/assets/images/about-us/volunteers/yashwanth.png',
    email:'yaswanth9399@gmail.com'
  },
];

const outreachStaff = [
  {
    name: 'Asmitha Balamurugan',
    role: 'Outreach',
    image: '/assets/images/about-us/volunteers/asmitha.png',
    linkedin: 'https://www.linkedin.com/in/asmitha-balamurugan-162244328'
  },
  {
    name: 'Abby He',
    role: 'Outreach',
    image: '/assets/images/about-us/volunteers/abby.png',
  },
  {
    name: 'Soujash Wawdhane',
    role: 'Outreach',
    image: '/assets/images/about-us/volunteers/soujash.png',
  },
  {
    name: 'Ilemona Jacob',
    role: 'Outreach',
    image: '/assets/images/about-us/volunteers/default2.svg',
  },
  {
    name: 'Leila Ismail',
    role: 'Outreach',
    image: '/assets/images/about-us/volunteers/default1.svg',
  },
];

const socialmediaStaff = [
  {
    name: 'Jeslyn Chang',
    role: 'Social Media',
    image: '/assets/images/about-us/volunteers/jeslyn.png',
    email: 'jeslynchang80@gmail.com'
  },
  {
    name: 'Yusuf Balikis',
    role: 'Social Media',
    image: '/assets/images/about-us/volunteers/yusuf.png',
  },
  {
    name: 'Vicky Yu',
    role: 'Video Editor',
    image: '/assets/images/about-us/volunteers/vicky.png',
  },
  {
    name: 'Carlos Renan',
    role: 'Video Editor',
    image: '/assets/images/about-us/volunteers/carlos.png',
  },
];

export default function getAllVolunteers() {
  return [
    {
      staffTitle: 'Founder',
      staff: founderStaff,
    },
    {
      staffTitle: 'Management',
      staff: managementStaff,
    },
    {
      staffTitle: 'Design',
      staff: designStaff,
    },
    {
      staffTitle: 'Development',
      staff: developmentStaff,
    },
    {
      staffTitle: 'Outreach',
      staff: outreachStaff,
    },
    {
      staffTitle: 'Social Media',
      staff: socialmediaStaff,
    },
  ];
}
