import { createContext } from "react";
import type { FormItemContextValue } from "./types";

export const formItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
