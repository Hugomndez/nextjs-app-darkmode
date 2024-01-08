'use client';
import { useState, useEffect } from 'react';

const SetThemeButton = () => {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return <button style={{width: '10ch', height: 'auto'}} onClick={toggleTheme}>{isDark ? 'dark' : 'light'}</button>;
};

export default SetThemeButton;
