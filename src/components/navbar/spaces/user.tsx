import { JSX } from "react";
import Link from "next/link";

export default function UserSpace(): JSX.Element {
  return (
    <Link
      href='/login'
      className='group relative flex items-center gap-3 px-6 py-2 rounded-full  bg-neutral-700 hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-md cursor-pointer'
      aria-label='Entrar ou cadastrar-se'>
      <span className='material-symbols-outlined text-3xl rounded-full p-2 bg-neutral-600 group-hover:bg-primary-600 text-primary-400 group-hover:text-white transition-colors shadow -left-6'>
        person
      </span>
      <span className='hidden 2xl:flex flex-col gap-0 justify-center items-baseline text-sm text-white'>
        <div>
          <b className='font-semibold leading-tight'>Entrar</b>
          <span className='font-semibold leading-tight ml-1'>ou</span>
        </div>
        <b className='font-semibold leading-tight'>Cadastrar-se</b>
      </span>
      <span className='material-symbols-outlined text-xl text-primary-400 group-hover:text-white transition-colors ml-2 hidden xl:inline'>
        keyboard_arrow_right
      </span>
    </Link>
  );
}
