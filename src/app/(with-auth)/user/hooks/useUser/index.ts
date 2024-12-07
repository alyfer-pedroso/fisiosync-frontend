import { useState } from "react";
import * as Models from "../../model";

export function useUser(): Models.IUserHook {
  const [userState, setUserState] = useState<Models.TUserState>("config"); // TODO: alterar para começar como "view" depois

  const changeState = (value?: Models.TUserState) => {
    setUserState((state) => value ?? (state === "view" ? "config" : "view"));
  };

  return { userState, changeState };
}
