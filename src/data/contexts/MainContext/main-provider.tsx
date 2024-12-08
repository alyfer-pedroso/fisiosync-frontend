import { useRef, useState } from "react";
import { useFonts } from "expo-font";

import { ToastModel, MainContextModel } from "@/data/models";
import { Toast } from "@/components";

import { MainContext } from "./main-context";

export function MainProvider({ children }: { children: React.ReactNode }) {
  const toastRef = useRef<ToastModel.IToastRef>(null);
  const [loading, setLoading] = useState(false);
  const [onConfig, setOnConfig] = useState(false);
  const [appState, setAppState] = useState<MainContextModel.TAppState>("playlist"); // TODO: colocar como 'search' depois

  const handleLoading = (value?: boolean) => {
    setLoading((state) => value ?? !state);
  };

  const handleConfig = (value?: boolean) => {
    setOnConfig((state) => value ?? !state);
  };

  const handleAppState = (value: MainContextModel.TAppState) => {
    setAppState(value);
  };

  const toast = ({ type, text, duration }: ToastModel.IToast) => {
    if (toastRef.current) {
      toastRef.current.show({ type, text, duration });
    }
  };

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("@/fonts/inter/Inter_18pt-Black.ttf"),
    "Inter-BlackItalic": require("@/fonts/inter/Inter_18pt-BlackItalic.ttf"),
    "Inter-Bold": require("@/fonts/inter/Inter_18pt-Bold.ttf"),
    "Inter-BoldItalic": require("@/fonts/inter/Inter_18pt-BoldItalic.ttf"),
    "Inter-ExtraBold": require("@/fonts/inter/Inter_18pt-ExtraBold.ttf"),
    "Inter-ExtraBoldItalic": require("@/fonts/inter/Inter_18pt-ExtraBoldItalic.ttf"),
    "Inter-ExtraLight": require("@/fonts/inter/Inter_18pt-ExtraLight.ttf"),
    "Inter-ExtraLightItalic": require("@/fonts/inter/Inter_18pt-ExtraLightItalic.ttf"),
    "Inter-Italic": require("@/fonts/inter/Inter_18pt-Italic.ttf"),
    "Inter-Light": require("@/fonts/inter/Inter_18pt-Light.ttf"),
    "Inter-LightItalic": require("@/fonts/inter/Inter_18pt-LightItalic.ttf"),
    "Inter-Medium": require("@/fonts/inter/Inter_18pt-Medium.ttf"),
    "Inter-MediumItalic": require("@/fonts/inter/Inter_18pt-MediumItalic.ttf"),
    "Inter-Regular": require("@/fonts/inter/Inter_18pt-Regular.ttf"),
    "Inter-SemiBold": require("@/fonts/inter/Inter_18pt-SemiBold.ttf"),
    "Inter-SemiBoldItalic": require("@/fonts/inter/Inter_18pt-SemiBoldItalic.ttf"),
    "Inter-Thin": require("@/fonts/inter/Inter_18pt-Thin.ttf"),
    "Inter-ThinItalic": require("@/fonts/inter/Inter_18pt-ThinItalic.ttf"),
  });

  return (
    <MainContext.Provider value={{ loading, handleLoading, fontsLoaded, toast, onConfig, handleConfig, appState, handleAppState }}>
      {fontsLoaded && <Toast ref={toastRef} />}
      {children}
    </MainContext.Provider>
  );
}
