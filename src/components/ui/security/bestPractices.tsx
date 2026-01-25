interface BestPracticeCardProps {
    key: number;
    title: string;
    desc: string;
    icon:React.ReactNode
};
const BestPracticesCard: React.FC<BestPracticeCardProps> = ({
    key,
    title,
    desc,
    icon
}) => {
    return <div key={key}>
        <span className="material-symbols-outlined text-primary">
            {icon}
        </span>
        <p className="mt-2 text-sm font-bold">{title}</p>
        <p className="text-sm text-slate-400">{desc}</p>
    </div>
}
export default BestPracticesCard