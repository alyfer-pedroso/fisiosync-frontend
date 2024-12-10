import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRouter } from "expo-router";

import { Login } from "@/data/services";
import { useMainContext } from "@/data/hooks";
import { LoginModel } from "@/data/models";

export function useLogin() {
  const router = useRouter();
  const { toast, handleLoading } = useMainContext();
  const { SignIn } = Login();

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
    if (!form.email || !form.password) return toast({ type: "error", text: "Preencha todos os campos" });

    handleLoading(true);
    await SignIn(form).then((res) => {
      if (res) {
        handleLoading(false);
        router.push("/(with-auth)/home");
      }
    });
    handleLoading(false);
  };

  return { form, setValue, submitForm };
}
