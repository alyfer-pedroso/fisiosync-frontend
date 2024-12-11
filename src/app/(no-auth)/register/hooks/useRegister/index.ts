import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useLayoutEffect, useState } from "react";

import { useMainContext } from "@/data/hooks";
import { Categories, Register } from "@/data/services";
import { RegisterModel, CategoriesModel } from "@/data/models";

import { IUseRegister } from "../../models";

export function useRegister(): IUseRegister {
  const { handleLoading, toast } = useMainContext();
  const { GetCategories } = Categories();
  const { SignUp } = Register();

  const [categories, setCategories] = useState<CategoriesModel.ICategory[]>([]);
  const [userCategories, setUserCategories] = useState<CategoriesModel.ICategory[]>([]);
  const [form, setForm] = useState<RegisterModel.IForm>({ name: "", email: "", password: "", confirmPassword: "", musicalGenders: [], scale: 0 });

  const setFormValue = (e: NativeSyntheticEvent<TextInputChangeEventData>, key: keyof RegisterModel.IForm) => {
    e.persist();
    setForm((prev) => {
      const newData = { ...prev };
      (newData as any)[key] = e?.nativeEvent?.text;
      return newData;
    });
  };

  const changeCategory = (id: number) => {
    if (userCategories.find((item) => item.id === id)) {
      setUserCategories((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setUserCategories((prev) => [...prev, categories.find((item) => item.id === id)!]);
  };

  const submitForm = async () => {
    if (Object.values(form).includes("") || Object.values(form).includes(0)) return toast({ type: "error", text: "Preencha todos os campos!" });
    if (form.password !== form.confirmPassword) return toast({ type: "error", text: "As senhas devem ser iguais!" });
    if (userCategories.length === 0) return toast({ type: "error", text: "Selecione pelo menos uma categoria!" });

    const newForm = { ...form, musicalGenders: userCategories.map((item) => item.name) };
    handleLoading(true);
    await SignUp({ ...newForm, scale: Number(newForm.scale) }).catch(() => handleLoading(false));
    handleLoading(false);
  };

  useLayoutEffect(() => {
    (async () => {
      const categories = await GetCategories();
      if (categories) setCategories(categories);
    })();
  }, []);

  return { categories, form, setFormValue, changeCategory, userCategories, submitForm };
}
