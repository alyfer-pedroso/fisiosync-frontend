import { Audio } from "expo-av";
import { useMainContext } from "../useMainContext";

export function usePlayAudio() {
  const { toast } = useMainContext();

  const playAudio = async (source: string) => {
    try {
      const { sound: playbackObject } = await Audio.Sound.createAsync({ uri: source });
      await playbackObject.playAsync();
      playbackObject.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          // aqui fica assim, mas ele realmente existe, tudo certo!
          playbackObject.unloadAsync();
        }
      });
      //   if (playbackObject) await playbackObject.unloadAsync();
    } catch (error) {
      toast({ type: "error", text: `${error}` });
    }
  };

  return { playAudio };
}
