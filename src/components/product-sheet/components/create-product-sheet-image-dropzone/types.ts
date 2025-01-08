import type { DropzoneRef } from "@/components/dropzone/types";
import type { Ref } from "react";

export type ProductSheetImageDropzoneProps = {
  defaultImage: string | undefined;
  onDefaultImageChange: (newDefaultImage: string | undefined) => void;
  ref?: Ref<DropzoneRef>;
};
