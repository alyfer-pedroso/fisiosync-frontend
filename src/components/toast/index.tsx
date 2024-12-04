import React, { useState, useCallback, useImperativeHandle } from "react";
import { Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withDelay, withTiming, runOnJS } from "react-native-reanimated";

import { ToastModel } from "@/data/models";

import AntDesign from "@expo/vector-icons/AntDesign";
import { cn } from "@/utils/cn";

export const Toast = React.forwardRef(({}, ref: React.Ref<ToastModel.IToastRef>) => {
  const toastTopAnimation = useSharedValue(-100);
  const [showing, setShowing] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastText, setToastText] = useState("Toast Text");
  const TOP_VALUE = 20;

  const icons: Record<string, JSX.Element> = {
    success: <AntDesign name="checkcircle" size={30} color="green" />,
    error: <AntDesign name="closecircle" size={30} color="red" />,
  };

  const stylesContainer: Record<string, string> = {
    success: "bg-[#def1d7] border-[#1f8722]",
    error: "bg-[#fae1db] border-[#d9100a]",
  };

  const stylesText: Record<string, string> = {
    success: "text-[#1f8722]",
    error: "text-[#d9100a]",
  };

  const show = useCallback(
    ({ type, text, duration }: ToastModel.IToast) => {
      setShowing(true);
      setToastType(type);
      setToastText(text);
      toastTopAnimation.value = withSequence(
        withTiming(TOP_VALUE),
        withDelay(
          duration ?? 2000,
          withTiming(-100, { duration: 100 }, (finish) => {
            if (finish) runOnJS(setShowing)(false);
          })
        )
      );
    },
    [TOP_VALUE, toastTopAnimation]
  );

  const animatedTopStyle = useAnimatedStyle(() => {
    return {
      top: toastTopAnimation.value,
    };
  });

  useImperativeHandle(ref, () => ({ show }), [show]);

  return (
    showing && (
      <Animated.View
        className={cn(
          "w-[85%] absolute z-[50] flex-row items-center border-[1px] rounded-[18px] p-[10px] left-[7%] shadow-xl opacity-90",
          stylesContainer[toastType]
        )}
        style={[{ top: TOP_VALUE }, animatedTopStyle]}
      >
        {icons[toastType]}
        <Text className={cn("ml-[16px] text-xl font-inter-regular", stylesText[toastType])}>{toastText}</Text>
      </Animated.View>
    )
  );
});
