import { Slot } from "@radix-ui/react-slot";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import type { FormControlProps } from "./types";

export const FormControl = ({ ref, ...props }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
FormControl.displayName = "FormControl";
