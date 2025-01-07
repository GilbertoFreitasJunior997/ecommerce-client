import type { User } from "@/models/user.model";

export type UseAuthProps = {
  user?: User;
};

export type UseAuthActions = {
  setUser: (user?: User) => void;
};

export type UseAuth = UseAuthProps & UseAuthActions;
