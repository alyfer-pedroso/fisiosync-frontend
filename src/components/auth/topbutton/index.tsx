import { cn } from "@/utils/cn";
import { Link } from "expo-router";
import { Text } from "react-native";

interface props {
  text: string;
  href: string;
  className?: string;
  classNameText?: string;
  selected?: boolean;
}

export function TopButton({ text, href, className, classNameText, selected }: props) {
  return (
    <Link className={cn("border-b-2 pb-2.5 pt-3 basis-[47%] max-w-[200px]", { "border-theme-blue-2": selected }, className)} href={href}>
      <Text className={cn("text-black font-inter-bold text-center text-xl", { "text-theme-blue-2": selected }, classNameText)}>{text}</Text>
    </Link>
  );
}
