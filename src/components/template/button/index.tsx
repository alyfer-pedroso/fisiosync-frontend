import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cn } from "@/utils/cn";

interface props extends TouchableOpacityProps {
  text: string;
  classNameText?: string;
}

export function Button({ text, classNameText, ...props }: props) {
  return (
    <TouchableOpacity
      {...props}
      className={cn("bg-theme-blue-2 w-full max-w-[250px] py-3 rounded-md  disabled:bg-theme-blue-3", props.className)}
      accessibilityLabel={text}
      activeOpacity={0.9}
    >
      <Text className={cn("text-white text-center font-inter-bold text-lg", classNameText)}>{text}</Text>
    </TouchableOpacity>
  );
}
