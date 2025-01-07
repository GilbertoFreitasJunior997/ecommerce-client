import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
