import { SafeAreaView, View } from "react-native";

import { useMainContext } from "@/data/hooks";
import { cn } from "@/utils/cn";

import { Loading } from "../loading";
import { Header } from "../header";
import { Config } from "../config";

interface props {
  children?: React.ReactNode;
  className?: string;
  header?: boolean;
}

export function Page({ children, header, className }: props) {
  const { loading, fontsLoaded, onConfig } = useMainContext();

  return (
    <SafeAreaView className={cn("w-full flex-1 relative bg-white", className)}>
      <Loading visible={loading || !fontsLoaded} />
      <Config visible={fontsLoaded && onConfig} />
      {(header ?? true) && <Header />}
      {fontsLoaded && children}
    </SafeAreaView>
  );
}
