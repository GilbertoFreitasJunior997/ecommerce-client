import type { HTMLAttributes, Ref } from "react";

export type FormItemRef = HTMLDivElement;

export type FormItemProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<FormItemRef>;
};
