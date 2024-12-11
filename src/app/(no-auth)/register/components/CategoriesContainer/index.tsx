import { ActivityIndicator, ScrollView } from "react-native";
import { CategoriesModel } from "@/data/models";
import { Category } from "../Category";

export function CategoriesContainer({ ...props }) {
  const { categories } = props;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2" className="max-w-[250px] mt-4">
      {categories.length === 0 ? (
        <ActivityIndicator />
      ) : (
        categories.map((category: CategoriesModel.ICategory) => <Category key={category.id} {...category} {...props} />)
      )}
    </ScrollView>
  );
}
