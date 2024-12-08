import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useMainContext } from "@/data/hooks";

export function Header() {
  const { handleConfig } = useMainContext();

  return (
    <View className="w-full flex-row items-center justify-end px-6 py-6 gap-4">
      <Feather name="bell" size={24} color="#1F4BFC" />
      <Feather name="settings" size={24} color="#1F4BFC" onPress={() => handleConfig()} />
    </View>
  );
}
