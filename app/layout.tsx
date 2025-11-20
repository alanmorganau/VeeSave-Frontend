import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeeSave | Vehicle Expense Saver",
  description: "Track, manage, and optimise vehicle expenses for individuals, companies, and fleet managers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-veesaveDark text-slate-50">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-veesaveYellow text-slate-900 font-black text-xl">
                  V
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wide uppercase text-slate-200">
                    VeeSave
                  </div>
                  <div className="text-xs text-slate-400">
                    Vehicle Expense Saver
                  </div>
                </div>
              </div>
              <nav className="flex items-center gap-3 text-sm">
                <a href="/login" className="text-slate-200 hover:text-white">
                  Login
                </a>
                <a href="/register" className="text-slate-200 hover:text-white">
                  Register
                </a>
                <a
                  href="/coming-soon"
                  className="hidden rounded-lg border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300 hover:border-veesaveYellow hover:text-veesaveYellow sm:inline-block"
                >
                  Product roadmap
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-slate-800 bg-slate-950/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-500">
              <span> {new Date().getFullYear()} Vehicle Expenses Saver Pty Ltd</span>
              <div className="flex gap-3">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
