"use client"

import { useEffect, useState } from "react";

const useThemeSwitch = () => {
  const prefersDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    const userPreference = window.localStorage.getItem(storageKey);
    if (userPreference) {
      console.log(`User preference: ${userPreference}`);
      return userPreference;
    }
    console.log(`System preference: ${window.matchMedia(prefersDarkQuery).matches ? "dark" : "light"}`);
    return window.matchMedia(prefersDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkQuery);

    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };

  }, [])

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
};

export { useThemeSwitch };
