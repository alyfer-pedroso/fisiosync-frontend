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
      !token ? router.push("/(no-auth)/login") : router.push("/(with-auth)/music");
    })();
  }, []);

  return <View className="w-full h-full items-center justify-center"></View>;
}
