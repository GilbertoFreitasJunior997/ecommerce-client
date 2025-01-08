import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ProductionCard } from "@/components/product-card";
import { ProductSheet } from "@/components/product-sheet";
import { trpc } from "@/lib/trpc";
import { getSearchString } from "@/lib/utils/string";
import type { Product } from "@/models/product.model";
import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/app/user/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: products } = trpc.products.getListData.useQuery<Product[]>();
  const [search, setSearch] = useState("");
  const normalizedSearch = useMemo(() => getSearchString(search), [search]);

  const filteredProducts = useMemo(() => {
    if (!search || !products) {
      return products ?? [];
    }

    return products?.filter((product) => {
      const searchName = getSearchString(product.name);

      const nameMatch = searchName.includes(normalizedSearch);
      if (nameMatch) {
        return true;
      }

      const searchSKU = product.sku ? getSearchString(product?.sku) : "";
      const SKUMatch = searchSKU ? searchSKU.includes(normalizedSearch) : false;
      if (SKUMatch) {
        return true;
      }

      return false;
    });
  }, [normalizedSearch, products, search]);

  const [editingId, setEditingId] = useState<number>();

  return (
    <div className="space-y-4">
      <section className="flex items-center justify-between">
        <h4 className="text-3xl font-semibold">My Products</h4>

        <section>
          <ProductSheet
            trigger={
              <Button className="gap-2">
                <PlusIcon className="size-4" />
                <span> List Product </span>
              </Button>
            }
          />
        </section>
      </section>

      <section className="flex w-full">
        <section className="grow">
          <Input
            name="my-products-search"
            placeholder="Search by name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>
      </section>

      <section className="grid grid-cols-6 gap-4">
        {filteredProducts?.map((product) => (
          <ProductionCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </div>
  );
}
