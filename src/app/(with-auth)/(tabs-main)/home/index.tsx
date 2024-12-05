import { Text } from "react-native";
import { Page } from "@/components/template";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <Page className="p-8">
      <View className="bg-blue-100 h-20"></View>

      <View>
        <Text className="font-extrabold text-3xl pb-12">Olá, Usuario</Text>

        <Text className="font-bold text-lg leading-tight">Gestão do tratamento</Text>

        <Text className="text-[#B7B7B7] text-sm font-medium pb-3 leading-tight">Acesse todas as informações sobre seu tratamento</Text>
      </View>

      <View className="flex-1 items-center gap-6">
        <View className="bg-[#EDEDED] w-6/6 h-20 rounded-lg flex-row items-center justify-between">
          <View className="flex-1 pl-6">
            <Text className="font-extrabold text-lg leading-tight">18:00 - 19:00</Text>
            <Text className="font-inter-medium leading-tight">Tratamento EAR</Text>
            <Text className="font-inter-light text-xs">Unidade salto</Text>
          </View>

          <TouchableOpacity className="border-2 rounded-md border-[##1F4BFC] w-28 h-10 justify-center m-5">
            <Text className="text-center text-[#1F4BFC] font-bold">SAIBA MAIS</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-[#EDEDED] w-6/6 h-20 rounded-lg flex-row items-center justify-between">
          <View className="flex-1 pl-6">
            <Text className="font-extrabold text-lg leading-tight">18:00 - 19:00</Text>
            <Text className="font-inter-medium leading-tight">Tratamento EAR</Text>
            <Text className="font-inter-light text-xs">Unidade salto</Text>
          </View>

          <TouchableOpacity className="border-2 rounded-md border-[##1F4BFC] w-28 h-10 justify-center m-5">
            <Text className="text-center text-[#1F4BFC] font-bold">SAIBA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="pb-3">
        <View className="flex-row items-center justify-between">
          <Text className="font-extrabold text-lg leading-tight">Musicas e frequencias</Text>
          <Text className="font-medium text-[#1F4BFC] max-w-[30%] trucante text-right text-xs">Veja mais</Text>
        </View>
      </View>

      <View className="flex-1 flex-row justify-between gap-2">
        <View className="bg-[#EDEDED] w-32 h-52 rounded-2xl"></View>
        <View className="bg-[#EDEDED] w-32 h-52 rounded-2xl"></View>
        <View className="bg-[#EDEDED] w-32 h-52 rounded-2xl"></View>
      </View>
    </Page>
  );
}
