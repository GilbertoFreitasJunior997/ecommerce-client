import { Providers } from "@/components/providers";
import { RouterDevtools } from "@/components/router-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Providers>
        <Outlet />
        <RouterDevtools />
      </Providers>
    </>
  );
}
