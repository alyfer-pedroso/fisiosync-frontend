import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

import { useStorage } from "@/data/hooks";
import "@/config/global.css";

export default function App() {
  const { getData } = useStorage();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = await getData("token");
      // Descomentar o padrão depois
      //* Padrão: !token ? router.push("/(no-auth)/login") : router.push("/(with-auth)/(tabs-main)/home");
      !token ? router.push("/(no-auth)/home") : router.push("/(with-auth)/(tabs-main)/home");
    })();
  }, []);

  return <View className="w-full h-full items-center justify-center"></View>;
}
