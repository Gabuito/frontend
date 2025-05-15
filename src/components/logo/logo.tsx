import { T } from "@/utils/types";
import Image from "next/image";

interface Props {
  width?: number;
}

export function Logo({ width = 110 }: Props): T["Element"] {
  return (
    <Image
      priority
      src='/img/logo/logo.png'
      alt='Logo'
      width={width}
      height={0} // Não tem na doc mas acho que é 0 é auto
      className='rounded-b -mt-1 invert-100 dark:invert-0 bg-neutral-300 dark:bg-neutral-50 hidden sm:block border-b border-neutral-300 shadow-sm '
    />
  );
}

export function MiniLogo(): T["Element"] {
  return (
    <div className='relative rounded sm:hidden bg-neutral-800 dark:bg-neutral-50 h-5/6 w-fit min-w-22'>
      <Image
        priority
        src='/img/logo/logo.png'
        alt='Logo'
        fill
        objectFit='contain' // Não tem na doc mas acho que é 0 é auto
        className='invert-100 dark:invert-0 block'
      />
    </div>
  );
}

export function LoginLogo(): T["Element"] {
  return (
    <Image
      priority
      src='/img/logo/logo.png'
      alt='Logo'
      width={200}
      height={0} // Não tem na doc mas acho que é 0 é auto
      className='rounded rounded-t-none invert-0 dark:invert-100 bg-neutral-600 dark:bg-neutral-300 block z-10 -mt-'
    />
  );
}
