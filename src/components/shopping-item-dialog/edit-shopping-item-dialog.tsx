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
import { Edit } from "lucide-react";
import ShoppingItemForm from "./shopping-item-form";
import { useShoppingListStore } from "@/store/shopping-list-store";
import { useProductValidation } from "./useProductValidation";

const EditShoppingItemDialog = ({ id }: { id: string }) => {
  const { getById, updateShoppingItem } = useShoppingListStore();
  const [isOpen, setIsOpen] = useState(false);

  const result = getById(id);

  const initProductState = {
    name: result ? result.name : "",
    category: result ? result.category : "",
    quantity: result ? result.quantity : 0,
  };

  const [product, setProduct] = useState(initProductState);

  const { errors, resetErrors, validate } = useProductValidation(product);

  const handleOpenChange = (value: boolean) => {
    if (value) {
      setProduct(initProductState);
      resetErrors();
    }
    setIsOpen(value);
  };

  const handleSubmit = () => {
    if (validate()) {
      if (!result) return;
      updateShoppingItem({
        ...result,
        ...product,
      });
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Edit /> Edit item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription></DialogDescription>
        <DialogDescription></DialogDescription>
        <DialogHeader>
          <DialogTitle>Edit shopping item</DialogTitle>
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
          <Button onClick={handleSubmit}>Save Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditShoppingItemDialog;
