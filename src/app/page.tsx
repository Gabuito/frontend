'use client'

import { ThemeSwitcher } from "@/components/switch/themeSwitch";
import { useDrawer } from "@/contexts/drawerContext";

export default function Home() {

  const { setDrawerOpen } = useDrawer();

  return (
    <>

    <button className="fixed top-4 right-4 p-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-50 rounded-md" onClick={() => setDrawerOpen(true)} aria-label="Abrir menu">
      <span className="material-symbols-outlined">menu</span>
    </button>

    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen bg-neutral-50 dark:bg-neutral-900">
      <h1 className="text-9xl font-bold">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-red-500">
          Hello World
        </span>
      </h1>
      <div className="flex flex-col gap-4">
      <h2 className="text-xl dark:text-white">Switch Theme</h2>
      <ThemeSwitcher />
      </div>
    </div>
    </>
  );
}
