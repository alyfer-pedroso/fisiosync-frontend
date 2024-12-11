import { useCallback } from "react";

import { useApi, useMainContext } from "@/data/hooks";
import { GetError } from "@/data/constants";
import { UserModel } from "@/data/models";

export function User() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const GetUserData = useCallback(
    async (id: number, token?: string): Promise<UserModel.IUser | undefined> => {
      try {
        const { data } = await api.get(`/get-users/${id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        if (data.error) {
          toast({ type: "error", text: data.data });
          return;
        }

        return data.data;
      } catch (error) {
        toast({ type: "error", text: GetError(error) });
      }
    },
    [api, toast]
  );

  return { GetUserData };
}
