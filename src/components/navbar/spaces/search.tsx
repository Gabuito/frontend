import { JSX, useState, useRef, useEffect } from "react";

export default function SearchSpace(): JSX.Element {
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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='flex items-center-safe justify-between navbar-icon rounded gap-2 p-2 bg-neutral-700 w-full'>
        <div className='relative w-1/3' ref={selectRef}>
          <button
            type='button'
            className='bg-neutral-700 text-white text-lg w-full rounded flex items-center justify-between px-2 py-1 h-full'
            aria-label='Categoria de busca'
            onClick={handleToggle}>
            <span className='flex items-center'>
              <span className='material-symbols-outlined mr-2'>
                {options.find((opt) => opt.value === selectedValue)?.icon}
              </span>
              {selectedValue}
            </span>
            <span className='material-symbols-outlined'>
              {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
            </span>
          </button>
          {isOpen && (
            <ul className='absolute z-10 mt-1 -ml-2 w-[125%] bg-neutral-600 text-white rounded shadow-lg max-h-60 overflow-auto'>
              {options.map((option) => (
                <li
                  key={option.value}
                  className='px-3 py-2 text-lg hover:bg-neutral-500 cursor-pointer flex items-center'
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
          className='bg-transparent text-lg text-white outline-none w-full'
        />
        <span className='material-symbols-outlined w-1/14 flex items-center-safe justify-center-safe ml-4'>
          search
        </span>
      </div>
    </>
  );
}
