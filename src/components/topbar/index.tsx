import { useAuth } from "@/lib/stores/use-auth";
import { TopbarSignedInActions } from "./components/topbar-signed-in-actions";
import { TopbarSignedOffActions } from "./components/topbar-signed-off-actions";

export const Topbar = () => {
  const user = useAuth((s) => s.user);

  return (
    <header className="border-b py-2 px-16">
      <nav className="flex justify-between items-center">
        <span>A</span>
        <span>B</span>

        <section className="space-x-2">
          {user ? <TopbarSignedInActions /> : <TopbarSignedOffActions />}
        </section>
      </nav>
    </header>
  );
};
