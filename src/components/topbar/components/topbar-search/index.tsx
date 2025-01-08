import { Input } from "@/components/input";
import { useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";

export const TopbarSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search?.length) {
      toast.warning("Please provide an valid search");
      return;
    }

    navigate({
      to: "/app/products/$search",
      params: {
        search,
      },
    });
  };

  return (
    <div className="w-[400px]">
      <form onSubmit={handleSubmit}>
        <Input
          name="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
