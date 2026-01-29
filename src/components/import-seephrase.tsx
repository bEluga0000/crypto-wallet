"use client";
import LeftSide from "./ui/import-wallet/import-seedphrase/left-side";
import RightSide from "./ui/import-wallet/import-seedphrase/right-side";

const ImportSeedPhrasePage = () => {
    return (
        <div className="min-h-screen bg-background-dark text-white font-display">
            <div className="flex min-h-screen flex-col">
                {/* Main */}
                <main className="flex flex-1 justify-center px-4 py-10">
                    <div className="flex w-full max-w-[1000px] flex-col gap-12 lg:flex-row">
                        {/* Left */}
                        <LeftSide/>

                        {/* Right Sidebar */}
                        <RightSide/>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-auto border-t border-gray-800 px-5 py-10 text-center">
                    <div className="flex flex-wrap justify-center gap-6">
                        {["Terms of Service", "Privacy Policy", "Security Audit"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="min-w-40 text-sm font-medium text-gray-500 transition hover:text-white"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <p className="mt-6 text-xs text-gray-600">
                        © 2024 CryptoVault Inc. Seed phrases are locally encrypted (AES-256).
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default ImportSeedPhrasePage;