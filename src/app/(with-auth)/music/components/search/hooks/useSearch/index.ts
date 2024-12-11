import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "expo-router";

import { useUserData, useStorage, useMainContext } from "@/data/hooks";
import { AI, Categories } from "@/data/services";
import { CategoriesModel, MusicModel } from "@/data/models";

export function useSearch() {
  const { GetMusicRecommendations } = AI();
  const { GetCategories } = Categories();

  const { userData } = useUserData();
  const { getData, setData } = useStorage();
  const { handleLoading, selectMusic } = useMainContext();

  const [musics, setMusics] = useState<MusicModel.IMusic[]>([]);
  const [categories, setCategories] = useState<CategoriesModel.ICategory[]>([]);
  const [id, setId] = useState(userData.id ?? 0);

  const getMusics = async () => {
    if (id) {
      handleLoading(true);
      (async () => {
        const storageMusics = JSON.parse((await getData("musics_recommendations")) ?? "[]");
        if (storageMusics.length > 0) {
          setMusics(storageMusics);
          handleLoading(false);
          return;
        }
        const musicsData = await GetMusicRecommendations(id);
        if (musicsData?.musics) {
          setMusics(musicsData.musics);
          await setData("musics_recommendations", JSON.stringify(musicsData.musics));
        }
        handleLoading(false);
      })();
    }
  };

  const getCategories = async () => {
    handleLoading(true);
    const categories = await GetCategories();
    if (categories) setCategories(categories);
    handleLoading(false);
  };

  useEffect(() => {
    setId(userData.id);
  }, [userData.id]);

  useEffect(() => {
    getMusics();
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      getMusics();
      getCategories();
    }, [])
  );

  return { selectMusic, userData, musics, categories };
}
