import { T } from "@/utils/types";
import Image from "next/image";

export function Banner(): T["Element"] {
  return (
    <>
      <div className='hidden size-full lg:flex items-center justify-center text-white text-4xl font-bold cursor-pointer'>
        <Image
          src='/img/banner/hero-1.png'
          alt='Banner'
          fill
          className='absolute top-0 left-0 ob lg:object-scale-down xl:object-cover object-center '
        />
      </div>
      <div className='lg:hidden size-full flex items-center justify-center text-white text-4xl font-bold '>
        <Image
          src='/img/banner/sm-hero-1.webp'
          alt='Banner'
          fill
          className='absolute top-0 left-0 object-cover  object-center '
        />
      </div>
    </>
  );
}
