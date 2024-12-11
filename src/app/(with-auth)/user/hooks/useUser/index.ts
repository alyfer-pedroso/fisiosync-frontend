import { useState } from "react";
import { useUserData } from "@/data/hooks";
import * as Models from "../../model";

export function useUser(): Models.IUserHook {
  const { userData } = useUserData();
  const [userState, setUserState] = useState<Models.TUserState>("view");

  const changeState = (value?: Models.TUserState) => {
    setUserState((state) => value ?? (state === "view" ? "config" : "view"));
  };

  return { userState, changeState, userData };
}
