const { useContext } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`box ${theme}`}>
      <h2>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h2>
      <p>Click the button below to switch themes!</p>
    </div>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>Interactive Theme Switcher</h1>
        <ThemedBox />
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

root.render(<App />);
