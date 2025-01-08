import { Button } from "@/components/button";
import { Dropzone } from "@/components/dropzone";
import { megabyteToByte } from "@/lib/utils/number";
import { cn } from "@/lib/utils/string";
import { StarIcon } from "lucide-react";
import type { ProductSheetImageDropzoneProps } from "./types";

type DefaultImageButtonProps = ProductSheetImageDropzoneProps & {
  file: File;
};

const DefaultImageButton = ({
  file,
  defaultImage,
  onDefaultImageChange,
}: DefaultImageButtonProps) => {
  const isDefault = file.name === defaultImage;

  const handleSetDefaultImage = (file: File) => {
    onDefaultImageChange(file.name);
  };

  return (
    <>
      <Button
        title={isDefault ? "Default image" : "Set image as default"}
        onClick={() => handleSetDefaultImage(file)}
        size="icon"
        variant="outline"
      >
        <StarIcon
          className={cn(
            "size-4",
            isDefault ? "text-orange-500 fill-orange-500" : "",
          )}
        />
      </Button>
    </>
  );
};

export const ProductSheetImageDropzone = ({
  defaultImage,
  onDefaultImageChange,
  ref,
}: ProductSheetImageDropzoneProps) => {
  const handleImageDropSuccess = (files: File[]) => {
    if (defaultImage || !files.length) {
      return;
    }

    onDefaultImageChange(files[0].name);
  };

  const handleImageRemove = (removedFile: File, allFiles: File[]) => {
    const hasRemovedDefault = removedFile.name === defaultImage;

    if (hasRemovedDefault) {
      onDefaultImageChange(allFiles[0]?.name);
    }
  };

  return (
    <Dropzone
      ref={ref}
      maxSize={megabyteToByte(1)}
      maxFiles={3}
      fileActions={(file) => (
        <DefaultImageButton
          file={file}
          defaultImage={defaultImage}
          onDefaultImageChange={onDefaultImageChange}
        />
      )}
      accept={{
        "image/*": [".png", ".jpeg", ".jpg"],
      }}
      onDropSuccess={handleImageDropSuccess}
      onFileRemove={handleImageRemove}
    />
  );
};
