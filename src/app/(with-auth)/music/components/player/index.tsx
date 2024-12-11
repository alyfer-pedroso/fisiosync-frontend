import { Image, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { Page } from "@/components/template";

import { usePlayer } from "./hooks";

export function Player() {
  const { currentMusic, playerData, play } = usePlayer();

  const playing = !playerData.current.paused;

  return (
    <Page>
      <View className="w-full flex-1 max-w-[80%] items-center mx-auto gap-[5%]">
        <View className="w-full items-center gap-4">
          <Text className="text-center text-xl font-inter-semi-bold">Sua Playlist</Text>
          <View className="w-full max-w-[300px] h-[300px] rounded-xl overflow-hidden">
            <Image className="w-full h-full scale-[2]" source={{ uri: currentMusic.thumbnail }} resizeMode="cover" />
          </View>
          <View className="w-full">
            <Text className="font-inter-semi-bold uppercase text-center text-xl">{currentMusic.title.split("-")[0]}</Text>
            <Text className="font-inter-light text-center text-xl">{currentMusic.title.split("-")[1]}</Text>
          </View>
        </View>

        <View className="w-full rounded-xl overflow-hidden bg-[#D9D9D9]">
          <View
            className="bg-[#9E9E9E] h-3 rounded-xl"
            style={{ width: `${(playerData.current.max_time / 100) * playerData.current.current_time}%` }}
          ></View>
        </View>

        <View className="w-full flex-row items-center justify-between">
          <Feather name="shuffle" size={24} color="black" />
          <Feather name="skip-back" size={34} color="black" />
          <Ionicons name={playing ? "pause-circle-outline" : "play-circle-outline"} size={58} color="black" onPress={() => play()} />
          <Feather name="skip-forward" size={34} color="black" />
          <Feather name="repeat" size={24} color="black" />
        </View>
      </View>
    </Page>
  );
}
