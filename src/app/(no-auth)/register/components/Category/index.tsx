import { Text, TouchableOpacity } from "react-native";

import { CategoriesModel } from "@/data/models";
import { cn } from "@/utils/cn";

import { IUseRegister } from "../../models";

interface props extends CategoriesModel.ICategory, Partial<IUseRegister> {}

export function Category({ id, name, changeCategory, userCategories }: props) {
  const selected = userCategories?.map((c) => c.id)?.includes(id);

  return (
    <TouchableOpacity
      className={cn("px-3 py-2 bg-theme-gray-1 rounded-md", { "bg-theme-blue-2": selected })}
      onPress={() => {
        changeCategory && changeCategory(id);
      }}
    >
      <Text className={cn("text-center", { "text-white": selected })}>{name}</Text>
    </TouchableOpacity>
  );
}
