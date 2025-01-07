import type { ReactNode } from "react";
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import type { InputDefaultProps } from "../../types";

export type FormInputBaseChildrenProps<TForm extends FieldValues> = {
  field: ControllerRenderProps<TForm>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TForm>;
};

export type FormInputBaseProps<TForm extends FieldValues> =
  InputDefaultProps<TForm> & {
    children: (props: Partial<FormInputBaseChildrenProps<TForm>>) => ReactNode;
  };
