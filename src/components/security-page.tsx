import { IoMdWarning } from "react-icons/io";
import { BackupReminder } from "./ui/security/backupReminder";

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

      {/* Main */}
      <main className="mx-auto flex w-full max-w-[960px] flex-1 flex-col gap-6 px-4 py-10">
        {/* Title */}
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            Security & Recovery
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage your private keys and mnemonic recovery phrase to ensure
            long-term fund safety.
          </p>
        </div>

        {/* Backup Reminder */}
        <BackupReminder />

        {/* Recovery Phrase */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Secret Recovery Phrase</h2>
            <span className="rounded-full bg-red-900/30 px-2.5 py-0.5 text-xs font-medium text-red-400">
              Unsecured
            </span>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50 md:grid-cols-4">
              {mnemonicWords.map((word, i) => (
                <div
                  key={word}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <span className="font-mono text-xs text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="select-none font-mono blur-sm">
                    {word}
                  </span>
                </div>
              ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-900/60 backdrop-blur">
              <div className="max-w-sm text-center">
                <div className="mx-auto mb-4 rounded-full bg-primary/20 p-4">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    visibility_off
                  </span>
                </div>
                <p className="text-lg font-bold">
                  Reveal Recovery Phrase
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Make sure no one is looking at your screen.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-bold text-white shadow-lg shadow-primary/20 hover:bg-blue-600">
                  <span className="material-symbols-outlined text-base">
                    visibility
                  </span>
                  Reveal Phrase
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 hover:text-white">
                <span className="material-symbols-outlined text-lg">
                  content_copy
                </span>
                Copy to Clipboard
              </button>
              <button className="flex items-center gap-2 hover:text-white">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Download Backup
              </button>
            </div>
            <span className="flex items-center gap-1 text-xs italic">
              <span className="material-symbols-outlined text-sm">lock</span>
              Stored locally on this device
            </span>
          </div>
        </section>

        {/* Best Practices */}
        <section className="border-t border-slate-200 pt-6 dark:border-slate-800">
          <h3 className="mb-4 font-bold">Security Best Practices</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {bestPractices.map((item) => (
              <div key={item.title}>
                <span className="material-symbols-outlined text-primary">
                  {item.icon}
                </span>
                <p className="mt-2 text-sm font-bold">{item.title}</p>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-900/30 bg-red-900/10 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-red-400">Delete Wallet Data</p>
              <p className="text-sm text-slate-400">
                This will remove all wallet information from this device.
              </p>
            </div>
            <button className="rounded-lg border border-red-500 px-4 py-2 text-sm font-bold text-red-500 transition-all hover:bg-red-500 hover:text-white">
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

const mnemonicWords = [
  "acoustic",
  "venture",
  "glance",
  "mystery",
  "pioneer",
  "wisdom",
  "harvest",
  "orbit",
  "quartz",
  "safari",
  "uphold",
  "yacht",
];

const bestPractices = [
  {
    icon: "offline_bolt",
    title: "Offline Storage",
    desc: "Store your phrase on physical paper or cold storage.",
  },
  {
    icon: "diversity_3",
    title: "Never Share",
    desc: "Anyone with your phrase can steal your funds.",
  },
  {
    icon: "cloud_off",
    title: "No Cloud Backup",
    desc: "Never upload your phrase to cloud services.",
  },
];