"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loading() {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/asset/lottie/loading.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  if (!mounted) return null;
  if (!animationData) return null;

  return (
    <div className='absolute top-0 left-0 w-full h-dvh flex flex-col items-center justify-center bg-zinc-50 dark:bg-neutral-900 bg-opacity-50 backdrop-blur-sm'>
      <div className='flex flex-col items-center justify-center space-x-2'>
        {animationData && (
          <Lottie
            className='invert-100 dark:invert-0'
            animationData={animationData}
          />
        )}
        <span className='text-2xl font-semibold text-white'>Carregando...</span>
      </div>
      <p className='mt-4 text-sm text-gray-300'>
        Por favor, aguarde enquanto preparamos tudo para você.
      </p>
    </div>
  );
}
