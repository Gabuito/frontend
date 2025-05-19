"use client";

import { T } from "@/utils/types";
import { useState, useRef, useEffect } from "react";

const placeholders = [
  "Fiat Argo 2020",
  "Apartamento em São Paulo",
  "iPhone 12 Pro",
  "Cama Box",
  "RTX 5070",
  "Terreno em Rio Preto",
];

export default function SearchSpace(): T["Element"] {
  const [inputValue, setInputValue] = useState("");

  const [indicePlaceholder, setIndicePlaceholder] = useState<number>(0);
  const [placeholderValue, setPlaceholderValue] = useState<string>(
    placeholders[0]
  ); // Texto atual do placeholder

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("Todos");
  const options = [
    { value: "Todos", icon: "apps" },
    { value: "Imoveis", icon: "home" },
    { value: "Automoveis", icon: "directions_car" },
    { value: "Eletronicos", icon: "devices" },
    { value: "Outros", icon: "category" },
  ];
  const selectRef = useRef<HTMLDivElement>(null);
  const animatedPlaceholderRef = useRef<HTMLSpanElement>(null); // Ref para o span animado

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOut);
    return () => document.removeEventListener("mousedown", handleClickOut);
  }, []);
  useEffect(() => {
    setPlaceholderValue(placeholders[indicePlaceholder]);
  }, [indicePlaceholder]);
  useEffect(() => {
    const spanElement = animatedPlaceholderRef.current;

    if (!spanElement) return;

    const handleAnimationEnd = () => {
      setIndicePlaceholder(
        (prevIndice) => (prevIndice + 1) % placeholders.length
      );
    };

    spanElement.addEventListener("animationend", handleAnimationEnd);
    return () => {
      spanElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [placeholderValue]);

  return (
    <div className='flex items-center justify-between rounded border-2 border-zinc-200 dark:border-none dark:bg-neutral-700 w-full px-4 py-2 gap-4 z-20'>
      {/* Dropdown de Categoria (inalterado) */}
      <div className='relative w-2/5' ref={selectRef}>
        <button
          type='button'
          className='text-neutral-700 dark:bg-neutral-700 dark:text-neutral-50 text-lg w-full rounded flex items-center justify-between h-full font-light'
          aria-label='Categoria de busca'
          onClick={handleToggle}>
          <span className='flex items-center'>
            <span className='material-symbols-outlined mr-3'>
              {options.find((opt) => opt.value === selectedValue)?.icon}
            </span>
            {selectedValue}
          </span>
          <span className='material-symbols-outlined'>
            {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
        </button>
        {isOpen && (
          <ul className='absolute mt-2 -ml-4 w-[200%] bg-neutral-600 text-white rounded shadow-lg max-h-60 overflow-auto z-50'>
            {options.map((option) => (
              <li
                key={option.value}
                className='px-3 py-2 text-lg hover:bg-neutral-500 cursor-pointer flex items-center z-50'
                onClick={() => handleSelect(option.value)}>
                <span className='material-symbols-outlined mr-2'>
                  {option.icon}
                </span>
                {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Input e Placeholder Animado */}
      <div
        className={`group flex w-full items-center ${
          inputValue ? "has-value" : "" // Usado por group-[.has-value]:hidden abaixo
        }`}>
        <input
          type='text'
          placeholder={undefined} // Não usamos o placeholder nativo quando o nosso está visível
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='bg-transparent text-lg outline-none w-full text-neutral-900 h-full dark:text-neutral-50'
        />
        <div
          className='absolute flex flex-row w-auto max-w-[calc(100%-40px)] transition-all
          group-focus-within:hidden group-[.has-value]:hidden pointer-events-none dark:text-neutral-50/50'>
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
      </div>

      {/* Ícone de Busca (inalterado) */}
      <span className='material-symbols-outlined w-1/14 flex items-center justify-center mr-4 search-icon'>
        search
      </span>
    </div>
  );
}
