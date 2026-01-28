import { CopyOptions, copyToClipboard } from "@/utils/copyToClipBoard"
import { useEffect, useState } from "react"
import { LuCopyCheck } from "react-icons/lu"
import { MdContentCopy, MdOutlineContentCopy } from "react-icons/md"


const CopyButton = ({ value, size, buttonText = true, options }: { value: string, size?: string, buttonText?: boolean, options: CopyOptions }) => {
    const [textCopied, setTextCopied] = useState<boolean>(false)
    const handleCopy = async () => {
        if (value) {
            await copyToClipboard(value, options);
            setTextCopied(true)
        }
    }
    useEffect(() => {
        if (!textCopied) return;

        const timer = setTimeout(() => {
            setTextCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [textCopied]);
    return <button
        onClick={handleCopy}
        className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
    >
        <span
            className={`transition-all duration-300 ${textCopied ? "scale-110 text-green-400" : "scale-100"
                }`}
        >
            {!textCopied ? (
                <MdOutlineContentCopy className={`${size ? size : "text-lg"}`} />
            ) : (
                <LuCopyCheck className={`${size ? size : "text-lg"}`} />
            )}
        </span>
        {
            buttonText && <span
                className={`transition-all duration-300 ${textCopied
                    ? "text-green-400 translate-y-0 opacity-100"
                    : "translate-y-0 opacity-100"
                    }`}
            >
                {textCopied ? "Copied" : "Copy to Clipboard"}
            </span>
        }
    </button>
}

export default CopyButton