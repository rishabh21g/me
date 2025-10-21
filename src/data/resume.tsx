import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { RiJavaLine } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiGithub,
  SiGit,
  SiNpm,
  SiVercel,
  SiLinux,
  SiShadcnui,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const DATA = {
  name: "Rishabh Gupta",
  initials: "DV",
  location: "Saket, New Delhi ",
  description: "Software Development Engineer",
  summary: "Software Development Engineer",
  // avatarUrl: "/me.png",
  skills: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Java", icon: <RiJavaLine /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Go", icon: <SiGo /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Shadcn UI", icon: <SiShadcnui /> }, // No official icon, using cube as placeholder
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Git", icon: <SiGit /> },
    { name: "NPM", icon: <SiNpm /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Windows", icon: <FaWindows /> },
    { name: "Vercel", icon: <SiVercel /> },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rishabhiitm@zohomail.in",
    tel: "+91 8840952165",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rishabh21g",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishabh19g/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rishabh21g",
        icon: Icons.x,

        navbar: true,
      },
      insta: {
        name: "Instagram",
        url: "https://www.instagram.com/rishabh21g_/",
        icon: Icons.insta,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=25f1002822@ds.study.iitm.ac.in",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Social Zone",
      href: "https://socialzone.in/",
      badges: [],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "",
      start: "Feb 2025",
      end: "Present",
      description:
        "Worked as a freelance developer for SocialZone, a marketing agency, handling various development projects. Designed and built their official website using React.js, Framer Motion, and Tailwind CSS, ensuring a seamless user experience with smooth animations and modern UI. Collaborated with the team to enhance their digital presence through high-performance web solutions",
    },
  ],
  education: [
    {
      school: "India institute of Technology Madras",
      href: "https://www.iitm.ac.in/",
      degree: "Bachelor in Data Science with AI/ML",
      logoUrl: "/iitm.png",
      start: "Jan 2025",
      end: "Present",
    },
    {
      school: "Dr APJ Abdul Kalam Technical University",
      href: "www.united.ac.in",
      degree: "Bachelor of Technology in Computer Science (Btech)",
      logoUrl: "/aktu.jpeg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Trip-X",
      href: "https://trip-planner-snowy.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed Trip-X, an intelligent travel recommendation platform that transforms user wanderlust into personalized adventures. Built with React.js, Tailwind CSS, and Firebase, it integrates multiple APIs to deliver real-time hotel suggestions, curated itineraries, and dynamic destination overviews.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Firebase",
        "Google Places API",
        "Unsplash API",
        "Google Search Text API",
        "Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://trip-planner-snowy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hiresense",
      href: "https://github.com/rishabh21g/hiresense.git",
      dates: "",
      active: true,
      description:
        "Built Hiresense, an AI-driven interview platform using Next.js and Vapi AI. It enables admins to generate job-specific interview questions, conduct real-time interviews, and automate transcription and summarization.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Vapi AI",
        "Gemini AI",
        "Supabase",
        "Google OAuth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rishabh21g/hiresense.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Market.in",
      href: "https://github.com/rishabh21g/market.in.git",
      dates: "",
      active: true,
      description:
        "Developed Market.in, an e-commerce platform for electronics using the MERN stack and TypeScript. Features include an advanced admin dashboard, search optimization, frontend/backend caching, lazy loading, and Redux-based state management.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Table",
        "Chart.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rishabh21g/market.in.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
