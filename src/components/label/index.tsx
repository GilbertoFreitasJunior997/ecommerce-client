"use client";

import { cn } from "@/lib/utils/string";
import * as LabelPrimitive from "@radix-ui/react-label";
import { labelVariants } from "./consts";
import type { LabelProps } from "./types";

export const Label = ({ className, ref, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;
