import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { Page, Input } from "@/components/template";
import { useSearch } from "./hooks";

export function Search() {
  const { musics, categories, selectMusic } = useSearch();

  return (
    <Page>
      <View className="flex-1 px-4 sm:px-8">
        <View className="w-full flex items-center gap-5">
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

          <ScrollView className="w-full mt-4 mb-2 rounded-lg" horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
            {musics.length === 0 ? (
              <View className="w-[100px] h-[100px] justify-center">
                <ActivityIndicator size="large" />
              </View>
            ) : (
              musics.map((music) => (
                <TouchableOpacity className="w-[100px] flex-1" key={music.title} onPress={() => selectMusic(music)}>
                  <View className="w-full overflow-hidden rounded-xl">
                    <Image className="bg-gray-200 w-full h-[100px] scale-150" source={{ uri: music.thumbnail }} resizeMode="cover" />
                  </View>
                  <Text className="pt-2 text-left text-lg font-medium">{music.title.split("-")[0]}</Text>
                  <Text className="text-left text-sm font-light">{music.title.split("-")[1]}</Text>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </View>

        <View className="h-auto flex flex-wrap space-y-6 pt-6 gap-1 w-full">
          <Text className="text-left text-xl font-bold">Navegar por gêneros</Text>

          <ScrollView className="w-full mt-4 rounded-lg" horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
            {categories.length === 0 ? (
              <View className="h-[50px] justify-center">
                <ActivityIndicator size="large" />
              </View>
            ) : (
              categories.map((category) => (
                <View className="flex flex-col items-center w-[100px] bg-gray-200 rounded-lg l h-[50px] justify-center">
                  <Text className="font-inter-semi-bold">{category.name.toUpperCase()}</Text>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </Page>
  );
}
