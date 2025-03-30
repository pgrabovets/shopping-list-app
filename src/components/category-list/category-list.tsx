import TabList from "@/components/shared/tab-list";
import { PRODUCT_CATEGORIES } from "@/consts";
import { useShoppingListStore } from "@/store/shopping-list-store";

const CategoryList = () => {
  const currentCategory = useShoppingListStore(
    (state) => state.currentCategory
  );

  const setCurrentCategory = useShoppingListStore(
    (state) => state.setCurrentCategory
  );

  const handleCategotyChange = (value: string) => {
    if (value === "All") {
      setCurrentCategory("");
    } else {
      setCurrentCategory(value);
    }
  };

  const active = currentCategory ? currentCategory : "All";

  return (
    <TabList
      tabs={["All", ...PRODUCT_CATEGORIES]}
      active={active}
      onChange={handleCategotyChange}
    />
  );
};

export default CategoryList;
