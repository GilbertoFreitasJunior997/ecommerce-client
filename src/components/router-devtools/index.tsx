import { Suspense, lazy } from "react";

const RouterDevtoolsLazy = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )
  : () => null;

export const RouterDevtools = () => {
  return (
    <Suspense>
      <RouterDevtoolsLazy position="bottom-right" />
    </Suspense>
  );
};
