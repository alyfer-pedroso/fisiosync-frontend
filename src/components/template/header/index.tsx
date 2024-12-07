import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-end px-6 py-6 gap-4">
      <Feather name="bell" size={24} color="#1F4BFC" />
      <Feather name="settings" size={24} color="#1F4BFC" />
    </View>
  );
}
