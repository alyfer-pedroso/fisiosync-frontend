import { Modal, ActivityIndicator, View } from "react-native";

export function Loading({ visible }: { visible: boolean }) {
  return (
    <Modal className="bg-white w-full h-full flex-1 z-[40]" visible={visible} animationType="fade">
      <View className="w-full h-full flex-1 items-center justify-center gap-20">
        <ActivityIndicator size="large" color="black" style={{ transform: [{ scale: 1.5 }] }} />
      </View>
    </Modal>
  );
}
