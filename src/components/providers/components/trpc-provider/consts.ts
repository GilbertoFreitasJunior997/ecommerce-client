import { trpc } from "@/lib/trpc";
import { httpBatchLink } from "@trpc/client";

const trpcServerURL = `${import.meta.env.VITE_SERVER_URL ?? ""}/trpc`;

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: trpcServerURL,
      fetch: (url, options) =>
        fetch(url, { ...options, credentials: "include" }),
    }),
  ],
});
