import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "./components/query-client-provider";
import { TRPCProvider } from "./components/trpc-provider";

export const Providers = ({ children }: PropsWithChildren) => (
  <TRPCProvider>
    <QueryClientProvider>{children}</QueryClientProvider>
  </TRPCProvider>
);
