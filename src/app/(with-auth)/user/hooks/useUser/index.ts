import { useState } from "react";
import * as Models from "../../model";

export function useUser(): Models.IUserHook {
  const [userState, setUserState] = useState<Models.TUserState>("view");

  const changeState = (value?: Models.TUserState) => {
    setUserState((state) => value ?? (state === "view" ? "config" : "view"));
  };

  return { userState, changeState };
}
