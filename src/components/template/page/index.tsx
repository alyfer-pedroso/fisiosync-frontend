import { View } from "react-native";

import { useMainContext } from "@/data/hooks";
import { cn } from "@/utils/cn";

import { Header, Loading } from "..";

interface props {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
}

export function Page({ children, header, className }: props) {
  const { loading, fontsLoaded } = useMainContext();

  return (
    <View className={cn("w-full flex-1 relative bg-white", className)}>
      <Loading visible={loading || !fontsLoaded} />
      {(header ?? true) && <Header />}
      {fontsLoaded && children}
    </View>
  );
}
