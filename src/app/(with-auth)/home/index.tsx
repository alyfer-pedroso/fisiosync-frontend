import { Text } from "react-native";
import { Page } from "@/components/template";
import { View, TouchableOpacity, ScrollView } from "react-native";

export default function Home() {
  return (
    <Page>
      <View className="w-full flex-1 px-8 pb-8">
        <View>
          <Text className="font-extrabold text-3xl pb-14">Olá, Usuario</Text>
          <Text className="font-bold text-lg leading-tight">Metrónomo</Text>
          <Text className="text-[#B7B7B7] text-sm font-medium pb-3 leading-tight">Escolha a frequência do BPM abaixo.</Text>
        </View>

        <View className="flex-1 items-center gap-4">
          <View className="bg-[#EDEDED] w-full h-52 rounded-lg items-center mb-4">
            <View className="flex-1 pl-6 justify-center">
              <View className="gap-4 flex-row ">
                <View className="bg-[#1F4BFC] w-8 h-8 rounded-full opacity-50 items-center justify-center"><Text className="text-[#0D006F] font-bold text-center">1</Text></View>
                <View className="bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center"><Text className="text-[#FFFFFF] font-bold text-center">2</Text></View>
                <View className="bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center"><Text className="text-[#FFFFFF] font-bold text-center">3</Text></View>
                <View className="bg-[#A1A1A1] w-8 h-8 rounded-full opacity-50 items-center justify-center"><Text className="text-[#FFFFFF] font-bold text-center">4</Text></View>
              </View>
              
            </View>
            <TouchableOpacity className="rounded-md bg-[#1F4BFC] w-28 h-10 justify-center m-5">
              <Text className="text-center text-[#ffff] font-bold ">INICIAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 mb-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-extrabold text-lg leading-tight">Musicas e frequencias</Text>
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
