import { useEffect, useState } from "react";
import TrackPlayer, { Capability, State, usePlaybackState } from "react-native-track-player";
import { useMainContext } from "../useMainContext";

export function useTrack() {
  const { toast } = useMainContext();
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        TrackPlayer.updateOptions({
          capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        });
      } catch (error) {
        toast({ type: "error", text: `Erro ao configurar player: ${error}` });
      }
    };

    setupPlayer();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  const playAudioOnce = async (source: string) => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: "unique-track-id",
        url: source,
        title: "Áudio",
        artist: "Desconhecido",
      });

      await TrackPlayer.play();

      TrackPlayer.addEventListener("playback-queue-ended", () => {
        TrackPlayer.stop();
      });
    } catch (error) {
      toast({ type: "error", text: `${error}` });
    }
  };

  const playAudio = async (source: string, stop?: boolean) => {
    try {
      if (stop) {
        await TrackPlayer.pause();
        return;
      }

      if (currentTrack !== source) {
        setCurrentTrack(source);

        await TrackPlayer.reset();
        await TrackPlayer.add({
          id: "unique-track-id",
          url: source,
          title: "Áudio",
          artist: "Desconhecido",
        });
      }

      const state = await TrackPlayer.getState();

      if (state === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } catch (error) {
      toast({ type: "error", text: `Erro ao reproduzir áudio: ${error}` });
    }
  };

  const getAudioSize = async (source: string) => {
    try {
      // TrackPlayer não oferece acesso direto à duração antes de tocar.
      // Solução alternativa: reproduza temporariamente e obtenha o tempo.
      await TrackPlayer.reset();
      await TrackPlayer.add({ id: "temp-track", url: source });
      const duration = (await TrackPlayer.getDuration()) * 1000;
      await TrackPlayer.stop();
      return duration;
    } catch (error) {
      toast({ type: "error", text: `Erro ao obter tamanho do áudio: ${error}` });
    }
  };

  const clearAudio = async () => {
    try {
      await TrackPlayer.reset();
      setCurrentTrack(null);
    } catch (error) {
      toast({ type: "error", text: `Erro ao limpar áudio: ${error}` });
    }
  };

  return { playAudio, getAudioSize, clearAudio, playAudioOnce };
}
