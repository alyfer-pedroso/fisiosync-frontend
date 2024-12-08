import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { useStorage } from "@/data/hooks";

export default function Layout() {
  const router = useRouter();
  const { getData } = useStorage();

  useEffect(() => {
    (async () => {
      (await getData("token")) && router.push("/(with-auth)/home");
    })();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login/index" options={{ animation: "fade" }} />
      <Stack.Screen name="register/index" options={{ animation: "fade" }} />
      <Stack.Screen name="forget/index" options={{ animation: "fade" }} />
    </Stack>
  );
}
