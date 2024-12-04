import { Stack } from "expo-router";
import { MainProvider } from "@/data/contexts";
import "@/config/global.css";

export default function RootLayout() {
  return (
    <MainProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(no-auth)" options={{ animation: "simple_push" }} />
        <Stack.Screen name="(with-auth)" options={{ animation: "slide_from_bottom" }} />
      </Stack>
    </MainProvider>
  );
}
