import { JSX } from "react";

export type Element = JSX.Element;
export type Children = React.ReactNode;

export type ReactNodeObj = {
  children: Children;
};

export interface T {
  Element: Element;
  Children: Children;
  Props: Omit<Children, "JSX.Element">;
  Theme: "" | "dark" | "system";
  ThemeType: Omit<T["Theme"], "system">;
  Node: ReactNodeObj;
}
