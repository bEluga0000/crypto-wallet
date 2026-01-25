export default function ImportWalletPage() {
    return (
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="mx-auto flex w-full max-w-[960px] items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-800 md:px-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">
              account_balance_wallet
            </span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              CryptoVault
            </h2>
          </div>
  
          <nav className="hidden items-center gap-8 md:flex">
            {["Dashboard", "Assets", "Security", "Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-900 transition-colors hover:text-primary dark:text-gray-200"
              >
                {item}
              </a>
            ))}
          </nav>
  
          <div
            className="size-10 rounded-full border border-gray-200 bg-cover bg-center dark:border-gray-700"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF8YocuQQjNfcrK7Xxu5Ymi1EBZtGF1gHf3BTBDW6x_g2R49MI5eK0LYO6G-8GP2HtDLrNXOKmmWVUVJ82QU97A6PzsEizPdkCaMgBzwSY17zz-FJFUh-1gzlNTFBPBGmnz4kfxFDJ9AJ2TKrtPdFoDAbxvujeQGNiqzXdBrbyeYvu6EcCSTOfMh8KlZcGgVY18HLP2AQ3MznD54Nlr3Z1Eqi_km6AQ_a-d4pYb9R3jn18bSobYOmfAXc9YYzMPH7dl6YHMZwFTmM")',
            }}
          />
        </header>
  
        {/* Main */}
        <main className="mx-auto w-full max-w-[960px] flex-1 px-4 py-12">
          {/* Heading */}
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-base">lock</span>
              Secure Import
            </div>
  
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Import Your Wallet
            </h1>
  
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Select your existing wallet provider to sync your assets. All imports
              are encrypted locally and never leave your device.
            </p>
          </div>
  
          {/* Wallet Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wallets.map((wallet) => (
              <div
                key={wallet.title}
                className={`group cursor-pointer rounded-xl border p-6 transition-all ${
                  wallet.primary
                    ? "border-dashed border-primary bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20"
                    : "border-gray-200 bg-white hover:border-primary dark:border-gray-800 dark:bg-gray-900"
                }`}
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${
                    wallet.primary
                      ? "bg-white dark:bg-gray-900"
                      : "bg-background-light dark:bg-gray-800"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${
                      wallet.primary
                        ? "text-primary"
                        : "text-gray-700 group-hover:text-primary dark:text-gray-300"
                    }`}
                  >
                    {wallet.icon}
                  </span>
                </div>
  
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {wallet.title}
                </h3>
  
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {wallet.desc}
                </p>
              </div>
            ))}
          </div>
  
          {/* Help */}
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary dark:text-gray-400"
            >
              <span className="material-symbols-outlined text-lg">help</span>
              Need help? View our security guide.
            </a>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="border-t border-gray-200 px-6 py-16 text-center dark:border-gray-800">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <a className="hover:text-primary">Terms of Service</a>
            <a className="hover:text-primary">Privacy Policy</a>
            <a className="hover:text-primary">Security Audit</a>
          </div>
  
          <p className="mt-8 text-sm text-gray-400 dark:text-gray-500">
            © 2024 CryptoVault Inc. Encrypted & Secure.
          </p>
        </footer>
      </div>
    );
  }
  
  const wallets = [
    {
      title: "Backpack",
      icon: "backpack",
      desc: "Import using your Backpack account securely.",
    },
    {
      title: "Phantom",
      icon: "auto_fix_high",
      desc: "Connect your Phantom Solana wallet extension.",
    },
    {
      title: "MetaMask",
      icon: "token",
      desc: "The most popular Ethereum & ERC-20 wallet.",
    },
    {
      title: "Trust Wallet",
      icon: "verified_user",
      desc: "Import via mobile app or browser extension.",
    },
    {
      title: "Other Wallet",
      icon: "more_horiz",
      desc: "Import via Seed Phrase, Private Key, or Hardware.",
    },
    {
      title: "Hardware Wallet",
      icon: "usb",
      desc: "Connect your Ledger, Trezor, or Keystone.",
      primary: true,
    },
  ];