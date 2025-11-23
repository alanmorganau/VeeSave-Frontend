import React from "react";

export default function Page() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
          Configuration
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
          Settings
        </h1>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        This section of VeeSave is where you'll manage and review data related to
        <span className="text-neutral-100 font-medium"> Settings</span>. The UI is
        wired and ready for deeper functionality in upcoming releases.
      </p>
      <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/60 p-4 text-xs text-neutral-400">
        <p className="font-semibold text-neutral-200">Coming soon</p>
        <p className="mt-2">
          We will connect this screen to live data, filters, exports, and
          workflows as we progress through the next development phases.
        </p>
      </div>
    </div>
  );
}
