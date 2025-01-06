import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "./consts";
import type { ButtonProps } from "./types";

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};
Button.displayName = "Button";
