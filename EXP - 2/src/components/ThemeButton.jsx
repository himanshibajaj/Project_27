// src/components/ThemeButton.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300 
      bg-blue-500 text-white hover:bg-blue-600"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
