const Field = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => (
    <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-300">{label}</label>
        {children}
    </div>
);
export default Field