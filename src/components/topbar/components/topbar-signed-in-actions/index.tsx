import { Button } from "@/components/button";
import { DropdownMenu } from "@/components/dropdown-menu";
import { useAuth } from "@/lib/stores/use-auth";
import { trpc } from "@/lib/trpc";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { User2Icon } from "lucide-react";
import { TopbarThemeSwitcher } from "../topbar-theme-switcher";

export const TopbarSignedInActions = () => {
  const { mutateAsync: signOff, isPending } = trpc.auth.signOff.useMutation();
  const queryClient = useQueryClient();
  const user = useAuth((s) => s.user);
  const setUser = useAuth((s) => s.setUser);

  if (!user) {
    return null;
  }

  const handleLogOff = async () => {
    await signOff();
    setUser(undefined);
    queryClient.clear();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild={true}>
        <Button
          title="Profile"
          size="icon"
          variant="outline"
          isLoading={isPending}
        >
          <User2Icon className="size-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-56"
        forceMount
      >
        <DropdownMenu.Label className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenu.Label>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>Orders</DropdownMenu.Item>
          <DropdownMenu.Item asChild={true}>
            <Link to="/app/user/products">My Products</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <TopbarThemeSwitcher />
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Item onSelect={handleLogOff}>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
