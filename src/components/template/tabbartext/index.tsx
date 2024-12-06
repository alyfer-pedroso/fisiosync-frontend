import { Text } from "react-native";
import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/commonjs/src/types";
import { cn } from "@/utils/cn";

interface props {
  focused: boolean;
  color: string;
  position: LabelPosition;
  children: string;
}

export function TabbarText({ ...props }: props) {
  return <Text className={cn("font-inter-medium text-sm text-black mx-auto", { "text-theme-blue-2": props.focused })}>{props.children}</Text>;
}
