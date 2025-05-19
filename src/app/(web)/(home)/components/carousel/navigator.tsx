import { T } from "@/utils/types";
interface NavigatorProps {
  items: T["Element"][];
  currentIndex: number;
  goToSlide: (index: number) => void;
}

export function Navigator({ items, currentIndex, goToSlide }: NavigatorProps) {
  return (
    items.length > 1 && (
      <div className='navigators lg:px-64 bg-transparent'>
        {items.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className='flex w-1/4 h-3 rounded-full bg-neutral-300/10 dark:bg-neutral-700 relative bottom-3 xl:bottom-5 xl:w-1/8 overflow-hidden transition-all duration-300 border border-transparent ease-in-out focus:outline-none mx-1 cursor-pointer  hover:border-neutral-50 z-10 self-center-safe'
              aria-label={`Ir para o slide ${index + 1}`}
              type='button'>
              <div
                className={`absolute left-0 top-0 h-full ${
                  isActive
                    ? "bg-zinc-100/50 progressbar-nav" // Slide atual: barra animada
                    : "w-0" // Slides futuros: barra vazia
                }`}
              />
            </button>
          );
        })}
      </div>
    )
  );
}
