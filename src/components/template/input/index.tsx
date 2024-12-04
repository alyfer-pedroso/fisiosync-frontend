import { TextInput, TextInputProps } from "react-native";
import { cn } from "@/utils/cn";

export function Input({ ...props }: TextInputProps) {
  return (
    <TextInput
      {...props}
      className={cn("bg-theme-gray-1 text-black py-3 px-2 font-inter-semi-bold w-full max-w-[250px] rounded-md text-lg", props.className)}
    />
  );
}
