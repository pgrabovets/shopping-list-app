import ShoppingList from "@/components/shopping-list/shopping-list";
import AddShoppingItemDialog from "@/components/shopping-item-dialog/add-shopping-item-dialog";
import CategoryList from "@/components/category-list/category-list";

const App = () => {
  return (
    <div className="max-w-[960px] mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold my-6">Shopping List</h1>
        <AddShoppingItemDialog />
      </div>
      <CategoryList />
      <ShoppingList />
    </div>
  );
};

export default App;
