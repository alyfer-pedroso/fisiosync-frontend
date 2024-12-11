import { useState } from "react";
import { useRouter } from "expo-router";

import { useUserData, useStorage, useMainContext } from "@/data/hooks";

import * as Models from "../../model";

export function useUser(): Models.IUserHook {
  const router = useRouter();
  const { userData } = useUserData();
  const { clearData } = useStorage();
  const { handleLoading } = useMainContext();
  const [userState, setUserState] = useState<Models.TUserState>("view");

  const changeState = (value?: Models.TUserState) => {
    setUserState((state) => value ?? (state === "view" ? "config" : "view"));
  };

  const logOut = async () => {
    handleLoading(true);
    await clearData("token");
    await clearData("user");
    await clearData("musics_recommendations");
    handleLoading(false);
    router.push("/(no-auth)/login");
  };

  return { userState, changeState, userData, logOut };
}
