import React from 'react'; 
import { View , Text } from 'react-native'; 
import { Page , Input , Button } from "@/components/template";

export default function Forget() {
  return (
    <Page>
      <View className="flex-1 justify-center px-6 sm:px-10 py-6">
        
        <View className="top-1 left-0 right-0 pb-5 gap-3">
          <Text className="text-center text-5xl font-bold font-inter-bold">Recuperar senha</Text>
          <View className="mt-2 mx-auto w-96 h-1 bg-black rounded-full" ></View>
          <Text className="text-center text-2xl font-bold font-inter-bold">Insira seus dados:</Text>
        </View>

        <View className="mt-20 sm:mt-24 flex items-center gap-5">
          <Input placeholder="E-mail" className="placeholder:text-gray-500 font-inter-regular"/>

          <Input placeholder="Código" className="placeholder:text-gray-500 font-inter-regular"/>

          <Input placeholder="Digite sua nova senha" className="placeholder:text-gray-500 font-inter-regular"/>

          <Input placeholder="Confirme sua senha" className="placeholder:text-gray-500 font-inter-regular"/>

          <Button text="Mudar Senha" className="font-inter-regular" mt-4/>
        </View>

        <View className="absolute bottom-0 left-0 right-0 h-8 flex flex-row justify-between mx-3">
          <Text className="text-blue-200 text-left text-lg font-bold">Dúvidas? Fale conosco</Text>
          <Text className="text-blue-200 text-right text-lg font-bold">Todos os direitos reservados</Text>
        </View>
      </View>
    </Page>
  );
}
