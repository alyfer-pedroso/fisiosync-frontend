import { View } from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Link } from "expo-router";

export function TabbarButton({ ...props }: BottomTabBarButtonProps) {
  return (
    <Link href={props.href ?? ""} className="my-auto">
      <View className="w-full items-center">{props.children}</View>
    </Link>
  );
}
