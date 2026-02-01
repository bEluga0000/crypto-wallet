"use client";

import { usePathname, useRouter } from "next/navigation";
import { MdOutlineSecurity } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import TooltipWrapper from "../tooltipWrapper";
import { useMnemonicStore } from "@/store/mnemonic.store";

const PortfolioSecurityToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const mnemonic = useMnemonicStore(s => s.mnemonic)
  const isPortfolio = pathname.startsWith("/portfolio");
  const isSecurity = pathname.startsWith("/security");

  const baseBtn =
    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors";

  const activeBtn =
    "bg-primary text-white shadow-md";

  const inactiveBtn =
    "bg-[#f0f2f4] text-slate-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700";

  return (
    <div className="flex items-center gap-2">
      {/* Portfolio */}
      {
        mnemonic && <TooltipWrapper content="Portfolio">
          <button
            onClick={() => router.push("/portfolio")}
            className={`${baseBtn} ${!isPortfolio ? activeBtn : inactiveBtn
              } cursor-pointer`}
            aria-label="Go to Portfolio"
          >
            <IoWalletOutline className="text-lg" />
          </button>
        </TooltipWrapper>
      }


      {/* Security */}
      <TooltipWrapper content="Security & Recovery">
        <button
          onClick={() => router.push("/security")}
          className={`${baseBtn} ${!isSecurity ? activeBtn : inactiveBtn
            } cursor-pointer`}
          aria-label="Go to Security"
        >
          <MdOutlineSecurity className="text-lg" />
        </button>
      </TooltipWrapper>
    </div>
  );
};

export default PortfolioSecurityToggle;