import { cn } from "@/lib/utils/string";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import type { FormMessageProps } from "./types";

export const FormMessage = ({
  className,
  children,
  ref,
  ...props
}: FormMessageProps) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] text-destructive font-semibold", className)}
      {...props}
    >
      {body}
    </p>
  );
};
FormMessage.displayName = "FormMessage";
