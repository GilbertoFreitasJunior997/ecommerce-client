import { cn } from "@/lib/utils/string";
import { type FC, useId } from "react";
import { formItemContext } from "../../context/form-item-context";
import type { FormItemProps } from "./types";

export const FormItem = ({ className, ref, ...props }: FormItemProps) => {
  const id = useId();

  return (
    <formItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn("space-y-2 p-px grow w-full overflow-hidden", className)}
        {...props}
      />
    </formItemContext.Provider>
  );
};
(FormItem as FC).displayName = "FormItem";
