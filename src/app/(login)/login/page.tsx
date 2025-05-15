import { LoginLogo } from "@/components/logo/logo";
import Image from "next/image";

export default function Login() {
  return (
    <div className='w-screen h-[100dvh] flex items-center justify-center bg-neutral-300 dark:bg-neutral-800'>
      <Image
        src='/img/login/bg-login.jpg'
        alt='Logo'
        fill
        className='absolute top-0 left-0 w-full h-full object-cover object-center '
      />
      <div className='container h-full border-x bg-neutral-50  border-neutral-300 md:mx-10'>
        <div className='grid grid-rows-5 grid-cols-1 lg:grid-rows-1 lg:grid-cols-5  h-full'>
          <div className='col-span-3 row-span-1 lg:col-span-1 flex justify-center-safe'>
            <div className='block'>
              <LoginLogo />
            </div>
          </div>

          <div className='col-span-2 row-span-4 lg:col-span-4 flex items-center justify-center z-10 bg-neutral-50 dark:bg-neutral-800 h-2/3 self-center rounded shadow-2xl'>
            <h1>Teste</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
