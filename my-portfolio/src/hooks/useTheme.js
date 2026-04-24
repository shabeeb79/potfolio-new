import { useEffect, useState } from "react";

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === null) return true;
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return [isDark, toggleTheme];
}

export default useTheme;
