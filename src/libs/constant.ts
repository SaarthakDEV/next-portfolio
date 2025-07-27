import { BlogPosts, ExperienceType, NAV_ITEM, Skill } from "./types";

export const TECH_STACK: Skill[] = [
    {
      id: "html",
      heading: "HTML",
      logo: "/logos/html.svg",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "css",
      heading: "CSS",
      logo: "/logos/css.svg",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "javascript",
      heading: "JavaScript",
      logo: "/logos/javascript.svg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "typescript",
      heading: "TypeScript",
      logo: "/logos/typescript.svg",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "bootstrap",
      heading: "Bootstrap",
      logo: "/logos/bootstrap.svg",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "material-ui",
      heading: "Material-UI",
      logo: "/logos/material-ui.svg",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: "tailwindcss",
      heading: "TailwindCSS",
      logo: "/logos/tailwindcss.svg",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "java",
      heading: "Java",
      logo: "/logos/java.svg",
      color: "from-red-500 to-yellow-500",
    },
    {
      id: "nodejs",
      heading: "NodeJS",
      logo: "/logos/nodejs.svg",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "expressjs",
      heading: "ExpressJS",
      logo: "/logos/expressjs.svg",
      color: "from-gray-600 to-gray-800",
    },
    {
      id: "rest-api",
      heading: "REST API",
      logo: "/logos/rest-api.svg",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "mongodb",
      heading: "MongoDB",
      logo: "/logos/mongodb.svg",
      color: "from-green-600 to-green-800",
    },
    {
      id: "sql",
      heading: "SQL",
      logo: "/logos/sql.svg",
      color: "from-blue-500 to-indigo-700",
    },
    {
      id: "github",
      heading: "Github",
      logo: "/logos/github.svg",
      color: "from-gray-700 to-black",
    },
    {
      id: "reactjs",
      heading: "ReactJS",
      logo: "/logos/react.svg",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "redux",
      heading: "Redux",
      logo: "/logos/redux.svg",
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: "zustand",
      heading: "Zustand",
      logo: "/logos/zustand.svg",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "nextjs",
      heading: "NextJS",
      logo: "/logos/next.svg",
      color: "from-black to-gray-800",
    },
    {
      id: "socket-io",
      heading: "Socket.io",
      logo: "/logos/socket.svg",
      color: "from-green-400 to-blue-500",
    },
    {
      id: "webpack",
      heading: "Webpack",
      logo: "/logos/webpack.svg",
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: "docker",
      heading: "Docker",
      logo: "/logos/docker.svg",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "aws-s3",
      heading: "AWS S3",
      logo: "/logos/s3.svg",
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: "aws-ec2",
      heading: "AWS EC2",
      logo: "/logos/ec2.svg",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "wordpress",
      heading: "WordPress",
      logo: "/logos/wordpress.svg",
      color: "from-blue-600 to-indigo-600",
    },
  ];

export const TABLET: string[] = ["FRONTEND", "BACKEND", "FULL STACK"];

export const TIMELINE_DATA: ExperienceType[] = [
    {
      id: 1,
      type: "experience",
      company: "Videostori (Masterstroke digiinnovators Pvt. Ltd.)",
      duration: "AUGUST'24 - PRESENT",
      achievements: [
        "Full stack developer (MERN)",
        "Developed analytics for Video Player",
        "Built Google Ad compatible video player for Web Apps and android apps",
        "Automated VAST code generation tool",
        "Built whatsapp chat history configuration panel",
      ],
    },
    {
      id: 2,
      type: "experience",
      company: "DevOps Spatial",
      duration: "APRIL'24 - JULY'24",
      achievements: [
        "Built 2FA module in MERN stack",
        "Integrated FusionAuth APIs for authentication",
        "Generated QR codes for OTP setup",
        "Verified OTPs from authenticator app",
        "Ensured secure API calls and errors",
      ],
    },
    {
      id: 3,
      type: "experience",
      company: "Coding ninjas",
      duration: "AUGUST'23 - NOVEMBER'24",
      achievements: [
        "Learned Core Java fundamentals and Object-Oriented Programming (OOPs) concepts",
        "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js",
        "Built full-stack web applications using the MERN stack",
        "Worked on real-world projects to apply concepts in practice",
        "Strengthened debugging, API integration, and frontend-backend collaboration skills",
      ],
    },
    {
      id: 4,
      type: "education",
      company: "ABES Engineering College",
      duration: "AUGUST'19 - JULY'23",
      achievements: [
        "Graduated B.Tech in Computer Science (2023) from ABES Engineering College",
        "Maintained a strong academic record with 8.0 CGPA",
        "Gained foundational knowledge in data structures, algorithms, and software engineering",
        "Automated VAST code generation tool",
        "Participated in technical workshops, coding contests, and project-based learning",
      ],
    },
  ];

export const BLOG_POSTS: BlogPosts[] = [
    {
      id: 1,
      image: "/images/analytics.jpg",
      date: "September, 2024",
      title: "Video Analytics",
      excerpt:
        "Track key performance metrics like impressions, views, watch time, and CTA clicks in real time. Includes detailed insights such as viewer OS, browser, geo-mapping, heatmaps, and engagement data from the last 30 minutes to help optimize video performance and audience targeting.",
      techStack: [
        "NextJs",
        "JavaScript",
        "NodeJs",
        "Apex-Charts",
        "Tailwind CSS",
        "Dash Tail",
        "ShadCN",
      ],
      link: "https://videostori.ai/admin",
    },
    {
      id: 2,
      image: "/images/news.JPG",
      date: "November, 2023",
      title: "News App",
      excerpt:
        "A responsive news app that fetches real-time articles by category using News API. Built with React and Tailwind CSS, and deployed on GitHub Pages.",
      techStack: [
        "React.js",
        "JavaScript",
        "News API",
        "Axios",
        "GitHub Pages",
        "Bootstrap",
      ],
      link: "https://saarthakdev.github.io/News-App/",
    },
    {
      id: 3,
      image: "/images/ai-website.png",
      date: "July, 2025",
      title: "AI Website",
      excerpt:
        "I worked on developing a fast, user-friendly interface and seamless multi-channel distribution. An AI-powered platform for creating interactive marketing videos with features like clickable hotspots, personalization, and in-video shopping.",
      techStack: ["Next.js", "Tailwind CSS", "Typescript", "AWS", "Sanity CMS"],
      link: "https://videostori.ai",
    },
  ];

export const sectionId: string[] = ["home", "skills", "experience", "projects", "contact"];

export const NAV_ITEMS: NAV_ITEM[] = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience & Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];