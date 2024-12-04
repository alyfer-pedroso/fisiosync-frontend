import { View } from "react-native";
import { useMainContext } from "@/data/hooks";
import { Loading } from "../loading";
import { cn } from "@/utils/cn";

interface props {
  children: React.ReactNode;
  className?: string;
}

export function Page({ children, className }: props) {
  const { loading, fontsLoaded } = useMainContext();

  return (
    <View className={cn("w-full flex-1 relative bg-white", className)}>
      <Loading visible={loading || !fontsLoaded} />
      {fontsLoaded && children}
    </View>
  );
}
