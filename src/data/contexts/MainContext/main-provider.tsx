import { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

import { usePlayAudio } from "@/data/hooks";
import { Music } from "@/data/services";
import { ToastModel, MainContextModel, MusicModel, PlayerModel } from "@/data/models";
import { Toast } from "@/components";

import { MainContext } from "./main-context";

const initialMusic = { title: "", link_youtube: "", thumbnail: "", bpm: 0 };
const initialPlayer = { link_mp3: "", current_time: 0, max_time: 0, paused: true, title: "" };

export function MainProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { ToMp3 } = Music();

  const toastRef = useRef<ToastModel.IToastRef>(null);
  const playerData = useRef<PlayerModel.IPlayer>(initialPlayer);

  const [loading, setLoading] = useState(false);
  const [onConfig, setOnConfig] = useState(false);
  const [appState, setAppState] = useState<MainContextModel.TAppState>("search");
  const [currentMusic, setCurrentMusic] = useState<MusicModel.IMusic>(initialMusic);
  const [playing, setPlaying] = useState(false);
  const [withBpm, setWithBpm] = useState(false);

  const { clearAudio, playAudio } = usePlayAudio();

  const handleLoading = (value?: boolean) => {
    setLoading((state) => value ?? !state);
  };

  const handleConfig = (value?: boolean) => {
    setOnConfig((state) => value ?? !state);
  };

  const handleAppState = (value: MainContextModel.TAppState) => {
    setAppState(value);
  };

  const toast = ({ type, text, duration }: ToastModel.IToast) => {
    if (toastRef.current) {
      toastRef.current.show({ type, text, duration });
    }
  };

  const selectMusic = async ({ ...props }: MusicModel.IMusic) => {
    if (playing) {
      handleLoading(true);
      setPlaying(false);
      await playAudio(playerData.current.link_mp3, true);
      await clearAudio();
      handleLoading(false);
    }
    playerData.current = { ...initialPlayer };
    setCurrentMusic({ ...props });
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("@/fonts/inter/Inter_18pt-Black.ttf"),
    "Inter-BlackItalic": require("@/fonts/inter/Inter_18pt-BlackItalic.ttf"),
    "Inter-Bold": require("@/fonts/inter/Inter_18pt-Bold.ttf"),
    "Inter-BoldItalic": require("@/fonts/inter/Inter_18pt-BoldItalic.ttf"),
    "Inter-ExtraBold": require("@/fonts/inter/Inter_18pt-ExtraBold.ttf"),
    "Inter-ExtraBoldItalic": require("@/fonts/inter/Inter_18pt-ExtraBoldItalic.ttf"),
    "Inter-ExtraLight": require("@/fonts/inter/Inter_18pt-ExtraLight.ttf"),
    "Inter-ExtraLightItalic": require("@/fonts/inter/Inter_18pt-ExtraLightItalic.ttf"),
    "Inter-Italic": require("@/fonts/inter/Inter_18pt-Italic.ttf"),
    "Inter-Light": require("@/fonts/inter/Inter_18pt-Light.ttf"),
    "Inter-LightItalic": require("@/fonts/inter/Inter_18pt-LightItalic.ttf"),
    "Inter-Medium": require("@/fonts/inter/Inter_18pt-Medium.ttf"),
    "Inter-MediumItalic": require("@/fonts/inter/Inter_18pt-MediumItalic.ttf"),
    "Inter-Regular": require("@/fonts/inter/Inter_18pt-Regular.ttf"),
    "Inter-SemiBold": require("@/fonts/inter/Inter_18pt-SemiBold.ttf"),
    "Inter-SemiBoldItalic": require("@/fonts/inter/Inter_18pt-SemiBoldItalic.ttf"),
    "Inter-Thin": require("@/fonts/inter/Inter_18pt-Thin.ttf"),
    "Inter-ThinItalic": require("@/fonts/inter/Inter_18pt-ThinItalic.ttf"),
  });

  const loadMusic = async () => {
    handleLoading(true);
    setPlaying(false);
    const data = await ToMp3(currentMusic.link_youtube);
    if (data?.url) {
      // const size: number = await getAudioSize(data.url);
      const size = 0;
      playerData.current = { link_mp3: data.url, current_time: 0, max_time: size ?? 0, paused: true, title: currentMusic.title };
    }
    setAppState("player");
    router.push("/music");
    handleLoading(false);
  };

  useEffect(() => {
    if (currentMusic.title) {
      loadMusic();
      return;
    }
    setAppState("search");
  }, [currentMusic.title]);

  return (
    <MainContext.Provider
      value={{
        loading,
        handleLoading,
        fontsLoaded,
        toast,
        onConfig,
        handleConfig,
        appState,
        handleAppState,
        currentMusic,
        selectMusic,
        playerData,
        playing,
        setPlaying,
        withBpm,
        setWithBpm,
      }}
    >
      {fontsLoaded && <Toast ref={toastRef} />}
      {children}
    </MainContext.Provider>
  );
}
