import { appConfig } from "@/lib/app-config";
import { useAuth } from "@/lib/stores/use-auth";
import { Link } from "@tanstack/react-router";
import { TopbarSearch } from "./components/topbar-search";
import { TopbarSignedInActions } from "./components/topbar-signed-in-actions";
import { TopbarSignedOffActions } from "./components/topbar-signed-off-actions";

export const Topbar = () => {
  const user = useAuth((s) => s.user);

  return (
    <header className="border-b py-2 px-16">
      <nav className="flex justify-between items-center">
        <h1>
          <Link to="/app">{appConfig.name}</Link>
        </h1>

        <TopbarSearch />

        <section className="flex items-center gap-2 justify-center">
          {user ? <TopbarSignedInActions /> : <TopbarSignedOffActions />}
        </section>
      </nav>
    </header>
  );
};
