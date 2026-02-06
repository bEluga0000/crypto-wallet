type TopBarButtonProps = {
    ind: number
    icon: React.ReactNode
    onClick:()=>void
}
const TopBarButton: React.FC<TopBarButtonProps>= ({
    icon,
    ind,
    onClick,
}: TopBarButtonProps) => {
    return <button
        key={ind}
        className={`
relative flex items-center justify-center px-3 py-2
text-slate-500 transition-all
hover:bg-white hover:text-primary
dark:hover:bg-slate-700
cursor-pointer
${ind !== 0 ? "border-l border-slate-200 dark:border-slate-700" : ""}
`}
    onClick={onClick}
    >
        <span className="material-symbols-outlined text-[20px]">
            {icon}
        </span>
    </button>
}
export default TopBarButton