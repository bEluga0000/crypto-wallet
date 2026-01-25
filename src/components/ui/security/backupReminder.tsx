import { IoMdWarning } from "react-icons/io";

export const BackupReminder = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f1b34] to-[#0b1428] p-6 shadow-lg shadow-blue-900/20">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-blue-500/10" />

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
            <IoMdWarning className="text-2xl" />
          </div>

          {/* Text */}
          <div className="space-y-1">
            <p className="text-base font-semibold text-white">
              Backup Reminder
            </p>
            <p className="max-w-xl text-sm text-slate-300">
              Your wallet is not backed up. If you lose this device, your funds
              are gone forever. Please write down your recovery phrase and store
              it in a safe place.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-500 px-6 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40">
          Start Backup
        </button>
      </div>
    </div>
  );
};