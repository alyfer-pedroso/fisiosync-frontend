import React from 'react'; 
import { View , Text } from 'react-native'; 
import { Page , Input , Button } from "@/components/template";

export default function Forget() {
  return (
    <Page>
      <View className="flex-1 justify-between px-6 sm:px-10 py-6">

        <View className="pb-1 pt-16 gap-1">
          <Text className="text-5xl text-center font-bold font-inter-bold">Recuperar senha</Text>
          <View className="mt-2 mx-auto w-96 h-1 bg-black rounded-full" ></View>
        </View>

        <View className="flex items-center gap-5">
          <Text className="text-center text-2xl font-bold font-inter-bold">Insira seus dados:</Text>

          <Input placeholder="E-mail" className="placeholder:text-gray-500 font-inter-regular"/>

          <Input placeholder="Código" className="placeholder:text-gray-500 font-inter-regular"/>

          <Input placeholder="Digite sua nova senha" className="placeholder:text-gray-500 font-inter-regular"/>

          <Input placeholder="Confirme sua senha" className="placeholder:text-gray-500 font-inter-regular"/>

          <Button text="Mudar Senha" className="font-inter-regular mt-4"/>
        </View>

        <View className="flex flex-row justify-between pb-1">
          <Text className="flex-1 text-blue-200 text-left text-base font-bold">Dúvidas? Fale conosco</Text>
          <Text className="flex-1 text-blue-200 text-right text-base font-bold">Todos os direitos reservados</Text>
        </View>
      </View>
    </Page>
  );
}
