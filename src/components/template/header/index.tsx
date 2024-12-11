import { View } from "react-native";
import { useSegments } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useMainContext, usePlayAudio } from "@/data/hooks";

export function Header() {
  const segments = useSegments();
  const { playAudio, clearAudio } = usePlayAudio();
  const { handleConfig, currentMusic, selectMusic, playerData } = useMainContext();

  return (
    <View className="w-full flex-row items-center justify-between px-6 py-6 gap-4">
      <View>
        {currentMusic.title && segments[segments.length - 1] === "music" && (
          <Feather
            name="arrow-left"
            size={24}
            color="#1F4BFC"
            onPress={async () => {
              selectMusic({ title: "", link_youtube: "", thumbnail: "", bpm: 0 });
              playerData.current = { link_mp3: "", current_time: 0, max_time: 0, paused: true, title: "" };
              if (!playerData.current.paused) {
                await playAudio(playerData.current.link_mp3);
                await clearAudio();
              }
            }}
          />
        )}
      </View>
      <View className="flex-row gap-4">
        <Feather name="bell" size={24} color="#1F4BFC" />
        <Feather name="settings" size={24} color="#1F4BFC" onPress={() => handleConfig()} />
      </View>
    </View>
  );
}
