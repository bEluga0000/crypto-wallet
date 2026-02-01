const AccountSkeleton = () => {
    return (
      <div className="relative flex items-center justify-between rounded-xl border border-gray-800 bg-card-dark p-4 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 rounded bg-gray-700" />
          <div className="space-y-2">
            <div className="h-3 w-32 rounded bg-gray-700" />
            <div className="h-2 w-20 rounded bg-gray-800" />
          </div>
        </div>

        <div className="space-y-2 text-right">
          <div className="h-3 w-20 rounded bg-gray-700" />
          <div className="h-2 w-24 rounded bg-gray-800" />
        </div>
      </div>
    );
  };
export default AccountSkeleton