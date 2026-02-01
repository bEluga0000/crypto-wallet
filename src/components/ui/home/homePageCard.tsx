import ButtonForHomePage from "./button";

interface HomePageCardProps {
    icon?: React.ReactNode;
    title: string
    desc?: string
    button?: string
    onClick?: () => void
    buttonIcon?:React.ReactNode
}

const HomePageCard: React.FC<HomePageCardProps> = ({
    icon,
    title,
    desc,
    button,
    onClick,
    buttonIcon
}) => {
    return <div className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-[#e5e7eb] bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-xl dark:border-gray-800 dark:bg-[#1a212f] justify-between">
        {
            icon && <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[32px]">
                    {icon}
                </span>
            </div>
        }


        <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            {
                desc && <p className="mt-2 text-[#616f89] dark:text-gray-400">
                    {desc}
                </p>
            }
        </div>

        {
            button && onClick && <ButtonForHomePage title={button} onClick={onClick} icon={buttonIcon}/>
        }
    </div>
}
export default HomePageCard