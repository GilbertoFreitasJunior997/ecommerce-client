import type { Root } from "@radix-ui/react-label";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import type { labelVariants } from "./consts";

export type LabelProps = ComponentProps<typeof Root> &
  VariantProps<typeof labelVariants>;
