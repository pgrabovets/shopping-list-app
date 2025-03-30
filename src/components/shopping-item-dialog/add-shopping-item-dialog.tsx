import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import ShoppingItemForm from "./shopping-item-form";
import { useShoppingListStore } from "@/store/shopping-list-store";
import { useProductValidation } from "./useProductValidation";

const initProductState = {
  name: "",
  category: "",
  quantity: 0,
};

const AddShoppingItemDialog = () => {
  const { addShoppingItem } = useShoppingListStore();

  const [product, setProduct] = useState(initProductState);
  const [isOpen, setIsOpen] = useState(false);

  const { errors, resetErrors, validate } = useProductValidation(product);

  const handleSubmit = () => {
    if (validate()) {
      addShoppingItem(product.name, product.category, product.quantity);
      setProduct(initProductState);
      setIsOpen(false);
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (value) {
      setProduct(initProductState);
      resetErrors();
    }
    setIsOpen(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <Plus /> Add item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription></DialogDescription>
        <DialogHeader>
          <DialogTitle>Add shopping item</DialogTitle>
        </DialogHeader>
        <ShoppingItemForm
          errors={errors}
          product={product}
          onChange={(value) => {
            resetErrors();
            setProduct(value);
          }}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Add Item to list
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddShoppingItemDialog;
