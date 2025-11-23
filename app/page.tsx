import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-tight text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Early Access • Pilot Program</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.1rem] md:leading-[1.05]">
                Turn every kilometre into a{" "}
                <span className="text-[#f7b500]">smarter expense.</span>
              </h1>

              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                VeeSave helps you capture receipts, track fuel and running costs,
                and stay compliant without spreadsheets or shoeboxes. Designed for
                drivers, tradies, and fleets that want clarity, not chaos.
              </p>
            </div>

            {/* BUTTON GROUP */}
            <div className="flex flex-wrap gap-3">

              {/* Go to Dashboard (Active: Yellow) */}
              <Link
                href="/dashboard"
                className="rounded-full bg-[#f7b500] px-5 py-2.5 text-sm font-semibold text-black shadow-md transition hover:bg-amber-400"
              >
                Go to Dashboard
              </Link>

              {/* View Trips & Logs */}
              <Link
                href="/trips-logs"
                className="rounded-full border border-slate-700 bg-black px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-[#f7b500] hover:text-black hover:border-[#f7b500]"
              >
                View Trips &amp; Logs
              </Link>

              {/* NEW: Get Special Deals */}
              <Link
                href="/special-deals"
                className="rounded-full border border-slate-700 bg-black px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-[#f7b500] hover:text-black hover:border-[#f7b500]"
              >
                Get Special Deals
              </Link>

            </div>

            {/* Feature highlights */}
            <div className="grid gap-4 text-xs text-slate-400 sm:grid-cols-3 sm:text-sm">
              <div>
                <p className="font-semibold text-slate-200">Built for real life</p>
                <p>Single vehicles, small fleets, and busy humans.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Audit-friendly</p>
                <p>Keep everything tidy for the ATO and your accountant.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Real-world insights</p>
                <p>Spot trends, leaks, and hidden costs in minutes.</p>
              </div>
            </div>
          </div>

          {/* Snapshot Card */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-6 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Snapshot · This Month
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-900/70 p-4">
                <p className="text-xs text-slate-400">Total spend</p>
                <p className="mt-1 text-xl font-semibold">$1,240</p>
                <p className="text-xs text-emerald-400">-12% vs last month</p>
              </div>

              <div className="rounded-xl bg-slate-900/70 p-4">
                <p className="text-xs text-slate-400">Fuel efficiency</p>
                <p className="mt-1 text-xl font-semibold">6.8 L / 100km</p>
                <p className="text-xs text-slate-400">Based on logged trips</p>
              </div>

              <div className="rounded-xl bg-slate-900/70 p-4">
                <p className="text-xs text-slate-400">Claim-ready</p>
                <p className="mt-1 text-xl font-semibold">37 trips</p>
                <p className="text-xs text-slate-400">Fully documented</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Upcoming
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2">
                  <span className="text-slate-200">Rego renewal</span>
                  <span className="text-amber-400">Due in 14 days</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2">
                  <span className="text-slate-200">Service check</span>
                  <span className="text-slate-400">3,200km remaining</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}