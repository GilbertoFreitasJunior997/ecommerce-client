import type { PropsWithChildren } from "react";
import { Footer } from "../footer";
import { Topbar } from "../topbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto flex flex-col">
      <Topbar />
      <main className="grow px-2 md:px-32 lg:px-64 py-4">{children}</main>
      <Footer />
    </div>
  );
};
