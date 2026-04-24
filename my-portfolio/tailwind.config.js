import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#00D2A0",
        accent: "#FF6584",
        dark: "#0a0a14",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeSlideRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scrollDot: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(108, 99, 255, 0.2)" },
          "50%": { boxShadow: "0 0 28px rgba(108, 99, 255, 0.55)" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-slide-down": "fadeSlideDown 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-slide-left": "fadeSlideLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-slide-right": "fadeSlideRight 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        blink: "blink 1s ease infinite",
        bounce: "bounce 1.4s ease infinite",
        "scroll-dot": "scrollDot 1.4s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        rotate: "rotate360 1.6s linear infinite",
        pulse: "pulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(108, 99, 255, 0.45)",
        "glow-secondary": "0 0 30px rgba(0, 210, 160, 0.4)",
      },
    },
  },
  plugins: [forms],
};
