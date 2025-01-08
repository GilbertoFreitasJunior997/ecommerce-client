import type { ReactNode } from "@tanstack/react-router";
import type { Ref } from "react";
import type {
  DropzoneProps as BaseDropzoneProps,
  DropzoneState as BaseDropzoneState,
} from "react-dropzone";

export type DropzoneState = BaseDropzoneState;

export type DropzoneFileAction = (file: File) => ReactNode;

export type DropzoneRef = {
  getFiles: () => File[];
};

export type DropzoneProps = Omit<BaseDropzoneProps, "children"> & {
  fileActions?: DropzoneFileAction;
  containerClassName?: string;
  dropZoneClassName?: string;
  showFilesList?: boolean;
  showErrorMessage?: boolean;
  onDropSuccess?: (files: File[]) => void;
  onFileRemove?: (removedFile: File, allFiles: File[]) => void;
  ref?: Ref<DropzoneRef>;
};
