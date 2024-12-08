import { Text } from "react-native";
import { Page } from "@/components/template";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useState, useCallback } from "react";
import { debounce } from "lodash";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = useCallback(
    debounce((value) => {
      setSliderValue(value);
    }, 100),
    []
  );

  const handleDecrease = () => {
    setSliderValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handleIncrease = () => {
    setSliderValue((prevValue) => Math.min(prevValue + 1, 200));
  };

  return (
    <Page>
      <View className="w-full flex-1 px-8 pb-8">
        <View>
          <Text className="font-extrabold text-3xl pb-14">Olá, Usuario</Text>
          <Text className="font-bold text-lg leading-tight">Metrónomo</Text>
          <Text className="text-[#B7B7B7] text-sm font-medium pb-3 leading-tight">Escolha a frequência do BPM abaixo.</Text>
        </View>

        <View className="flex-1 items-center gap-4">
          <View className="bg-[#EDEDED] w-full h-56 rounded-lg items-center justify-center">
            <View className="flex-row gap-4 items-center justify-center mb-4">
              <View className="bg-[#1F4BFC] w-8 h-8 rounded-full opacity-50 items-center justify-center">
                <Text className="text-[#0D006F] font-bold text-center w-full">1</Text>
              </View>
              <View className="bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center">
                <Text className="text-[#FFFFFF] font-bold">2</Text>
              </View>
              <View className="bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center">
                <Text className="text-[#FFFFFF] font-bold">3</Text>
              </View>
              <View className="bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center">
                <Text className="text-[#FFFFFF] font-bold">4</Text>
              </View>
            </View>

            <View className="w-3/4 mb-2 flex-row items-center justify-center gap-4">
              <TouchableOpacity
                className="bg-[#1F4BFC] p-2 rounded-full"
                onPress={handleDecrease}
                style={{ width: 30, height: 30 }}
              >
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

              <TouchableOpacity
                className="bg-[#1F4BFC] p-2 rounded-full"
                onPress={handleIncrease}
                style={{ width: 30, height: 30 }}
              >
                <Text className="text-white font-bold text-center">+</Text>
              </TouchableOpacity>
            </View>

            <Text className="font-bold text-2xl mt-2 pb-2">{sliderValue} BPM</Text>

            <TouchableOpacity className="rounded-md bg-[#1F4BFC] w-36 h-12 items-center justify-center">
              <Text className="text-center text-[#FFFF] font-bold">INICIAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 mb-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-extrabold text-lg leading-tight">Músicas e Frequencias</Text>
            <Text className="font-medium text-[#1F4BFC] max-w-[30%] truncate text-right text-xs">Veja mais</Text>
          </View>
        </View>

        <View className="bg-white rounded-2xl overflow-hidden">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 8, gap: 8 }}>
            {["", "", "", "", ""].map((_, index) => (
              <View key={index} className="bg-[#EDEDED] w-32 h-52 rounded-2xl"></View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Page>
  );
}
