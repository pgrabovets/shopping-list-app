import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategorySelect from "@/components/shared/category-select";
import { PRODUCT_CATEGORIES } from "@/consts";
import QuantitySelect from "@/components/shared/quantity-select";

type Product = {
  name: string;
  category: string;
  quantity: number;
};

type FormProps = {
  product: Product;
  errors?: {
    name: boolean;
    category: boolean;
  };
  onChange: (value: Product) => void;
};

const ShoppingItemForm = ({ product, errors, onChange }: FormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Product
        </Label>
        <Input
          aria-invalid={!!errors?.name}
          required
          id="name"
          value={product.name}
          placeholder="Type product name"
          onChange={(e) => {
            onChange({
              ...product,
              name: e.target.value,
            });
          }}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Category</Label>
        <div className="col-span-3">
          <CategorySelect
            error={!!errors?.category}
            value={product.category}
            categories={PRODUCT_CATEGORIES}
            onChange={(value) => {
              onChange({
                ...product,
                category: value,
              });
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Quantity</Label>
        <div className="col-span-3">
          <QuantitySelect
            value={product.quantity}
            onChange={(value) => {
              onChange({
                ...product,
                quantity: value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingItemForm;
