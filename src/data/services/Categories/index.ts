import { useCallback } from "react";

import { useApi, useMainContext } from "@/data/hooks";
import { GetError } from "@/data/constants";
import { CategoriesModel } from "@/data/models";

export function Categories() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const GetCategories = useCallback(async (): Promise<CategoriesModel.ICategory[] | undefined> => {
    try {
      const { data } = await api.get("/get-musical-genders");
      if (data.error) {
        toast({ type: "error", text: data.data });
        return;
      }
      return data.data;
    } catch (error) {
      toast({ type: "error", text: GetError(error) });
    }
  }, [api, toast]);

  return { GetCategories };
}
