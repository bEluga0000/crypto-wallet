export default function SecurityPage() {
    return (
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 px-10 py-3 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">
              CryptoWallet Pro
            </h2>
          </div>
  
          <div className="flex items-center gap-8">
            <nav className="flex gap-9 text-sm font-medium">
              {["Dashboard", "Assets", "Transactions", "Security"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`transition-colors hover:text-primary ${
                    item === "Security" ? "text-primary" : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
  
            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined text-[20px]">
                  settings
                </span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
              </button>
            </div>
  
            <div
              className="size-10 rounded-full border border-slate-300 bg-cover bg-center dark:border-slate-700"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCs6_F0BKoEdx8Za8Y7ROTWY53xL9JeJUMoM-EupcMy-H2dZg0zenXxNt3QnLn75sAWsbQOzyjVuIsl48lk-32zS1YaO7-_jZcFqhy6JnrhOlvkLkznqj5D47LdLGf_o5s8vKTwceeNBuksPSXF01nMsWW9VhLSEP0QX3i_InvVzYe5oBxrVL5LUJ7bHJEP1-WWwlPwiywu8U_UdpMERmdtNSR-25M-eptPhY3FhqD4P1vib3QNGQh7IP2s9iu6mXjImWv1HpIkc9w")',
              }}
            />
          </div>
        </header>
  
        {/* Main */}
        <main className="mx-auto flex w-full max-w-[960px] flex-1 flex-col gap-6 px-4 py-10">
          {/* Breadcrumb */}
          <nav className="flex gap-2 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:underline">
              Settings
            </a>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">
              Security & Recovery
            </span>
          </nav>
  
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
          <div className="flex flex-col gap-4 rounded-xl border border-primary/30 bg-primary/10 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="rounded-lg bg-primary p-2">
                <span className="material-symbols-outlined text-white">
                  warning
                </span>
              </div>
              <div>
                <p className="font-bold text-white">Backup Reminder</p>
                <p className="text-sm text-slate-300">
                  Your wallet is not backed up. If you lose this device, your funds
                  are gone forever.
                </p>
              </div>
            </div>
            <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-600">
              Start Backup
            </button>
          </div>
  
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