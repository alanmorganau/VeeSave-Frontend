import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-black px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-400">
          Log in to access your VeeSave dashboard.
        </p>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-slate-700 bg-black px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-[#f7b500]"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-200" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border border-slate-700 bg-black px-3 py-2 text-sm text-slate-100 outline-none ring-0 focus:border-[#f7b500]"
              placeholder="••••••••"
            />
          </div>

          <button className="mt-2 w-full rounded-full bg-[#f7b500] px-4 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-amber-400">
            Login
          </button>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="flex-1 rounded-full border border-slate-700 bg-black px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-[#f7b500]">
              Continue with Google
            </button>
            <button className="flex-1 rounded-full border border-slate-700 bg-black px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-[#f7b500]">
              Continue with Facebook
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          New to VeeSave?{" "}
          <Link href="/register" className="text-[#f7b500] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}