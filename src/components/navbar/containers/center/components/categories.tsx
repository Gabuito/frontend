import React from "react";

const options = [
  { value: "Todos", icon: "apps" },
  { value: "Imoveis", icon: "home" },
  { value: "Automoveis", icon: "directions_car" },
  { value: "Eletronicos", icon: "devices" },
  { value: "Outros", icon: "category" },
];

export function CategoryDropdown({
  selectedValue,
  setSelectedValue,
  isOpen,
  setIsOpen,
  selectRef,
}: {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectRef: React.RefObject<HTMLDivElement | null>;
}) {
  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
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
  );
}
