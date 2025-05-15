"use client";

import { T } from "@/utils/types";

export default function RootLayout({ children }: T["Node"]): T["Children"] {
  return <>{children}</>;
}
