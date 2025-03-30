import AppHeader from "@/components/app-header/app-header";
import ShoppingList from "@/components/shopping-list/shopping-list";
import CategoryList from "@/components/category-list/category-list";

const App = () => {
  return (
    <div className="max-w-[960px] mx-auto">
      <AppHeader />
      <CategoryList />
      <ShoppingList />
    </div>
  );
};

export default App;
