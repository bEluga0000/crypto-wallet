import { BiSolidWallet } from "react-icons/bi";

export default function HomePage() {
    return (
      <div className="layout-container flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e5e7eb] bg-white px-6 py-4 dark:border-gray-800 dark:bg-[#1a212f] md:px-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
              <span className="material-symbols-outlined text-[28px]">
              <BiSolidWallet />
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">CryptoHD</h2>
          </div>
  
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-green-600 dark:border-green-800/30 dark:bg-green-900/20 dark:text-green-400 md:flex">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider">
                Network: Mainnet
              </span>
            </div>
  
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f2f4] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">security</span>
            </button>
  
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f2f4] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">help</span>
            </button>
  
            <div
              className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGeURLwB50B9BYxAK0IFk5sd6_3Mq9oXJeowRnhk5_1TDbAxa9KkRfqvPNIJ7gpmMbKzDeuxWXzmw8L3giUvcZt0W9EJAG5Terldo90Enhb6rAfRfZLtKn8r4zkWfXuGXgEspugqFVapWPLQdKlpHEFPfyh327DZymO54mbvCxnAftH82WNVt52iqKk99Xaw2ovqiG1nnuu50LEnvM9JkyUBN8gXq7tSn7JdvP6kqboOM-VBE0uGK-tWtbb27I1aHACAgnFOaiDrA")',
              }}
            />
          </div>
        </header>
  
        {/* Main */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-[1024px] space-y-12">
            {/* Headline */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Welcome to Your Secure Gateway
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-[#616f89] dark:text-gray-400">
                Manage your digital assets with a professional-grade HD wallet.
                Secure, private, and non-custodial.
              </p>
            </div>
  
            {/* CTA Cards */}
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
              {/* Create */}
              <div className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-[#e5e7eb] bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-xl dark:border-gray-800 dark:bg-[#1a212f]">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-[32px]">
                    add_moderator
                  </span>
                </div>
  
                <div>
                  <h3 className="text-2xl font-bold">Create New Wallet</h3>
                  <p className="mt-2 text-[#616f89] dark:text-gray-400">
                    Generate a new 24-word recovery phrase for a fresh start.
                  </p>
                </div>
  
                <button className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary text-lg font-bold text-white transition-transform group-hover:scale-[1.02]">
                  Get Started
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
  
              {/* Import */}
              <div className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-[#e5e7eb] bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-xl dark:border-gray-800 dark:bg-[#1a212f]">
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#f0f2f4] transition-colors group-hover:bg-primary/10 group-hover:text-primary dark:bg-gray-800">
                  <span className="material-symbols-outlined text-[32px]">
                    cloud_download
                  </span>
                </div>
  
                <div>
                  <h3 className="text-2xl font-bold">Import Existing Wallet</h3>
                  <p className="mt-2 text-[#616f89] dark:text-gray-400">
                    Restore your assets using an existing seed phrase or private
                    key.
                  </p>
                </div>
  
                <button className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#f0f2f4] text-lg font-bold dark:bg-gray-800">
                  Restore Wallet
                  <span className="material-symbols-outlined">
                    settings_backup_restore
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-[#e5e7eb] px-6 py-6 text-xs font-medium uppercase tracking-widest text-[#616f89] dark:border-gray-800 dark:text-gray-500 md:flex-row md:px-20">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-green-500" />
              API Connected
            </span>
            <span>v2.4.1-stable</span>
          </div>
  
          <div className="flex gap-8">
            <a className="hover:text-primary">Privacy Policy</a>
            <a className="hover:text-primary">Terms of Service</a>
            <a className="hover:text-primary">Security Audit</a>
          </div>
        </footer>
      </div>
    );
  }