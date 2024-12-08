import { View, Text } from "react-native";
import { Page, Input } from "@/components/template";

export function Search() {
  return (
    <Page>
      <View className="flex-1 px-4 sm:px-8 py-10">
        <View className="pt-16 w-full flex items-center gap-5">
          <Text className="text-center text-xl font-bold">Escolha sua música favorita</Text>
          <Text className="text-center text-sm font-light pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat turpis vitae enim pretium elementum...
          </Text>

          <Input
            placeholder="Pesquise sua música aqui..."
            className="w-full max-w-xl h-[40px] bg-gray-100 border-0 rounded-2xl px-4 text-base font-light"
          />
        </View>

        <View className="h-auto flex flex-col space-y-6 pt-10 gap-1 w-full">
          <Text className="text-left text-xl font-bold">Músicas BPM</Text>

          <View className="h-auto flex flex-wrap justify-between gap-4 w-full pt-4 pb-2">
            <View className="flex flex-row justify-between gap-4 w-full">
              <View className="flex flex-col items-stretch flex-1">
                <View className="bg-gray-200 rounded-xl w-full h-[100px]" />
                <Text className="pt-2 text-left text-lg font-medium">Álbum 1</Text>
                <Text className="text-left text-sm font-light">Artista</Text>
              </View>

              <View className="flex flex-col items-stretch flex-1">
                <View className="bg-gray-200 rounded-xl w-full h-[100px]" />
                <Text className="pt-2 text-left text-lg font-medium">Álbum 2</Text>
                <Text className="text-left text-sm font-light">Artista</Text>
              </View>

              <View className="flex flex-col items-stretch flex-1">
                <View className="bg-gray-200 rounded-xl w-full h-[100px]" />
                <Text className="pt-2 text-left text-lg font-medium">Álbum 3</Text>
                <Text className="text-left text-sm font-light">Artista</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="h-auto flex flex-wrap space-y-6 pt-6 gap-1 w-full">
          <Text className="text-left text-xl font-bold">Navegar por gêneros</Text>

          <View className="flex-row flex-wrap justify-around gap-4 pt-4">
            <View className="flex flex-col items-center w-[30%]">
              <View className="bg-gray-200 rounded-lg w-full h-[65px]" />
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="bg-gray-200 rounded-lg w-full h-[65px]" />
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="bg-gray-200 rounded-lg w-full h-[65px]" />
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="bg-gray-200 rounded-lg w-full h-[65px]" />
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="bg-gray-200 rounded-lg w-full h-[65px]" />
            </View>

            <View className="flex flex-col items-center w-[30%]">
              <View className="bg-gray-200 rounded-lg w-full h-[65px]" />
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}
