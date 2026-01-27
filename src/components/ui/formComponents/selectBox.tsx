import * as Select from "@radix-ui/react-select";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const SelectBox = ({
    value,
    onChange,
    items,
}: {
    value: string;
    onChange: (v: string) => void;
    items: readonly string[];
}) => (
    <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40">
            <Select.Value />
            <FaChevronDown className="h-4 w-4 text-slate-400" />
        </Select.Trigger>

        <Select.Portal>
            <Select.Content className="z-50 overflow-hidden rounded-xl border border-white/10 bg-[#0b1428] shadow-xl">
                <Select.Viewport className="p-1">
                    {items.map((item) => (
                        <Select.Item
                            key={item}
                            value={item}
                            className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-slate-300 outline-none hover:bg-white/10 data-[state=checked]:text-white"
                        >
                            <Select.ItemText>{item}</Select.ItemText>
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
export default SelectBox