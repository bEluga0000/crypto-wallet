type TopBarButtonProps = {
    ind: number
    icon: React.ReactNode
}
const TopBarButton: React.FC<TopBarButtonProps>= ({
    icon,
    ind
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
    >
        <span className="material-symbols-outlined text-[20px]">
            {icon}
        </span>
    </button>
}
export default TopBarButton