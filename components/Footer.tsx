import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-base sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-slate-100">
            VeeSave — Drive Smart | Save Smart
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Helping drivers, tradies, and fleets turn every kilometre into a smarter expense.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm sm:text-base">
          <span className="text-slate-500">
            © {new Date().getFullYear()} VeeSave Pty Ltd
          </span>
          <Link
            href="/privacy"
            className="text-slate-400 underline-offset-4 hover:text-[#f7b500] hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-slate-400 underline-offset-4 hover:text-[#f7b500] hover:underline"
          >
            Terms
          </Link>
          <button className="text-slate-400 underline-offset-4 hover:text-[#f7b500] hover:underline">
            Support
          </button>
        </div>
      </div>
    </footer>
  );
}