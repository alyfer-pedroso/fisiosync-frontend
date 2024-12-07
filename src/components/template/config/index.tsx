import { Modal, Text, View } from "react-native";

export function Config({ visible }: { visible: boolean }) {
  return (
    <Modal className="bg-white w-full h-full flex-1 z-[30]" visible={visible} animationType="fade">
      <View className="w-full h-full flex-1">{
          <View className="flex-1 bg-blue-500 justify-center items-center">
            <View className="w-full h-[80%] bg-white rounded-3xl p-6 items-stretch">
              <Text className="text-xl font-bold text-center">Configurações</Text>

              <View className="flex bg-gray-200 h-24 rounded-3xl mt-6">
                <View className="flex-row items-center px-4 py-4">
                  <View className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mr-4"/> 
                    <View>
                      <Text className="text-lg font-bold">Miguel Almeida</Text>
                      <Text className="text-gray-500">miguelalmeida@gmail.com</Text>
                    </View>
                </View>
              </View>
            </View>
          </View>
      }</View>
    </Modal>
  );
}
