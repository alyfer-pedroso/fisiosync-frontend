import { useCallback } from "react";

import { useApi, useMainContext } from "@/data/hooks";
import { GetError } from "@/data/constants";
import { MusicModel } from "@/data/models";

export function AI() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const GetMusicRecommendations = useCallback(async (id: number): Promise<{ musics: MusicModel.IMusic[] } | undefined> => {
    try {
      const { data } = await api.get(`/openai/get-music-recommendations-byuser/${id}`);
      if (data.error) {
        toast({ type: "error", text: data.data });
        return;
      }
      return data.data;
    } catch (error) {
      toast({ type: "error", text: GetError(error) });
    }
  }, []);

  return { GetMusicRecommendations };
}
