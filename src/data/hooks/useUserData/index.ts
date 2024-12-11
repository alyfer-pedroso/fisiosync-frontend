import { useLayoutEffect, useState } from "react";

import { useStorage } from "../useStorage";
import { UserModel } from "@/data/models";

const initialState = { email: "", id: 0, name: "", password: "", scaleId: 0 };

export function useUserData(): { userData: UserModel.IUser } {
  const { getData } = useStorage();

  const [userData, setUserData] = useState<UserModel.IUser>(initialState);

  useLayoutEffect(() => {
    (async () => {
      const user = await getData("user");
      user ? setUserData(JSON.parse(user)) : setUserData(initialState);
    })();
  }, []);

  return { userData };
}
