import { Button } from "@/components/button";
import { useAuth } from "@/lib/stores/use-auth";
import { trpc } from "@/lib/trpc";

export const TopbarSignedInActions = () => {
  const { mutateAsync: signOff, isPending } = trpc.auth.signOff.useMutation();
  const setUser = useAuth((s) => s.setUser);

  const handleLogOff = async () => {
    await signOff();
    setUser(undefined);
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleLogOff}
      isLoading={isPending}
    >
      Logoff
    </Button>
  );
};
