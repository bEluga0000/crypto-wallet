interface ProgressiveBarProps{
    step:number
    label:string
}

const ProgressiveBar:React.FC<ProgressiveBarProps> = ({
    step,
    label
}) => {
    const totalSteps = 2;
    const progress = (step / totalSteps) * 100;
  
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gray-400">
          <span>
            Step {step} of {totalSteps}: {label}
          </span>
          <span className="text-gray-300">{progress}% Complete</span>
        </div>

        <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800/70">
          <div
            className="
              absolute left-0 top-0 h-full rounded-full
              bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500
              shadow-[0_0_14px_rgba(59,130,246,0.8)]
              transition-all duration-500 ease-out
            "
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };
  
  export default ProgressiveBar;