import { Button } from "@/components/button";
import { Link } from "@tanstack/react-router";

export const TopbarSignedOffActions = () => {
  return (
    <>
      <Link to="/auth/sign-in">
        <Button
          size="sm"
          variant="outline"
        >
          Sign in
        </Button>
      </Link>

      <Link to="/auth/sign-up">
        <Button size="sm">Sign up</Button>
      </Link>
    </>
  );
};
