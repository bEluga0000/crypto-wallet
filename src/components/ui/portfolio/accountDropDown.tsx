"use client";

import * as Select from "@radix-ui/react-select";
import { FaChevronDown, FaCheck } from "react-icons/fa6";

type BalanceFilterSelectProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const BalanceFilterSelect = ({
  value,
  options,
  onChange,
}: BalanceFilterSelectProps) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      {/* Trigger */}
      <Select.Trigger
        aria-label="Select balance filter"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
      >
        <Select.Value />
        <Select.Icon>
          <FaChevronDown className="h-3 w-3 text-slate-400" />
        </Select.Icon>
      </Select.Trigger>

      {/* Dropdown */}
      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          sideOffset={6}
          avoidCollisions={false}
          className="z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-[#16181d]"
        >
          <Select.Viewport className="max-h-48 overflow-y-auto p-1">
            {options.map((opt) => (
              <Select.Item
                key={opt}
                value={opt}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-slate-700 outline-none transition hover:bg-slate-100 data-[state=checked]:font-semibold dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Select.ItemText>{opt}</Select.ItemText>

                <Select.ItemIndicator className="absolute right-2">
                  <FaCheck className="h-3 w-3 text-primary" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default BalanceFilterSelect;