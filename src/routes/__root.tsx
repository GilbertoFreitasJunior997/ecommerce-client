import { Providers } from "@/components/providers";
import { RouterDevtools } from "@/components/router-devtools";
import { Sonner } from "@/components/sonner";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Providers>
        <Outlet />
        <Sonner />
        <RouterDevtools />
      </Providers>
    </>
  );
}
