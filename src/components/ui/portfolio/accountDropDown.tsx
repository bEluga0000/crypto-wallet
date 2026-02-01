"use client";

import * as Select from "@radix-ui/react-select";
import { FaChevronDown, FaCheck } from "react-icons/fa6";



type BalanceFilterSelectProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
};

const BalanceFilterSelect = ({
  value,
  options,
  onChange,
  placeholder = "Select",
}: BalanceFilterSelectProps) => {
  const isDisabled = options.length === 0;

  return (
    <Select.Root
      value={isDisabled ? "" : value}
      onValueChange={onChange}
      disabled={isDisabled}
    >
      <Select.Trigger
        className={`
          inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold
          ${
            isDisabled
              ? "cursor-not-allowed border-slate-300 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-800"
              : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          }
        `}
      >
        <Select.Value
          placeholder={placeholder}
        />
        {!isDisabled && <FaChevronDown className="h-3 w-3 text-slate-400" />}
      </Select.Trigger>

      {!isDisabled && (
        <Select.Portal>
          <Select.Content
            side="bottom"
            sideOffset={6}
            avoidCollisions={false}
            className="z-50 w-[var(--radix-select-trigger-width)] rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-[#16181d]"
          >
            <Select.Viewport className="max-h-48 overflow-y-auto p-1">
              {options.map((opt,ind) => (
                <Select.Item
                  key={ind}
                  value={opt}
                  className="relative flex cursor-pointer items-center rounded-md px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
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
      )}
    </Select.Root>
  );
};

export default BalanceFilterSelect;