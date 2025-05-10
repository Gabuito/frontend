'use client'

import { useTheme } from '@/contexts/themeContext';
import { useState, useEffect } from 'react';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [currentVisualIsDark, setCurrentVisualIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let isDark;
      if (theme === 'dark') {
        isDark = true;
      } else if (theme === '') {
        isDark = false;
      } else { 
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      setCurrentVisualIsDark(isDark);

      if (theme === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
          setCurrentVisualIsDark(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    }
  }, [theme]);

  console.log('[ThemeSwitcher] Render - theme preference:', theme, 'current visual is dark:', currentVisualIsDark);

  return (
    <>
      <button
        className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-50 p-2 rounded-md justify-center items-center flex"
        onClick={toggleTheme}
      >
        <span className="material-symbols-outlined">
          {currentVisualIsDark ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
      <h3 className='dark:text-neutral-50'> Or System Default</h3>
      <button suppressHydrationWarning={true}
        className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-50 p-2 rounded-md justify-center items-center flex"
        onClick={() => {
          console.log('[ThemeSwitcher] Setting theme to system');
          setTheme('system'); 
        }}
      >
        <span className="material-symbols-outlined mr-2">settings_account_box</span>
        { theme === 'system' ? 'Disable System Theme' : 'Enable System Theme'}
      </button>
    </>
  );
};