"use client";

import { T } from "@/utils/types";
import { useState, useRef, useEffect } from "react";

const placeholders = [
  "Hatchback Compacto 2020",
  "Apartamento em São Paulo",
  "Smartphone 5G com 128GB",
  "Cama Confortável Tipo Box",
  "Placa de Vídeo Semi-Nova",
  "Terreno em Rio Preto",
];

export default function SearchSpace(): T["Element"] {
  const [inputValue, setInputValue] = useState("");
  const [indicePlaceholder, setIndicePlaceholder] = useState(0);
  const animatedPlaceholderRef = useRef<HTMLSpanElement | null>(null);
  const placeholderValue = placeholders[indicePlaceholder];

  useEffect(() => {
    const span = animatedPlaceholderRef.current;
    if (!span) return;
    const handleAnimationEnd = () =>
      setIndicePlaceholder((i) => (i + 1) % placeholders.length);
    span.addEventListener("animationend", handleAnimationEnd);
    return () => span.removeEventListener("animationend", handleAnimationEnd);
  }, [indicePlaceholder]);

  return (
    <div
      className={`group w-92 flex flex-row items-center justify-between rounded border-2 border-zinc-200 dark:border-none dark:bg-neutral-700 px-4 py-2 gap-4 z-20 focus-within:w-132 group-focus-within:w-92 transition-all duration-700 ease-in-out`}>
      <div className='w-full relative'>
        <input
          type='text'
          aria-label='Buscar'
          placeholder={undefined}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='peer bg-transparent text-lg outline-none w-full text-neutral-900 h-full dark:text-neutral-50'
        />
        {!inputValue && (
          <div className='absolute top-0 flex flex-row w-full transition-all pointer-events-none dark:text-neutral-50/50 peer-focus:hidden'>
            <span className='text-lg font-light whitespace-nowrap'>
              Buscar por 
            </span>
            <div className='w-fit overflow-hidden'>
              <span
                id='placeholder'
                ref={animatedPlaceholderRef}
                key={placeholderValue}
                className='flex font-light text-lg ease-in typewriter'>
                {placeholderValue} 
              </span>
            </div>
          </div>
        )}
      </div>
      <span className='material-symbols-outlined w-6 flex items-center justify-end-safe search-icon'>
        search
      </span>
    </div>
  );
}
