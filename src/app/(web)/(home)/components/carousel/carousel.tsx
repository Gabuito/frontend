"use client";

import { useState, useEffect } from "react";
import { T } from "@/utils/types";
import { Navigator } from "./navigator";
import Selector from "@/app/(web)/(home)/components/carousel/selector";

interface CarouselProps {
  items: T["Element"][];
  autoplayInterval?: number;
}

export function Carousel({ items, autoplayInterval = 7000 }: CarouselProps) {
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
    <div className='carousel colors'>
      <div className='c-container responsive'>
        <Selector
          onClick={() =>
            goToSlide((currentIndex - 1 + items.length) % items.length)
          }
          iconName='chevron_left'
          left
          aria='Anterior'
        />
        <div className='container size-full mx-auto'>
          {items[currentIndex]}
          <Navigator
            items={items}
            currentIndex={currentIndex}
            goToSlide={goToSlide}
          />
        </div>
        <Selector
          onClick={() => goToSlide((currentIndex + 1) % items.length)}
          iconName='chevron_right'
          aria='Próximo'
        />
      </div>
    </div>
  );
}
