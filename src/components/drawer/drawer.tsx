'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDrawer } from "@/contexts/drawerContext";
import { drawerDefault, drawerSizeRes, drawerTheme } from "@/syles/drawerClass";

type MouseEvent = React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>;

export default function Drawer(){
  const { drawerOpen, setDrawerOpen } = useDrawer();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect((): void => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  const handleHomeClick = (e: MouseEvent): void => {
    if(window.location.pathname === "/") {
      e.preventDefault();
      setDrawerOpen(false);
    };
  };

  return (
    <>
      <div className={`${drawerDefault + drawerSizeRes + drawerTheme } ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-neutral-300 dark:border-neutral-700">
            {/* componente de login */}
            <div className="flex items-center gap-2">
              {!isAuthenticated && (
                <button
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => setIsAuthenticated(true)}
                >
                  <span className="material-symbols-outlined">login</span>
                  Entrar
                </button>
              )}
              {isAuthenticated && (
                <button
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => setIsAuthenticated(false)}
                >
                  <span className="material-symbols-outlined">logout</span>
                  Sair
                </button>
              )}
            </div>
            
            <div className="relative group">
              <button className="flex items-center border-2 border-neutral-500 p-2 rounded-full cursor-pointer hover:scale-110 focus:-translate-y-1 transform-gpu transition-all" onClick={() => setDrawerOpen(false)} aria-label="Fechar menu">
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-neutral-800 text-white text-xs rounded px-3 py-1 shadow-lg whitespace-nowrap z-30">
                Fechar
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-2 p-4 border-b border-neutral-700/20 dark:border-neutral-300/20 ">
              <Link
                href="/"
                className="px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                onClick={handleHomeClick}
              >
                Home
              </Link>
              <Link href="/about" className="px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">Sobre</Link>
              <Link href="/contact" className="px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">Contato</Link>
          </nav>
          <nav className="flex flex-col gap-2 p-4">
            <a href="#" className="px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">Home</a>
            <a href="#" className="px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">About</a>
            <a href="#" className="px-2 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">Contact</a>
            <div className="flex flex-col gap-2 mt-4 lg:hidden">
              {!isAuthenticated && (
                <>
                  <button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => setIsAuthenticated(true)}
                  >
                    <span className="material-symbols-outlined">login</span>
                    Entrar
                  </button>
                  <button
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <span className="material-symbols-outlined">person_add</span>
                    Cadastrar
                  </button>
                </>
              )}
              </div>
          </nav>
        </div>
      </div>
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/5 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
          aria-label="Fechar drawer"
        />
      )}
    </>
  );
}

