import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { useMainContext } from "../useMainContext";

export function usePlayAudio() {
  const { toast } = useMainContext();
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playAudioOnce = async (source: string) => {
    try {
      const { sound: playbackObject } = await Audio.Sound.createAsync({ uri: source });
      await playbackObject.playAsync();
      playbackObject.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          // aqui fica assim, mas ele realmente existe, tudo certo!
          playbackObject.unloadAsync();
        }
      });
    } catch (error) {
      toast({ type: "error", text: `${error}` });
    }
  };

  const playAudio = async (source: string) => {
    try {
      if (!sound) {
        const { sound: newSound } = await Audio.Sound.createAsync({ uri: source });
        setSound(newSound);

        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.didJustFinish) {
            newSound.pauseAsync();
          }
        });

        await newSound.playAsync();
      } else {
        const status = await sound.getStatusAsync();
        if (status.isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
      }
    } catch (error) {
      toast({ type: "error", text: `Erro ao reproduzir áudio: ${error}` });
    }
  };

  const getAudioSize = async (source: string) => {
    try {
      const { sound: tempSound } = await Audio.Sound.createAsync({ uri: source });
      const status = await tempSound.getStatusAsync();
      await tempSound.unloadAsync();
      return status.durationMillis;
    } catch (error) {
      toast({ type: "error", text: `Erro ao obter tamanho do áudio: ${error}` });
    }
  };

  const clearAudio = async () => {
    try {
      if (sound) {
        await sound.unloadAsync();
        setSound(null);
      }
    } catch (error) {
      toast({ type: "error", text: `Erro ao limpar áudio: ${error}` });
    }
  };

  return { playAudio, getAudioSize, clearAudio, playAudioOnce };
}
