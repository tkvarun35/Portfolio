"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import ThemeToggle from "./components/ThemeToggle";

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default Providers;
