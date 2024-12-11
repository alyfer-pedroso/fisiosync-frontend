import { useCallback } from "react";

import { useApi, useMainContext } from "@/data/hooks";
import { GetError } from "@/data/constants";

export function Music() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const ToMp3 = useCallback(
    async (source: string): Promise<{ url: string } | undefined> => {
      try {
        const { data } = await api.get(`/convert-to-mp3?url=${source}`);
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

  return { ToMp3 };
}
