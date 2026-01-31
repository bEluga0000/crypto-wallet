import { IoMdInformationCircle } from "react-icons/io";

export const InfoBlock = ({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) => (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-xl text-primary">
        <IoMdInformationCircle />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-slate-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );