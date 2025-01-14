import { useState, useEffect } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");	

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") || "light") as Theme;
    setTheme(savedTheme);

    document.body.setAttribute("data-theme", savedTheme);
  }, []);

   const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";    
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
