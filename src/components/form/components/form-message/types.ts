import type { HTMLAttributes, Ref } from "react";

export type FormMessageRef = HTMLParagraphElement;
export type FormMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  ref?: Ref<FormMessageRef>;
};
