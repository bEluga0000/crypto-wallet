"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

type TooltipWrapperProps = {
  content: string;
  children: React.ReactNode;
};

const TooltipWrapper = ({ content, children }: TooltipWrapperProps) => {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            sideOffset={8}
            className="z-50 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg dark:bg-slate-700"
          >
            {content}
            <Tooltip.Arrow className="fill-slate-900 dark:fill-slate-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipWrapper;