import { useEffect, useRef, useState } from "react";
import { usePlayAudio } from "../usePlayAudio";

export function useMetronome(bpm: number) {
  const { playAudioOnce } = usePlayAudio();

  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>();

  const startMetronome = () => {
    const interval = (60 * 1000) / bpm; // ms interval

    intervalRef.current = setInterval(() => {
      setBeat((prevBeat) => {
        playAudioOnce(`https://www.musicca.com/lydfiler/metronome/metronome${(prevBeat + 2) % 4 === 1 ? 1 : 2}.mp3`);
        return (prevBeat + 1) % 4;
      });
    }, interval);

    setIsPlaying(true);
  };

  const stopMetronome = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsPlaying(false);
    setBeat(0);
  };

  const toggleMetronome = () => {
    isPlaying ? stopMetronome() : startMetronome();
  };

  useEffect(() => {
    if (isPlaying) {
      stopMetronome();
    }
  }, [bpm]);

  return { isPlaying, startMetronome, stopMetronome, toggleMetronome, beat };
}
