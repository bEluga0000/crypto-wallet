
import { IoMdInformationCircle } from "react-icons/io";
import { MdGppMaybe, MdOfflinePin, MdVisibilityOff } from "react-icons/md";
const RightSide = () => {
    return <aside className="flex w-full flex-col gap-6 lg:w-80">
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

        {/* Info */}
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
            <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-xl text-primary">
                    <IoMdInformationCircle />
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
}
export default RightSide

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