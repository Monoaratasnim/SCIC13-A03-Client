"use client";

export default function DashboardLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="h-8 w-64 rounded bg-slate-200" />
        <div className="mt-3 h-4 w-96 rounded bg-slate-200" />
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="h-5 w-1/2 rounded bg-slate-200" />

            <div className="mt-4 h-4 w-full rounded bg-slate-200" />

            <div className="mt-2 h-4 w-4/5 rounded bg-slate-200" />

            <div className="mt-6 h-10 rounded-xl bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}