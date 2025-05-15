"use client";

import { T } from "@/utils/types";
import { ThemeContext, initTheme } from "@/hooks/theme";
import { useState, useEffect, useCallback } from "react";

export function ThemeProvider({ children }: T["Node"]): T["Children"] {
  const [theme, setTheme] = useState<T["Theme"]>(initTheme());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyTheme = (value: T["Theme"]) => {
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = value === "dark" || (value === "system" && system);
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("user_theme", value);
    };

    applyTheme(theme);

    if (theme === "system") {
      const system = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        applyTheme("system");
      };
      system.addEventListener("change", handleChange);
      return () => system.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const toggleTheme = useCallback((): void => {
    setTheme((current: T["Theme"]) => {
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (current === "system") return system ? "" : "dark";
      if (current === "dark") return "";
      return "dark";
    });
  }, []);

  return (
    <ThemeContext value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}

export { useTheme } from "@/hooks/theme";
