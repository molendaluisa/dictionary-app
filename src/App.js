import React, { useState, useEffect } from 'react';
import './App.css';
import Search from "./Search";
import Toggle from "./Toggle";

const lightTheme = {
  '--first-color': '#e5e5e5',
  '--second-color': '#c24d2c',
  '--third-color': '#283c63',
  '--fourth-color': '#1a2639',
  '--fifth-color': '#ffffff',
};

const darkTheme = {
  '--first-color': '#303846',
  '--second-color': '#1a2639',
  '--third-color': '#c24d2c',
  '--fourth-color': '#1a2639',
  '--fifth-color': '#f6f6f6',
};

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = darkMode ? darkTheme : lightTheme;
    Object.entries(currentTheme).forEach(entry => {
      document.documentElement.style.setProperty(entry[0], entry[1]);
    });
    localStorage.setItem('darkmode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem('darkmode')) {
      setDarkMode(true);
    }
  }, []);
  return (
    <div className="App">
      <main>
        <div className="container">
          <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Search />
        </div>
      </main>
    </div>
  );
}

export default App;
