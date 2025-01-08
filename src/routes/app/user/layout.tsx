import { useAuth } from "@/lib/stores/use-auth";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/app/user")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useAuth((s) => s.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return;
    }

    toast.info("You need to sign in to access this page!");

    navigate({
      to: "/app",
    });
  }, [navigate, user]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
