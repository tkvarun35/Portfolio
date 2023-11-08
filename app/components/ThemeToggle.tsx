"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
  const { resolvedTheme, systemTheme, theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(resolvedTheme === "dark");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setIsDark(resolvedTheme !== "dark");
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDark}
      onChange={toggleDarkMode}
      size={30}
      className="bottom-2 fixed right-2 md:bottom-12 md:right-12 text-3xl"
    />
  );
};

export default ThemeToggle;
