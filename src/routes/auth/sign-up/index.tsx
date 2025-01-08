import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { trpc } from "@/lib/trpc";
import { useSignIn } from "@/lib/utils/auth.utils";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ShoppingBagIcon } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/auth/sign-up/")({
  component: RouteComponent,
});

const signUpFormDataSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
type SignUpFormData = z.infer<typeof signUpFormDataSchema>;

function RouteComponent() {
  const form = useZodForm({
    schema: signUpFormDataSchema,
  });
  const { mutateAsync: signUp, isPending } = trpc.auth.signUp.useMutation();
  const { handleSignIn } = useSignIn();

  const handleSubmit = async (data: SignUpFormData) => {
    const user = await signUp(data);
    handleSignIn(user);
  };

  return (
    <>
      <section className="w-full mb-4 flex flex-col items-center justify-center">
        <div className=" bg-primary rounded-full p-2 w-min mb-4">
          <ShoppingBagIcon className="size-8 fill-white" />
        </div>

        <h1 className="text-3xl font-bold mb-3 w-max"> Create an account </h1>
        <h4 className="text-muted-foreground mb-3 text-sm">
          Start shopping with us!
        </h4>
      </section>

      <Form
        form={form}
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          form={form}
        />
        <Input
          name="email"
          form={form}
        />
        <Input
          name="password"
          form={form}
          type="password"
        />

        <Button
          className="w-full"
          size="lg"
          type="submit"
          isLoading={isPending}
        >
          Create Account
        </Button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/sign-in"
            className="text-violet-800 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </Form>
    </>
  );
}
