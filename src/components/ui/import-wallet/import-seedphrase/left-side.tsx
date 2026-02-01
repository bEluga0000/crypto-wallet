import { MdContentPaste } from "react-icons/md"
import MnemonicInputs, { MnemonicInputsProps } from "./mnemonic-inputs"
import ProgressiveBar from "./progressivebar"
interface LeftSideProps extends MnemonicInputsProps {
    setSeedPhrase: (val: boolean) => void
}
const LeftSide = (props: LeftSideProps) => {
    const handelContinue = () => {
        props.setSeedPhrase(true)
    }
    const isValidMnemonic =
        props.words.length === 12 &&
        props.words.every((w) => w.trim().length > 0);
    return <div className="flex flex-1 flex-col gap-8">
        <ProgressiveBar step={1} label="Paste Mnemonic" />

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
        <MnemonicInputs WORD_COUNT={props.WORD_COUNT} words={props.words} setWords={props.setWords} />

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row">

            <button
                onClick={handelContinue}
                disabled={!isValidMnemonic}
                className="
    flex-1 rounded-lg px-8 py-3 text-lg font-bold
    bg-primary shadow-lg shadow-primary/20
    transition
    bg-blue-300
    hover:bg-blue-600
    cursor-pointer
    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:hover:bg-primary
  "
            >
                Continue
            </button>
        </div>
    </div>
}
export default LeftSide