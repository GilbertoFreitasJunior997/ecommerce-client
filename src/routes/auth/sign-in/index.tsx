import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { trpc } from "@/lib/trpc";
import { useSignIn } from "@/lib/utils/auth.utils";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ShoppingBagIcon } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/auth/sign-in/")({
  component: RouteComponent,
});

const signInFormDataSchema = z.object({
  emailOrName: z.string(),
  password: z.string().min(6),
});
type SignInFormData = z.infer<typeof signInFormDataSchema>;

function RouteComponent() {
  const form = useZodForm({
    schema: signInFormDataSchema,
  });
  const { mutateAsync: signIn, isPending } = trpc.auth.signIn.useMutation();
  const { handleSignIn } = useSignIn();

  const handleSubmit = async (data: SignInFormData) => {
    const user = await signIn(data);
    handleSignIn(user);
  };

  return (
    <>
      <section className="w-full mb-4 flex flex-col items-center justify-center">
        <div className=" bg-primary rounded-full p-2 w-min mb-4">
          <ShoppingBagIcon className="size-8 fill-white" />
        </div>

        <h1 className="text-3xl font-bold mb-3"> Sign in to your account </h1>
        <h4 className="text-muted-foreground mb-3 text-sm">
          Welcome back to DiverseBuy
        </h4>
      </section>

      <Form
        form={form}
        onSubmit={handleSubmit}
      >
        <Input
          name="emailOrName"
          form={form}
          label="Name or Email"
        />
        <Input
          name="password"
          type="password"
          form={form}
        />
        <Button
          className="w-full"
          size="lg"
          isLoading={isPending}
          type="submit"
        >
          Sign In
        </Button>
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/auth/sign-up"
            className="text-violet-800 hover:underline"
          >
            Sign up now!
          </Link>
        </p>
      </Form>
    </>
  );
}
