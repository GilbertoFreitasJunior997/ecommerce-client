import { QueryClientProvider as BaseQueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { queryClient } from "./consts";

export const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <BaseQueryClientProvider client={queryClient}>
    {children}
  </BaseQueryClientProvider>
);
