"use client";

import { useState, useEffect } from "react";
import Selector from "./buttons/selector";

type Props = React.ReactNode;
type CProps = React.FC<CarouselProps>;

interface CarouselItem {
  main: Props;
  thumbnail: Props;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplayInterval?: number;
}

const Carrossel: CProps = ({ items, autoplayInterval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [items.length, autoplayInterval, currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return (
      <div className='text-center p-4'>
        Error Interno do Carrossel: Nenhum item para exibir.
      </div>
    );
  }

  return (
    <div className='w-full max-w-full mx-auto'>
      <div className='relative overflow-hidden shadow-xl h-96 sm:h-[60dvh] flex items-center'>
        <Selector
          onClick={() =>
            goToSlide((currentIndex - 1 + items.length) % items.length)
          }
          iconName='chevron_left'
          type={true}
          aria='Anterior'
        />

        <div className='w-full h-full flex items-center justify-center'>
          {items[currentIndex].main}
        </div>

        <Selector
          onClick={() => goToSlide((currentIndex + 1) % items.length)}
          iconName='chevron_right'
          type={false}
          aria='Próximo'
        />
      </div>
      {/* Navigator */}
      {items.length > 1 && (
        <div className='w-full p-2 bg-neutral-50 dark:bg-neutral-900 bg-opacity-50 flex justify-center items-center space-x-2 z-20 rounded-b-lg'>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-16 h-16 rounded-md overflow-hidden transition-all duration-300 ease-in-out transform focus:outline-none flex items-center justify-center border-2 ${
                index === currentIndex
                  ? "border-white scale-110 shadow-lg"
                  : "border-transparent opacity-80 hover:opacity-100 hover:scale-105"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
              type='button'>
              <div className='w-full h-full flex items-center justify-center'>
                {item.thumbnail}
              </div>
            </button>
          ))}
        </div>
      )}
      ;
    </div>
  );
};

export default Carrossel;
