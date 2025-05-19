import { T } from "@/utils/types";

import InputCustomSearch from "./components/input";

export default function CenterContent(): T["Element"] {
  return (
    <>
      <InputCustomSearch />
      <div className='flex flex-row w-1/6 items-center-safe justify-center-safe text-zinc-700 dark:text-neutral-50 gap-1 border-2 border-zinc-400/30 rounded py-2 px-4 cursor-pointer hover:bg-zinc-200'>
        <span className='material-symbols-outlined flex items-center justify-center search-icon cursor-pointer -ml-2'>
          location_on
        </span>
        <span className='hidden xl:block text-lg font-medium'>Brasil</span>
      </div>
    </>
  );
}
