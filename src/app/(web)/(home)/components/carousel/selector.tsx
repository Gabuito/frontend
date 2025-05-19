interface SelectorProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName: string;
  left?: boolean;
  aria: string;
}

export default function Selector({
  onClick,
  iconName,
  left = false,
  aria,
}: SelectorProps) {
  function getButtonStyles(left: boolean) {
    if (left) return "left-1 2xl:left-5";
    return "right-1 2xl:right-5";
  }

  return (
    <button
      onClick={onClick}
      className={`absolute z-10 bg-neutral-50 dark:bg-neutral-900 hover:bg-opacity-10 rounded-full p-4 sm:p-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 cursor-pointer ${getButtonStyles(
        left
      )}`}
      aria-label={aria}
      type='button'>
      <span className='material-symbols-outlined carousel-icon'>
        {iconName}
      </span>
    </button>
  );
}
