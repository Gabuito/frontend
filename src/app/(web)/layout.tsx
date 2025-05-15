"use client";

import Drawer from "@/components/drawer/drawer";
import Navbar from "@/components/navbar/navbar";
import { DrawerProvider } from "@/contexts/drawerContext";
import { T } from "@/utils/types";

export default function RootLayout({ children }: T["Node"]): T["Children"] {
  return (
    <DrawerProvider>
      <Navbar />
      <Drawer />
      {children}
    </DrawerProvider>
  );
}
