import { RiComputerLine } from "react-icons/ri";
import {
  FaServer,
  FaUbuntu,
  FaReact,
  FaWordpress,
  FaPython,
  FaAws,
  FaBootstrap,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
DiLinux;
import { DiLinux } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import { HiAcademicCap } from "react-icons/hi";

import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill, Stack } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const stacks: Stack[] = [
  {
    Icon: FaReact,
    title: "React",
  },
  {
    Icon: FaWordpress,
    title: "Wordpress",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.JS",
  },
  {
    Icon: FaPython,
    title: "Python",
  },
  {
    Icon: SiMysql,
    title: "MySQL",
  },
  {
    Icon: SiMongodb,
    title: "MongoDB",
  },
  {
    Icon: SiDocker,
    title: "Docker",
  },
  {
    Icon: DiLinux,
    title: "Linux",
  },
  {
    Icon: SiTailwindcss,
    title: "TailwindCSS",
  },
  {
    Icon: FaBootstrap,
    title: "Bootstrap",
  },
  {
    Icon: FaAws,
    title: "AWS",
  },
];
export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable serverless Website or WebApp(SPA) using <b>NEXT.JS</b>, <b>HTML</b>, <b>CSS</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "I can create and optimize your Database, Server or API using <b>NEXT.JS, Python or PHP. I can work with MySQL, MongoDB or any cloud database of your choice",
  },
  {
    Icon: CgWebsite,
    title: "Speedy Website Development",
    about:
      "I will develop your beautiful, fast and scalable website with any feature you want like e-commerce, booking, sign up, event and blog.",
  },
  {
    Icon: FaUbuntu,
    title: "Webmaster and Server Administration",
    about:
      "I can manage, secure, optimize and mantain your Linux Server and your App/Sites on it.",
  },
  {
    Icon: MdOutlineDesignServices,
    title: "Branding and Web Designer",
    about:
      "I work with excellent designers partners to delivery you any kind of digital art you need. Including Websites design, Logo, E-mail signatures and more.",
  },
  {
    Icon: HiAcademicCap,
    title: "20+ Years of Experience",
    about:
      "Born on 1987, I've been programming since I was 10 years old. I have tons of experience with programming and I would love to hear about your idea or project.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
