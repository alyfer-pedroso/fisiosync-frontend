import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home/index" options={{ title: "Início" }} />
      <Tabs.Screen name="search/index" options={{ title: "Pesquisar" }} />
      <Tabs.Screen name="user/index" options={{ title: "Usuário" }} />
    </Tabs>
  );
}
