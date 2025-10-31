// src/context/ThemeContext.jsx
import { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

// Create Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
