import { View } from "react-native";
import { useMainContext } from "@/data/hooks";
import { Loading } from "../loading";

interface props {
  children: React.ReactNode;
}

export function Page({ children }: props) {
  const { loading, fontsLoaded } = useMainContext();

  return (
    <View className="w-full flex-1 relative bg-white">
      <Loading visible={loading || !fontsLoaded} />
      {fontsLoaded && children}
    </View>
  );
}
