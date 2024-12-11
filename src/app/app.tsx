import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

import { useStorage } from "@/data/hooks";
import "@/config/global.css";
import Login from "./(no-auth)/login";

export default function App() {
  // const { getData } = useStorage();
  // const router = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     // const token = await getData("token");
  //     // router.push("/(no-auth)/login");
  //     // !token ? router.push("/(no-auth)/login") : router.push("/(with-auth)/home");
  //   })();
  // }, []);

  return <Login />;
}
