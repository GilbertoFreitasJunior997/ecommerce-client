import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, Ref } from "react";
import type { buttonVariants } from "./consts";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    ref?: Ref<HTMLButtonElement>;
  };
