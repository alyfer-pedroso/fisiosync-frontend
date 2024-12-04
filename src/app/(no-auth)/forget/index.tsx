import React from 'react'; 
import { View, Text, TextInput, Button } from 'react-native'; 
import { Page } from "@/components/template";

export default function Forget() {
  return (
    <Page>
      <View className="flex-1 justify-center px-6 sm:px-10 py-6">
        
        <View className="top-1 left-0 right-0 pb-5">
          <Text className="text-black-500 text-center text-5xl font-bold">
            Recuperar senha
          </Text>
        </View>

        <View className="mt-20 sm:mt-24 flex items-center">
          <TextInput
            className="border-0 bg-gray-200 rounded-xl p-5 mb-4 text-base text-lg w-80" 
            placeholder="E-mail" 
          />

          <TextInput
            className="border-0 bg-gray-200 rounded-xl p-5 mb-4 text-base text-lg w-80"
            placeholder="Código"
          />

          <TextInput
            className="border-0 bg-gray-200 rounded-xl p-5 mb-4 text-base text-lg w-80"
            placeholder="Senha"
          />

          <TextInput
            className="border-0 bg-gray-200 rounded-xl p-5 mb-4 text-base text-lg w-80"
            placeholder="Confirmar sua senha"
          />

          <View className="mt-6 mb-12 rounded-xl overflow-hidden w-3/4">
            <Button title="Mudar senha" color="blue"/>
          </View>
        </View>

        <View className="absolute bottom-0 left-0 right-0 pb-6 flex flex-row justify-between mx-3">
          <Text className="text-blue-200 text-left text-lg font-bold">
            Dúvidas? Fale conosco
          </Text>
          <Text className="text-blue-200 text-right text-lg font-bold">
            Todos os direitos reservados
          </Text>
        </View>
      </View>
    </Page>
  );
}
