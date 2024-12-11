import { View, TouchableOpacity, ScrollView, Text, Image, ActivityIndicator } from "react-native";
import Slider from "@react-native-community/slider";

import { useMetronome } from "@/data/hooks";
import { Page } from "@/components/template";

import { useHome } from "./hooks";
import { cn } from "@/utils/cn";
import { Link } from "expo-router";

// import audio from "@/audios/metronome2.mp3";

export default function Home() {
  const { userData, handleSliderChange, sliderValue, handleDecrease, handleIncrease, musics, selectMusic } = useHome();
  const { toggleMetronome, beat, isPlaying } = useMetronome(sliderValue);

  return (
    <Page>
      <View className="w-full flex-1 px-8 pb-8">
        <View>
          <Text className="font-extrabold text-3xl pb-14">Olá, {userData.name}</Text>
          <Text className="font-bold text-lg leading-tight">Metrônomo</Text>
          <Text className="text-[#B7B7B7] text-sm font-medium pb-3 leading-tight">Escolha a frequência do BPM abaixo.</Text>
        </View>

        <View className="flex-1 items-center gap-4">
          <View className="bg-[#EDEDED] w-full h-56 rounded-lg items-center justify-center">
            <View className="flex-row gap-4 items-center justify-center mb-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <View
                    key={index}
                    className={cn("bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center", {
                      "bg-[#1F4BFC]": beat + 1 === index + 1,
                    })}
                  >
                    <Text className={cn("text-[#FFFFFF] font-bold text-center w-full", { "text-[#0D006F]": beat + 1 === index + 1 })}>
                      {index + 1}
                    </Text>
                  </View>
                ))}
            </View>

            <View className="w-3/4 mb-2 flex-row items-center justify-center gap-4">
              <TouchableOpacity className="bg-[#1F4BFC] p-2 rounded-full" onPress={handleDecrease} style={{ width: 30, height: 30 }}>
                <Text className="text-white font-bold text-center">-</Text>
              </TouchableOpacity>

              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: 10, width: 150, backgroundColor: "#B7B7B7", borderRadius: 5 }}>
                  <Slider
                    style={{ height: 10 }}
                    minimumValue={0}
                    maximumValue={200}
                    step={1}
                    value={sliderValue}
                    onValueChange={handleSliderChange}
                    minimumTrackTintColor="#B7B7B7"
                    maximumTrackTintColor="#B7B7B7"
                    thumbTintColor="#1F4BFC"
                  />
                </View>
              </View>

              <TouchableOpacity className="bg-[#1F4BFC] p-2 rounded-full" onPress={handleIncrease} style={{ width: 30, height: 30 }}>
                <Text className="text-white font-bold text-center">+</Text>
              </TouchableOpacity>
            </View>

            <Text className="font-bold text-2xl mt-2 pb-2">{sliderValue} BPM</Text>

            <TouchableOpacity className="rounded-md bg-[#1F4BFC] w-36 h-12 items-center justify-center" onPress={toggleMetronome}>
              <Text className="text-center text-[#FFFF] font-bold">{isPlaying ? "PARAR" : "INICIAR"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 mb-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-extrabold text-lg leading-tight">Músicas e Frequencias</Text>
            <Link href="/music" className="font-medium text-[#1F4BFC] max-w-[30%] truncate text-right text-xs">
              Veja mais
            </Link>
          </View>
        </View>

        <View className="bg-white rounded-2xl overflow-hidden">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
            {musics.length === 0 ? (
              <View className="w-full h-52 justify-center">
                <ActivityIndicator size="large" />
              </View>
            ) : (
              musics.map((music, index) => (
                <TouchableOpacity key={index} className="bg-[#EDEDED] w-32 h-52 rounded-2xl overflow-hidden" onPress={() => selectMusic(music)}>
                  <Image source={{ uri: music.thumbnail }} className="w-full h-52 scale-150" resizeMode="cover" />
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </Page>
  );
}
