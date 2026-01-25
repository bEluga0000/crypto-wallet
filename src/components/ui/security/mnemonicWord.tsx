type MnemonicWordProps = {
    index: number;
    word: string;
    blurred?: boolean;
  };
  
  export const MnemonicWord = ({
    index,
    word,
    blurred = true,
  }: MnemonicWordProps) => {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
        <span className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`select-none font-mono text-slate-300 ${
            blurred ? "blur-sm" : ""
          }`}
        >
          {word}
        </span>
      </div>
    );
  };