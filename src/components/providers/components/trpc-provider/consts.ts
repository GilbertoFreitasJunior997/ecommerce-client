import { trpc } from "@/lib/trpc";
import { httpBatchLink } from "@trpc/client";

const trpcServerURL = import.meta.env.VITE_TRPC_SERVER_URL ?? "";

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: trpcServerURL,
    }),
  ],
});
