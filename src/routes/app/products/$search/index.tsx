import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/products/$search/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { search } = Route.useParams();

  return <div>{search}</div>;
}
