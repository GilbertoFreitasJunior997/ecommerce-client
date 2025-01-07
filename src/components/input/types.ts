import type { OmitMerge } from "@/lib/types";
import type { InputHTMLAttributes, Ref } from "react";
import type { FieldValues } from "react-hook-form";
import type { InputDefaultProps } from "../form/types";

export type InputRef = HTMLInputElement;
export type InputProps<TForm extends FieldValues> = OmitMerge<
  InputHTMLAttributes<HTMLInputElement>,
  InputDefaultProps<TForm>
> & {
  label?: string;
  ref?: Ref<InputRef>;
};
