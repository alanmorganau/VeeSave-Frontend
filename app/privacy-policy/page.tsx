import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
          Legal
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
          Privacy Policy
        </h1>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        This placeholder Privacy Policy page is wired into the main navigation
        and footer. The final legal content will be inserted here as part of
        the production rollout.
      </p>
      <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/60 p-4 text-xs text-neutral-400">
        <p className="font-semibold text-neutral-200">Next steps</p>
        <p className="mt-2">
          We will replace this text with your approved Privacy Policy wording,
          including details on data collection, usage, storage, and contact
          information.
        </p>
      </div>
    </div>
  );
}
