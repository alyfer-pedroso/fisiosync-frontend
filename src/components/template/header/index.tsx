import { View } from "react-native";
import { useSegments } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useMainContext } from "@/data/hooks";

export function Header() {
  const segments = useSegments();
  const { handleConfig, currentMusic, selectMusic } = useMainContext();

  return (
    <View className="w-full flex-row items-center justify-between px-6 py-6 gap-4">
      <View>
        {currentMusic.title && segments[segments.length - 1] === "music" && (
          <Feather name="arrow-left" size={24} color="#1F4BFC" onPress={() => selectMusic({ title: "", link_youtube: "", thumbnail: "", bpm: 0 })} />
        )}
      </View>
      <View className="flex-row gap-4">
        <Feather name="bell" size={24} color="#1F4BFC" />
        <Feather name="settings" size={24} color="#1F4BFC" onPress={() => handleConfig()} />
      </View>
    </View>
  );
}
