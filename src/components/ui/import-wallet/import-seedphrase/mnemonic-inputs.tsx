"use client";
export type MnemonicInputsProps = {
    WORD_COUNT:number
    words:string[]
    setWords:(value:string[])=>void
}
const MnemonicInputs:React.FC<MnemonicInputsProps> = ({
    WORD_COUNT,
    words,
    setWords
}) => {
  const handleChange = (index: number, value: string) => {
    const next = [...words];
    next[index] = value.toLowerCase().trim();
    setWords(next);
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const text = e.clipboardData.getData("text").trim();

    const pastedWords = text.split(/\s+/);
    if (pastedWords.length > 1) {
      e.preventDefault();
      const next = [...words];
      pastedWords.slice(0, WORD_COUNT).forEach((word, i) => {
        next[i] = word.toLowerCase();
      });
      setWords(next);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {words.map((word, i) => (
        <div key={i} className="relative">
          <span className="absolute left-3 top-1/2 w-4 -translate-y-1/2 text-xs font-bold text-gray-600">
            {i + 1}.
          </span>

          <input
            type="text"
            value={word}
            placeholder="Word"
            onChange={(e) => handleChange(i, e.target.value)}
            onPaste={(e) => handlePaste(e, i)}
            className="mnemonic-input w-full rounded-lg border border-gray-800 bg-card-dark py-3 pl-9 pr-4 text-sm text-white placeholder-gray-600 transition-all focus:outline-none"
          />
        </div>
      ))}
    </div>
  );
};

export default MnemonicInputs;