import { MdContentPaste } from "react-icons/md"
import MnemonicInputs, { MnemonicInputsProps } from "./mnemonic-inputs"
interface LeftSideProps extends MnemonicInputsProps {
    setSeedPhrase:(val:boolean)=>void
}
const LeftSide = (props:LeftSideProps) => {
    const handelContinue = ()=>{
        props.setSeedPhrase(true)
    }
    return <div className="flex flex-1 flex-col gap-8">
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
        <MnemonicInputs WORD_COUNT={props.WORD_COUNT} words={props.words} setWords={props.setWords}/>

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-sm font-semibold transition hover:bg-gray-700">
                <span className="material-symbols-outlined text-lg">
                    <MdContentPaste />
                </span>
                Paste from clipboard
            </button>

            <button className="flex-1 rounded-lg bg-primary px-8 py-3 text-lg font-bold shadow-lg shadow-primary/20 transition hover:bg-blue-600" onClick={handelContinue}
            disabled={props.words.length !=12}>
                Continue
            </button>
        </div>
    </div>
}
export default LeftSide