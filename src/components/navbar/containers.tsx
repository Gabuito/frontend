import { JSX, ReactNode } from "react";
type Internal = Readonly<{ children: ReactNode }>;
type Component = JSX.Element;

export function LeftNavbarContainer({ children }: Internal): Component {
  return (
    <div className='flex flex-row items-center-safe gap-3 sm:gap-4 w-1/2 sm:w-1/4'>
      {children}
    </div>
  );
}

export function CenterNavbarContainer({ children }: Internal): Component {
  return (
    <div className='hidden lg:flex items-center-safe justify-center-safe sm:w-1/2'>
      {children}
    </div>
  );
}

export function RightNavbarContainer({ children }: Internal): Component {
  return (
    <div className='flex items-center-safe justify-end-safe navbar-icon gap-2 sm:gap-6 mr-1 w-1/2 sm:w-1/4'>
      {children}
    </div>
  );
}

export function SubNavbarContainer({ children }: Internal): Component {
  return (
    <div className='flex lg:hidden items-center-safe justify-center-safe gap-2 h-1/3 bg-white'>
      {children}
    </div>
  );
}
