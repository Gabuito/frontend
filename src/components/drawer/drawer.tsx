"use client";
import { useState, useEffect } from "react";
import { useDrawer } from "@/contexts/drawerContext";
import { useTheme } from "@/contexts/themeContext";

// type MouseEvent =
//   | React.MouseEvent<HTMLAnchorElement>
//   | React.MouseEvent<HTMLButtonElement>;

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

  // const handleHomeClick = (e: MouseEvent): void => {
  //   if (window.location.pathname === "/") {
  //     e.preventDefault();
  //     setDrawerOpen(false);
  //   }
  // };

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
        className={`drawer responsive colors ${drawerOpen ? "open" : "close"}`}>
        <div className='container-drawer'>
          <div className='w-full flex-between header border-b-default'>
            {/* componente de login */}
            <div className='flex gap-2'>
              {!isAuthenticated && (
                <button
                  className='drawer-btn drawer-btn-blue'
                  onClick={() => setIsAuthenticated(true)}>
                  <span className='material-symbols-outlined'>login</span>
                  Entrar
                </button>
              )}
              {isAuthenticated && (
                <button
                  className='drawer-btn drawer-btn-red'
                  onClick={() => setIsAuthenticated(false)}>
                  <span className='material-symbols-outlined'>logout</span>
                  Sair
                </button>
              )}
            </div>

            <div className='relative group'>
              <button
                className='drawer-close-btn'
                onClick={() => setDrawerOpen(false)}
                aria-label='Fechar menu'>
                <span className='material-symbols-outlined'>close</span>
              </button>
              <div className='absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-neutral-800 text-white text-xs rounded px-3 py-1 shadow-lg whitespace-nowrap z-30'>
                Fechar
              </div>
            </div>
          </div>

          {/* Segmento: Categorias */}
          <div className='p-4 border-t border-neutral-300/30 dark:border-neutral-700/30'>
            <h3 className='text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400 mb-3 tracking-wider'>
              Categorias
            </h3>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
              {/* Coluna 1 */}
              <div>
                <div className='font-semibold text-neutral-700 dark:text-neutral-200 mb-1'>
                  Imóveis
                </div>
                <ul className='space-y-1 text-sm text-neutral-600 dark:text-neutral-300'>
                  <li>
                    <a href='#' className='hover:underline'>
                      Casas
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Apartamentos
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Terrenos
                    </a>
                  </li>
                </ul>
              </div>
              {/* Coluna 2 */}
              <div>
                <div className='font-semibold text-neutral-700 dark:text-neutral-200 mb-1'>
                  Automóveis
                </div>
                <ul className='space-y-1 text-sm text-neutral-600 dark:text-neutral-300'>
                  <li>
                    <a href='#' className='hover:underline'>
                      Carros
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Motos
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Peças
                    </a>
                  </li>
                </ul>
              </div>
              {/* Coluna 3 */}
              <div>
                <div className='font-semibold text-neutral-700 dark:text-neutral-200 mb-1'>
                  Eletrônicos
                </div>
                <ul className='space-y-1 text-sm text-neutral-600 dark:text-neutral-300'>
                  <li>
                    <a href='#' className='hover:underline'>
                      Celulares
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      Computadores
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline'>
                      TVs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-4'>
              <a
                href='#'
                className='block text-center text-blue-600 hover:underline font-medium text-sm'>
                Ver todos
              </a>
            </div>
          </div>

          {/* Segmento: Sobre / Perfil */}
          <div className='p-4 border-t border-neutral-300/30 dark:border-neutral-700/30'>
            {isAuthenticated ? (
              <div className='bg-blue-50 dark:bg-neutral-800 rounded-lg p-4 flex flex-col items-center text-center'>
                <div className='w-16 h-16 rounded-full bg-blue-200 dark:bg-neutral-700 flex items-center justify-center mb-2'>
                  <span className='material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400'>
                    account_circle
                  </span>
                </div>
                <div className='font-semibold text-neutral-800 dark:text-neutral-100 mb-1'>
                  Bem-vindo!
                </div>
                <div className='text-sm text-neutral-600 dark:text-neutral-300 mb-3'>
                  Acesse sua dashboard para gerenciar seus anúncios.
                </div>
                <a
                  href='/dashboard'
                  className='drawer-btn drawer-btn-blue w-full'>
                  Ir para Dashboard
                  <span className='material-symbols-outlined sm-icon'>
                    keyboard_arrow_right
                  </span>
                </a>
              </div>
            ) : (
              <div className='bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 flex flex-col items-center text-center'>
                <div className='w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center mb-2'>
                  <span className='material-symbols-outlined text-4xl text-neutral-500 dark:text-neutral-300'>
                    person_add
                  </span>
                </div>
                <div className='font-semibold text-neutral-800 dark:text-neutral-100 mb-1'>
                  Crie sua conta
                </div>
                <div className='text-sm text-neutral-600 dark:text-neutral-300 mb-3'>
                  Cadastre-se ou entre para anunciar e acompanhar seus
                  favoritos.
                </div>
                <div className='flex gap-2 w-full'>
                  <a
                    href='/login'
                    className='drawer-btn drawer-btn-blue flex-1'>
                    Entrar
                  </a>
                  <a
                    href='/register'
                    className='drawer-btn drawer-btn-outline flex-1'>
                    Criar conta
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Segmento: Aparência */}
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
                  className={`drawer-switch ${
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
                    className={`drawer-switch-thumb ${
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
                  className={`drawer-switch ${
                    mounted && theme === "system"
                      ? "bg-blue-600"
                      : "bg-neutral-400 dark:bg-neutral-600"
                  } hover:bg-opacity-80`}>
                  <span className='sr-only'>Tema Padrão do Navegador</span>
                  <span
                    className={`drawer-switch-thumb ${
                      mounted && theme === "system"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Segmento: Rodapé com redes sociais */}
          <div className='p-4 border-t border-neutral-300/30 dark:border-neutral-700/30 flex items-center justify-center gap-4'>
            <h1 className='font-extralight'>Repositório do Projeto </h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='invert-0 dark:invert-100 w-6 h-6 hover:fill-sky-700 transition-colors duration-200 cursor-pointer'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z' />
            </svg>
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
