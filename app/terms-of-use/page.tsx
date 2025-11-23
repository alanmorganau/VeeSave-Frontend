import React from "react";

export default function TermsOfUsePage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
          Legal
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
          Terms of Use
        </h1>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        This placeholder Terms of Use page is connected to the footer and URL
        routing. The final legal terms will be applied here as part of the
        formal launch process.
      </p>
      <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/60 p-4 text-xs text-neutral-400">
        <p className="font-semibold text-neutral-200">Next steps</p>
        <p className="mt-2">
          We will replace this text with your approved Terms of Use, including
          acceptable use, limitations of liability, and other key conditions.
        </p>
      </div>
    </div>
  );
}
