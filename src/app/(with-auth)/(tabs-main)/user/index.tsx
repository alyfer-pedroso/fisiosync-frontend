import { Text, View } from "react-native";
import { Page, Input, Button } from "@/components/template";

export default function User() {
  return (
    <Page className="w-screen h-screen">
      <View className="h-20"></View>

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
          Idade
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="miguelalmeida@gmail.com"/>
      </View>

      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Telefone
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="(11) 94002-8922"/>
      </View>

      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Endereço
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="Rua Jardins 456 - São Paulo"/>
      </View>
    </View>
  <View className="gap-3">
      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Idade
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="20 anos"/>
      </View>

      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Email 2
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="manuelgomes@gmail.com"/>
      </View>

      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          Telefone 2
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="(11) 98765-4321"/>
      </View>

      <View>
        <Text className="text-[20px] font-black font-inter-Black">
          CPF
        </Text>
          <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="123.456.789-00"/>
      </View>
    </View>
</View>

  <View className="border-b w-[380px] mx-auto p-4" style={{opacity: 0.2}}></View>

  <View className="w-full flex-row justfy-around items-center mt-5 gap-2">
    <View className="gap-5 p-2.5">
      <Button text="Alterar dados" className="w-[190px] h-[50px] flex items-center justify-center text-center"/>
      <Button text="Excluir conta" className="w-[190px] h-[50px] flex items-center justify-center text-center bg-[#0D006F]"/>
    </View>
    <View className="w-[187px] h-[120px] bg-[#EDEDED] rounded-lg flex items-center justify-center">
      <Text className="text-[60px] font-inter text-center">
        90 bpm
      </Text>
    </View>
  </View>

    </Page>
  );
}
