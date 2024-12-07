import { useEffect } from "react";
import { useRouter, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useStorage, useMainContext } from "@/data/hooks";
import { TabbarButton, TabbarText } from "@/components/template";

export default function Layout() {
  const router = useRouter();
  const { getData } = useStorage();
  const { handleLoading } = useMainContext();

  useEffect(() => {
    (async () => {
      handleLoading(true);
      !(await getData("token")) && router.push("/(no-auth)/login");
      handleLoading(false);
    })();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { width: 34, height: 34, marginBottom: 2 },
        tabBarStyle: { width: "100%", backgroundColor: "#F7F7F7", height: "12%" },
        tabBarButton: (props) => <TabbarButton {...props} />,
        tabBarLabel: (props) => <TabbarText {...props} />,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "INÍCIO",
          tabBarIcon: (props) => <Feather name="home" size={34} color={props.focused ? "#1F4BFC" : "#000"} />,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "BUSCAR",
          tabBarIcon: (props) => <Feather name="search" size={34} color={props.focused ? "#1F4BFC" : "#000"} />,
        }}
      />
      <Tabs.Screen
        name="user/index"
        options={{
          title: "USUÁRIO",
          tabBarIcon: (props) => <Feather name="user" size={34} color={props.focused ? "#1F4BFC" : "#000"} />,
        }}
      />
    </Tabs>
  );
}
