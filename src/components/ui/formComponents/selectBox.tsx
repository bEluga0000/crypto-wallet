import * as Select from "@radix-ui/react-select";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

interface ItemSchema {
  label: string;
  icon: React.ReactNode;
  value: string;
}

interface SelectBoxProps {
  value: string;
  onChange: (v: string) => void;
  items: ItemSchema[];
}

const SelectBox = ({ value, onChange, items }: SelectBoxProps) => {
  const selectedItem = items.find((i) => i.value === value);

  return (
    <Select.Root value={value} onValueChange={onChange}>
      {/* Trigger */}
      <Select.Trigger className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="flex items-center gap-2">
          {selectedItem?.icon}
          <Select.Value>
            {selectedItem?.label}
          </Select.Value>
        </div>

        <FaChevronDown className="h-4 w-4 text-slate-400" />
      </Select.Trigger>

      {/* Dropdown */}
      <Select.Portal>
        <Select.Content className="z-50 overflow-hidden rounded-xl border border-white/10 bg-[#0b1428] shadow-xl">
          <Select.Viewport className="p-1">
            {items.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                className="relative flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 outline-none hover:bg-white/10 data-[state=checked]:text-white"
              >
                {/* Icon */}
                <span className="text-slate-400">{item.icon}</span>

                {/* Label */}
                <Select.ItemText>{item.label}</Select.ItemText>

                {/* Check */}
                <Select.ItemIndicator className="absolute right-2">
                  <FaCheck className="h-4 w-4 text-blue-400" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectBox;