import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { CategoriesModel, RegisterModel } from "@/data/models";

export interface IUseRegister {
  categories: CategoriesModel.ICategory[];
  form: RegisterModel.IForm;
  setFormValue: (e: NativeSyntheticEvent<TextInputChangeEventData>, key: keyof RegisterModel.IForm) => void;
  changeCategory: (id: number) => void;
  userCategories: CategoriesModel.ICategory[];
  submitForm: () => void;
}
