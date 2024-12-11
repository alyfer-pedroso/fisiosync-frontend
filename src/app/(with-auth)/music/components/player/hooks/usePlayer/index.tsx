import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";

import { Music } from "@/data/services";
import { useMainContext, useStorage, usePlayAudio } from "@/data/hooks";

export function usePlayer() {
  const router = useRouter();

  const { ToMp3 } = Music();

  const { currentMusic, playerData, handleLoading, playing, setPlaying } = useMainContext();
  const { getData, setData } = useStorage();
  // const { getAudioSize, playAudio } = usePlayAudio();
  const { playAudio } = usePlayAudio();
  const [state, setState] = useState("");

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const convert = async () => {
    // handleLoading(true);
    // setIsPlaying(false);
    const data = await ToMp3(currentMusic.link_youtube);
    if (data?.url) {
      // const size: number = await getAudioSize(data.url);
      const size = 0;
      playerData.current = { link_mp3: data.url, current_time: 0, max_time: size ?? 0, paused: true, title: currentMusic.title };
    }
    return data?.url;
    // handleLoading(false);
  };

  const play = async () => {
    if (playerData.current.link_mp3) {
      setPlaying(!playing);
      await playAudio(playerData.current.link_mp3 ?? "");
    }
  };

  useEffect(() => {
    if (currentMusic.title) convert();
  }, [currentMusic.title]);

  return { currentMusic, playerData, play, playing };
}
