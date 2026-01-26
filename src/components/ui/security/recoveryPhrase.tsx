"use client";

import { useEffect, useState } from "react";
import {
  MdVisibilityOff,
  MdOutlineContentCopy,
  MdOutlineFileDownload,
} from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { useRouter } from "next/navigation";
import { MnemonicWord } from "./mnemonicWord";

export const SecretRecoveryPhrase = () => {
  const router = useRouter();
  const [mnemonicWords, setMnemonicWords] = useState<string[] | null>(null);

  useEffect(() => {
    const storedMnemonic = localStorage.getItem("mnemonic");
    if (!storedMnemonic) {
      setMnemonicWords(null);
      return;
    }
    setMnemonicWords(storedMnemonic.trim().split(/\s+/));
  }, []);

  const hasMnemonic = mnemonicWords && mnemonicWords.length > 0;

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Secret Recovery Phrase
        </h2>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${hasMnemonic
            ? "bg-red-500/15 text-red-400"
            : "bg-slate-500/15 text-slate-400"
            }`}
        >
          {hasMnemonic ? "Unsecured" : "Not Generated"}
        </span>
      </div>

      {/* =========================
          STATE 1: NO MNEMONIC
      ========================== */}
      {!hasMnemonic && (
        <div className="rounded-2xl border border-white/10 bg-[#0b1428] p-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            Recovery Phrase Not Found
          </h3>
          <p className="mt-2 text-slate-400">
            Go to the home page to generate a new wallet and create your recovery
            phrase.
          </p>

          <button
            onClick={() => router.push("/")}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Go to Home
          </button>
        </div>
      )}

      {/* =========================
          STATE 2: MNEMONIC EXISTS
      ========================== */}
      {hasMnemonic && (
        <>
          {/* Glass Container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1b34] to-[#0b1428] p-6">
            {/* Mnemonic Grid (only if present) */}
            <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
              {mnemonicWords!.map((word, i) => (
                <MnemonicWord key={i} index={i} word={word} />
              ))}
            </div>

            {/* Glass Overlay */}
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
                  Make sure no one is looking at your screen before revealing your private keys.
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
              <button className="flex items-center gap-2 hover:text-white">
                <MdOutlineContentCopy className="text-lg" />
                Copy to Clipboard
              </button>
              <button className="flex items-center gap-2 hover:text-white">
                <MdOutlineFileDownload className="text-lg" />
                Download Backup
              </button>
            </div>

            <div className="flex items-center gap-1 text-xs italic text-slate-500">
              <IoMdLock className="text-sm" />
              Stored locally on this device
            </div>
          </div>
        </>
      )}
    </section>
  );
};