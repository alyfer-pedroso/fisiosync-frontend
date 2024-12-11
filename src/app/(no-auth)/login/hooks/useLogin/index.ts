import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRouter } from "expo-router";
import { jwtDecode } from "jwt-decode";

import { Login, User } from "@/data/services";
import { useMainContext, useStorage } from "@/data/hooks";
import { LoginModel } from "@/data/models";

export function useLogin() {
  const router = useRouter();

  const { SignIn } = Login();
  const { GetUserData } = User();
  const { setData } = useStorage();

  const { toast, handleLoading } = useMainContext();
  const [form, setForm] = useState<LoginModel.IForm>({ email: "", password: "" });

  const setValue = (e: NativeSyntheticEvent<TextInputChangeEventData>, key: keyof LoginModel.IForm) => {
    e.persist();
    setForm((prev) => {
      const newData = { ...prev };
      newData[key] = e?.nativeEvent?.text;
      return newData;
    });
  };

  const submitForm = async () => {
    if (!form.email || !form.password) return toast({ type: "error", text: "Preencha todos os campos!" });

    handleLoading(true);
    try {
      const data = await SignIn(form);
      if (data.token) {
        const decodedToken: { id: number } = jwtDecode(data.token);
        await setData("token", data.token);
        const userdata = await GetUserData(decodedToken.id, data.token);
        await setData("user", JSON.stringify(userdata));
        router.push("/(with-auth)/home");
        return;
      }
      handleLoading(false);
    } catch (error) {
      toast({ type: "error", text: `${error}`, duration: 5000 });
      handleLoading(false);
    }
  };

  return { form, setValue, submitForm };
}
