import type { HTMLAttributes, Ref } from "react";

export type FormDescriptionRef = HTMLParagraphElement;
export type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  ref?: Ref<FormDescriptionRef>;
};
