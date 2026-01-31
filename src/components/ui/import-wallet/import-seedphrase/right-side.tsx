import { IoMdInformationCircle } from "react-icons/io";
import { MdGppMaybe, MdOfflinePin, MdVisibilityOff } from "react-icons/md";
import { InfoBlock } from "./info-block";

type RightSideProps = {
    seedPhraseAdded: boolean;
  };
const RightSide = ({ seedPhraseAdded }: RightSideProps) => {
  return (
    <aside className="flex w-full flex-col gap-6 lg:w-80">
      {/* Security Tips */}
      <div className="rounded-xl border border-gray-800 bg-card-dark p-6">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined">shield</span>
          <h3 className="font-bold">Security Tips</h3>
        </div>

        <div className="space-y-4">
          <Tip
            icon={<MdGppMaybe />}
            color="text-red-500"
            title="Never share your phrase"
            text="Anyone who has your seed phrase can steal your assets. Support will never ask for it."
          />
          <Tip
            icon={<MdVisibilityOff />}
            color="text-yellow-500"
            title="Watch for prying eyes"
            text="Make sure no one is looking at your screen and there are no cameras recording you."
          />
          <Tip
            icon={<MdOfflinePin />}
            color="text-green-500"
            title="Local encryption"
            text="Your seed phrase is processed locally and never leaves your secure device environment."
          />
        </div>
      </div>

      {/* Dynamic Info */}
      {!seedPhraseAdded ? (
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
          <InfoBlock
            title="Common Standard"
            text="We support BIP39 standard phrases from all major wallet providers."
          />
        </div>
      ) : (
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-6 space-y-3">
          <InfoBlock
            title="How accounts are imported"
            text="We automatically discover accounts that have activity or balance using standard derivation paths."
          />

          <p className="text-xs text-amber-200/80 leading-relaxed">
            If an account has <strong>zero balance</strong> and{" "}
            <strong>no transactions</strong>, it will not appear automatically.
            This does <strong>not</strong> mean the account doesn’t exist.
          </p>

          <p className="text-xs text-amber-200/80 leading-relaxed">
            You can recreate the exact same account by clicking{" "}
            <strong>“Add Account”</strong>. Wallets derive accounts
            deterministically from your recovery phrase.
          </p>
        </div>
      )}
    </aside>
  );
};

export default RightSide;

const Tip = ({
    icon,
    color,
    title,
    text,
  }: {
    icon: React.ReactNode;
    color: string;
    title: string;
    text: string;
  }) => (
    <div className="flex gap-3">
      <span className={`material-symbols-outlined text-lg flex-shrink-0 ${color}`}>
        {icon}
      </span>
      <p className="text-xs leading-relaxed text-gray-300">
        <span className="mb-1 block font-bold text-white">{title}</span>
        {text}
      </p>
    </div>
  );