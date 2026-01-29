const MnemonicInputs = () => {
    return <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="relative">
                <span className="absolute left-3 top-1/2 w-4 -translate-y-1/2 text-xs font-bold text-gray-600">
                    {i + 1}.
                </span>
                <input
                    type="password"
                    placeholder="Word"
                    className="mnemonic-input w-full rounded-lg border border-gray-800 bg-card-dark py-3 pl-9 pr-4 text-sm text-white placeholder-gray-600 transition-all focus:outline-none"
                />
            </div>
        ))}
    </div>
}
export default MnemonicInputs