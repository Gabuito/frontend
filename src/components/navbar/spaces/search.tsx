import { T } from "@/utils/types";
import { useState, useRef, useEffect } from "react";

export default function SearchSpace(): T["Element"] {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Todos");
  const options = [
    { value: "Todos", icon: "apps" },
    { value: "Imoveis", icon: "home" },
    { value: "Automoveis", icon: "directions_car" },
    { value: "Eletronicos", icon: "devices" },
    { value: "Outros", icon: "category" },
  ];
  const selectRef = useRef<HTMLDivElement>(null);

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
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return (
    <>
      <div className='flex items-center-safe justify-between navbar-icon rounded border-2 border-zinc-200 dark:border-none dark:bg-neutral-700 w-full px-4 py-2 gap-4 z-20'>
        <div className='relative w-2/5' ref={selectRef}>
          <button
            type='button'
            className=' text-neutral-700 dark:bg-neutral-700 dark:text-neutral-50 text-lg w-full rounded flex items-center justify-between h-full font-light'
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

        <input
          type='text'
          placeholder='Buscar...'
          className='bg-transparent text-lg outline-none w-full text-neutral-900 h-full'
        />
        <span className='material-symbols-outlined w-1/14 flex items-center-safe justify-center-safe mr-4 search-icon'>
          search
        </span>
      </div>
    </>
  );
}
