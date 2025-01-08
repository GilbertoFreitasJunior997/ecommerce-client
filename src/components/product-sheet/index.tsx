import { useState } from "react";
import { Sheet } from "../sheet";
import { ProductSheetForm } from "./components/product-sheet-form";
import type { ProductSheetProps } from "./types";

export const ProductSheet = ({ trigger }: ProductSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Sheet.Trigger asChild>{trigger}</Sheet.Trigger>

      <Sheet.Content className="md:max-w-lg">
        <Sheet.Header>
          <Sheet.Title> New Product </Sheet.Title>

          <Sheet.Description>Provide product details </Sheet.Description>
        </Sheet.Header>

        <ProductSheetForm onClose={handleClose} />
      </Sheet.Content>
    </Sheet.Root>
  );
};
