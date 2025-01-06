import { trpc } from "@/lib/trpc";
import type { PropsWithChildren } from "react";
import { queryClient } from "../query-client-provider/consts";
import { trpcClient } from "./consts";

export const TRPCProvider = ({ children }: PropsWithChildren) => (
  <trpc.Provider
    client={trpcClient}
    queryClient={queryClient}
  >
    {children}
  </trpc.Provider>
);
