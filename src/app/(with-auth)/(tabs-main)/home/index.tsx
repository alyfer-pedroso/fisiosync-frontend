import { Text } from "react-native";
import { Page } from "@/components/template";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function Home() {
  return (
    <Page className="p-8">
      <View className="h-15 flex-row items-center justify-end px-1 gap-4">
        <Feather name="bell" size={24} color="#1F4BFC" />
        <Feather name="settings" size={24} color="#1F4BFC" />
      </View>

      <View>
        <Text className="font-extrabold text-3xl pb-14 pt-3">Olá, Usuario</Text>
        <Text className="font-bold text-lg leading-tight">Gestão do tratamento</Text>
        <Text className="text-[#B7B7B7] text-sm font-medium pb-3 leading-tight">Acesse todas as informações sobre seu tratamento</Text>
      </View>

      <View className="flex-1 items-center gap-4">
        {["18:00 - 19:00", "18:00 - 19:00"].map((time, index) => (
          <View key={index} className="bg-[#EDEDED] w-full h-20 rounded-lg flex-row items-center justify-between mb-4">
            <View className="flex-1 pl-6">
              <Text className="font-extrabold text-lg leading-tight">{time}</Text>
              <Text className="font-inter-medium leading-tight">Tratamento EAR</Text>
              <Text className="font-inter-light text-xs">Unidade salto</Text>
            </View>
            <TouchableOpacity className="border-2 rounded-md border-[#1F4BFC] w-28 h-10 justify-center m-5">
              <Text className="text-center text-[#1F4BFC] font-bold">SAIBA MAIS</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    </Page>
  );
}
