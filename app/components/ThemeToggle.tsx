"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
  const { resolvedTheme, systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  // const toggleDarkModeTwice = () => {
  //   console.log("runned");

  //   setTheme(resolvedTheme === "dark" ? "dark" : "light");
  // };

  useEffect(() => {
    setMounted(true);
    // toggleDarkModeTwice();
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={resolvedTheme === "dark"}
      onChange={toggleDarkMode}
      size={30}
      className="top-7 fixed z-50  right-4 md:top-auto md:bottom-12 md:right-12 text-3xl"
    />
  );
};

export default ThemeToggle;
