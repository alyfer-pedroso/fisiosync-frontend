import { Page } from "@/components/template";
import { Text, View, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Playlist() {
  return (
    <Page>
      <View className="w-full flex-1 items-center">
        <View className="bg-[#D9D9D9] w-56 h-56 rounded-2xl"></View>
        <Text className="pt-3 font-bold">SUA PLAYLIST</Text>
        <View className="w-full flex-1 items-center pt-14">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              gap: 2,
              paddingBottom: 20,
              paddingTop: 10,
            }}
            style={{
              width: "100%",
            }}
          >
            <View className="relative w-4/5 h-16 rounded-lg flex-row items-center justify-center">
              <View className="absolute top-0 left-0 w-full h-full bg-[#1F4BFC] opacity-15 rounded-lg" />
              <View className="flex-row items-center justify-between px-2 z-10 w-full">
                <View className="bg-[#BE4444] w-12 h-12 flex items-center justify-center rounded-md" />
                <View className="pl-4 flex-1 text-center">
                  <Text className="font-bold text-lg leading-tight">SONG TITLE</Text>
                  <Text className="font-light leading-tight">Artista</Text>
                </View>
                <View className="flex-row items-center gap-2 justify-center">
                  <AntDesign name="hearto" size={24} color="black" />
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </View>
              </View>
            </View>
            {[...Array(10)].map((_, index) => (
              <View key={index} className="relative w-4/5 h-16 rounded-lg flex-row items-center justify-center">
                <View className="flex-row items-center justify-between px-2 z-10 w-full">
                  <View className="bg-[#BE4444] w-12 h-12 flex items-center justify-center rounded-md" />
                  <View className="pl-4 flex-1 text-center">
                    <Text className="font-bold text-lg leading-tight">SONG TITLE</Text>
                    <Text className="font-light leading-tight">Artista</Text>
                  </View>
                  <View className="flex-row items-center gap-2 justify-center">
                    <AntDesign name="hearto" size={24} color="black" />
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Page>
  );
}
