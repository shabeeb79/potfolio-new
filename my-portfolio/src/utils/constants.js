export const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Blog", id: "experience" },
  { label: "Contact", id: "contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/shabeeb79",
    icon: "github",
    color: "#24292F",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-shabeeb-v-k",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/",
    icon: "leetcode",
    color: "#FFA116",
  },
];

export const SECTION_IDS = {
  home: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  contact: "contact",
  footer: "footer",
};

export const ANIMATION_DURATIONS = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const THEME = {
  dark: {
    bg: "#0a0a14",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
    text: "#eef0ff",
    mutedText: "rgba(238,240,255,0.72)",
    primary: "#6C63FF",
    secondary: "#00D2A0",
    accent: "#FF6584",
  },
  light: {
    bg: "#f8f8fc",
    surface: "rgba(255,255,255,0.9)",
    border: "rgba(0,0,0,0.08)",
    text: "#121427",
    mutedText: "rgba(18,20,39,0.72)",
    primary: "#6C63FF",
    secondary: "#00D2A0",
    accent: "#FF6584",
  },
};

export const META = {
  title: "Mohammed Shabeeb VK | Full Stack Developer Portfolio",
  description:
    "A modern full stack developer portfolio showcasing projects, skills, and experience.",
  ogImage: "/assets/images/og-image.png",
};
