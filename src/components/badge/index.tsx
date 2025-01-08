import { cn } from "@/lib/utils/string";
import { badgeVariants } from "./consts";
import type { BadgeProps } from "./types";

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};
