import ShoppingListItem from "./shopping-list-item";
import { useShoppingListStore } from "@/store/shopping-list-store";

const ShoppingList = () => {
  const { getByCurrentCategory, removeShoppingItem, updateShoppingItem } =
    useShoppingListStore();

  const items = getByCurrentCategory();

  if (items.length === 0) {
    return (
      <div className="flex w-full justify-center mt-38">
        <p className="text-lg text-gray-500 font-semibold">
          No items in the list
        </p>
      </div>
    );
  }

  return (
    <div className="my-8 flex flex-col gap-2">
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          id={item.id}
          name={item.name}
          isPurchased={item.isPurchased}
          quantity={item.quantity}
          category={item.category}
          onRemove={removeShoppingItem}
          onPurchasedChange={(isPurchased) => {
            updateShoppingItem({
              ...item,
              isPurchased: isPurchased,
            });
          }}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
