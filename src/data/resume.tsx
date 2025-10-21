import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
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
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiJsonwebtokens,
  SiExpo,
  SiReactquery,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const DATA = {
  name: "Rishabh Gupta",
  initials: "RG",
  location: "Saket, New Delhi",
  description:
    "Software Development Engineer specializing in Golang and JavaScript, with expertise in building scalable backend systems and modern web applications.",
  skills: [
    { name: "Go", icon: <SiGo className="w-5 h-5" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
    { name: "Java", icon: <RiJavaLine className="w-5 h-5" /> },
    { name: "Python", icon: <SiPython className="w-5 h-5" /> },
    { name: "SQL", icon: <SiMysql className="w-5 h-5" /> },
    { name: "HTML", icon: <SiHtml5 className="w-5 h-5" /> },
    { name: "React.js", icon: <SiReact className="w-5 h-5" /> },
    { name: "React Native", icon: <SiReact className="w-5 h-5" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
    { name: "Shadcn UI", icon: <SiShadcnui className="w-5 h-5" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="w-5 h-5" /> },
    { name: "Tanstack Query", icon: <SiReactquery className="w-5 h-5" /> },
    { name: "Expo", icon: <SiExpo className="w-5 h-5" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
    { name: "Express.js", icon: <SiExpress className="w-5 h-5" /> },
    { name: "Go-Gin", icon: <SiGo className="w-5 h-5" /> },
    { name: "Gorm", icon: <SiGo className="w-5 h-5" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="w-5 h-5" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
    { name: "Firebase", icon: <SiFirebase className="w-5 h-5" /> },
    { name: "Supabase", icon: <SiSupabase className="w-5 h-5" /> },
    { name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
    { name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
    { name: "Git", icon: <SiGit className="w-5 h-5" /> },
    { name: "NPM", icon: <SiNpm className="w-5 h-5" /> },
    { name: "VS Code", icon: <VscVscode className="w-5 h-5" /> },
    { name: "Linux", icon: <SiLinux className="w-5 h-5" /> },
    { name: "Windows", icon: <FaWindows className="w-5 h-5" /> },
    { name: "Vercel", icon: <SiVercel className="w-5 h-5" /> },
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
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=rishabhiitm@zohomail.in",
        icon: Icons.email,
        navbar: true,
      },
      resume: {
        name: "Download Resume",
        url: "https://workdrive.zohopublic.in/external/81ef16ece4e56036e414e69c9233b8618d7838d1a27b71b347cf811a16c0ad68/download",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Logicknots",
      href: "https://logicknots.com/",
      badges: ["React.js", "React Native", "Go", "Docker"],
      location: "Remote",
      title: "Software Development Engineer I",
      logoUrl:
        "https://img1.wsimg.com/isteam/ip/10b30228-4a24-4f3d-94c8-9506e8adf5f0/favicon/de210abc-ac47-47a4-8ef8-43456bda1cc8.png/:/rs=w:32,h:32,m",
      start: "Jul 2025",
      end: "Present",
      description:
        "Promoted from Intern to SDE I for leading end-to-end development of a Canvas-based draw editor (React.js) and cross-platform LMS app (React Native/Expo). Built performant Golang APIs, implemented efficient state management with TanStack Query and Context API, developed core Canvas tools (ruler, rectangle, guides), and containerized services with Docker for CI/CD.",
    },
    {
      company: "Social Zone",
      href: "https://socialzone.in/",
      badges: ["React.js", "Framer Motion", "Tailwind CSS"],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "https://www.socialzone.in/assets/logo-D5fN-B7x.png",
      start: "Feb 2025",
      end: "Jun 2025",
      description:
        "Developed the company’s official website using React.js, Framer Motion, and Tailwind CSS, delivering a modern, animation-rich interface with optimized performance and scalable design system.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology Madras",
      href: "https://www.iitm.ac.in/",
      degree: "Bachelor in Data Science with AI and ML",
      logoUrl: "/iitm.png",
      start: "Jan 2025",
      end: "Present",
    },
    {
      school: "Dr APJ Abdul Kalam Technical University",
      href: "https://aktu.ac.in/",
      degree: "Bachelor of Technology in Computer Science (B.Tech)",
      logoUrl: "/aktu.jpeg",
      start: "2022",
      end: "2026",
    },
  ],

  projects: [
    {
      title: "MailGo (Concurrent Email Sender)",
      href: "https://github.com/rishabh21g/mailchimp",
      dates: "",
      active: true,
      description:
        "Built MailGo, a full-fledged concurrent email sender written in Go (Golang) with a complete web dashboard. Users can authenticate (Gin + JWT), select templates, upload CSVs, and send bulk emails concurrently with rate-limited goroutines. Integrated PostgreSQL for user management, dynamic HTML templates, and Mailpit for SMTP testing.",
      technologies: ["Golang", "Gin", "PostgreSQL", "JWT", "Mailpit", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rishabh21g/mailchimp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Hiresense",
      href: "https://hiresense.vercel.app/",
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
          type: "Website",
          href: "https://github.com/rishabh21g/hiresense.git",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Interview Platform",
      href: "https://github.com/rishabh21g/LK-interview-app.git",
      dates: "",
      active: true,
      description:
        "Created a full-stack mobile interview platform with React Native and Expo, enabling users to schedule and reschedule interviews, conduct live video interviews with real-time camera access, record and transcribe responses using AI speech-to-text, and send recordings to the server for AI analysis. Utilized TanStack Query for efficient data fetching, Context API for state management, and Expo Router for seamless navigation.",
      technologies: [
        "React Native",
        "Expo",
        "TanStack Query",
        "Context API",
        "Expo Router",
        "AI Speech-to-Text",
        "Expo Camera",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/rishabh21g/LK-interview-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Flappy Bird Mobile Game",
      href: "https://github.com/rishabh21g/flappy-bird.git",
      dates: "",
      active: true,
      description:
        "Built a fully functional Flappy Bird clone using React Native and Expo with high-performance graphics and smooth animations. Implemented physics-based gameplay mechanics, collision detection, real-time scoring, and gesture controls using Skia for 2D rendering and Reanimated for fluid animations. Features include game state management, responsive touch controls, and optimized performance",
      technologies: [
        "React Native",
        "Expo",
        "React Native Skia",
        "React Native Reanimated",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rishabh21g/flappy-bird.git",
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
    {
      title: "Trip-X",
      href: "https://trip-planner-snowy.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed Trip-X, an intelligent travel recommendation platform that transforms user wanderlust into personalized adventures. Built with React.js, Tailwind CSS, and Firebase, integrating multiple APIs to deliver real-time hotel suggestions, curated itineraries, and dynamic destination overviews.",
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
  ],
} as const;
