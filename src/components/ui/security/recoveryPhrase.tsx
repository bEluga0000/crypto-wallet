import {
    MdVisibilityOff,
    MdOutlineContentCopy,
    MdOutlineFileDownload,
  } from "react-icons/md";
  import { IoMdLock } from "react-icons/io";
import { MnemonicWord } from "./mnemonicWord";
  
  export const SecretRecoveryPhrase = () => {
    return (
      <section className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Secret Recovery Phrase
          </h2>
          <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-medium text-red-400">
            Unsecured
          </span>
        </div>
  
        {/* Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/0 bg-gradient-to-br from-[#0f1b34] to-[#0b1428] p-6">
          {/* Mnemonic Grid (Blurred but Visible) */}
          <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
            {mnemonicWords.map((word, i) => (
              <MnemonicWord key={i} index={i} word={word} />
            ))}
          </div>
  
          {/* Glass Overlay (NOT fully opaque) */}
          <div className="pointer-events-none absolute inset-0 bg-black/60 backdrop-blur-md" />
  
          {/* Center CTA */}
          <div className="pointer-events-auto absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex max-w-sm flex-col items-center text-center px-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                <MdVisibilityOff className="text-2xl text-blue-400" />
              </div>
  
              <h3 className="text-lg font-semibold text-white">
                Reveal Recovery Phrase
              </h3>
  
              <p className="mt-1 text-sm text-slate-400">
                Make sure no one is looking at your screen before revealing your
                private keys.
              </p>
  
              <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40">
                <MdVisibilityOff className="text-lg" />
                Reveal Phrase
              </button>
            </div>
          </div>
        </div>
  
        {/* Actions */}
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex gap-5">
            <button className="flex items-center gap-2 transition-colors hover:text-white">
              <MdOutlineContentCopy className="text-lg" />
              Copy to Clipboard
            </button>
  
            <button className="flex items-center gap-2 transition-colors hover:text-white">
              <MdOutlineFileDownload className="text-lg" />
              Download Backup
            </button>
          </div>
  
          <div className="flex items-center gap-1 text-xs italic text-slate-500">
            <IoMdLock className="text-sm" />
            Stored locally on this device
          </div>
        </div>
      </section>
    );
  };
  
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