import { Stack, useRouter } from "expo-router";
import { useStorage, useMainContext } from "@/data/hooks";
import { useEffect } from "react";

export default function Layout() {
  const router = useRouter();
  const { getData } = useStorage();
  const { handleLoading } = useMainContext();

  useEffect(() => {
    (async () => {
      handleLoading(true);
      // TODO: Descomentar o padrão depois
      //* Padrão !(await getData("token")) && router.push("/(no-auth)/login");
      handleLoading(false);
    })();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs-main)" options={{ animation: "fade" }} />
    </Stack>
  );
}
