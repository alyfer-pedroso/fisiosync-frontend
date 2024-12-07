import { Text, View, ScrollView } from "react-native";
import { Page, Input, Button } from "@/components/template";

export default function User() {
  return (
    <Page className="w-screen h-screen">
    <View className="flex-row items-center space-x-4">
      <View className="bg-[#EDEDED] h-36 w-36 rounded-full ml-5"></View>
        <View>
          <Text className="text-[50px] font-inter-bold w-60 items-center ml-3 text-wrap">
            Miguel Almeida
          </Text>
        </View>
      </View>

<View className="w-full flex-row justfy-around gap-4 p-2.5 mt-10">
  <View className="gap-3">
    <View>
      <Text className="text-[20px] font-black font-inter-Black">
        Nome
      </Text>
        <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="Miguel Almeida"/>
    </View>

    <View>
      <Text className="text-[20px] font-black font-inter-Black">
        Telefone
      </Text>
        <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="(11) 94002-8922"/>
      </View>
  </View>

  <View className="gap-3">
      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Email
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="miguelalmeida@gmail.com"/>
      </View>

      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Escala Hoehn e Yahr
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular"/>
      </View>
    </View>
</View>

  <View className="flex items-center justify-center pt-8">
      <Text className="text center font-inter-bold text-[25px]">
        Gêneros Musicais
      </Text>
  </View>
  <View className="mt-6">
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 8, gap: 8 }}>
          {["Pop", "Rock", "Trap", "Jazz", "Clássica","R&B"].map((item, index) => (
      <View 
        key={index} 
        className={`w-[100px] h-[50px] rounded-lg flex items-center justify-center ${
        index === 2 ? "bg-[#1F4BFC]" : "bg-[#EDEDED]"
      }`}
      >
        <Text style={{ 
          color: index === 2 ? "#FFF" : "#000",
          fontWeight: index === 2 ? "bold" : "normal"
        }}>{item}</Text>
      </View>
    ))}
  </ScrollView>
  </View>

  <View className="border-b w-[380px] mx-auto p-7" style={{opacity: 0.2}}></View>

  <View className="w-full flex-row justfy-around items-center mt-5 gap-2">
    <View className="gap-5 p-2.5">
      <Button text="Alterar dados" className="w-[190px] h-[50px] flex items-center justify-center text-center"/>
      <Button text="Sair" className="w-[190px] h-[50px] flex items-center justify-center text-center bg-[#0D006F]"/>
    </View>
    <View className="w-[187px] h-[120px] bg-[#EDEDED] rounded-lg flex items-center justify-center">
      <Text className="text-[60px] font-inter-regular text-center">
        90 bpm
      </Text>
    </View>
  </View>

    </Page>
  );
}
