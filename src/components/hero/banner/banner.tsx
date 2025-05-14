import Image from "next/image";
import { Atkinson_Hyperlegible } from "next/font/google";
import { JSX } from "react";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-atkinson",
});

const cars: string[] = [
  "Chevrolet Onix",
  "Fiat Argo",
  "Volkswagen Polo",
  "Hyundai HB20",
  "Toyota Yaris",
  "Honda City",
  "Nissan Versa",
  "Ford Ka",
  "Peugeot 208",
];

import { useEffect, useState } from "react";

export function Banner(): JSX.Element {
  const [randomCar, setRandomCar] = useState<string>("");

  useEffect((): void => {
    setRandomCar(cars[Math.floor(Math.random() * cars.length)]);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold ">
      <Image
        src="/img/banner/bannerhero1.webp"
        alt="Banner"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover object-center "
      />
      <div className="flex flex-row mx-36">
        <h1
          className={`${atkinson.variable} inline-flex justify-center-safe text-center font-light text-7xl z-10 p-4 rounded shadow-2xl`}
        >
          Chega de busão lotado?
        </h1>
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg px-8 py-3 rounded-full shadow-lg font-semibold z-10 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <span className="material-symbols-outlined text-2xl">search</span>
          Comprar {randomCar}
        </button>
      </div>
    </div>
  );
}
