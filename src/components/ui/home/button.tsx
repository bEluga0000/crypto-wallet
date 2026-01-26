interface ButtonForHomePageProps {
    icon?: React.ReactNode
    title: string
    onClick: () => void
}
const ButtonForHomePage: React.FC<ButtonForHomePageProps> = ({
    icon,
    title,
    onClick
}) => {
    return <button className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary text-lg font-bold text-black transition-transform group-hover:scale-[1.02] cursor-pointer dark:bg-white" onClick={onClick}>
        {title}
        {
            icon && <span className="material-symbols-outlined">
                {icon}
            </span>
        }
    </button>
}
export default ButtonForHomePage