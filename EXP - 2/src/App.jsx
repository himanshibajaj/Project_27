import React, { useState, useEffect, useContext, createContext } from "react";
import "./index.css";

const ThemeContext = createContext();

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [theme, setTheme] = useState("dark");
  const user = "Himanshi Bajaj";

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <h1 className="title">React Hooks in Action ⚡</h1>
        <UserCard user={user} time={time} />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

function UserCard({ user, time }) {
  return (
    <div className="card">
      <h2>👤 User: {user}</h2>
      <p>🕒 Current Time: {time}</p>
    </div>
  );
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className="toggle-btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

export default App;
