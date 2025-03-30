import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import EditShoppingItemDialog from "@/components/shopping-item-dialog/edit-shopping-item-dialog";

type ShoppingListItemProps = {
  id: string;
  name: string;
  isPurchased: boolean;
  quantity: number;
  category: string;
  onRemove: (id: string) => void;
  onPurchasedChange: (isPurchased: boolean) => void;
};

const ShoppingListItem = ({
  id,
  name,
  isPurchased,
  quantity,
  category,
  onRemove,
  onPurchasedChange,
}: ShoppingListItemProps) => {
  const handlePurchaseChange = (checked: boolean) => {
    onPurchasedChange(checked);
  };

  return (
    <div className="flex items-center justify-between border-b-1 border-gray-200 pb-2">
      <div className="flex gap-4 items-center">
        <Checkbox
          checked={isPurchased}
          onCheckedChange={handlePurchaseChange}
        />
        <div className={clsx({ "line-through text-gray-500": isPurchased })}>
          {name}
        </div>
        <Badge variant="secondary">{quantity}</Badge>
        <Badge variant="secondary">{category}</Badge>
      </div>
      <div className="flex gap-1">
        <EditShoppingItemDialog id={id} />
        <Button variant="ghost" onClick={() => onRemove(id)}>
          <Trash /> Remove
        </Button>
      </div>
    </div>
  );
};

export default ShoppingListItem;
