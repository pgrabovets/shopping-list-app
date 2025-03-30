import { Button } from "@/components/ui/button";

type TabListProps = {
  tabs: string[];
  active?: string;
  onChange?: (value: string) => void;
};

const TabList = ({ tabs, active, onChange }: TabListProps) => {
  const handleCategotyChange = (value: string) => {
    onChange?.(value);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <Button
          onClick={() => handleCategotyChange(tab)}
          key={tab}
          variant={tab !== active ? "secondary" : "default"}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default TabList;
