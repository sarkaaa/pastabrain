type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between font-medium text-amber-800 text-sm dark:text-amber-400">
        <span>
          Question {current} of {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-amber-100 dark:bg-stone-700">
        <div
          className="h-3 rounded-full bg-amber-500 transition-all duration-500 ease-out dark:bg-amber-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
