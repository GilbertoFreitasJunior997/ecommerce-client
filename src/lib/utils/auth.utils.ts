import { useAuth } from "@/lib/stores/use-auth";
import type { User } from "@/models/user.model";
import { useNavigate } from "@tanstack/react-router";

export const useSignIn = () => {
  const setUser = useAuth((s) => s.setUser);
  const navigate = useNavigate();

  const handleSignIn = (user: User) => {
    setUser(user);
    navigate({
      to: "/app",
    });
  };

  return {
    handleSignIn,
  };
};
