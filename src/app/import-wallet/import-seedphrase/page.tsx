"use client";

const ImportSeedPhrase = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-gray-800 px-4 py-3 md:px-10">
          <div className="flex items-center gap-4">
            <div className="flex size-6 items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">
                account_balance_wallet
              </span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">CryptoVault</h2>
          </div>

          <div
            className="size-10 rounded-full border border-gray-700 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF8YocuQQjNfcrK7Xxu5Ymi1EBZtGF1gHf3BTBDW6x_g2R49MI5eK0LYO6G-8GP2HtDLrNXOKmmWVUVJ82QU97A6PzsEizPdkCaMgBzwSY17zz-FJFUh-1gzlNTFBPBGmnz4kfxFDJ9AJ2TKrtPdFoDAbxvujeQGNiqzXdBrbyeYvu6EcCSTOfMh8KlZcGgVY18HLP2AQ3MznD54Nlr3Z1Eqi_km6AQ_a-d4pYb9R3jn18bSobYOmfAXc9YYzMPH7dl6YHMZwFTmM")',
            }}
          />
        </header>

        {/* Main */}
        <main className="flex flex-1 justify-center px-4 py-10">
          <div className="flex w-full max-w-[1000px] flex-col gap-12 lg:flex-row">
            {/* Left */}
            <div className="flex flex-1 flex-col gap-8">
              {/* Progress */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-widest text-gray-400">
                  <span>Step 1 of 2</span>
                  <span>50% Complete</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-1/2 rounded-full bg-primary" />
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                  Enter Recovery Phrase
                </h1>
                <p className="text-sm text-gray-400">
                  Type your 12-word mnemonic seed phrase in the correct order to
                  recover your wallet.
                </p>
              </div>

              {/* Mnemonic Inputs */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="relative">
                    <span className="absolute left-3 top-1/2 w-4 -translate-y-1/2 text-xs font-bold text-gray-600">
                      {i + 1}.
                    </span>
                    <input
                      type="password"
                      placeholder="Word"
                      className="mnemonic-input w-full rounded-lg border border-gray-800 bg-card-dark py-3 pl-9 pr-4 text-sm text-white placeholder-gray-600 transition-all focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-sm font-semibold transition hover:bg-gray-700">
                  <span className="material-symbols-outlined text-lg">
                    content_paste
                  </span>
                  Paste from clipboard
                </button>

                <button className="flex-1 rounded-lg bg-primary px-8 py-3 text-lg font-bold shadow-lg shadow-primary/20 transition hover:bg-blue-600">
                  Continue
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="flex w-full flex-col gap-6 lg:w-80">
              {/* Security Tips */}
              <div className="rounded-xl border border-gray-800 bg-card-dark p-6">
                <div className="mb-4 flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">shield</span>
                  <h3 className="font-bold">Security Tips</h3>
                </div>

                <div className="space-y-4">
                  <Tip
                    icon="gpp_maybe"
                    color="text-red-500"
                    title="Never share your phrase"
                    text="Anyone who has your seed phrase can steal your assets. Support will never ask for it."
                  />
                  <Tip
                    icon="visibility_off"
                    color="text-yellow-500"
                    title="Watch for prying eyes"
                    text="Make sure no one is looking at your screen and there are no cameras recording you."
                  />
                  <Tip
                    icon="offline_pin"
                    color="text-green-500"
                    title="Local encryption"
                    text="Your seed phrase is processed locally and never leaves your secure device environment."
                  />
                </div>
              </div>

              {/* Info */}
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-xl text-primary">
                    info
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-blue-100">
                      Common Standard
                    </p>
                    <p className="text-xs text-blue-200/70">
                      We support BIP39 standard phrases from all major wallet
                      providers.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-gray-800 px-5 py-10 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            {["Terms of Service", "Privacy Policy", "Security Audit"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="min-w-40 text-sm font-medium text-gray-500 transition hover:text-white"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <p className="mt-6 text-xs text-gray-600">
            © 2024 CryptoVault Inc. Seed phrases are locally encrypted (AES-256).
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ImportSeedPhrase;

/* Helper */
const Tip = ({
  icon,
  color,
  title,
  text,
}: {
  icon: string;
  color: string;
  title: string;
  text: string;
}) => (
  <div className="flex gap-3">
    <span
      className={`material-symbols-outlined text-lg flex-shrink-0 ${color}`}
    >
      {icon}
    </span>
    <p className="text-xs leading-relaxed text-gray-300">
      <span className="mb-1 block font-bold text-white">{title}</span>
      {text}
    </p>
  </div>
);