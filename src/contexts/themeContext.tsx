'use client'

import { createContext, useContext, useState, useEffect, ReactNode} from 'react';

type Theme = '' | 'dark' | 'system';
type Scheme = Omit<Theme, 'system'>;
type Internal =  { children: ReactNode };

//Interface, teve ter duas funções, de toggle e outro de set além de um cache do estado atual
interface ThemeContextType {
  theme: Theme; 
  toggleTheme: () => void; 
  setTheme: (theme: Theme) => void; 
}


const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

const initTheme = (): Theme => {

  if (typeof window !== 'undefined') {
    const storedPref = localStorage.getItem('user_theme') as Theme | null;

    if (storedPref === '' || storedPref === 'dark' || storedPref === 'system') {
      return storedPref;
    };

  };
  return 'system'; 
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: Internal) => {
  const [themePref, setThemePref] = useState<Theme>(initTheme);

  useEffect(() : void => {
    if(typeof window === 'undefined') return;

    const systemPref : boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemScheme : Scheme = systemPref ? 'dark' : '';
    const visual: Scheme = themePref === 'system' ? systemScheme : themePref;
    
    if(visual === 'dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    };
    
    localStorage.setItem('user_theme', themePref);
  }, [themePref]);


  useEffect(() : () => void => {
    if (typeof window === 'undefined' || themePref !== 'system') {
      return () => {};
    };

    const systemPref : MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) : void => {
      if (themePref === 'system') document.documentElement.classList.toggle('dark', e.matches);     
    };

    document.documentElement.classList.toggle('dark', systemPref.matches);
    systemPref.addEventListener('change', handleChange);
    return () => { systemPref.removeEventListener('change', handleChange) };
  }, [themePref]);

  const toggleTheme = () : void => {    
    setThemePref((currentPref : Theme) => {
      const systemPref: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const newPref: Theme = currentPref === 'system' ? (systemPref ? '' : 'dark') : (currentPref === 'dark' ? '' : 'dark');
      return newPref;
    });
  };

  const setTheme = (newPref: Theme) : void => {
    setThemePref(newPref);
  };

  return (
    <ThemeContext.Provider value={{ theme: themePref, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

