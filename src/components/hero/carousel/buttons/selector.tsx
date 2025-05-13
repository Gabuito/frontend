interface SelectorProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName: string;
  type: boolean;
  aria: string;
}

export default function Selector({
  onClick,
  iconName,
  type,
  aria,
}: SelectorProps) {
  function getButtonStyles(type: boolean) {
    if (type) return "left-2 2xl:left-24";
    return "right-2 2xl:right-24";
  }

  return (
    <button
      onClick={onClick}
      className={`absolute z-20 bg-neutral-50 dark:bg-neutral-900 hover:bg-opacity-10 rounded px-2 py-8 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 cursor-pointer ${getButtonStyles(
        type
      )}`}
      aria-label={aria}
      type='button'>
      <span className='material-symbols-outlined carousel-icon'>
        {iconName}
      </span>
    </button>
  );
}
