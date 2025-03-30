import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";

type QuantitySelectProps = {
  value: number;
  onChange: (value: number) => void;
};

const QuantitySelect = ({ value, onChange }: QuantitySelectProps) => {
  const increase = () => {
    onChange(value + 1);
  };

  const decrease = () => {
    const result = value - 1;
    onChange(result < 0 ? 0 : result);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onChange(parseInt(e.target.value));
    } else {
      onChange(0);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <Button variant="outline" onClick={decrease}>
        <Minus />
      </Button>
      <Input
        value={value}
        onChange={handleValueChange}
        className="col-span-3"
      />
      <Button variant="outline" onClick={increase}>
        <Plus />
      </Button>
    </div>
  );
};

export default QuantitySelect;
