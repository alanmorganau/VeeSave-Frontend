import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center md:text-left">
          <div className="font-semibold text-white">
            VeeSave — Drive Smart | Save Smart
          </div>
          <div className="text-xs text-gray-400">
            Helping drivers, tradies, and fleets turn every kilometre into a smarter expense.
          </div>
          <div className="text-xs text-gray-500 mt-1">
            © 2025 VeeSave Pty Ltd
          </div>
        </div>
        <nav className="flex items-center gap-4 text-xs">
          <Link href="/privacy" className="hover:text-yellow-400 transition">
            Privacy
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/terms" className="hover:text-yellow-400 transition">
            Terms
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/help" className="hover:text-yellow-400 transition">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}