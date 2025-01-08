import { cn } from "@/lib/utils/string";
import { ImageIcon, TrashIcon, UploadIcon } from "lucide-react";
import { useImperativeHandle, useState } from "react";
import { type FileRejection, useDropzone } from "react-dropzone";
import { Button } from "../button";
import type { DropzoneProps } from "./types";

export const Dropzone = ({
  containerClassName,
  dropZoneClassName,
  showFilesList = true,
  showErrorMessage = true,
  fileActions,
  onDropSuccess,
  onFileRemove,
  ref,
  ...props
}: DropzoneProps) => {
  const { maxSize, maxFiles } = props;

  const [files, setFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleDrop = (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
  ) => {
    for (const file of acceptedFiles) {
      if (maxFiles && files.length >= maxFiles) {
        setErrorMessage(`There are already ${maxFiles} files.`);
        return;
      }

      const hasSameNameFile = !!files.find(
        (addedFile) => addedFile.name === file.name,
      );
      if (hasSameNameFile) {
        setErrorMessage(`There is already a file named ${file.name}`);
        return;
      }
    }

    if (acceptedFiles) {
      setFiles((oldFiles) => [...oldFiles, ...acceptedFiles]);
      onDropSuccess?.(acceptedFiles);
    }

    if (fileRejections.length === 0) {
      setErrorMessage("");
      return;
    }

    const firstUploadError = fileRejections[0].errors?.[0]?.message ?? "";
    let errorMessage = `Could not upload ${fileRejections[0].file.name}`;
    if (fileRejections.length > 1) {
      errorMessage += ` and ${fileRejections.length - 1} other files.`;
    }
    if (firstUploadError) {
      errorMessage += ` (${firstUploadError})`;
    }

    setErrorMessage(errorMessage);
  };

  const handleDeleteFile = (removedFile: File) => {
    const newFiles = files.filter((file) => file.name !== removedFile.name);

    setFiles(newFiles);
    onFileRemove?.(removedFile, newFiles);

    setErrorMessage("");
  };

  const dropzone = useDropzone({
    ...props,
    onDrop: handleDrop,
  });

  useImperativeHandle(ref, () => ({
    getFiles: () => files,
  }));

  return (
    <div className={cn("flex flex-col gap-2", containerClassName)}>
      <div
        {...dropzone.getRootProps()}
        className={cn(
          "flex justify-center items-center w-full h-32 border-dashed border-2 border-muted-foreground/20 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all select-none cursor-pointer",
          dropZoneClassName,
        )}
      >
        <input {...dropzone.getInputProps()} />
        {dropzone.isDragAccept ? (
          <div className="text-sm font-medium">Drop your files here!</div>
        ) : (
          <div className="flex items-center flex-col gap-1.5">
            <div className="flex items-center flex-row gap-0.5 text-sm font-medium">
              <UploadIcon className="mr-2 size-4" /> Upload files
            </div>

            {maxFiles && (
              <div className="text-xs text-gray-400 font-medium">
                Max. files: {maxFiles}
              </div>
            )}

            {maxSize && (
              <div className="text-xs text-gray-400 font-medium">
                Max. file size: {(maxSize / (1024 * 1024)).toFixed(2)} MB
              </div>
            )}
          </div>
        )}
      </div>

      {errorMessage && (
        <span className="text-xs text-destructive mt-3">{errorMessage}</span>
      )}

      {showFilesList && !!files.length && (
        <div className="flex flex-col gap-2 w-full mt-2">
          <div className="w-full">
            {files.map((file) => (
              <div
                key={file.name}
                className="flex justify-between items-center flex-row w-full h-16 mt-2 px-4 border-solid border-2 border-muted-foreground/20 rounded-lg shadow-sm"
              >
                <div className="flex items-center flex-row gap-4 h-full">
                  <ImageIcon className="text-primary size-6" />

                  <div className="flex flex-col gap-0">
                    <div className="text-[0.85rem] font-medium leading-snug">
                      {file.name.split(".").slice(0, -1).join(".")}
                    </div>
                    <div className="text-[0.7rem] text-muted-foreground leading-tight">
                      .{file.name.split(".").pop()} •{" "}
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </div>
                  </div>
                </div>

                <section className="flex gap-2">
                  {!!fileActions && fileActions(file)}
                  <Button
                    title="Remove file"
                    onClick={() => handleDeleteFile(file)}
                    size="icon"
                    variant="outline"
                  >
                    <TrashIcon className="size-4" />
                  </Button>
                </section>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
