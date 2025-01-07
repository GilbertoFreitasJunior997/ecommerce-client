import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const onError = (error: unknown) => {
  if (!error) {
    toast.error("Something went wrong! Please try again.");
    return;
  }

  if (typeof error === "object") {
    if ("message" in error) {
      toast.error(String(error.message));
      return;
    }
  }

  toast.error(String(error));
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError,
  }),
  mutationCache: new MutationCache({
    onError,
  }),
});
