import { T } from "@/utils/types";

export default function ProductPage(): T["Element"] {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1 className='text-2xl font-bold'>Product Page</h1>
      <p className='mt-4 text-lg'>This is the product page.</p>
    </div>
  );
}
