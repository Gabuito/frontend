import { T } from "@/utils/types";
import { createContext, useContext } from "react";

interface ThemeActions {
  theme: T["Theme"];
  toggleTheme: () => void;
  setTheme: (theme: T["Theme"]) => void;
}

export const ThemeContext = createContext<ThemeActions | undefined>(undefined);

export function useTheme(): ThemeActions {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  return context;
}

export function initTheme(): T["Theme"] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("user_theme") as T["Theme"] | null;
    if (stored === "" || stored === "dark" || stored === "system") {
      return stored;
    }
  }
  return "system";
}
