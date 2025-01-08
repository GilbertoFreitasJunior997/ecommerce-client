import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { trpc } from "@/lib/trpc";
import { EditIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";
import { currencyFormatter } from "../number-input/consts";
import type { ProductCardProps } from "./types";

export const ProductionCard = ({ product }: ProductCardProps) => {
  const { id, name, description, images, sku, stock, price } = product;

  const queryCache = trpc.useUtils();

  const { mutateAsync: deleteProduct, isPending: isDeletingProduct } =
    trpc.products.delete.useMutation();

  const handleDelete = async () => {
    await deleteProduct({
      id,
    });

    queryCache.products.invalidate();

    toast.success("Product deleted");
  };

  const displayPrice = currencyFormatter.format(Number.parseFloat(price));
  const hasLowStock = stock && stock <= 10;

  return (
    <Card.Root className="col-span-6 md:col-span-3 xl:col-span-2">
      <Card.Header className="p-0">
        <section className="relative">
          <img
            src={images[0].url}
            alt="Product display"
            className="object-cover w-full h-[20rem] rounded-t-md mb-3 grid place-content-center"
          />

          {!!stock && (
            <Badge
              variant={hasLowStock ? "destructive" : "secondary"}
              className="absolute top-2 right-2"
            >
              {hasLowStock ? "Low Stock" : "In Stock"} ({stock})
            </Badge>
          )}
        </section>

        <section className="px-2">
          <Card.Title className="justify-between flex items-center">
            <span>{name}</span>

            <span className="">{displayPrice}</span>
          </Card.Title>
          <Card.Description>{description}</Card.Description>
        </section>
      </Card.Header>

      <Card.Footer className="justify-between px-2 mt-2">
        <section className="text-sm text-muted-foreground">
          {!!sku && <span> SKU: {sku} </span>}
        </section>

        <section className="space-x-1">
          <Button
            variant="outline"
            size="icon"
            disabled={isDeletingProduct}
          >
            <EditIcon className="size-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="text-destructive"
            isLoading={isDeletingProduct}
            onClick={handleDelete}
          >
            <TrashIcon className="size-4" />
          </Button>
        </section>
      </Card.Footer>
    </Card.Root>
  );
};
