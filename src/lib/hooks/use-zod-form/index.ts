import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type ZodSchema, z } from "zod";
import type { UseZodFormOptions } from "./types";
import { zodErrorMap } from "./zod-error-map";

z.setErrorMap(zodErrorMap);

export const useZodForm = <TSchema extends ZodSchema>({
  schema,
  defaultValues,
}: UseZodFormOptions<TSchema>) => {
  return useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });
};
