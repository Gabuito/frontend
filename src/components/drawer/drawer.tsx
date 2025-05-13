"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDrawer } from "@/contexts/drawerContext";
import { useTheme } from "@/contexts/themeContext";
import { drawerDefault, drawerSizeRes, drawerTheme } from "@/syles/drawerClass";

type MouseEvent =
  | React.MouseEvent<HTMLAnchorElement>
  | React.MouseEvent<HTMLButtonElement>;

export default function Drawer() {
  const { drawerOpen, setDrawerOpen } = useDrawer();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, setTheme } = useTheme(); // Added: Use theme context
  const [isSystemCurrentlyDark, setIsSystemCurrentlyDark] = useState(false); // Added: State for system dark preference

  useEffect((): void => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  // Added: Effect to track system's color scheme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateSystemDarkPreference = () =>
        setIsSystemCurrentlyDark(mediaQuery.matches);
      updateSystemDarkPreference(); // Initial check
      mediaQuery.addEventListener("change", updateSystemDarkPreference);
      return () =>
        mediaQuery.removeEventListener("change", updateSystemDarkPreference);
    }
  }, []);

  const handleHomeClick = (e: MouseEvent): void => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      setDrawerOpen(false);
    }
  };

  // Added: Handler for Dark Mode switch
  const handleDarkModeToggle = () => {
    if (theme !== "system") {
      setTheme(theme === "dark" ? "" : "dark");
    }
  };

  // Added: Handler for System Theme switch
  const handleSystemThemeToggle = () => {
    if (theme !== "system") {
      setTheme("system");
    } else {
      // When turning system theme OFF, set to the current visual theme system was enforcing
      setTheme(isSystemCurrentlyDark ? "dark" : "");
    }
  };

  const isDarkModeEffectivelyOn =
    theme === "dark" || (theme === "system" && isSystemCurrentlyDark);
  const isDarkModeSwitchDisabled = theme === "system";

  // Only render theme-dependent UI after mount to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`${drawerDefault + drawerSizeRes + drawerTheme} ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}>
        <div className='flex flex-col h-full'>
          <div className='flex items-center justify-between p-4 border-b border-neutral-300 dark:border-neutral-700'>
            {/* componente de login */}
            <div className='flex items-center gap-2'>
              {!isAuthenticated && (
                <button
                  className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-400'
                  onClick={() => setIsAuthenticated(true)}>
                  <span className='material-symbols-outlined'>login</span>
                  Entrar
                </button>
              )}
              {isAuthenticated && (
                <button
                  className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-red-400'
                  onClick={() => setIsAuthenticated(false)}>
                  <span className='material-symbols-outlined'>logout</span>
                  Sair
                </button>
              )}
            </div>

            <div className='relative group'>
              <button
                className='flex items-center border-2 border-neutral-500 p-2 rounded-full cursor-pointer hover:scale-110 focus:-translate-y-1 transform-gpu transition-all'
                onClick={() => setDrawerOpen(false)}
                aria-label='Fechar menu'>
                <span className='material-symbols-outlined'>close</span>
              </button>
              <div className='absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-neutral-800 text-white text-xs rounded px-3 py-1 shadow-lg whitespace-nowrap z-30'>
                Fechar
              </div>
            </div>
          </div>
          <nav className='flex flex-col gap-2 p-4 border-b border-neutral-700/20 dark:border-neutral-300/20 '>
            <Link
              href='/'
              className='px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700'
              onClick={handleHomeClick}>
              Home
            </Link>
            <Link
              href='/about'
              className='px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700'>
              Sobre
            </Link>
            <Link
              href='/contact'
              className='px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700'>
              Contato
            </Link>
          </nav>
          <nav className='flex flex-col gap-2 p-4'>
            <a
              href='#'
              className='px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700'>
              Home
            </a>
            <a
              href='#'
              className='px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700'>
              About
            </a>
            <a
              href='#'
              className='px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700'>
              Contact
            </a>
            <div className='flex flex-col gap-2 mt-4 lg:hidden'>
              {!isAuthenticated && (
                <>
                  <button
                    className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-400'
                    onClick={() => setIsAuthenticated(true)}>
                    <span className='material-symbols-outlined'>login</span>
                    Entrar
                  </button>
                  <button className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-green-400'>
                    <span className='material-symbols-outlined'>
                      person_add
                    </span>
                    Cadastrar
                  </button>
                </>
              )}
            </div>
          </nav>

          {/* Added: Aparência Section */}
          <div className='mt-auto p-4 border-t border-neutral-300/30 dark:border-neutral-700/30'>
            <h3 className='text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400 mb-3 tracking-wider'>
              Aparência
            </h3>
            <div className='space-y-3'>
              {/* Modo Escuro Switch */}
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='darkModeSwitch'
                  className={`flex items-center text-sm ${
                    isDarkModeSwitchDisabled
                      ? "cursor-not-allowed text-neutral-400 dark:text-neutral-500"
                      : "cursor-pointer text-neutral-700 dark:text-neutral-200"
                  }`}>
                  <span className='material-symbols-outlined mr-3 text-xl'>
                    {mounted
                      ? isDarkModeEffectivelyOn
                        ? "dark_mode"
                        : "light_mode"
                      : "light_mode"}
                  </span>
                  Modo Escuro
                </label>
                <button
                  id='darkModeSwitch'
                  type='button'
                  role='switch'
                  aria-checked={
                    mounted && isDarkModeEffectivelyOn ? "true" : "false"
                  }
                  disabled={isDarkModeSwitchDisabled}
                  onClick={handleDarkModeToggle}
                  className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 focus:ring-blue-500 ${
                    mounted && isDarkModeEffectivelyOn
                      ? "bg-blue-600"
                      : "bg-neutral-400 dark:bg-neutral-600"
                  } ${
                    isDarkModeSwitchDisabled
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:bg-opacity-80"
                  }`}>
                  <span className='sr-only'>Modo Escuro</span>
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      mounted && isDarkModeEffectivelyOn
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Tema Padrão do Navegador Switch */}
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='systemThemeSwitch'
                  className='flex items-center text-sm cursor-pointer text-neutral-700 dark:text-neutral-200'>
                  <span className='material-symbols-outlined mr-3 text-xl'>
                    brightness_auto
                  </span>
                  Tema Padrão do Navegador
                </label>
                <button
                  id='systemThemeSwitch'
                  type='button'
                  role='switch'
                  aria-checked={
                    mounted && theme === "system" ? "true" : "false"
                  }
                  onClick={handleSystemThemeToggle}
                  className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 focus:ring-blue-500 ${
                    mounted && theme === "system"
                      ? "bg-blue-600"
                      : "bg-neutral-400 dark:bg-neutral-600"
                  } hover:bg-opacity-80`}>
                  <span className='sr-only'>Tema Padrão do Navegador</span>
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      mounted && theme === "system"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {drawerOpen && (
        <div
          className='fixed inset-0 z-30 bg-black/5 backdrop-blur-sm'
          onClick={() => setDrawerOpen(false)}
          aria-label='Fechar drawer'
        />
      )}
    </>
  );
}
