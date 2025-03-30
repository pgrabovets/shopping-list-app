import AddShoppingItemDialog from "@/components/shopping-item-dialog/add-shopping-item-dialog";

const AppHeader = () => {
  return (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-3xl font-bold my-6">Shopping List</h1>
      <AddShoppingItemDialog />
    </div>
  );
};

export default AppHeader;
