import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  );
}

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'App dark-mode' : 'App light-mode'}>
      <header className="App-header">
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
