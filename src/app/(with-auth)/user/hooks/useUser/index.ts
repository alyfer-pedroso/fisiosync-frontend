import { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";

import { useUserData, useStorage, useMainContext } from "@/data/hooks";
import { Categories } from "@/data/services";

import * as Models from "../../model";
import { CategoriesModel } from "@/data/models";

export function useUser(): Models.IUserHook {
  const router = useRouter();
  const { userData } = useUserData();
  const { clearData } = useStorage();
  const { handleLoading } = useMainContext();
  const { GetCategories } = Categories();
  const [userState, setUserState] = useState<Models.TUserState>("view");
  const [categories, setCategories] = useState<CategoriesModel.ICategory[]>([]);

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

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const data = await GetCategories();
        if (data) setCategories(data);
      })();
    }, [])
  );

  return { userState, changeState, userData, logOut, categories };
}
