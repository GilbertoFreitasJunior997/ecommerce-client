import { createContext } from "react";
import type { FormFieldContextValue } from "./types";

export const formFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);
