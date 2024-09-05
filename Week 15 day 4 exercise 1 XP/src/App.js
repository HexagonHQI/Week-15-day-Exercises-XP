// src/App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
      {/* Other components here */}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
