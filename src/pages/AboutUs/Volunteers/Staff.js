
const managementStaff = [
    {
        name: "Eleonora Paoli",
        role: "Lead Designer",
        image: "/assets/images/about-us/volunteers/eleonora.png",
    },
    
    {
        name: "Anmol Bal",
        role: "Chief Financial Officer",
        image: "/assets/images/about-us/volunteers/anmol.png",
    },
    {
        name: "Aruesha Srivastava",
        role: "Chief Operating Officer",
        image: "/assets/images/about-us/volunteers/aruesha.png",
    },
];
const founderStaff = [
      {
        name: "Crystal Yang",
        role: "Founder & Chief Executive Officer",
        image: "/assets/images/about-us/volunteers/crystal.png",
    },
];

const designStaff = [
    {
        name: "Jessie Zhang",
        role: "UI/UX Designer",
        image: "/assets/images/about-us/volunteers/jessie.png",
    },
    {
        name: "Jhordan John",
        role: "UX/UI Designer",
        image: "/assets/images/about-us/volunteers/jhordan.png",
    },
    {
        name: "Samantha Rodrigues",
        role: "UX/UI Designer",
        image: "/assets/images/about-us/volunteers/samantha.png",
    },
    {
        name: "Katerina Rabadzhyiska",
        role: "UX/UI Designer",
        image: "/assets/images/about-us/volunteers/katerina.png",
    },
    {
        name: "Priya Patel",
        role: "Illustrator",
        image: "/assets/images/about-us/volunteers/priya.png",
    },
];

const developmentStaff = [
    {
        name: "Faruk Saridanismet",
        role: "Lead Developer",
        image: "/assets/images/about-us/volunteers/default1.svg",
    },
     {
        name: "Shrikrishna Bhat",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/shrikrishna.png",
    },
    {
        name: "Josephraj Velpula",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/josephraj.png",
    },
   
    {
        name: "Pedro Venâncio",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/pedro.png",
    },
    {
        name: "Alex Santos",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/alex.png",
    },
     {
        name: "Tim Chapin",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/tim.png",
    },
      {
        name: "Sherman Hamo Rasho",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/sherman.png",
    },
    {
        name: "Biruk Bizuayehu",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/biruk.png",
    },
    {
        name: "Guna Thangavel",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/default2.svg",
    },
    {
        name: "Rithik Kumar",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/default3.svg",
    },
    {
        name: "Riya Divakaran",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/riya.png",
    },
    {
        name: "May Lynn",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/may.png",
    },
    {
        name: "Eashan Sadasivuni",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/eashan.png",
    },
    {
        name: "Shyaka Chaste",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/shyaka.png",
    },
    {
        name: "Prajwala Shambulingappa",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/default1.svg",
    },
    {
        name: "Ankita Shendge",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/ankita.png",
    },
    {
        name: "Isabelle Huang",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/isabelle.png",
    },
    {
        name: "DooHwan Kim",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/doohwan.png",
    },
    {
        name: "Jesus Luigi Sison",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/jesus.png",
    },
    {
        name: "Rajat Kulkarni",
        role: "Developer",
        image: "/assets/images/about-us/volunteers/rajat.png",
    },
];

const outreachStaff = [
    {
        name: "Asmitha Balamurugan",
        role: "Outreach",
        image: "/assets/images/about-us/volunteers/asmitha.png",
    },
    {
        name: "Abby He",
        role: "Outreach",
        image: "/assets/images/about-us/volunteers/abby.png",
    },
    {
        name: "Soujash Wawdhane",
        role: "Outreach",
        image: "/assets/images/about-us/volunteers/soujash.png",
    },
    {
        name: "Ilemona Jacob",
        role: "Outreach",
        image: "/assets/images/about-us/volunteers/default2.svg",
    },
    {
        name: "Leila Ismail",
        role: "Outreach",
        image: "/assets/images/about-us/volunteers/default1.svg",
    },
];

const socialmediaStaff = [
    {
        name: "Jeslyn Chang",
        role: "Social Media",
        image: "/assets/images/about-us/volunteers/jeslyn.png",
    },
    {
        name: "Yusuf Balikis",
        role: "Social Media",
        image: "/assets/images/about-us/volunteers/yusuf.png",
    },
    {
        name: "Vicky Yu",
        role: "Video Editor",
        image: "/assets/images/about-us/volunteers/vicky.png",
    },
    {
        name: "Carlos Renan",
        role: "Video Editor",
        image: "/assets/images/about-us/volunteers/carlos.png",
    },
];

export default function getAllVolunteers() {
    return [
        {
          staffTitle: "Founder",
          staff: founderStaff,
        },
        {
            staffTitle: "Management",
            staff: managementStaff,
        },
        {
            staffTitle: "Design",
            staff: designStaff,
        },
        {
            staffTitle: "Development",
            staff: developmentStaff,
        },
        {
            staffTitle: "Outreach",
            staff: outreachStaff,
        },
        {
            staffTitle: "Social Media",
            staff: socialmediaStaff,
        },
    ];
}
