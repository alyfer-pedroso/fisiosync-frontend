import { View , Text } from "react-native";
import { Page , Input } from "@/components/template";

export default function Search() {
  return (
    <Page>
      <View className="flex-1 px-8 sm:px-10 py-10 flex flex-col">

        <View className="pt-10 flex items-center gap-6">

          <Text className="text-center text-xl font-medium">Escolha sua música favorita</Text>
          <Text className="text-center text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat turpis vitae enim pretium elementum. Vestibulum laoreet magna, eu porttitor augue sollicitudin eu.</Text>

          <Input placeholder="Pesquise sua música aqui..." className="w-full h-auto bg-gray-100 border border-gray-100 rounded-2xl px-2 py-1 text-base font-light"/>
        </View>
          
        <View className="h-auto flex flex-col space-y-6 gap-4 w-full p-4">

          <Text className="text-left text-2xl text-xl font-medium">Músicas BPM</Text>

          <View className="h-auto flex flex-wrap justify-between gap-4 w-full p-4">
            <View className="flex flex-row justify-between gap-4 w-full">
              <View className="flex flex-col items-center flex-1">
                <View className="bg-gray-200 p-4 rounded-xl w-full h-[100px]"/>
                <Text className="text-center text-lg font-medium">Álbum 1</Text>
                <Text className="text-center text-sm font-light">Artista</Text>
              </View>

              <View className="flex flex-col items-center flex-1">
                <View className="bg-gray-200 p-4 rounded-xl w-full h-[100px]"/>
                <Text className="text-center text-lg font-medium">Álbum 2</Text>
                <Text className="text-center text-sm font-light">Artista</Text>
              </View>

              <View className="flex flex-col items-center flex-1">
                <View className="bg-gray-200 p-4 rounded-xl w-full h-[100px]"/>
                <Text className="text-center text-lg font-medium">Álbum 3</Text>
                <Text className="text-center text-sm font-light">Artista</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="h-auto flex flex-wrap space-y-6 gap-4 w-full">

          <Text className="text-left text-2xl text-xl font-medium mb-4">Navegar por gêneros</Text>

          <View className="flex flex-wrap justify-between gap-4">
            <View className="flex flex-col items-center flex-4">
              <View className="w-[48%] bg-gray-200 rounded-lg p-4 h-[120px]"/>
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="w-[48%] bg-gray-200 rounded-lg p-4 h-[120px]"/>
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="w-[48%] bg-gray-200 rounded-lg p-4 h-[120px]"/>
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="w-[48%] bg-gray-200 rounded-lg p-4 h-[120px]"/>
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="w-[48%] bg-gray-200 rounded-lg p-4 h-[120px]"/>
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="=w-[48%] bg-gray-200 rounded-lg p-4 h-[120px]"/>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}
