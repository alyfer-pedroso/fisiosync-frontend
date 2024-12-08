import { Text, View, ScrollView } from "react-native";
import { Page, Input, Button } from "@/components/template";

import * as Models from "../../model";

export function ConfigUser({...props}: Models.IUserHook) {
  const { changeState } = props;

  return (
    <Page className="w-full flex-1">
      <View className="flex-row items-center space-x-4">
        <View className="bg-[#EDEDED] h-36 w-36 rounded-full ml-5"></View>
          <View>
          <Text className="text-[50px] font-inter-bold w-60 items-center ml-3 text-wrap">Miguel Almeida</Text>
        </View>
      </View>

      <View className="w-full flex-row justfy-around gap-4 p-2.5 mt-10">
        <View className="gap-3">
          <View>
            <Text className="text-[20px] font-black font-inter-Black">Nome</Text>
            <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="Miguel Almeida" />
          </View>

          <View>
            <Text className="text-[20px] font-black font-inter-Black">Telefone</Text>
            <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="(11) 94002-8922" />
          </View>
          
          <View>
            <Text className="text-[20px] font-black font-inter-Black">Senha Atual</Text>
            <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="********" />
          </View>
        </View>

        <View className="gap-3">
          <View>
            <Text className="text-[20px] font-black font-inter-Black">Email</Text>
            <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="miguelalmeida@gmail.com" />
          </View>

          <View>
            <Text className="text-[20px] font-black font-inter-Black">Escala Hoehn e Yahr</Text>
            <Input className="w-[190px] text-gray-500 font-inter-regular" />
          </View>

          <View>
            <Text className="text-[20px] font-black font-inter-Black">Nova Senha</Text>
            <Input className="w-[190px] text-gray-500 font-inter-regular" placeholder="Digite sua nova senha" />
            <Text className="text-[#1F4BFC] pt-2 text-[15px]">
              Salvar nova senha
            </Text>
          </View>
        </View>
      </View>


      <View className="w-full flex-row justfy-around items-center mt-7 gap-2">
        <View className="gap-5 p-2.5">
          <Button text="Salvar dados" className="w-[190px] h-[50px] flex items-center justify-center text-center" onPress={() => changeState("view")} />
          <Button text="Excluir conta" className="w-[190px] h-[50px] flex items-center justify-center text-center bg-[#0D006F]" />
        </View>
      <View className="gap-6 pl-2">
        <Text className="text-[#1F4BFC] text-[15px] w-[120px]" style={{ opacity: 0.3 }}>
          Problemas com a sua conta?
        </Text>
        <Text className="text-[#1F4BFC] text-[15px]" style={{ opacity: 0.3 }}>
          Dúvidas? Fale Conosco
        </Text>
        <Text className="text-[#1F4BFC] text-[15px] w-[120px]" style={{ opacity: 0.3 }}>
          Termos de Uso e Privacidade
        </Text>
      </View>
      </View>
    </Page>
  );
}
