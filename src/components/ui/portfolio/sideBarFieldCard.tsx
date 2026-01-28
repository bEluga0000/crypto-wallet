type SideBarFieldCardProps = {
    icon: React.ReactNode
    label: string
    isOpen: boolean
}

const SideBarFieldCard: React.FC<SideBarFieldCardProps> = ({
    icon,
    label,
    isOpen
}) => {
    return <div
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
    >
        <span className="text-slate-500">{icon}</span>

        {isOpen && (
            <span className="text-sm font-medium">
                {label}
            </span>
        )}
    </div>

}
export default SideBarFieldCard