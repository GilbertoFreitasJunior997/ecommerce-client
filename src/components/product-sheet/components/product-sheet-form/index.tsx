import { Button } from "@/components/button";
import type { DropzoneRef } from "@/components/dropzone/types";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { NumberInput } from "@/components/number-input";
import { Sheet } from "@/components/sheet";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { trpc } from "@/lib/trpc";
import type { UploadRouter } from "@server";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { genUploader } from "uploadthing/client";
import { z } from "zod";
import { ProductSheetImageDropzone } from "../create-product-sheet-image-dropzone";
import { PRODUCT_SHEET_FORM_ID } from "./consts";
import type { ProductSheetFormProps } from "./types";

const productSheetFormSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  price: z.number(),
  stock: z.number().nullish(),
  sku: z.string().nullish(),
});
type ProductSheetForm = z.infer<typeof productSheetFormSchema>;

const { uploadFiles } = genUploader<UploadRouter>({
  package: "uploadthing/client",
  url: `${import.meta.env.VITE_SERVER_URL ?? ""}/api/uploadthing`,
});

export const ProductSheetForm = ({ onClose }: ProductSheetFormProps) => {
  const form = useZodForm({
    schema: productSheetFormSchema,
  });
  const queryCache = trpc.useUtils();
  const { mutateAsync: createProduct, isPending: isSubmitting } =
    trpc.products.create.useMutation();
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);

  const isPending = isSubmitting || isUploadingFiles;

  const [defaultImage, setDefaultImage] = useState<string>();
  const dropzoneRef = useRef<DropzoneRef>(null);

  const handleSubmit = async (data: ProductSheetForm) => {
    try {
      setIsUploadingFiles(true);

      const addedImages = dropzoneRef.current?.getFiles();

      if (!addedImages?.length) {
        toast.error("Please provide at least one image");
        return;
      }

      const uploadedFiles = await uploadFiles("productImageUploader", {
        files: addedImages,
        input: {
          token: Cookies.get("token") ?? "",
        },
      });

      await createProduct({
        ...data,
        images: uploadedFiles.map((image) => ({
          ...image,
          isDefault: image.name === defaultImage,
        })),
      });

      await queryCache.products.invalidate();

      onClose();
    } finally {
      setIsUploadingFiles(false);
    }
  };

  return (
    <>
      <Sheet.Body>
        <Form
          form={form}
          onSubmit={handleSubmit}
          id={PRODUCT_SHEET_FORM_ID}
        >
          <Input
            name="name"
            form={form}
          />
          <Input
            name="description"
            form={form}
          />
          <NumberInput
            name="price"
            form={form}
            isCurrency={true}
          />
          <NumberInput
            name="stock"
            form={form}
            fractionDigits={{
              max: 0,
            }}
          />
          <Input
            name="sku"
            label="SKU"
            form={form}
          />

          <ProductSheetImageDropzone
            defaultImage={defaultImage}
            onDefaultImageChange={(newDefaultImage) =>
              setDefaultImage(newDefaultImage)
            }
            ref={dropzoneRef}
          />
        </Form>
      </Sheet.Body>

      <Sheet.Footer>
        <Sheet.Close asChild={true}>
          <Button
            disabled={isPending}
            variant="outline"
          >
            Cancel
          </Button>
        </Sheet.Close>
        <Button
          type="submit"
          form={PRODUCT_SHEET_FORM_ID}
          isLoading={isPending}
        >
          Add product
        </Button>
      </Sheet.Footer>
    </>
  );
};
