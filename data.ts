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
    name: "Wordpress Company Website with Lead capture and SEO",
    description:
      "A good looking website for a company with a form to get leads",
    image_path: "/images/emcoconsultoria.com.br.png",
    deployed_url: "https://emcoconsultoria.com.br/",
    github_url: "",
    category: ["wordpress"],
    key_techs: ["Wordpress", "Gravity Forms", "Enfold theme"],
  },
  {
    name: "Tourism Bookable Ecommerce Website",
    image_path: "/images/portodegalinhas.social.png",
    deployed_url: "https://portodegalinhas.social/",
    github_url: "",
    category: ["wordpress"],
    description: "Online store and  for online tourism guide",
    key_techs: [
      "Wordpress",
      "MySQL",
      "Mailster",
      "Gravity Forms",
      "Buddypress",
      "AWS S3",
      "Woocommerce",
    ],
  },

  {
    name: "Next.JS Portfolio website",
    image_path: "/images/eric.milfont.net.png",
    deployed_url: "https://eric.milfont.net/",
    github_url: "",
    category: ["nextjs"],
    description: "My own portfolio build on Next.JS and TailwindCSS",
    key_techs: ["Next.JS", "TailwindCSS"],
  },

  {
    name: "Wordpress Hotel Website",
    image_path: "/images/hotelpousadabutias.com.br.png",
    deployed_url: "https://hotelpousadabutias.com.br",
    github_url: "",
    category: ["wordpress"],
    description: "Wordpress website for a local hotel",
    key_techs: ["Wordpress", "Gravity Forms", "MySQL", "AWS SES", "AWS S3"],
  },

  {
    name: "Wordpress Restaurant Website",
    image_path: "/images/joaorestaurante.com.br.png",
    deployed_url: "https://joaorestaurante.com.br/",
    github_url: "",
    category: ["wordpress"],
    description:
      "A restaurant wordpress website with responsive design and contact form",
    key_techs: ["Wordpress", "Gravity Forms", "MySQL", "AWS SES", "AWS S3"],
  },
];
