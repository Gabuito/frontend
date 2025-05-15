import { T } from "@/utils/types";

export function LeftNavbarContainer({ children }: T["Node"]): T["Element"] {
  return (
    <div className='flex flex-row items-center-safe gap-3 sm:gap-4 w-2/5 sm:w-1/4 ml-2'>
      {children}
    </div>
  );
}

export function CenterNavbarContainer({ children }: T["Node"]): T["Element"] {
  return (
    <div className='hidden lg:flex items-center-safe justify-center-safe lg:w-1/2'>
      {children}
    </div>
  );
}

export function RightNavbarContainer({ children }: T["Node"]): T["Element"] {
  return (
    <div className='flex items-center-safe justify-end navbar-icon mr-4 gap-6 sm:gap-6 w-full lg:w-1/4'>
      {children}
    </div>
  );
}

export function SubNavbarContainer({ children }: T["Node"]): T["Element"] {
  return (
    <div className='flex lg:hidden items-center-safe justify-center-safe gap-2 h-1/3 bg-neutral-50 border-t border-neutral-300 dark:border-neutral-700'>
      {children}
    </div>
  );
}
