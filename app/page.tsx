export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-10 px-4 py-10 lg:flex-row lg:items-center">
      <section className="flex-1 space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Make every kilometre{" "}
          <span className="text-veesaveYellow">pay its way.</span>
        </h1>
        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          VeeSave helps individuals, companies, and fleet managers track,
          manage, and optimise vehicle expenses  from fuel and maintenance to
          finance, insurance, and tax reporting.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/login"
            className="inline-flex items-center rounded-lg bg-veesaveYellow px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-300"
          >
            Login to VeeSave
          </a>
          <a
            href="/register"
            className="inline-flex items-center rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-veesaveYellow"
          >
            Create an account
          </a>
          <a
            href="/coming-soon"
            className="text-xs text-slate-400 hover:text-slate-200"
          >
            View pilot roadmap 
          </a>
        </div>
        <div className="grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <div className="text-slate-200 font-semibold text-xs">
              Individual drivers
            </div>
            <p className="mt-1">
              Capture receipts, log trips, and stay ahead of rego, insurance,
              and servicing.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <div className="text-slate-200 font-semibold text-xs">
              SMEs & companies
            </div>
            <p className="mt-1">
              See whole-of-fleet cost trends and support cleaner, data-backed
              decisions.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <div className="text-slate-200 font-semibold text-xs">
              Fleet managers
            </div>
            <p className="mt-1">
              Surface outliers, high-cost assets, and compliance risks in a
              single view.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-1">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 shadow-lg shadow-black/40">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-veesaveYellow">
            VeeSave preview snapshot
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
              <span>Total monthly fuel</span>
              <span className="font-mono text-veesaveYellow">$12,480</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
              <span>Fleet utilisation</span>
              <span className="font-mono text-slate-100">83%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
              <span>Vehicles with overdue service</span>
              <span className="font-mono text-red-400">7</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Demo data only. Actual analytics will connect to your vehicles,
              expenses, and fleet policies during the pilot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
