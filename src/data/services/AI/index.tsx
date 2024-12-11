import { useCallback } from "react";

import { useApi, useMainContext } from "@/data/hooks";
import { GetError } from "@/data/constants";
import { MusicModel } from "@/data/models";

export function AI() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const GetMusicRecommendations = useCallback(async (id: number, max_results?: number): Promise<{ musics: MusicModel.IMusic[] } | undefined> => {
    try {
      const { data } = await api.get(`/gemini/get-music-recommendations-byuser/${id}${max_results ? `/${max_results}` : ""}`);
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
