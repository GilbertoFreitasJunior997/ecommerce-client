import { Label } from "@/components/label";
import { cn } from "@/lib/utils/string";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import type { FormLabelProps } from "./types";

export const FormLabel = ({ className, ref, ...props }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};
FormLabel.displayName = "FormLabel";
