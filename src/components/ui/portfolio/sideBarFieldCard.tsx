type SideBarFieldCardProps = {
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
    active?: boolean;
    onClick?: () => void;
};

const SideBarFieldCard: React.FC<SideBarFieldCardProps> = ({
    icon,
    label,
    isOpen,
    active = false,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`
          group flex items-center gap-3 rounded-lg px-3 py-2.5
          cursor-pointer transition-all
          ${active
                    ? "bg-primary/10 text-primary"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                }
        `}
        >
            <div
                className={`
            flex h-9 w-9 items-center justify-center rounded-md transition
            ${active
                        ? "bg-primary/20 text-primary"
                        : "group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                    }
          `}
            >
                <span className="text-xl">{icon}</span>
            </div>

            {isOpen && (
                <span
                    className={`
              text-sm font-medium transition-colors
              ${active ? "text-primary" : ""}
            `}
                >
                    {label}
                </span>
            )}
        </div>
    );
};

export default SideBarFieldCard;