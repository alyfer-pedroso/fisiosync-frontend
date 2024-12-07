import { Modal, Text, View } from "react-native";

export function Config({ visible }: { visible: boolean }) {
  return (
    <Modal className="bg-white w-full h-full flex-1 z-[30]" visible={visible} animationType="fade">
      <View className="w-full h-full flex-1">{/* Codar tudo aqui dentro */}</View>
    </Modal>
  );
}
