import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import { debounce } from "lodash";

import { useUserData, useStorage, useMainContext } from "@/data/hooks";
import { AI } from "@/data/services";
import { MusicModel } from "@/data/models";

export function useHome() {
  const { userData } = useUserData();
  const { GetMusicRecommendations } = AI();
  const { getData, setData } = useStorage();
  const { handleLoading, selectMusic, toast } = useMainContext();

  const [sliderValue, setSliderValue] = useState(100);
  const [musics, setMusics] = useState<MusicModel.IMusic[]>([]);
  const [id, setId] = useState(userData.id ?? 0);

  const handleSliderChange = useCallback(
    debounce((value) => {
      setSliderValue(value);
    }, 100),
    []
  );

  const handleDecrease = () => {
    setSliderValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handleIncrease = () => {
    setSliderValue((prevValue) => Math.min(prevValue + 1, 200));
  };

  const getMusics = async () => {
    if (id) {
      (async () => {
        const storageMusics = JSON.parse((await getData("musics_recommendations")) ?? "[]");
        if (storageMusics.length > 0) {
          setMusics(storageMusics);
          return;
        }
        toast({ type: "success", text: "Nossa IA está procurando as melhores músicas para você!" });
        handleLoading(true);
        const musicsData = await GetMusicRecommendations(id);
        if (musicsData?.musics) {
          setMusics(musicsData.musics);
          await setData("musics_recommendations", JSON.stringify(musicsData.musics));
        }
        handleLoading(false);
      })();
    }
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
    }, [])
  );

  return { userData, handleSliderChange, sliderValue, handleDecrease, handleIncrease, musics, selectMusic };
}
