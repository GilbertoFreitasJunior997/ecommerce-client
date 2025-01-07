import { cn } from "@/lib/utils/string";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import type { FormDescriptionProps } from "./types";

export const FormDescription = ({
  className,
  ref,
  ...props
}: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
};
FormDescription.displayName = "FormDescription";
