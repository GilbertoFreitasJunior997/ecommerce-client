import { trpc } from "@/lib/trpc";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { data } = trpc.greeting.useQuery();
  console.info(data);

  return <div>Hello world</div>;
}
