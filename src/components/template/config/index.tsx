import { Modal, Text, View , Pressable } from "react-native";
import { useState } from "react";

export function Config({ visible }: { visible: boolean }) {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  return (
    <Modal className="bg-white w-full h-full flex-1 z-[30]" visible={visible} animationType="fade">
      <View className="w-full h-full flex-1">{
          <View className="flex-1 bg-blue-500 justify-center items-stretch">
            <View className="w-full h-[80%] bg-white rounded-3xl p-6 items-stretch">
              <View className="flex items-center mb-4">
                <View className="bg-blue-500 h-1 w-48 rounded-full"/>
              </View>
              <Text className="text-center text-black text-2xl font-bold mb-8">Configurações</Text>
            
              <View className="p-1">
                <View className="flex-row items-stretch bg-gray-100 p-4 rounded-lg mb-6">
                  <View className="w-24 h-24 bg-gray-300 rounded-full"/>
                    <View className="ml-4 justify-center">
                      <Text className="text-black font-bold text-lg">Miguel Almeida</Text>
                      <Text className="text-gray-500 text-lg">miguelalmeida@gmail.com</Text>
                    </View>
                  </View>
              </View>

              <View className="px-1 space-y-4">
                <View className="flex-row justify-between items-center bg-gray-100 p-8 rounded-lg mb-2">
                  <View className="flex-row items-center space-x-4">
                    <Text className="text-black text-xl font-bold">Modo escuro</Text>
                  </View>
                  <Pressable onPress={() => setIsDarkMode(!isDarkMode)} className="w-14 h-6 bg-blue-500 justify-center rounded-full">
                    <View className={`w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? "translate-x-8" : "translate-x-2" }`} />
                  </Pressable>
                </View>

                <View className="flex-row justify-between items-center bg-gray-100 p-8 rounded-lg mb-2">
                  <View className="flex-row items-center space-x-4">
                    <Text className="text-black text-xl font-bold">Notificações</Text>
                  </View>
                  <Pressable onPress={() => setIsNotificationsEnabled(!isNotificationsEnabled)} className="w-14 h-6 bg-blue-500 justify-center rounded-full">
                    <View className={`w-4 h-4 bg-white rounded-full transition-transform ${isNotificationsEnabled ? "translate-x-8" : "translate-x-2"}`} />
                  </Pressable>
                </View>

                <View className="flex-row justify-between items-center bg-gray-100 p-8 rounded-lg mb-2">
                  <View className="flex-row items-center space-x-4">
                    <Text className="text-black text-xl font-bold">Ajuda e Suporte</Text>
                  </View>
                </View>

                <View className="flex-row justify-between items-center bg-gray-100 p-8 rounded-lg mb-2">
                  <View className="flex-row items-center space-x-4">
                    <Text className="text-black text-xl font-bold">Sobre</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
      }</View>
    </Modal>
  );
}
