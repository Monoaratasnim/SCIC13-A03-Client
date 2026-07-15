type SpinnerProps = {
  text?: string;
  fullScreen?: boolean;
};

export default function Spinner({
  text = "Loading...",
  fullScreen = false,
}: SpinnerProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className="
          h-12
          w-12
          animate-spin
          rounded-full
          border-4
          border-[#1E3A5F]
          border-t-[#C89B3C]
        "
      />

      <p className="text-sm font-medium text-slate-600">
        {text}
      </p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  );
}