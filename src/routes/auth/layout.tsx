import { AuthLayout } from "@/components/auth-layout";
import { useAuth } from "@/lib/stores/use-auth";
import { useQueryClient } from "@tanstack/react-query";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  beforeLoad: () => {
    const user = useAuth.getState().user;

    if (!user) {
      return;
    }

    throw redirect({
      to: "/app",
    });
  },
});

function RouteComponent() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.clear();
  }, [queryClient]);

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
