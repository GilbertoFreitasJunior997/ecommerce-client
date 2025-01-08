import type { OmitMerge } from "@/lib/types";
import type { InputHTMLAttributes, Ref } from "react";
import type { FieldValues } from "react-hook-form";
import type { InputDefaultProps } from "../form/types";

export type NumberInputFractionDigitsProps = {
  min?: number;
  max?: number;
};

export type NumberInputValueProps = {
  value?: number | undefined;
  onChange?: (value: number | undefined) => void;
};

export type NumberInputRef = HTMLInputElement;

export type NumberInputProps<TForm extends FieldValues> = OmitMerge<
  InputHTMLAttributes<HTMLInputElement>,
  NumberInputValueProps & InputDefaultProps<TForm>
> & {
  label?: string;
  isCurrency?: boolean;
  fractionDigits?: NumberInputFractionDigitsProps;
  ref?: Ref<NumberInputRef>;
};
