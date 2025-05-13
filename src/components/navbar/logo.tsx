import Image from "next/image";
import { JSX } from "react";
interface LogoProps {
  width?: number;
}

type Element = JSX.Element;

export function Logo({ width = 110 }: LogoProps): Element {
  return (
    <Image
      priority
      src='/img/logo/logo.png'
      alt='Logo'
      width={width}
      height={0} // Não tem na doc mas acho que é 0 é auto
      className='rounded invert-100 dark:invert-0 bg-neutral-300 dark:bg-neutral-50 hidden sm:block'
    />
  );
}

export function MiniLogo() {
  return (
    <Image
      priority
      src='/img/logo/logo.png'
      alt='Logo'
      width={75}
      height={0} // Não tem na doc mas acho que é 0 é auto
      className='rounded invert-100 dark:invert-0 dark:bg-neutral-50 block sm:hidden'
    />
  );
}
