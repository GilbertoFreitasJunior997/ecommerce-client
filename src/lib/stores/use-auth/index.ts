import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UseAuth } from "./types";

export const useAuth = create<UseAuth>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => set(() => ({ user })),
    }),
    {
      name: "user-store",
    },
  ),
);
